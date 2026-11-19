/**
 * Adaptive editorial SVG specimen plates for non-raster projects.
 * All colors inherit CSS custom properties (--ink-primary, --accent, --accent-ink, --bg-elevated).
 */

export function renderSvgPlate(plateId, lang = "es") {
  const isEs = lang === "es";

  switch (plateId) {
    case "rincon-didactico":
      return `
        <svg viewBox="0 0 640 380" width="100%" role="img" aria-label="${isEs ? "Arquitectura de Rincón Didáctico en Rust" : "Rincón Didáctico Rust architecture"}">
          <rect x="8" y="8" width="624" height="364" rx="4" fill="var(--bg-elevated)" stroke="var(--rule-strong)" stroke-width="1.2"/>
          <text x="28" y="36" font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--accent)" font-weight="600">RUST 2021 · STDLIB ONLY · [dependencies] = ∅</text>
          <line x1="28" y1="48" x2="612" y2="48" stroke="var(--rule)" stroke-width="1"/>

          <!-- Left: A4 Didactic Sheet Preview -->
          <rect x="28" y="68" width="248" height="278" rx="3" fill="var(--bg-paper)" stroke="var(--ink-primary)" stroke-width="1.4"/>
          <text x="44" y="90" font-family="Fraunces, Georgia, serif" font-size="14" font-weight="600" fill="var(--ink-primary)">Rincón Didáctico · A4</text>
          <line x1="44" y1="98" x2="260" y2="98" stroke="var(--rule-strong)" stroke-width="1"/>

          <!-- 3x2 card grid -->
          <rect x="44" y="110" width="66" height="54" rx="2" fill="var(--bg-surface)" stroke="var(--ink-primary)" stroke-width="1"/>
          <rect x="119" y="110" width="66" height="54" rx="2" fill="var(--bg-surface)" stroke="var(--ink-primary)" stroke-width="1"/>
          <rect x="194" y="110" width="66" height="54" rx="2" fill="var(--bg-surface)" stroke="var(--accent)" stroke-width="1.4"/>
          <rect x="44" y="172" width="66" height="54" rx="2" fill="var(--bg-surface)" stroke="var(--ink-primary)" stroke-width="1"/>
          <rect x="119" y="172" width="66" height="54" rx="2" fill="var(--bg-surface)" stroke="var(--accent-ink)" stroke-width="1.4"/>
          <rect x="194" y="172" width="66" height="54" rx="2" fill="var(--bg-surface)" stroke="var(--ink-primary)" stroke-width="1"/>
          <text x="77" y="141" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--ink-primary)">3 × 2</text>
          <text x="227" y="141" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--accent)">RNG</text>
          <text x="152" y="203" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--accent-ink)">GALERA</text>

          <!-- Math / Wordcloud footer inside preview -->
          <rect x="44" y="242" width="216" height="86" rx="2" fill="var(--bg-elevated)" stroke="var(--rule-strong)" stroke-dasharray="4 3"/>
          <text x="56" y="266" font-family="IBM Plex Mono, monospace" font-size="12" fill="var(--ink-primary)">  348 × 27 = _____</text>
          <text x="56" y="288" font-family="IBM Plex Mono, monospace" font-size="12" fill="var(--accent-ink)">  18 ⟌ 4536   (res: 0)</text>
          <text x="56" y="312" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--ink-muted)">  + ${isEs ? "Hoja de respuestas / Nube sin solape" : "Answer key / Non-overlap wordcloud"}</text>

          <!-- Right: Rust Modular Pipeline -->
          <rect x="306" y="68" width="306" height="62" rx="3" fill="var(--bg-surface)" stroke="var(--rule-strong)"/>
          <text x="322" y="92" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="600" fill="var(--accent)">01 // CORE GENERATORS</text>
          <text x="322" y="114" font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--ink-secondary)">lexicon.rs · cards.rs · math_gen.rs</text>

          <line x1="459" y1="130" x2="459" y2="152" stroke="var(--ink-primary)" stroke-width="1.2"/>

          <rect x="306" y="152" width="306" height="62" rx="3" fill="var(--bg-surface)" stroke="var(--accent-mid)"/>
          <text x="322" y="176" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="600" fill="var(--accent-mid)">02 // LAYOUT &amp; WORDCLOUD</text>
          <text x="322" y="198" font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--ink-secondary)">wordcloud.rs · math_layout.rs · seed u64</text>

          <line x1="459" y1="214" x2="459" y2="236" stroke="var(--ink-primary)" stroke-width="1.2"/>

          <rect x="306" y="236" width="306" height="110" rx="3" fill="var(--bg-paper)" stroke="var(--ink-primary)" stroke-width="1.4"/>
          <text x="322" y="262" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="600" fill="var(--ink-primary)">03 // OUTPUT ENGINES</text>
          <text x="322" y="286" font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--ink-secondary)">• pdf.rs &amp; math_pdf.rs (A4 / Letter)</text>
          <text x="322" y="308" font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--ink-secondary)">• server.rs (--web HTTP + web/)</text>
          <text x="322" y="330" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--accent)">cargo test ✓ · cargo build --release</text>
        </svg>
      `;

    case "metodologia-cuestionarios":
      return `
        <svg viewBox="0 0 640 340" width="100%" role="img" aria-label="${isEs ? "Metodología adaptativa de cuestionarios perceptuales" : "Adaptive perceptual questionnaire methodology"}">
          <rect x="8" y="8" width="624" height="324" rx="4" fill="var(--bg-elevated)" stroke="var(--rule-strong)" stroke-width="1.2"/>
          <text x="26" y="34" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="var(--accent)" font-weight="600">${isEs ? "METODOLOGÍA ADAPTATIVA A CIEGAS · SUDDEN DEATH (P1–P9)" : "BLIND ADAPTIVE METHODOLOGY · SUDDEN DEATH (P1–P9)"}</text>
          <line x1="26" y1="45" x2="614" y2="45" stroke="var(--rule)"/>

          <!-- Musical staff lines background on top right -->
          <g stroke="var(--rule-strong)" stroke-width="1">
            <line x1="355" y1="74" x2="604" y2="74"/><line x1="355" y1="84" x2="604" y2="84"/>
            <line x1="355" y1="94" x2="604" y2="94"/><line x1="355" y1="104" x2="604" y2="104"/>
            <line x1="355" y1="114" x2="604" y2="114"/>
          </g>
          <circle cx="410" cy="94" r="5.5" fill="var(--accent)"/>
          <line x1="415.5" y1="94" x2="415.5" y2="66" stroke="var(--accent)" stroke-width="1.6"/>
          <circle cx="465" cy="84" r="5.5" fill="var(--accent-mid)"/>
          <line x1="470.5" y1="84" x2="470.5" y2="114" stroke="var(--accent-mid)" stroke-width="1.6"/>
          <circle cx="520" cy="104" r="5.5" fill="var(--accent-ink)"/>
          <line x1="525.5" y1="104" x2="525.5" y2="72" stroke="var(--accent-ink)" stroke-width="1.6"/>
          <text x="358" y="132" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-muted)">${isEs ? "Claves dinámicas SVG: Sol (2ª) · Fa (4ª) · Do (3ª) + SMF MIDI" : "Dynamic SVG Clefs: Treble · Bass · Alto + Binary SMF MIDI"}</text>

          <!-- Flow Nodes -->
          <rect x="26" y="64" width="142" height="68" rx="3" fill="var(--bg-surface)" stroke="var(--ink-primary)"/>
          <text x="38" y="86" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="var(--accent)">P1 – P2 // CASUAL</text>
          <text x="38" y="104" font-family="Plus Jakarta Sans, sans-serif" font-size="11" fill="var(--ink-secondary)">${isEs ? "Género y timbre" : "Genre &amp; timbre"}</text>
          <text x="38" y="120" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-muted)">FLAC / WebAudio</text>

          <line x1="168" y1="98" x2="196" y2="98" stroke="var(--ink-primary)" stroke-width="1.4"/>

          <rect x="196" y="64" width="140" height="68" rx="3" fill="var(--bg-surface)" stroke="var(--accent-ink)"/>
          <text x="208" y="86" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="var(--accent-ink)">${isEs ? "FILTRO CLAVE" : "CLEF FILTER"}</text>
          <text x="208" y="104" font-family="Plus Jakarta Sans, sans-serif" font-size="11" fill="var(--ink-secondary)">${isEs ? "Instrumento → Clave" : "Instrument → Clef"}</text>
          <text x="208" y="120" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-muted)">Sol / Fa / Do 3ª</text>

          <!-- Row 2 -->
          <rect x="26" y="162" width="182" height="72" rx="3" fill="var(--bg-surface)" stroke="var(--ink-primary)"/>
          <text x="38" y="185" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="var(--ink-primary)">P3 – P7 // ${isEs ? "PRÁCTICO" : "PRACTICAL"}</text>
          <text x="38" y="204" font-family="Plus Jakarta Sans, sans-serif" font-size="11" fill="var(--ink-secondary)">${isEs ? "Lectura, acordes, ritmo" : "Reading, chords, rhythm"}</text>
          <text x="38" y="222" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-muted)">${isEs ? "Pentagrama ciego SVG" : "Blind SVG staff input"}</text>

          <line x1="208" y1="198" x2="236" y2="198" stroke="var(--ink-primary)" stroke-width="1.4"/>

          <rect x="236" y="162" width="182" height="72" rx="3" fill="var(--bg-surface)" stroke="var(--ink-primary)"/>
          <text x="248" y="185" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="var(--ink-primary)">P8 – P9 // ${isEs ? "AVANZADO" : "ADVANCED"}</text>
          <text x="248" y="204" font-family="Plus Jakarta Sans, sans-serif" font-size="11" fill="var(--ink-secondary)">${isEs ? "Modulación y contrapunto" : "Modulation &amp; counterpoint"}</text>
          <text x="248" y="222" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-muted)">RHOne / LHOne MIDI</text>

          <line x1="418" y1="198" x2="446" y2="198" stroke="var(--accent)" stroke-width="1.6"/>

          <rect x="446" y="162" width="168" height="72" rx="3" fill="var(--bg-paper)" stroke="var(--accent)" stroke-width="1.5"/>
          <text x="458" y="185" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="var(--accent)">${isEs ? "CORTE INMEDIATO" : "SUDDEN DEATH"}</text>
          <text x="458" y="204" font-family="Plus Jakarta Sans, sans-serif" font-size="11" fill="var(--ink-secondary)">${isEs ? "Nivel + ítem exacto" : "Tier + exact item"}</text>
          <text x="458" y="222" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-muted)">0..9 → Fase 2</text>

          <!-- Phase 2 Banner -->
          <rect x="26" y="256" width="588" height="58" rx="3" fill="var(--bg-paper)" stroke="var(--rule-strong)"/>
          <text x="42" y="280" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="600" fill="var(--accent-ink)">${isEs ? "FASE 2 // EVALUACIÓN PERCEPTUAL ALEATORIZADA" : "PHASE 2 // RANDOMIZED PERCEPTUAL EVALUATION"}</text>
          <text x="42" y="300" font-family="Plus Jakarta Sans, sans-serif" font-size="11" fill="var(--ink-secondary)">${isEs ? "Reconocimiento · Escala 0–10 · Lapsos temporales · Exportación CSV/JSON (HTTP 206 + Docker)" : "Recognition · 0–10 Scale · Temporal timestamps · CSV/JSON Export (HTTP 206 + Docker)"}</text>
        </svg>
      `;

    case "java-fabric":
      return `
        <svg viewBox="0 0 560 220" width="100%" role="img" aria-label="GachaAddiction Fabric Java 25 Architecture">
          <rect x="6" y="6" width="548" height="208" rx="4" fill="var(--bg-elevated)" stroke="var(--rule-strong)"/>
          <text x="24" y="32" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="600" fill="var(--accent-ink)">JAVA 25 · FABRIC LOADER 0.19.3+ · MINECRAFT 26.2</text>
          <line x1="24" y1="42" x2="536" y2="42" stroke="var(--rule)"/>
          <rect x="24" y="62" width="150" height="72" rx="3" fill="var(--bg-surface)" stroke="var(--ink-primary)"/>
          <text x="36" y="88" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="600" fill="var(--ink-primary)">Loot Table Hook</text>
          <text x="36" y="108" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-secondary)">Vanilla + Datapacks</text>
          <text x="36" y="123" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-muted)">+ Lootr optional</text>

          <line x1="174" y1="98" x2="205" y2="98" stroke="var(--ink-primary)" stroke-width="1.3"/>
          <rect x="205" y="62" width="150" height="72" rx="3" fill="var(--bg-paper)" stroke="var(--accent)" stroke-width="1.5"/>
          <text x="217" y="88" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="600" fill="var(--accent)">Gacha Reel GUI</text>
          <text x="217" y="108" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-secondary)">Decoy items + Spin</text>
          <text x="217" y="123" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-muted)">Rarity border colors</text>

          <line x1="355" y1="98" x2="386" y2="98" stroke="var(--ink-primary)" stroke-width="1.3"/>
          <rect x="386" y="62" width="150" height="72" rx="3" fill="var(--bg-surface)" stroke="var(--ink-primary)"/>
          <text x="398" y="88" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="600" fill="var(--ink-primary)">Player Input</text>
          <text x="398" y="108" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-secondary)">SPACE: skip reel</text>
          <text x="398" y="123" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-muted)">ESC: dismiss all</text>

          <rect x="24" y="152" width="512" height="40" rx="3" fill="var(--bg-surface)" stroke="var(--rule)"/>
          <text x="38" y="176" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--ink-secondary)">Gradle Build · Fabric API 0.156.0+ · Client &amp; Dedicated Server Verified</text>
        </svg>
      `;

    case "rewards-extension":
      return `
        <svg viewBox="0 0 560 220" width="100%" role="img" aria-label="Firefox Extension MV3 Architecture">
          <rect x="6" y="6" width="548" height="208" rx="4" fill="var(--bg-elevated)" stroke="var(--rule-strong)"/>
          <text x="24" y="32" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="600" fill="var(--accent)">FIREFOX WEBEXTENSION · MANIFEST V3</text>
          <line x1="24" y1="42" x2="536" y2="42" stroke="var(--rule)"/>
          <rect x="24" y="64" width="158" height="70" rx="3" fill="var(--bg-surface)" stroke="var(--ink-primary)"/>
          <text x="36" y="88" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="var(--ink-primary)">tabs.onUpdated</text>
          <text x="36" y="107" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-secondary)">Google / DDG / Brave</text>
          <text x="36" y="122" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-muted)">extract ?q=...</text>

          <line x1="182" y1="99" x2="206" y2="99" stroke="var(--ink-primary)" stroke-width="1.3"/>
          <rect x="206" y="64" width="154" height="70" rx="3" fill="var(--bg-surface)" stroke="var(--accent-ink)"/>
          <text x="218" y="88" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="var(--accent-ink)">storage.session</text>
          <text x="218" y="107" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-secondary)">5s deduplication</text>
          <text x="218" y="122" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-muted)">TTL leak cleanup</text>

          <line x1="360" y1="99" x2="384" y2="99" stroke="var(--ink-primary)" stroke-width="1.3"/>
          <rect x="384" y="64" width="152" height="70" rx="3" fill="var(--bg-paper)" stroke="var(--accent)"/>
          <text x="396" y="88" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="var(--accent)">Bing BG + Alarm</text>
          <text x="396" y="107" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-secondary)">Background tab</text>
          <text x="396" y="122" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-muted)">Auto-close 10 s</text>

          <rect x="24" y="152" width="512" height="40" rx="3" fill="var(--bg-surface)" stroke="var(--rule)"/>
          <text x="38" y="176" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--ink-secondary)">gecko strict_min_version 142.0 · permissions: tabs, alarms, storage</text>
        </svg>
      `;

    case "linux-infra":
      return `
        <svg viewBox="0 0 560 180" width="100%" role="img" aria-label="Rocky Linux Bash Installer Flow">
          <rect x="6" y="6" width="548" height="168" rx="4" fill="var(--bg-elevated)" stroke="var(--rule-strong)"/>
          <text x="22" y="30" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="600" fill="var(--accent-ink)">ROCKY LINUX / RHEL · BASH PROVISIONING</text>
          <line x1="22" y1="40" x2="538" y2="40" stroke="var(--rule)"/>
          <rect x="22" y="58" width="160" height="58" rx="3" fill="var(--bg-surface)" stroke="var(--ink-primary)"/>
          <text x="32" y="82" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="600" fill="var(--ink-primary)">installer_reqs.sh</text>
          <text x="32" y="100" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-secondary)">avahi + Docker + SnapRAID</text>
          <line x1="182" y1="87" x2="202" y2="87" stroke="var(--ink-primary)" stroke-width="1.3"/>
          <rect x="202" y="58" width="160" height="58" rx="3" fill="var(--bg-surface)" stroke="var(--accent)"/>
          <text x="212" y="82" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="600" fill="var(--accent)">Installer.sh</text>
          <text x="212" y="100" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-secondary)">Cosmic Cloud setup</text>
          <line x1="362" y1="87" x2="382" y2="87" stroke="var(--ink-primary)" stroke-width="1.3"/>
          <rect x="382" y="58" width="156" height="58" rx="3" fill="var(--bg-surface)" stroke="var(--ink-primary)"/>
          <text x="392" y="82" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="600" fill="var(--ink-primary)">Firewall / Uninstall</text>
          <text x="392" y="100" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-secondary)">Ports &amp; rollback</text>
          <text x="22" y="148" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="var(--ink-muted)">$ sudo ./installer_requirements.sh &amp;&amp; sudo ./Installer.sh &amp;&amp; sudo ./Firewall.sh</text>
        </svg>
      `;

    case "docker-omeka":
      return `
        <svg viewBox="0 0 560 180" width="100%" role="img" aria-label="Omeka Docker Compose Topology">
          <rect x="6" y="6" width="548" height="168" rx="4" fill="var(--bg-elevated)" stroke="var(--rule-strong)"/>
          <text x="22" y="30" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="600" fill="var(--accent-ink)">DOCKER COMPOSE · BRIDGE NETWORK omeka-net</text>
          <line x1="22" y1="40" x2="538" y2="40" stroke="var(--rule)"/>
          <rect x="22" y="56" width="150" height="84" rx="3" fill="var(--bg-surface)" stroke="var(--ink-primary)"/>
          <text x="34" y="80" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="var(--ink-primary)">Host Volumes</text>
          <text x="34" y="99" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-secondary)">./mysql</text>
          <text x="34" y="114" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-secondary)">./files (www-data)</text>
          <text x="34" y="129" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-secondary)">./config/database.ini</text>
          <line x1="172" y1="98" x2="200" y2="98" stroke="var(--ink-primary)" stroke-width="1.3"/>
          <rect x="200" y="56" width="160" height="84" rx="3" fill="var(--bg-paper)" stroke="var(--accent)"/>
          <text x="212" y="80" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="var(--accent)">omeka-s (:8080)</text>
          <text x="212" y="100" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-secondary)">elestio/omeka:latest</text>
          <text x="212" y="118" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-muted)">cosmic-compose.json</text>
          <line x1="360" y1="98" x2="388" y2="98" stroke="var(--ink-primary)" stroke-width="1.3"/>
          <rect x="388" y="56" width="150" height="84" rx="3" fill="var(--bg-surface)" stroke="var(--accent-ink)"/>
          <text x="400" y="80" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="var(--accent-ink)">db (MariaDB 10.11)</text>
          <text x="400" y="100" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-secondary)">Schema: omeka</text>
          <text x="400" y="118" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-muted)">Isolated bridge</text>
        </svg>
      `;

    case "audio-suite":
      return `
        <svg viewBox="0 0 560 180" width="100%" role="img" aria-label="Python Audio and Metadata Pipeline">
          <rect x="6" y="6" width="548" height="168" rx="4" fill="var(--bg-elevated)" stroke="var(--rule-strong)"/>
          <text x="22" y="30" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="600" fill="var(--accent)">PYTHON AUDIO TOOLKIT · FFMPEG · MUTAGEN · SPOTIPY</text>
          <line x1="22" y1="40" x2="538" y2="40" stroke="var(--rule)"/>
          <rect x="22" y="58" width="160" height="74" rx="3" fill="var(--bg-surface)" stroke="var(--ink-primary)"/>
          <text x="34" y="82" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="600" fill="var(--ink-primary)">Sincronizador</text>
          <text x="34" y="100" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-secondary)">FLAC/WAV → MP3 320k</text>
          <text x="34" y="116" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-muted)">Artista / Álbum</text>
          <line x1="182" y1="95" x2="202" y2="95" stroke="var(--ink-primary)" stroke-width="1.3"/>
          <rect x="202" y="58" width="160" height="74" rx="3" fill="var(--bg-surface)" stroke="var(--accent-ink)"/>
          <text x="214" y="82" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="600" fill="var(--accent-ink)">Coverart-Fix</text>
          <text x="214" y="100" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-secondary)">Pillow LANCZOS</text>
          <text x="214" y="116" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-muted)">500 × 500 px APIC</text>
          <line x1="362" y1="95" x2="382" y2="95" stroke="var(--ink-primary)" stroke-width="1.3"/>
          <rect x="382" y="58" width="156" height="74" rx="3" fill="var(--bg-paper)" stroke="var(--accent)"/>
          <text x="394" y="82" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="600" fill="var(--accent)">Add-Genre + TTS</text>
          <text x="394" y="100" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-secondary)">Spotify Web API</text>
          <text x="394" y="116" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-muted)">+ Texto a Voz REPL</text>
        </svg>
      `;

    default:
      return "";
  }
}
