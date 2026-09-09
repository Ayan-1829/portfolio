/* ================================================================
   TOGGLE.JS  —  Profile Switcher
   ================================================================ */

let isArtMode = false;

function toggleProfile() {
  isArtMode = !isArtMode;
  const mode = isArtMode ? 'art' : 'academic';

  document.body.classList.toggle('art-mode', isArtMode);

  document.querySelectorAll('.nav-academic-only').forEach(el => {
    el.style.display = isArtMode ? 'none' : 'block';
  });
  document.querySelectorAll('.nav-art-only').forEach(el => {
    el.style.display = isArtMode ? 'block' : 'none';
  });

  setFloatingIcon(isArtMode ? 'academic' : 'art');

  Render.hero(mode);

  // Track art profile views
  if (isArtMode && typeof trackArtProfileView === 'function') {
    trackArtProfileView();
  }

  // Update cursor for the new mode
  if (typeof updateCursorForMode === 'function') {
    updateCursorForMode(mode);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMenu();
}

function initToggle() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  setFloatingIcon('art');

  document.querySelectorAll('.nav-art-only').forEach(el => {
    el.style.display = 'none';
  });
}

function closeMenu() {
  document.getElementById('hamburger')?.classList.remove('open');
  document.getElementById('nav-links')?.classList.remove('open');
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

/* Shows the icon of the profile the button will SWITCH TO. */
function setFloatingIcon(targetProfile) {
  const icon = document.getElementById('floating-icon');
  if (!icon) return;
  if (targetProfile === 'art') {
    icon.src = 'images/Art-profile Icon.webp';
    icon.alt = 'Switch to Art Profile';
  } else {
    icon.src = 'images/Academic-profile Icon.webp';
    icon.alt = 'Switch to Academic Profile';
  }
}
