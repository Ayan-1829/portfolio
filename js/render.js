const Render = {

  nav() {
    const logo = document.querySelector('.nav-logo');
    if (logo) logo.textContent = 'AS';
  },

  hero(mode = 'academic') {
    const data = PORTFOLIO_DATA.profile[mode];
    const profile = PORTFOLIO_DATA.profile;
    setText('hero-eyebrow', data.eyebrow);
    setText('hero-title',   data.subtitle);
    setText('hero-tagline', data.tagline);
    const heroSection = document.getElementById('hero-section');
    if (heroSection) heroSection.classList.toggle('hero-art', mode === 'art');
    const frame = document.getElementById('avatar-frame');
    if (frame) {
      frame.innerHTML = data.avatarPhoto
        ? `<img src="images/${data.avatarPhoto}" alt="${profile.name}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;display:block;"/>`
        : `<div style="font-size:5rem;line-height:1;">${data.avatarEmoji}</div>`;
    }
    const ctaP = document.getElementById('cta-primary');
    if (ctaP) { ctaP.textContent = data.ctaPrimary.text; ctaP.href = data.ctaPrimary.href; }
    const ctaS = document.getElementById('cta-secondary');
    if (ctaS) { ctaS.textContent = data.ctaSecondary.text; }
    /* fix 6: wire CV download only for academic mode */
    if (typeof wireSecondaryBtn === 'function') wireSecondaryBtn(mode);
  },

  about() {
    const { academic, artQuote, artBio } = PORTFOLIO_DATA.about;
    const aEl = document.querySelector('#about .academic-only');
    if (aEl) aEl.innerHTML = `<p style="font-size:1.05rem;line-height:1.9;color:var(--muted);max-width:760px;">${academic}</p>`;
    const artEl = document.querySelector('#about .art-only');
    if (artEl) artEl.innerHTML = `
      <p style="font-size:1.15rem;line-height:2;color:var(--muted);max-width:760px;font-family:'Lora',serif;font-style:italic;">${artQuote}</p>
      <p style="font-size:1.05rem;line-height:1.9;color:var(--muted);max-width:760px;margin-top:1.5rem;">${artBio}</p>`;
  },

  experience() {
    const tl = document.querySelector('#experience .timeline');
    if (!tl) return;
    tl.innerHTML = PORTFOLIO_DATA.experience.map(job => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-org">${job.organization}</div>
          <div class="timeline-role">${job.role}</div>
          <div class="timeline-date">${job.period}</div>
          <div class="timeline-desc">${job.description}</div>
        </div>
      </div>`).join('');
  },

  education() {
    const tl = document.querySelector('.edu-timeline');
    if (!tl) return;
    tl.innerHTML = PORTFOLIO_DATA.education.map(edu => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="edu-level">${edu.level}</div>
          <div class="timeline-role">${edu.degree}</div>
          <div class="timeline-org">${edu.institution}</div>
          ${(function(){
            const parts = edu.description.split('·');
            if (parts.length >= 2) {
              return '<div class="edu-meta"><span class="edu-result">' + parts[0].trim() + '</span><span class="edu-gap">·</span><span class="edu-period">' + parts.slice(1).join('·').trim() + '</span></div>';
            }
            return '<div class="timeline-desc" style="margin-top:0.4rem;">' + edu.description + '</div>';
          })()}
        </div>
      </div>`).join('');
  },

  skills() {
    const c = document.querySelector('.skills-container');
    if (!c) return;
    c.innerHTML = PORTFOLIO_DATA.skills.map(group => `
      <div>
        <h3 style="font-size:0.8rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);margin-bottom:1rem;">${group.label}</h3>
        <div class="skills-grid">${group.items.map(s => `<span class="skill-pill">${s}</span>`).join('')}</div>
      </div>`).join('');
  },

  /* ── Courses: university logo + bold name, per-topic resources ── */
  courses() {
    const container = document.getElementById('courses-by-uni');
    if (!container) return;
    const groups = PORTFOLIO_DATA.coursesByUniversity || [];

    window._allCourses = [];
    groups.forEach(g => g.courses.forEach(c => window._allCourses.push(c)));

    if (!groups.length) { container.innerHTML = `<p style="color:var(--muted);">Add courses in data.js</p>`; return; }

    container.innerHTML = groups.map((group, gi) => {
      const cards = group.courses.map(course => {
        const idx = window._allCourses.indexOf(course);
        return `
          <div class="card course-card" onclick="openCourseModal(${idx})" style="cursor:pointer;">
            <div class="card-title" style="margin-bottom:0.4rem;">${course.title}</div>
            <div class="course-card-meta">
              <span class="course-card-code">${course.code}</span>
              ${course.semester ? `<span class="course-card-semester">${course.semester}</span>` : ''}
              ${course.credits ? `<span class="course-card-credits">${course.credits} Credits</span>` : ''}
            </div>
            <div class="card-desc" style="margin-top:0.6rem;">${course.description}</div>
            <div class="course-card-footer">View Details →</div>
          </div>`;
      }).join('');

      /* Logo image with fallback, bold university name (fix 3 & 4) */
      const logoHTML = group.logo
        ? `<img src="${group.logo}" alt="${group.university}" class="uni-logo"/>`
        : '';

      /* Add a visual gap before second+ university group (fix 3) */
      const gapClass = gi > 0 ? ' uni-group--spaced' : '';

      return `
        <div class="uni-group${gapClass}">
          <div class="uni-group-header">
            ${logoHTML}
            <span class="uni-group-name">${group.university}</span>
          </div>
          <div class="cards-grid">${cards}</div>
        </div>`;
    }).join('');
  },

  artJourney() {
    const tl = document.querySelector('.art-timeline');
    if (!tl) return;
    const entries = PORTFOLIO_DATA.artJourney || [];
    tl.innerHTML = entries.map((item, i) => {
      const hasDetails = (item.achievementImages && item.achievementImages.length)
        || (item.achievementLinks && item.achievementLinks.length)
        || (item.achievementVideos && item.achievementVideos.length)
        || item.achievementImage || (item.certificateLinks && item.certificateLinks.length);
      const detailsBtn = hasDetails
        ? `<button class="topic-link" style="margin-top:0.6rem;cursor:pointer;background:none;border:1px solid var(--accent);color:var(--accent);padding:0.3rem 0.8rem;border-radius:4px;font-size:0.8rem;" onclick="openAchievementModal(${i})">🏆 View Details</button>`
        : '';
      return `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-role">${item.role}</div>
          <div class="timeline-org">${item.organization}</div>
          <div class="timeline-date">${item.period}</div>
          ${item.description ? `<div class="timeline-desc">${item.description}</div>` : ''}
          ${detailsBtn}
        </div>
      </div>`;
    }).join('');
  },

  projects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    const projects = PORTFOLIO_DATA.projects || [];
    if (!projects.length) { grid.innerHTML = `<p style="color:var(--muted);">No projects added yet.</p>`; return; }
    window._allProjects = projects;
    grid.innerHTML = projects.map((p, idx) => {
      const techPills = p.tech.map(t => `<span class="skill-pill" style="font-size:0.72rem;padding:0.2rem 0.6rem;">${t}</span>`).join('');
      const bullets = p.bullets.map(b => `<li style="color:var(--muted);font-size:0.9rem;line-height:1.7;margin-bottom:0.25rem;">${b}</li>`).join('');
      const linksHTML = (p.links || []).map(l => `<a href="${l.url}" target="_blank" class="course-link-pill">${l.label} ↗</a>`).join('');
      const hasDetails = (p.videos && p.videos.length) || (p.info && p.info.length);
      const detailsBtn = hasDetails
        ? `<button class="course-card-footer" style="background:none;border:none;cursor:pointer;padding:0;text-align:left;" onclick="openProjectModal(${idx})">View Details →</button>`
        : '';
      return `
        <div class="card" style="display:flex;flex-direction:column;gap:0.6rem;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;flex-wrap:wrap;">
            <div class="card-title">${p.title}</div>
            <span style="color:var(--muted);font-size:0.78rem;white-space:nowrap;">${p.date}</span>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">${techPills}</div>
          <ul style="margin:0;padding-left:1.2rem;">${bullets}</ul>
          ${linksHTML ? `<div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.2rem;">${linksHTML}</div>` : ''}
          ${detailsBtn}
        </div>`;
    }).join('');
  },

  artPractice() {
    const grid = document.querySelector('.art-practice-grid');
    if (!grid) return;
    grid.innerHTML = PORTFOLIO_DATA.artPractice.map(card => `
      <div class="card">
        <div class="card-icon">${card.emoji}</div>
        <div class="card-title">${card.title}</div>
        <div class="card-desc" style="margin-top:0.5rem;">${card.description}</div>
      </div>`).join('');
  },

  gallery() {
    const container = document.querySelector('.gallery-container');
    if (!container) return;
    const artworks = PORTFOLIO_DATA.artwork;
    if (!artworks || !artworks.length) { container.innerHTML = `<p style="color:var(--muted);">No artwork added yet.</p>`; return; }

    const main      = artworks.map((a, i) => ({ ...a, _i: i })).filter(a => !a.childhood);
    const childhood = artworks.map((a, i) => ({ ...a, _i: i })).filter(a =>  a.childhood);

    const renderItem = (art) => {
      const spanClass = art.span || 'normal';
      const thumb = art.file
        ? `<img src="images/artwork/${art.file}" alt="${art.title}" class="gallery-img"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
           <div class="gallery-thumb-fallback" style="display:none;background:${art.bg||'var(--surface)'};">${art.emoji||'🖼️'}</div>`
        : `<div class="gallery-thumb-fallback" style="background:${art.bg||'var(--surface)'};">${art.emoji||'🖼️'}</div>`;
      return `
        <div class="gallery-item gallery-item--${spanClass}" onclick="openLightbox(${art._i})" style="cursor:pointer;">
          ${thumb}
          <div class="gallery-hover-overlay">
            <div class="gallery-hover-title">${art.title}</div>
            <div class="gallery-hover-meta">${art.medium} · ${art.year}</div>
          </div>
        </div>`;
    };

    // Fill main grid
    const mainGrid = container.querySelector('#gallery-main-grid') || container.querySelector('.gallery-grid');
    if (mainGrid) mainGrid.innerHTML = main.map(renderItem).join('');

    // Remove old childhood block if re-rendering
    const old = container.querySelector('.gallery-childhood-block');
    if (old) old.remove();

    if (childhood.length) {
      const block = document.createElement('div');
      block.className = 'gallery-childhood-block';
      block.innerHTML = `
        <div class="gallery-subtitle-block">
          <h2 class="gallery-subtitle">Childhood Paintings</h2>
          <p class="gallery-subtitle-desc">Early works from 2008–2011</p>
        </div>
        <div class="gallery-grid gallery-grid--childhood">${childhood.map(renderItem).join('')}</div>`;
      container.appendChild(block);
    }
  },

  contact() {
    const { emails, institution, varsityUrl, social } = PORTFOLIO_DATA.contact;
    const eEl = document.getElementById('contact-emails');
    if (eEl) eEl.innerHTML = emails.map(e => `<a href="mailto:${e}" style="color:var(--muted);text-decoration:none;display:block;">${e}</a>`).join('');
    setHTML('contact-institution', institution);
    const vEl = document.getElementById('contact-varsity');
    if (vEl) vEl.innerHTML = `<a href="${varsityUrl}" target="_blank" style="color:var(--muted);text-decoration:none;">Ayan Sarkar ↗</a>`;
    const sEl = document.getElementById('contact-social');
    if (sEl) sEl.innerHTML = social.map(s => `<a href="${s.url}" target="_blank" style="color:var(--muted);text-decoration:none;display:inline-flex;align-items:center;gap:0.4rem;margin-right:1rem;">${s.emoji} ${s.label}</a>`).join('');
  },

  footer() {
    const y = document.getElementById('footer-year');
    const n = document.getElementById('footer-name');
    if (y) y.textContent = new Date().getFullYear();
    if (n) n.textContent = PORTFOLIO_DATA.profile.name;
  },

  all(mode = 'academic') {
    this.nav(); this.hero(mode); this.about();
    this.experience(); this.education(); this.skills();
    this.courses(); this.projects(); this.artJourney(); this.artPractice();
    this.gallery(); this.contact(); this.footer();
  },
};

function setText(id, v) { const e = document.getElementById(id); if (e) e.textContent = v; }
function setHTML(id, v) { const e = document.getElementById(id); if (e) e.innerHTML  = v; }

/* ── Course Modal — with per-topic links & videos (fix 7) ─────── */
function openCourseModal(index) {
  const course = (window._allCourses || [])[index];
  if (!course) return;
  const modal = document.getElementById('courseModal');
  const body  = document.getElementById('courseModalBody');
  if (!modal || !body) return;

  /* Build topics — each may have links + video */
  const topicsHTML = (course.topics || []).map(t => {
    /* Support both plain string and object topics */
    if (typeof t === 'string') return `<li class="topic-item"><span class="topic-name">${t}</span></li>`;
    const linkBtns = (t.links || []).map(l =>
      `<a href="${l.url}" target="_blank" class="topic-link">🔗 ${l.label}</a>`).join('');
    /* Support both `video` (single) and `videos` (array of 0 or more) */
    const videoList = t.videos && t.videos.length
      ? t.videos
      : (t.video ? [t.video] : []);
    const videoBtns = videoList.map((v, vi) =>
      `<button class="topic-video-btn" onclick="toggleTopicVideo(this)" data-src="${v.url}" data-title="${v.title}" data-vi="${vi}">▶ ${v.title || 'Watch'}</button>`
    ).join('');
    const videoSlots = videoList.map((v, vi) =>
      `<div class="topic-video-slot" data-vi="${vi}" style="display:none;">
         <iframe src="" title="${v.title}" frameborder="0"
           allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>
       </div>`
    ).join('');
    const resources = (linkBtns || videoBtns)
      ? `<div class="topic-resources">${linkBtns}${videoBtns}</div>` : '';
    return `<li class="topic-item"><span class="topic-name">${t.name}</span>${resources}${videoSlots}</li>`;
  }).join('');

  const linksHTML  = (course.links  || []).map(l => `<a href="${l.url}" target="_blank" class="course-link-pill">${l.label} ↗</a>`).join('');
  const videosHTML = (course.videos || []).map(v => `
    <div class="course-video-wrap">
      <iframe src="${v.url}" title="${v.title}" frameborder="0"
        allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>
      <p class="course-video-title">${v.title}</p>
    </div>`).join('');

  body.innerHTML = `
    <div class="course-modal-header">
      <span class="course-modal-emoji">${course.emoji || '📘'}</span>
      <div>
        <div class="course-modal-code">${course.code}${course.credits ? ' · ' + course.credits + ' Credits' : ''}${course.semester ? ' · ' + course.semester : ''}</div>
        <h2 class="course-modal-title">${course.title}</h2>
        <p class="course-modal-desc">${course.description}</p>
      </div>
    </div>
    ${topicsHTML ? `<div class="course-modal-section"><h3>Topics Covered</h3><ul class="course-topics-list">${topicsHTML}</ul></div>` : ''}
    ${linksHTML  ? `<div class="course-modal-section"><h3>Course Resources</h3><div class="course-links-row">${linksHTML}</div></div>` : ''}
    ${videosHTML ? `<div class="course-modal-section"><h3>Video Lectures</h3><div class="course-videos-grid">${videosHTML}</div></div>` : ''}`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* Toggle inline topic video on/off — supports multiple videos per topic */
function toggleTopicVideo(btn) {
  const vi   = btn.dataset.vi || '0';
  const item = btn.closest('.topic-item');
  const slot = item ? item.querySelector(`.topic-video-slot[data-vi="${vi}"]`) : null;
  if (!slot) return;
  const iframe = slot.querySelector('iframe');
  if (slot.style.display === 'none') {
    slot.style.display = 'block';
    iframe.src = btn.dataset.src;
    btn.textContent = '✕ ' + (btn.dataset.title || 'Close');
  } else {
    slot.style.display = 'none';
    iframe.src = '';
    btn.textContent = '▶ ' + (btn.dataset.title || 'Watch');
  }
}

function closeCourseModal() {
  const modal = document.getElementById('courseModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
  const body = document.getElementById('courseModalBody');
  if (body) body.innerHTML = '';
}

/* ── Lightbox ────────────────────────────────── */
function openLightbox(index) {
  const art = PORTFOLIO_DATA.artwork[index];
  const imgHTML = art.file
    ? `<img src="images/artwork/${art.file}" alt="${art.title}"
          onerror="this.style.display='none';document.getElementById('lb-fb').style.display='flex'"/>
       <div id="lb-fb" style="display:none;height:300px;align-items:center;justify-content:center;font-size:6rem;background:${art.bg||'#111'}">${art.emoji||'🖼️'}</div>`
    : `<div style="height:300px;display:flex;align-items:center;justify-content:center;font-size:6rem;background:${art.bg||'#111'}">${art.emoji||'🖼️'}</div>`;
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay'; overlay.id = 'lightbox';
  overlay.innerHTML = `
    <div class="lightbox-box" onclick="event.stopPropagation()">
      ${imgHTML}
      <div class="lightbox-info">
        <div><div class="lightbox-title">${art.title}</div><div class="lightbox-meta">${art.medium} · ${art.year}</div></div>
        <button class="lightbox-close" onclick="closeLightbox()">✕</button>
      </div>
    </div>`;
  overlay.addEventListener('click', closeLightbox);
  document.body.appendChild(overlay);
  document.addEventListener('keydown', handleLightboxKey);
}
function closeLightbox() { const e = document.getElementById('lightbox'); if (e) e.remove(); document.removeEventListener('keydown', handleLightboxKey); }
function handleLightboxKey(e) { if (e.key === 'Escape') closeLightbox(); }

/* ── Achievement Modal (art journey) — supports arrays of images, links, videos ── */
function openAchievementModal(index) {
  const entry = (PORTFOLIO_DATA.artJourney || [])[index];
  if (!entry) return;
  const modal = document.getElementById('achievementModal');
  const body  = document.getElementById('achievementModalBody');
  if (!modal || !body) return;

  // Support new array format (achievementImages) AND legacy single (achievementImage)
  const images = entry.achievementImages && entry.achievementImages.length
    ? entry.achievementImages
    : (entry.achievementImage ? [{ file: entry.achievementImage, caption: '' }] : []);

  const imgsHTML = images.map(img =>
    `<figure style="margin:0 0 1rem;">
       <img src="${img.file}" alt="${img.caption || entry.role}" style="width:100%;max-height:400px;object-fit:contain;border-radius:8px;"/>
       ${img.caption ? `<figcaption style="text-align:center;color:var(--muted);font-size:0.82rem;margin-top:0.4rem;">${img.caption}</figcaption>` : ''}
     </figure>`
  ).join('');

  // Support new array (achievementLinks) AND legacy (certificateLinks)
  const links = entry.achievementLinks || entry.certificateLinks || [];
  const linksHTML = links.map(l =>
    `<a href="${l.url}" target="_blank" class="course-link-pill">🏆 ${l.label} ↗</a>`
  ).join('');

  // Support achievementVideos array
  const videos = entry.achievementVideos || [];
  const videosHTML = videos.map(v => `
    <div class="course-video-wrap">
      <iframe src="${v.url}" title="${v.title}" frameborder="0"
        allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>
      <p class="course-video-title">${v.title}</p>
    </div>`).join('');

  body.innerHTML = `
    <div class="course-modal-header" style="flex-direction:column;align-items:flex-start;gap:0.5rem;">
      <div class="course-modal-code">${entry.organization} · ${entry.period}</div>
      <h2 class="course-modal-title">${entry.role}</h2>
      ${entry.description ? `<p class="course-modal-desc">${entry.description}</p>` : ''}
    </div>
    ${imgsHTML ? `<div class="course-modal-section">${imgsHTML}</div>` : ''}
    ${linksHTML ? `<div class="course-modal-section"><h3>Certificates &amp; Links</h3><div class="course-links-row">${linksHTML}</div></div>` : ''}
    ${videosHTML ? `<div class="course-modal-section"><h3>Videos</h3><div class="course-videos-grid">${videosHTML}</div></div>` : ''}`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAchievementModal() {
  const modal = document.getElementById('achievementModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
  const body = document.getElementById('achievementModalBody');
  if (body) body.innerHTML = '';
}

/* ── Project Modal — videos + extra info ── */
function openProjectModal(index) {
  const p = (window._allProjects || [])[index];
  if (!p) return;
  const modal = document.getElementById('achievementModal');
  const body  = document.getElementById('achievementModalBody');
  if (!modal || !body) return;

  const techPills = p.tech.map(t => `<span class="skill-pill" style="font-size:0.75rem;padding:0.2rem 0.6rem;">${t}</span>`).join('');
  const linksHTML = (p.links || []).map(l =>
    `<a href="${l.url}" target="_blank" class="course-link-pill">${l.label} ↗</a>`).join('');
  const infoHTML = (p.info || []).map(s =>
    `<p style="color:var(--muted);font-size:0.9rem;line-height:1.7;margin:0.4rem 0;">${s}</p>`).join('');
  const videosHTML = (p.videos || []).map(v => `
    <div class="course-video-wrap">
      <iframe src="${v.url}" title="${v.title}" frameborder="0"
        allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>
      <p class="course-video-title">${v.title}</p>
    </div>`).join('');

  body.innerHTML = `
    <div class="course-modal-header" style="flex-direction:column;align-items:flex-start;gap:0.5rem;">
      <div class="course-modal-code">${p.date}</div>
      <h2 class="course-modal-title">${p.title}</h2>
      <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:0.3rem;">${techPills}</div>
    </div>
    ${linksHTML ? `<div class="course-modal-section"><h3>Links</h3><div class="course-links-row">${linksHTML}</div></div>` : ''}
    ${infoHTML  ? `<div class="course-modal-section"><h3>Additional Information</h3>${infoHTML}</div>` : ''}
    ${videosHTML ? `<div class="course-modal-section"><h3>Videos</h3><div class="course-videos-grid">${videosHTML}</div></div>` : ''}`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

