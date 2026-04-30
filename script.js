// ============================================================
// ✏️ EDITE AQUI — DADOS DA ALUNA
// ============================================================

const WEEKS = [
  {
    number: 1,
    title: "To Be",
    focus: "Dominar o verbo To Be em afirmativa, interrogativa e negativa. Você já sabe mais do que imagina — vamos usar!",

    pdfs: [
      { label: "To Be – Semana 1", url: "https://drive.google.com/file/d/1Sy2vF5MsjdcpRLBHGqVCNOPtS8N5dBYf/view?usp=sharing" }
    ],

    exercises: [
      "Escreva 3 frases afirmativas sobre você usando I am, He is, She is",
      "Transforme estas frases em perguntas: 'You are okay.' → 'Are you okay?'",
      "Escreva a negativa de: I am home / She is here / They are friends",
      "Complete: ___ is my son. / ___ are at school. / ___ am Brazilian.",
      "Traduza para o inglês: Nós somos amigos. / Ele está em casa. / Eles estão estudando.",
    ],

    audios: [
      { label: "Pronúncia — enviado pelo WhatsApp", url: "" }
    ],

    links: [
      { label: "BBC Learning English – To Be", url: "https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-1/session-1" }
    ],

    videos: [],

    // Notas de aula — aparecem como exercícios de leitura/referência
    notes: [
      "AFIRMATIVA → I am | You are | He is | She is | It is | We are | You are | They are",
      "INTERROGATIVA → Am I? | Are you? | Is he? | Is she? | Is it? | Are we? | Are you? | Are they?",
      "NEGATIVA → I am not (I'm not) | You are not (aren't) | He is not (isn't) | She is not (isn't) | We are not (aren't) | They are not (aren't)",
      "CONTRAÇÃO NEGATIVA → isn't = is not | aren't = are not | ain't = forma informal de negação",
      "She isn't home = She is not home",
      "I'm not your wife = I am not your wife",
      "We aren't friends = We are not friends",
    ],

    vocabulary: [
      { word: "I am",       translation: "eu sou / estou",              phonetic: "/aɪ æm/" },
      { word: "you are",    translation: "você é/está — vocês são/estão", phonetic: "/juː ɑːr/" },
      { word: "he is",      translation: "ele é / está",                phonetic: "/hiː ɪz/" },
      { word: "she is",     translation: "ela é / está",                phonetic: "/ʃiː ɪz/" },
      { word: "it is",      translation: "a coisa é / está",            phonetic: "/ɪt ɪz/" },
      { word: "we are",     translation: "nós somos / estamos",         phonetic: "/wiː ɑːr/" },
      { word: "they are",   translation: "eles/elas são / estão",       phonetic: "/ðeɪ ɑːr/" },
      { word: "here",       translation: "aqui",                        phonetic: "/hɪər/" },
      { word: "hungry",     translation: "com fome",                    phonetic: "/ˈhʌŋɡri/" },
      { word: "your",       translation: "seu / sua",                   phonetic: "/jʊər/" },
      { word: "boss",       translation: "chefe",                       phonetic: "/bɒs/" },
      { word: "at school",  translation: "na escola",                   phonetic: "/æt skuːl/" },
      { word: "at work",    translation: "no trabalho",                 phonetic: "/æt wɜːrk/" },
      { word: "thirty-nine", translation: "trinta e nove",              phonetic: "/ˈθɜːrti naɪn/" },
      { word: "how are you?", translation: "como você está?",           phonetic: "/haʊ ɑːr juː/" },
    ]
  },

  {
    number: 2,
    title: "Daily Routines",
    focus: "Praticar frases simples sobre rotina e começar a falar pequenas informações do dia a dia.",

    pdfs: [],

    exercises: [
      "Complete os exercícios da Semana 2 no caderno",
      "Grave um áudio curto falando 3 frases sobre sua rotina"
    ],

    audios: [
      { label: "Modelo de rotina — enviado pelo WhatsApp", url: "" }
    ],

    links: [],
    videos: [],

    vocabulary: [
      { word: "wake up",          translation: "acordar",    phonetic: "/weɪk ʌp/" },
      { word: "daily routine",    translation: "rotina diária", phonetic: "/ˈdeɪli ruːˈtiːn/" },
      { word: "in the morning",   translation: "de manhã",   phonetic: "/ɪn ðə ˈmɔːrnɪŋ/" },
      { word: "in the afternoon", translation: "à tarde",    phonetic: "/ɪn ðə ˌæftərˈnuːn/" },
      { word: "at night",         translation: "à noite",    phonetic: "/æt naɪt/" },
    ]
  }

  // ============================================================
  // ✏️ PARA ADICIONAR UMA NOVA SEMANA:
  // ,{
  //   number: 3,
  //   title: "Family",
  //   focus: "Vocabulário de família e frases com he/she/they.",
  //   pdfs:      [],
  //   exercises: ["Exercício 1"],
  //   audios:    [],
  //   links:     [],
  //   videos:    [],
  //   vocabulary: [
  //     { word: "mother", translation: "mãe", phonetic: "/ˈmʌðər/" },
  //   ]
  // }
  // ============================================================
];

// ============================================================
// ⬇️ A PARTIR DAQUI NÃO PRECISA MEXER
// ============================================================

function speakWord(word, btn) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(word);
  u.lang = 'en-US';
  u.rate = 0.85;
  if (btn) {
    btn.classList.add('speaking');
    u.onend  = () => btn.classList.remove('speaking');
    u.onerror = () => btn.classList.remove('speaking');
  }
  window.speechSynthesis.speak(u);
}

function hasContent(arr) {
  return Array.isArray(arr) && arr.filter(i => i && i.label).length > 0;
}

function renderGrid() {
  const grid = document.getElementById("weeksGrid");
  grid.innerHTML = WEEKS.map((w, i) => {
    const icons = [
      hasContent(w.pdfs)        ? '<span class="ricon ricon-pdf"      title="PDF">P</span>'        : '',
      hasContent(w.audios)      ? '<span class="ricon ricon-audio"    title="Áudio">A</span>'      : '',
      hasContent(w.exercises)   ? '<span class="ricon ricon-exercise" title="Exercícios">E</span>' : '',
      hasContent(w.links)       ? '<span class="ricon ricon-link"     title="Links">L</span>'      : '',
      hasContent(w.videos)      ? '<span class="ricon ricon-video"    title="Vídeos">V</span>'     : '',
      (w.vocabulary||[]).length ? '<span class="ricon ricon-vocab"    title="Vocabulário">W</span>': '',
    ].join('');
    return `
      <article class="week-card" onclick="openModal(${i})" tabindex="0"
               onkeydown="if(event.key==='Enter')openModal(${i})">
        <div class="card-head">
          <p class="card-number">Semana ${w.number}</p>
          <h2 class="card-title">${w.title}</h2>
        </div>
        <div class="card-body">
          <div class="card-icons">${icons}</div>
          <div class="card-cta">
            <span>Ver material</span>
            <span class="card-cta-arrow">→</span>
          </div>
        </div>
      </article>`;
  }).join('');
}

function openModal(index) {
  const w = WEEKS[index];
  document.getElementById("modalWeekLabel").textContent = `Semana ${w.number}`;
  document.getElementById("modalTitle").textContent     = w.title;
  document.getElementById("modalFocus").textContent     = w.focus || '';
  document.getElementById("modalBody").innerHTML = [
    renderPdfs(w.pdfs),
    renderExercises(w.exercises),
    renderAudios(w.audios),
    renderLinks(w.links),
    renderVideos(w.videos),
    renderNotes(w.notes),
    renderVocabulary(w.vocabulary),
    `<div class="yas-tip"><strong>Dica da YV</strong>Pratique todos os dias um pouco. Consistência é o que te leva à fluência. ✦</div>`
  ].join('');
  document.getElementById("overlay").classList.add("open");
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  window.speechSynthesis && window.speechSynthesis.cancel();
  document.getElementById("overlay").classList.remove("open");
  document.body.style.overflow = '';
}

function renderPdfs(pdfs) {
  const items = (pdfs || []).filter(p => p.label);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">PDFs</h3>
    <div class="res-list">
      ${items.map(p => `
        <div class="res-item">
          <span class="res-item-label">${p.label}</span>
          <div class="res-actions">
            <a href="${p.url}" target="_blank" class="btn-open">Abrir ↗</a>
            <a href="${p.url}" download class="btn-download">Baixar</a>
          </div>
        </div>`).join('')}
    </div>
  </div>`;
}

function renderExercises(exercises) {
  const items = (exercises || []).filter(Boolean);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">Exercícios</h3>
    <ul class="exercise-list">
      ${items.map(e => `<li>${e}</li>`).join('')}
    </ul>
  </div>`;
}

function renderAudios(audios) {
  const items = (audios || []).filter(a => a.label);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">Áudios</h3>
    <div class="res-list">
      ${items.map(a => a.url
        ? `<div class="res-item audio-item">
             <span class="res-item-label">${a.label}</span>
             <audio controls preload="none"><source src="${a.url}"></audio>
           </div>`
        : `<div class="res-item">
             <span class="res-item-label">${a.label}</span>
             <span class="via-whatsapp">via WhatsApp</span>
           </div>`
      ).join('')}
    </div>
  </div>`;
}

function renderLinks(links) {
  const items = (links || []).filter(l => l.label);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">Links</h3>
    <div class="res-list">
      ${items.map(l => `
        <div class="res-item">
          <span class="res-item-label">${l.label}</span>
          <div class="res-actions">
            <a href="${l.url}" target="_blank" class="btn-open">Abrir ↗</a>
          </div>
        </div>`).join('')}
    </div>
  </div>`;
}

function renderVideos(videos) {
  const items = (videos || []).filter(v => v.label);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">Vídeos</h3>
    <div class="res-list">
      ${items.map(v => `
        <div class="res-item">
          <span class="res-item-label">${v.label}</span>
          <div class="res-actions">
            <a href="${v.url}" target="_blank" class="btn-open">Assistir ↗</a>
          </div>
        </div>`).join('')}
    </div>
  </div>`;
}

function renderVocabulary(vocabulary) {
  const items = (vocabulary || []).filter(v => v.word);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">Vocabulário</h3>
    <div class="vocab-grid">
      ${items.map(v => `
        <div class="vocab-card" tabindex="0"
             onclick="this.classList.toggle('flipped')"
             onkeydown="if(event.key==='Enter')this.classList.toggle('flipped')">
          <div class="vocab-front">
            <button class="vocab-speak-btn"
              onclick="event.stopPropagation(); speakWord('${v.word.replace(/'/g,"\\'")}', this)"
              title="Ouvir pronúncia">🔊</button>
            <div class="vocab-front-inner">
              <span class="vocab-word">${v.word}</span>
              ${v.phonetic ? `<span class="vocab-phonetic">${v.phonetic}</span>` : ''}
            </div>
            <span class="vocab-hint">toque para ver</span>
          </div>
          <div class="vocab-back">
            <span class="vocab-translation">${v.translation}</span>
          </div>
        </div>`).join('')}
    </div>
  </div>`;
}


function renderNotes(notes) {
  const items = (notes || []).filter(Boolean);
  if (!items.length) return '';
  return `<div class="resource-section">
    <h3 class="res-title">Notas da Aula</h3>
    <ul class="notes-list">
      ${items.map(n => `<li>${n}</li>`).join('')}
    </ul>
  </div>`;
}

function renderGlossary() {
  const section = document.getElementById("glossarySection");
  if (!section) return;
  const all = [];
  WEEKS.forEach(w => {
    (w.vocabulary || []).filter(v => v.word).forEach(v => {
      all.push({ ...v, week: w.number });
    });
  });
  if (!all.length) {
    section.innerHTML = '<p class="glossary-empty">O glossário vai aparecer aqui conforme as semanas forem avançando. ✦</p>';
    return;
  }
  section.innerHTML = all.map(v => `
    <div class="glossary-row">
      <span class="glos-word">${v.word}</span>
      <span class="glos-trans">
        ${v.translation}
        ${v.phonetic ? `<span class="glos-phonetic">${v.phonetic}</span>` : ''}
      </span>
      <button class="glos-speak" onclick="speakWord('${v.word.replace(/'/g,"\\'")}', this)" title="Ouvir">🔊</button>
      <span class="glos-week-badge">Sem. ${v.week}</span>
    </div>`).join('');
}

document.getElementById("overlay").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

let touchStartY = 0;
document.addEventListener("touchstart", e => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });
document.addEventListener("touchmove", e => {
  if (document.getElementById("overlay").classList.contains("open")) {
    if (e.touches[0].clientY - touchStartY > 100) closeModal();
  }
}, { passive: true });

renderGrid();
renderGlossary();
