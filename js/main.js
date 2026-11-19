import { renderSvgPlate } from "./svg-plates.js";

const state = {
  lang: localStorage.getItem("kr-lang") || "es",
  theme: localStorage.getItem("kr-theme") || "light",
  category: "all",
  languageFilter: "all",
  query: "",
  profile: null,
  projects: [],
  activeDrawerId: null,
  lastTriggerEl: null,
};

const els = {
  rootHtml: document.documentElement,
  editionTag: document.getElementById("edition-tag"),
  navLinks: document.querySelectorAll("[data-nav-key]"),
  langButtons: document.querySelectorAll("[data-set-lang]"),
  themeToggle: document.getElementById("theme-toggle"),
  heroContainer: document.getElementById("hero-root"),
  trajectoryHeader: document.getElementById("trajectory-header"),
  trajectoryRoot: document.getElementById("trajectory-root"),
  featuredHeader: document.getElementById("featured-header"),
  featuredRoot: document.getElementById("featured-root"),
  archiveHeader: document.getElementById("archive-header"),
  filterTabs: document.getElementById("filter-tabs"),
  langSelect: document.getElementById("lang-filter"),
  searchInput: document.getElementById("archive-search"),
  archiveCount: document.getElementById("archive-count"),
  archiveGrid: document.getElementById("archive-grid"),
  footerRoot: document.getElementById("footer-root"),
  drawerBackdrop: document.getElementById("drawer-backdrop"),
  drawerContent: document.getElementById("drawer-content"),
  drawerClose: document.getElementById("drawer-close"),
};

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function applyTheme(theme) {
  state.theme = theme === "dark" ? "dark" : "light";
  els.rootHtml.setAttribute("data-theme", state.theme);
  localStorage.setItem("kr-theme", state.theme);
  if (els.themeToggle) {
    els.themeToggle.textContent = state.theme === "dark" ? "☀" : "☾";
    els.themeToggle.setAttribute(
      "aria-label",
      state.lang === "es"
        ? state.theme === "dark"
          ? "Cambiar a modo claro"
          : "Cambiar a modo oscuro"
        : state.theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
    );
  }
}

function applyLanguage(lang) {
  state.lang = lang === "en" ? "en" : "es";
  els.rootHtml.setAttribute("lang", state.lang);
  localStorage.setItem("kr-lang", state.lang);
  els.langButtons.forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.setLang === state.lang));
  });
  applyTheme(state.theme);
  renderAll();
  if (state.activeDrawerId) {
    renderDrawer(state.activeDrawerId);
  }
}

function getUi() {
  return state.profile.ui[state.lang];
}

function renderMasthead() {
  const ui = getUi();
  if (els.editionTag) {
    els.editionTag.textContent = ui.editionTag;
  }
  els.navLinks.forEach((link) => {
    const key = link.dataset.navKey;
    if (ui.nav[key]) {
      link.textContent = ui.nav[key];
    }
  });
  if (els.drawerClose) {
    els.drawerClose.textContent = `${ui.drawer.close} [ESC]`;
  }
}

function renderHero() {
  const ui = getUi();
  const { identity, languagesCore, secondaryStack } = state.profile;
  const institutional = identity.emails.find((e) => e.id === "institutional");
  const personal = identity.emails.find((e) => e.id === "personal");

  els.heroContainer.innerHTML = `
    <div class="hero__grid">
      <div class="hero__main">
        <div class="hero__byline">
          <span class="hero__name">${esc(identity.fullName)}</span>
          <a class="hero__handle" href="${esc(identity.githubUrl)}" target="_blank" rel="noopener noreferrer">${esc(identity.handle)}</a>
          <span class="kicker">${esc(ui.hero.kicker)}</span>
        </div>

        <h1 class="hero__headline">
          ${esc(ui.hero.headlinePart1)}
          <em>${esc(ui.hero.headlineItalic)}</em>
          ${esc(ui.hero.headlinePart2)}
        </h1>

        <p class="hero__bio">${esc(ui.hero.bio)}</p>

        <div class="hero__contacts">
          ${
            institutional
              ? `<a class="contact-chip" href="mailto:${esc(institutional.address)}">
                   <span class="contact-chip__tag">${esc(institutional.label[state.lang])}</span>
                   <span>${esc(institutional.address)}</span>
                 </a>`
              : ""
          }
          ${
            personal
              ? `<a class="contact-chip" href="mailto:${esc(personal.address)}">
                   <span class="contact-chip__tag">${esc(personal.label[state.lang])}</span>
                   <span>${esc(personal.address)}</span>
                 </a>`
              : ""
          }
        </div>

        <div class="hero__actions">
          <a class="btn btn--primary" href="#featured">${esc(ui.hero.ctaFeatured)} ↓</a>
          <a class="btn btn--ghost" href="${esc(identity.githubUrl)}" target="_blank" rel="noopener noreferrer">${esc(ui.hero.ctaGithub)} (${esc(identity.handle)}) ↗</a>
        </div>
      </div>

      <div class="hero__aside">
        <figure class="hero__portrait">
          <div class="hero__portrait-frame">
            <picture>
              <source srcset="assets/img/perfil.webp" type="image/webp" />
              <img src="assets/Perfil.png" alt="${esc(ui.hero.portraitAlt)}" width="720" height="720" decoding="async" />
            </picture>
          </div>
          <figcaption class="hero__portrait-caption">
            <span>${esc(ui.hero.portraitLabel)}</span>
            <span>UNAM · IMSS</span>
          </figcaption>
        </figure>

        <aside class="hero__colophon" aria-label="${esc(ui.hero.colophonTitle)}">
          <div class="colophon__header">
            <h2 class="colophon__title">${esc(ui.hero.colophonTitle)}</h2>
            <span class="mono" style="font-size:0.72rem;color:var(--accent);">@kr-yptonita</span>
          </div>

          <div class="colophon__block">
            <span class="colophon__label">${esc(ui.hero.colophonLanguages)}</span>
            <div class="colophon__langs">
              ${languagesCore.map((l) => `<span class="lang-pill">${esc(l.name)}</span>`).join("")}
            </div>
          </div>

          <div class="colophon__block">
            <span class="colophon__label">${esc(ui.hero.colophonCountLabel)}</span>
            <div class="colophon__stat">
              <span class="colophon__number">${String(state.projects.length).padStart(2, "0")}</span>
              <span class="colophon__eco">GitHub · Research · Rust · Python · Java</span>
            </div>
          </div>

          <div class="colophon__block">
            <span class="colophon__label">${esc(ui.hero.colophonFocusLabel)}</span>
            <div class="colophon__eco">${esc(secondaryStack.join(" · "))}</div>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function renderSectionHeader(targetEl, sectionMeta) {
  targetEl.innerHTML = `
    <div class="section-header__left">
      <span class="kicker">${esc(sectionMeta.kicker)}</span>
      <h2 class="section-title">${esc(sectionMeta.title)}</h2>
    </div>
    <div class="section-header__right">
      <p class="section-subtitle">${esc(sectionMeta.subtitle)}</p>
    </div>
  `;
}

function renderTrajectory() {
  const ui = getUi();
  const { languagesCore, secondaryStack, experience } = state.profile;
  renderSectionHeader(els.trajectoryHeader, ui.experienceSection);

  els.trajectoryRoot.innerHTML = `
    <div class="trajectory__grid">
      <div class="trajectory__languages">
        <h3>${esc(ui.experienceSection.languagesTitle)}</h3>
        <p>${esc(ui.experienceSection.languagesLead)}</p>

        ${languagesCore
          .map(
            (lang) => `
          <div class="lang-item">
            <div class="lang-item__head">
              <span class="lang-item__name">${esc(lang.name)}</span>
              <span class="mono" style="font-size:0.68rem;color:var(--ink-muted);">CORE</span>
            </div>
            <p class="lang-item__desc">${esc(lang.focus[state.lang])}</p>
          </div>
        `
          )
          .join("")}

        <div class="eco-chips">
          ${secondaryStack.map((item) => `<span class="eco-chip">${esc(item)}</span>`).join("")}
        </div>
      </div>

      <div class="trajectory__cards">
        ${experience
          .map(
            (exp, idx) => `
          <article class="exp-card ${idx % 2 === 1 ? "exp-card--offset" : ""}">
            <div class="exp-card__meta">
              <span class="exp-card__folio">${esc(exp.folio)}</span>
              <span class="exp-card__period">${esc(exp.period[state.lang])}</span>
            </div>
            <h3 class="exp-card__institution">${esc(exp.institution[state.lang])}</h3>
            <p class="exp-card__role">${esc(exp.role[state.lang])}</p>
            <p class="exp-card__summary">${esc(exp.summary[state.lang])}</p>
            <div class="tag-row">
              ${exp.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
            </div>
          </article>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

function getLayoutClass(layoutVariant) {
  switch (layoutVariant) {
    case "spread-visual-left":
      return "spread--visual-left";
    case "spread-wide-visual":
      return "spread--wide-visual";
    case "spread-staggered":
      return "spread--staggered";
    default:
      return "spread--text-left";
  }
}

function renderFigurePlate(project, isFeatured = true) {
  const copy = project[state.lang];
  const hasImg = Boolean(project.image);
  const hasSvg = Boolean(project.plateId);
  if (!hasImg && !hasSvg) return "";

  const frameClass = [
    "specimen-plate__frame",
    project.imageOrientation === "portrait" ? "specimen-plate__frame--portrait" : "",
    hasSvg && !hasImg ? "specimen-plate__frame--svg" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const innerMedia = hasImg
    ? `<img src="${esc(project.image)}" alt="${esc(copy.caption)}" loading="${isFeatured ? "eager" : "lazy"}" decoding="async" />`
    : renderSvgPlate(project.plateId, state.lang);

  return `
    <figure class="specimen-plate">
      <div class="${frameClass}">${innerMedia}</div>
      <figcaption class="specimen-plate__caption">${esc(copy.caption)}</figcaption>
    </figure>
  `;
}

function renderFeatured() {
  const ui = getUi();
  renderSectionHeader(els.featuredHeader, ui.featuredSection);
  const featuredProjects = state.projects.filter((p) => p.featured);

  els.featuredRoot.innerHTML = featuredProjects
    .map((p) => {
      const copy = p[state.lang];
      const badgeLabel = ui.visibilityBadges[p.visibility] || p.visibility;
      const badgeClass = `visibility-badge--${p.visibility}`;

      return `
        <article class="spread ${getLayoutClass(p.layoutVariant)}">
          <div class="spread__copy">
            <div class="spread__folio-row">
              <span class="folio-num">N.º ${esc(p.folio)}</span>
              <span class="visibility-badge ${esc(badgeClass)}">${esc(badgeLabel)}</span>
              <span class="mono" style="font-size:0.72rem;color:var(--ink-muted);">${esc(p.year)}</span>
            </div>

            <h3 class="spread__title">${esc(copy.title)}</h3>
            <p class="spread__tagline">${esc(copy.tagline)}</p>

            <ul class="spread__highlights">
              ${copy.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}
            </ul>

            <div class="tag-row">
              ${copy.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}
            </div>

            <div class="spread__actions">
              <button type="button" class="btn btn--primary" data-open-drawer="${esc(p.id)}">
                ${esc(ui.featuredSection.readSheet)} →
              </button>
              ${
                p.githubUrl
                  ? `<a class="btn btn--ghost" href="${esc(p.githubUrl)}" target="_blank" rel="noopener noreferrer">${esc(ui.featuredSection.visitRepo)} ↗</a>`
                  : `<span class="mono" style="font-size:0.72rem;color:var(--ink-muted);">${esc(ui.featuredSection.privateNote)}</span>`
              }
            </div>
          </div>

          <div class="spread__visual">
            ${renderFigurePlate(p, true)}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderArchiveControls() {
  const ui = getUi();
  renderSectionHeader(els.archiveHeader, ui.archiveSection);

  const cats = Object.entries(ui.categories);
  els.filterTabs.innerHTML = cats
    .map(
      ([key, label]) => `
      <button type="button" class="filter-btn" data-filter-cat="${esc(key)}" aria-pressed="${String(state.category === key)}">
        ${esc(label)}
      </button>
    `
    )
    .join("");

  const allLangs = Array.from(
    new Set(state.projects.flatMap((p) => p.languages))
  ).sort((a, b) => a.localeCompare(b));

  const priorityOrder = ["Python", "Java", "Rust"];
  allLangs.sort((a, b) => {
    const ia = priorityOrder.indexOf(a);
    const ib = priorityOrder.indexOf(b);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return a.localeCompare(b);
  });

  els.langSelect.innerHTML = `
    <option value="all">${esc(ui.archiveSection.allLanguages)}</option>
    ${allLangs
      .map(
        (lang) =>
          `<option value="${esc(lang)}" ${state.languageFilter === lang ? "selected" : ""}>${esc(lang)}</option>`
      )
      .join("")}
  `;

  els.searchInput.placeholder = ui.archiveSection.searchPlaceholder;
  els.searchInput.value = state.query;
}

function getFilteredArchiveProjects() {
  // Archive renders the non-featured projects by default, OR includes all matching projects when a filter/search is active!
  const isFiltered =
    state.category !== "all" ||
    state.languageFilter !== "all" ||
    state.query.trim() !== "";

  const pool = isFiltered
    ? state.projects
    : state.projects.filter((p) => !p.featured);

  const q = state.query.trim().toLowerCase();

  return pool.filter((p) => {
    if (state.category !== "all" && p.category !== state.category) return false;
    if (
      state.languageFilter !== "all" &&
      !p.languages.includes(state.languageFilter)
    ) {
      return false;
    }
    if (q) {
      const c = p[state.lang];
      const haystack = [
        c.title,
        c.kicker,
        c.tagline,
        c.overview,
        ...c.stack,
        ...p.languages,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

function renderArchiveGrid() {
  const ui = getUi();
  const isFiltered =
    state.category !== "all" ||
    state.languageFilter !== "all" ||
    state.query.trim() !== "";
  const totalBase = isFiltered
    ? state.projects.length
    : state.projects.filter((p) => !p.featured).length;

  const items = getFilteredArchiveProjects();

  els.archiveCount.textContent = `${ui.archiveSection.showing} ${items.length} ${ui.archiveSection.of} ${totalBase} ${ui.archiveSection.entries}`;

  if (items.length === 0) {
    els.archiveGrid.innerHTML = `
      <div class="archive__empty">
        <p>${esc(ui.archiveSection.emptyState)}</p>
        <button type="button" class="btn btn--ghost" id="reset-filters-btn">${esc(ui.archiveSection.resetFilters)}</button>
      </div>
    `;
    const resetBtn = document.getElementById("reset-filters-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state.category = "all";
        state.languageFilter = "all";
        state.query = "";
        renderArchiveControls();
        renderArchiveGrid();
      });
    }
    return;
  }

  els.archiveGrid.innerHTML = items
    .map((p, index) => {
      const copy = p[state.lang];
      const badgeLabel = ui.visibilityBadges[p.visibility] || p.visibility;
      const badgeClass = `visibility-badge--${p.visibility}`;
      const isLeadMethodology = p.id === "metodologia-cuestionarios" && !isFiltered && index === 0;

      const mediaHtml = p.image
        ? `<div class="archive-card__media">
             <img src="${esc(p.image)}" alt="${esc(copy.caption)}" loading="lazy" decoding="async" />
           </div>`
        : p.plateId
          ? `<div class="archive-card__media archive-card__media--svg">
               ${renderSvgPlate(p.plateId, state.lang)}
             </div>`
          : "";

      if (isLeadMethodology) {
        return `
          <article class="archive-card archive-card--lead">
            <div class="archive-card__body">
              <div class="archive-card__head">
                <span class="folio-num">N.º ${esc(p.folio)}</span>
                <span class="visibility-badge ${esc(badgeClass)}">${esc(badgeLabel)}</span>
              </div>
              <p class="archive-card__kicker">${esc(copy.kicker)}</p>
              <h3 class="archive-card__title">${esc(copy.title)}</h3>
              <p class="archive-card__desc">${esc(copy.tagline)}</p>
              <div class="tag-row">
                ${copy.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}
              </div>
              <div class="archive-card__foot">
                <button type="button" class="card-link" data-open-drawer="${esc(p.id)}">${esc(ui.featuredSection.readSheet)} →</button>
              </div>
            </div>
            ${mediaHtml}
          </article>
        `;
      }

      return `
        <article class="archive-card">
          <div>
            <div class="archive-card__head">
              <span class="folio-num">N.º ${esc(p.folio)}</span>
              <span class="visibility-badge ${esc(badgeClass)}">${esc(badgeLabel)}</span>
            </div>
            ${mediaHtml}
            <p class="archive-card__kicker">${esc(copy.kicker)}</p>
            <h3 class="archive-card__title">${esc(copy.title)}</h3>
            <p class="archive-card__desc">${esc(copy.tagline)}</p>
            <div class="tag-row">
              ${copy.stack.slice(0, 5).map((s) => `<span class="tag">${esc(s)}</span>`).join("")}
            </div>
          </div>

          <div class="archive-card__foot">
            <button type="button" class="card-link" data-open-drawer="${esc(p.id)}">${esc(ui.featuredSection.readSheet)} →</button>
            ${
              p.githubUrl
                ? `<a class="card-link" href="${esc(p.githubUrl)}" target="_blank" rel="noopener noreferrer">${esc(ui.featuredSection.visitRepo)} ↗</a>`
                : `<span class="mono" style="font-size:0.68rem;color:var(--ink-muted);">${esc(badgeLabel)}</span>`
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function renderFooter() {
  const ui = getUi();
  const { identity } = state.profile;
  els.footerRoot.innerHTML = `
    <div class="footer__grid">
      <div class="footer__lead">
        <span class="kicker">${esc(ui.footer.kicker)}</span>
        <h2 class="footer__title">${esc(ui.footer.title)}</h2>
        <p class="footer__subtitle">${esc(ui.footer.subtitle)}</p>
      </div>

      <div class="footer__contacts">
        ${identity.emails
          .map(
            (em) => `
          <div class="email-row">
            <div>
              <span class="email-row__label">${esc(em.label[state.lang])}</span>
              <a class="email-row__addr" href="mailto:${esc(em.address)}">${esc(em.address)}</a>
            </div>
            <button type="button" class="copy-btn" data-copy-email="${esc(em.address)}">${esc(ui.footer.copyEmail)}</button>
          </div>
        `
          )
          .join("")}

        <div class="email-row">
          <div>
            <span class="email-row__label">GitHub</span>
            <a class="email-row__addr" href="${esc(identity.githubUrl)}" target="_blank" rel="noopener noreferrer">${esc(identity.githubUrl)}</a>
          </div>
          <a class="copy-btn" style="text-decoration:none;" href="${esc(identity.githubUrl)}" target="_blank" rel="noopener noreferrer">↗</a>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <span>${esc(identity.fullName)} (${esc(identity.handle)})</span>
      <span>${esc(ui.footer.licenseNote)}</span>
    </div>
  `;
}

function renderDrawer(projectId) {
  const project = state.projects.find((p) => p.id === projectId);
  if (!project) return;
  const ui = getUi();
  const copy = project[state.lang];
  const badgeLabel = ui.visibilityBadges[project.visibility] || project.visibility;
  const badgeClass = `visibility-badge--${project.visibility}`;

  els.drawerContent.innerHTML = `
    <div class="spread__folio-row">
      <span class="folio-num">N.º ${esc(project.folio)}</span>
      <span class="visibility-badge ${esc(badgeClass)}">${esc(badgeLabel)}</span>
      <span class="mono" style="font-size:0.72rem;color:var(--ink-muted);">${esc(project.year)}</span>
    </div>

    <h3 class="drawer__title" id="drawer-heading">${esc(copy.title)}</h3>
    <p class="archive-card__kicker">${esc(copy.kicker)}</p>

    ${
      !project.githubUrl
        ? `<div class="drawer__notice">${esc(ui.drawer.privateNotice)}</div>`
        : ""
    }

    ${renderFigurePlate(project, false)}

    <div class="drawer__section">
      <h4>${esc(ui.drawer.overview)}</h4>
      <p>${esc(copy.overview)}</p>
    </div>

    <div class="drawer__section">
      <h4>${esc(ui.drawer.architecture)}</h4>
      <p>${esc(copy.architecture)}</p>
    </div>

    <div class="drawer__section">
      <h4>${esc(ui.drawer.highlights)}</h4>
      <ul class="spread__highlights" style="margin-bottom:0;">
        ${copy.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}
      </ul>
    </div>

    <div class="drawer__section">
      <h4>${esc(ui.drawer.stack)}</h4>
      <div class="tag-row">
        ${copy.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}
      </div>
    </div>

    ${
      project.githubUrl
        ? `<div class="drawer__section">
             <a class="btn btn--primary" href="${esc(project.githubUrl)}" target="_blank" rel="noopener noreferrer">${esc(ui.drawer.openRepo)} ↗</a>
           </div>`
        : ""
    }
  `;
}

function openDrawer(projectId, triggerEl) {
  state.activeDrawerId = projectId;
  state.lastTriggerEl = triggerEl || document.activeElement;
  renderDrawer(projectId);
  els.drawerBackdrop.classList.add("is-open");
  els.drawerBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  els.drawerClose.focus();
}

function closeDrawer() {
  state.activeDrawerId = null;
  els.drawerBackdrop.classList.remove("is-open");
  els.drawerBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (state.lastTriggerEl && typeof state.lastTriggerEl.focus === "function") {
    state.lastTriggerEl.focus();
  }
}

function renderAll() {
  if (!state.profile) return;
  renderMasthead();
  renderHero();
  renderTrajectory();
  renderFeatured();
  renderArchiveControls();
  renderArchiveGrid();
  renderFooter();
}

function bindEvents() {
  els.langButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.setLang));
  });

  els.themeToggle.addEventListener("click", () => {
    applyTheme(state.theme === "dark" ? "light" : "dark");
  });

  els.filterTabs.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter-cat]");
    if (!btn) return;
    state.category = btn.dataset.filterCat;
    renderArchiveControls();
    renderArchiveGrid();
  });

  els.langSelect.addEventListener("change", (e) => {
    state.languageFilter = e.target.value;
    renderArchiveGrid();
  });

  els.searchInput.addEventListener("input", (e) => {
    state.query = e.target.value;
    renderArchiveGrid();
  });

  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest("[data-open-drawer]");
    if (openBtn) {
      openDrawer(openBtn.dataset.openDrawer, openBtn);
      return;
    }

    const copyBtn = e.target.closest("[data-copy-email]");
    if (copyBtn && navigator.clipboard) {
      const addr = copyBtn.dataset.copyEmail;
      navigator.clipboard.writeText(addr).then(() => {
        const ui = getUi();
        copyBtn.textContent = ui.footer.copied;
        setTimeout(() => {
          copyBtn.textContent = ui.footer.copyEmail;
        }, 1600);
      });
    }
  });

  els.drawerClose.addEventListener("click", closeDrawer);

  els.drawerBackdrop.addEventListener("click", (e) => {
    if (e.target === els.drawerBackdrop) {
      closeDrawer();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.activeDrawerId) {
      closeDrawer();
    }
  });
}

async function init() {
  applyTheme(state.theme);
  bindEvents();

  const [profileRes, projectsRes] = await Promise.all([
    fetch("data/profile.json"),
    fetch("data/projects.json"),
  ]);

  if (!profileRes.ok || !projectsRes.ok) {
    throw new Error("Failed to load portfolio JSON data.");
  }

  state.profile = await profileRes.json();
  state.projects = await projectsRes.json();
  applyLanguage(state.lang);
}

init().catch((err) => {
  console.error(err);
});
