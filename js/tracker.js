/* ================================================================
   TRACKER.JS — Visitor & Interaction Tracking
   Sends visit data to Google Sheets via Apps Script.

   Tracks:
     - Every page load (general visit)
     - Art Profile views (when toggled)
     - Course detail views (when a course modal is opened)

   Identity is based on a stable fingerprint derived from the
   User-Agent + screen dimensions, stored in localStorage so the
   same browser is recognised across sessions without requiring
   an email address.
================================================================ */

(function () {

  /* ── 1. Build a stable visitor ID from UA + screen ────────── */
  function buildVisitorId() {
    const raw = [
      navigator.userAgent,
      screen.width,
      screen.height,
      screen.colorDepth,
      navigator.language,
      Intl.DateTimeFormat().resolvedOptions().timeZone,
    ].join('|');

    /* Simple but deterministic djb2-style hash → hex string */
    let hash = 5381;
    for (let i = 0; i < raw.length; i++) {
      hash = ((hash << 5) + hash) ^ raw.charCodeAt(i);
      hash = hash >>> 0; // keep unsigned 32-bit
    }
    return 'ua_' + hash.toString(16).padStart(8, '0');
  }

  /* Persist so we can label "returning" visitors */
  function getVisitorId() {
    try {
      let id = localStorage.getItem('_portfolio_vid');
      if (!id) {
        id = buildVisitorId();
        localStorage.setItem('_portfolio_vid', id);
      }
      return id;
    } catch {
      return buildVisitorId();
    }
  }

  /* ── 2. Core send helper ───────────────────────────────────── */
  function getScriptUrl() {
    try {
      return (
        (typeof PORTFOLIO_DATA !== 'undefined' &&
          PORTFOLIO_DATA.contact &&
          PORTFOLIO_DATA.contact.googleSheetsUrl) ||
        null
      );
    } catch {
      return null;
    }
  }

  function sendEvent(payload) {
    const url = getScriptUrl();
    if (!url || url === 'YOUR_GOOGLE_APPS_SCRIPT_URL') return;

    const body = JSON.stringify({
      type:      'visit',
      visitorId: getVisitorId(),
      userAgent: navigator.userAgent,
      timestamp: new Date().toLocaleString(),
      page:      window.location.pathname || '/',
      ...payload,
    });

    /* no-cors so there's no preflight failure on the Apps Script URL */
    fetch(url, { method: 'POST', body, mode: 'no-cors' }).catch(() => {});
  }

  /* ── 3. General page-load visit ───────────────────────────── */
  function trackPageVisit() {
    sendEvent({ subtype: 'page' });
  }

  /* ── 4. Art Profile view ──────────────────────────────────── */
  /* Called by toggle.js → toggleProfile() when switching TO art */
  window.trackArtProfileView = function () {
    sendEvent({ subtype: 'art_profile' });
  };

  /* ── 5. Course detail view ────────────────────────────────── */
  /* Called by render.js → openCourseModal() */
  window.trackCourseView = function (courseCode, courseTitle) {
    sendEvent({
      subtype:     'course_view',
      courseCode:  courseCode  || '',
      courseTitle: courseTitle || '',
    });
  };

  /* ── 6. Fire the page-load event after DOM + data are ready ── */
  document.addEventListener('DOMContentLoaded', function () {
    /* Small delay so PORTFOLIO_DATA (and its URL) is definitely set */
    setTimeout(trackPageVisit, 300);
  });

})();
