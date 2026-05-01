const PLAN = document.body.getAttribute("data-plan") || "Foundation";

const DAILY = {
  date: "1 de maio, 2026",
  text: "Pamela is a mother. She is Brazilian and she is 39 years old. Her son Pedro is 3 years old and her daughter Lis is 7. Pedro is home today, but Lis is at school. Yasmin is Pamela's English teacher. She is amazing! Pamela and Yasmin are studying together. They are friends.",
  questions: [
    {
      question: "How old is Pamela?",
      options: [
        { letter: "a", text: "She is 29" },
        { letter: "b", text: "She is 39" },
        { letter: "c", text: "She is 49" },
        { letter: "d", text: "She is 33" },
        { letter: "e", text: "She is 25" }
      ],
      answer: "b"
    },
    {
      question: "Where is Lis?",
      options: [
        { letter: "a", text: "She is home" },
        { letter: "b", text: "She is at the park" },
        { letter: "c", text: "She is at school" },
        { letter: "d", text: "She is at work" },
        { letter: "e", text: "She is with Pedro" }
      ],
      answer: "c"
    },
    {
      question: "Who is Yasmin?",
      options: [
        { letter: "a", text: "She is a doctor" },
        { letter: "b", text: "She is a student" },
        { letter: "c", text: "She is Pamela's friend only" },
        { letter: "d", text: "She is Pamela's English teacher" },
        { letter: "e", text: "She is Lis's teacher" }
      ],
      answer: "d"
    },
    {
      question: "Are Pamela and Yasmin friends?",
      options: [
        { letter: "a", text: "No, they are not" },
        { letter: "b", text: "Yes, they are" },
        { letter: "c", text: "They are colleagues" },
        { letter: "d", text: "They are sisters" },
        { letter: "e", text: "They are neighbors" }
      ],
      answer: "b"
    },
    {
      question: "Is Pedro at school?",
      options: [
        { letter: "a", text: "Yes, he is" },
        { letter: "b", text: "No, he is at the park" },
        { letter: "c", text: "No, he is home" },
        { letter: "d", text: "Yes, he is with Lis" },
        { letter: "e", text: "No, he is at work" }
      ],
      answer: "c"
    }
  ]
};

const WEEKS = [
  {
    number: 1,
    title: "To Be — Complete",
    focus: "Dominar o verbo To Be em afirmativa, interrogativa e negativa. Voce ja sabe mais do que imagina!",
    pdfs: [],
    exercises: [
      "Escreva 3 frases afirmativas sobre voce e sua familia",
      "Transforme em perguntas: 'You are okay.' / 'He is your son.' / 'They are friends.'",
      "Escreva a negativa de: I am home / She is here / They are at school",
      "Complete: ___ is my son. / ___ are at school. / ___ am Brazilian.",
      "Traduza: Nos somos amigas. / Ele esta em casa. / Ela nao esta aqui."
    ],
    audios: [{ label: "Pronuncia — enviado pelo WhatsApp", url: "" }],
    links: [],
    videos: [],
    notes: [
      "AFIRMATIVA → I am | You are | He is | She is | It is | We are | You are | They are",
      "INTERROGATIVA → Am I? | Are you? | Is he? | Is she? | Is it? | Are we? | Are you? | Are they?",
      "NEGATIVA → I am not | You are not (aren't) | He is not (isn't) | She is not (isn't) | We are not (aren't) | They are not (aren't)",
      "CONTRACOES → isn't = is not | aren't = are not | ain't = negacao informal",
      "She isn't home = She is not home",
      "I'm not your wife = I am not your wife",
      "We aren't friends = We are not friends",
      "HOW ARE YOU? → Como voce esta? | I am fine. / I am okay. / I am great!"
    ],
    classwork: [
      {
        title: "Atividade 1 — Afirmativa para Interrogativa",
        instruction: "Transforme as frases em perguntas.",
        items: [
          { q: "You are okay.",          a: "Are you okay?" },
          { q: "He is your son.",        a: "Is he your son?" },
          { q: "She is your friend.",    a: "Is she your friend?" },
          { q: "They are at school.",    a: "Are they at school?" },
          { q: "We are in the park.",    a: "Are we in the park?" }
        ]
      },
      {
        title: "Atividade 2 — Afirmativa para Negativa",
        instruction: "Escreva a forma negativa — use a contracao.",
        items: [
          { q: "She is home.",           a: "She isn't home." },
          { q: "I am your wife.",        a: "I'm not your wife." },
          { q: "We are friends.",        a: "We aren't friends." },
          { q: "He is at school.",       a: "He isn't at school." },
          { q: "They are here.",         a: "They aren't here." }
        ]
      },
      {
        title: "Atividade 3 — Complete com o pronome correto",
        instruction: "Complete com: I, you, he, she, it, we, they.",
        items: [
          { q: "___ am a mother. (eu)",              a: "I am a mother." },
          { q: "___ is my son, Pedro. (ele)",        a: "He is my son, Pedro." },
          { q: "___ are studying. (nos)",            a: "We are studying." },
          { q: "___ is my English teacher. (ela)",   a: "She is my English teacher." },
          { q: "___ are at school. (eles)",          a: "They are at school." }
        ]
      }
    ],
    vocabulary: [
      { word: "I am",        translation: "eu sou / estou",                   phonetic: "/ai am/" },
      { word: "you are",     translation: "voce e/esta — voces sao/estao",    phonetic: "/yu ar/" },
      { word: "he is",       translation: "ele e / esta",                     phonetic: "/hi iz/" },
      { word: "she is",      translation: "ela e / esta",                     phonetic: "/shi iz/" },
      { word: "it is",       translation: "a coisa e / esta",                 phonetic: "/it iz/" },
      { word: "we are",      translation: "nos somos / estamos",              phonetic: "/wi ar/" },
      { word: "they are",    translation: "eles/elas sao / estao",            phonetic: "/dhei ar/" },
      { word: "here",        translation: "aqui",                             phonetic: "/hier/" },
      { word: "home",        translation: "em casa",                          phonetic: "/houm/" },
      { word: "hungry",      translation: "com fome",                         phonetic: "/hangri/" },
      { word: "okay",        translation: "bem / tudo bem",                   phonetic: "/okei/" },
      { word: "your",        translation: "seu / sua",                        phonetic: "/yor/" },
      { word: "boss",        translation: "chefe",                            phonetic: "/bos/" },
      { word: "at school",   translation: "na escola",                        phonetic: "/at skul/" },
      { word: "at work",     translation: "no trabalho",                      phonetic: "/at werk/" },
      { word: "how are you", translation: "como voce esta?",                  phonetic: "/hau ar yu/" },
      { word: "thirty-nine", translation: "trinta e nove",                    phonetic: "/therti nain/" },
      { word: "isn't",       translation: "nao e / nao esta — contracao",     phonetic: "/iznt/" },
      { word: "aren't",      translation: "nao sao / nao estao — contracao",  phonetic: "/arnt/" },
      { word: "ain't",       translation: "negacao informal",                  phonetic: "/eint/" }
    ]
  }
];

var CW_ANSWERS = {};

function openDaily() {
  var overlay = document.getElementById("dailyOverlay");
  var body    = document.getElementById("dailyBody");
  var dateEl  = document.getElementById("dailyDate");
  dateEl.textContent = DAILY.date;

  if (PLAN !== "Fluency") {
    body.innerHTML = '<div class="daily-locked">'
      + '<span class="daily-lock-icon">🔒</span>'
      + '<h3>Conteudo Fluency</h3>'
      + '<p>O Daily Content e exclusivo para alunas do plano <strong>Fluency</strong>.</p>'
      + '<p>Fale com a Yas para fazer o upgrade! ✦</p>'
      + '</div>';
  } else {
    var html = '<div class="daily-text-wrap">'
      + '<h3 class="res-title">Texto de hoje</h3>'
      + '<div class="daily-text">' + DAILY.text + '</div>'
      + '</div><div class="daily-questions-wrap">'
      + '<h3 class="res-title" style="margin-top:24px">Exercicios</h3>'
      + '<div class="daily-questions">';
    DAILY.questions.forEach(function(q, qi) {
      html += '<div class="daily-q" id="q' + qi + '">'
        + '<p class="daily-q-text"><strong>' + (qi+1) + '.</strong> ' + q.question + '</p>'
        + '<div class="daily-options">';
      q.options.forEach(function(opt) {
        html += '<button class="daily-opt" id="q' + qi + '-' + opt.letter + '"'
          + ' onclick="checkAnswer(' + qi + ',\'' + opt.letter + '\',\'' + q.answer + '\')">'
          + '<span class="opt-letter">' + opt.letter + '</span>'
          + '<span class="opt-text">' + opt.text + '</span></button>';
      });
      html += '</div><p class="daily-feedback" id="feedback' + qi + '"></p></div>';
    });
    html += '</div><div class="daily-action-btns">'
      + '<button class="daily-reset-btn" onclick="openDaily()">Recomecar ↺</button>'
      + '<button class="daily-back-btn" onclick="closeDaily()">Voltar ao menu ←</button>'
      + '</div></div>';
    body.innerHTML = html;
  }
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function checkAnswer(qi, chosen, correct) {
  var opts = document.querySelectorAll("#q" + qi + " .daily-opt");
  opts.forEach(function(btn) { btn.disabled = true; });
  var chosenBtn  = document.getElementById("q" + qi + "-" + chosen);
  var correctBtn = document.getElementById("q" + qi + "-" + correct);
  var feedback   = document.getElementById("feedback" + qi);
  if (chosen === correct) {
    chosenBtn.classList.add("correct");
    feedback.textContent = "✦ Correct!";
    feedback.className = "daily-feedback feedback-correct";
  } else {
    chosenBtn.classList.add("wrong");
    correctBtn.classList.add("correct");
    feedback.textContent = "The correct answer is " + correct.toUpperCase() + ".";
    feedback.className = "daily-feedback feedback-wrong";
  }
}

function closeDaily() {
  document.getElementById("dailyOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("dailyOverlay").addEventListener("click", function(e) {
  if (e.target === this) closeDaily();
});

function speakWord(word, btn) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(word);
  u.lang = "en-US"; u.rate = 0.85;
  if (btn) {
    btn.classList.add("speaking");
    u.onend  = function() { btn.classList.remove("speaking"); };
    u.onerror = function() { btn.classList.remove("speaking"); };
  }
  window.speechSynthesis.speak(u);
}

function hasContent(arr) {
  return Array.isArray(arr) && arr.filter(function(i) { return i && i.label; }).length > 0;
}

function renderGrid() {
  var grid = document.getElementById("weeksGrid");
  var html = "";
  WEEKS.forEach(function(w, i) {
    var icons = "";
    if (hasContent(w.pdfs))        icons += '<span class="ricon ricon-pdf">P</span>';
    if (hasContent(w.audios))      icons += '<span class="ricon ricon-audio">A</span>';
    if (hasContent(w.exercises))   icons += '<span class="ricon ricon-exercise">E</span>';
    if (hasContent(w.links))       icons += '<span class="ricon ricon-link">L</span>';
    if (hasContent(w.videos))      icons += '<span class="ricon ricon-video">V</span>';
    if (w.vocabulary && w.vocabulary.length) icons += '<span class="ricon ricon-vocab">W</span>';
    html += '<article class="week-card" onclick="openModal(' + i + ')" tabindex="0">'
      + '<div class="card-head"><p class="card-number">Semana ' + w.number + '</p>'
      + '<h2 class="card-title">' + w.title + '</h2></div>'
      + '<div class="card-body"><div class="card-icons">' + icons + '</div>'
      + '<div class="card-cta"><span>Ver material</span><span class="card-cta-arrow">→</span></div>'
      + '</div></article>';
  });
  grid.innerHTML = html;
}

function openModal(index) {
  var w = WEEKS[index];
  document.getElementById("modalWeekLabel").textContent = "Semana " + w.number;
  document.getElementById("modalTitle").textContent     = w.title;
  document.getElementById("modalFocus").textContent     = w.focus || "";
  document.getElementById("modalBody").innerHTML =
    renderPdfs(w.pdfs) + renderExercises(w.exercises) + renderAudios(w.audios) +
    renderLinks(w.links) + renderVideos(w.videos) + renderNotes(w.notes) +
    renderClasswork(w.classwork) + renderVocabulary(w.vocabulary) +
    '<div class="yas-tip"><strong>Dica da YV</strong>Pratique todos os dias um pouco. Consistencia e o que te leva a fluencia. ✦</div>';
  document.getElementById("overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  document.getElementById("overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function renderPdfs(pdfs) {
  var items = (pdfs||[]).filter(function(p){return p.label;});
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">PDFs</h3><div class="res-list">';
  items.forEach(function(p) {
    html += '<div class="res-item"><span class="res-item-label">'+p.label+'</span>'
      +'<div class="res-actions"><a href="'+p.url+'" target="_blank" class="btn-open">Abrir ↗</a>'
      +'<a href="'+p.url+'" download class="btn-download">Baixar</a></div></div>';
  });
  return html+'</div></div>';
}

function renderExercises(exercises) {
  var items = (exercises||[]).filter(Boolean);
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Exercicios</h3><ul class="exercise-list">';
  items.forEach(function(e){html+='<li>'+e+'</li>';});
  return html+'</ul></div>';
}

function renderAudios(audios) {
  var items = (audios||[]).filter(function(a){return a.label;});
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Audios</h3><div class="res-list">';
  items.forEach(function(a) {
    if (a.url) {
      html += '<div class="res-item audio-item"><span class="res-item-label">'+a.label+'</span>'
        +'<audio controls preload="none"><source src="'+a.url+'"></audio></div>';
    } else {
      html += '<div class="res-item"><span class="res-item-label">'+a.label+'</span>'
        +'<span class="via-whatsapp">via WhatsApp</span></div>';
    }
  });
  return html+'</div></div>';
}

function renderLinks(links) {
  var items = (links||[]).filter(function(l){return l.label;});
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Links</h3><div class="res-list">';
  items.forEach(function(l) {
    html += '<div class="res-item"><span class="res-item-label">'+l.label+'</span>'
      +'<div class="res-actions"><a href="'+l.url+'" target="_blank" class="btn-open">Abrir ↗</a></div></div>';
  });
  return html+'</div></div>';
}

function renderVideos(videos) {
  var items = (videos||[]).filter(function(v){return v.label;});
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Videos</h3><div class="res-list">';
  items.forEach(function(v) {
    html += '<div class="res-item"><span class="res-item-label">'+v.label+'</span>'
      +'<div class="res-actions"><a href="'+v.url+'" target="_blank" class="btn-open">Assistir ↗</a></div></div>';
  });
  return html+'</div></div>';
}

function renderNotes(notes) {
  var items = (notes||[]).filter(Boolean);
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Notas da Aula</h3><ul class="notes-list">';
  items.forEach(function(n){html+='<li>'+n+'</li>';});
  return html+'</ul></div>';
}

function renderClasswork(classwork) {
  var sections = (classwork||[]).filter(function(s){return s.title;});
  if (!sections.length) return "";
  var html = "";
  sections.forEach(function(section, si) {
    html += '<div class="resource-section"><h3 class="res-title">'+section.title+'</h3>'
      +'<p class="classwork-instruction">'+section.instruction+'</p>'
      +'<div class="classwork-list">';
    section.items.forEach(function(item, ii) {
      var key = "cw_"+si+"_"+ii;
      CW_ANSWERS[key] = item.a;
      html += '<div class="classwork-item">'
        +'<p class="classwork-q"><strong>'+(ii+1)+'.</strong> '+item.q+'</p>'
        +'<button class="classwork-reveal-btn" onclick="revealAnswer(this,\''+key+'\')">Ver resposta</button>'
        +'<p class="classwork-answer" id="'+key+'" style="display:none"></p>'
        +'</div>';
    });
    html += '</div></div>';
  });
  return html;
}

function revealAnswer(btn, key) {
  var el = document.getElementById(key);
  if (el) { el.textContent = CW_ANSWERS[key]||""; el.style.display="block"; }
  btn.style.display="none";
}

function renderVocabulary(vocabulary) {
  var items = (vocabulary||[]).filter(function(v){return v.word;});
  if (!items.length) return "";
  window._vocabWords = [];
  var html = '<div class="resource-section"><h3 class="res-title">Vocabulario</h3><div class="vocab-grid">';
  items.forEach(function(v, i) {
    window._vocabWords[i] = v.word;
    html += '<div class="vocab-card" tabindex="0" onclick="this.classList.toggle(\'flipped\')">'
      +'<div class="vocab-front">'
      +'<button class="vocab-speak-btn" onclick="event.stopPropagation();speakVocab('+i+',this)" title="Ouvir">🔊</button>'
      +'<div class="vocab-front-inner"><span class="vocab-word">'+v.word+'</span>'
      +(v.phonetic?'<span class="vocab-phonetic">'+v.phonetic+'</span>':'')
      +'</div><span class="vocab-hint">toque para ver</span></div>'
      +'<div class="vocab-back"><span class="vocab-translation">'+v.translation+'</span></div>'
      +'</div>';
  });
  return html+'</div></div>';
}

function speakVocab(i,btn) {
  if (window._vocabWords&&window._vocabWords[i]) speakWord(window._vocabWords[i],btn);
}

function buildGlossaryHTML() {
  var all = [];
  WEEKS.forEach(function(w) {
    (w.vocabulary||[]).filter(function(v){return v.word;}).forEach(function(v) {
      all.push({word:v.word, translation:v.translation, phonetic:v.phonetic, week:w.number});
    });
  });
  if (!all.length) return '<p class="glossary-empty">O glossario vai aparecer aqui conforme as semanas forem avancando. ✦</p>';
  window._glossWords = [];
  var html = "";
  all.forEach(function(v, i) {
    window._glossWords[i] = v.word;
    html += '<div class="glossary-row">'
      +'<span class="glos-word">'+v.word+'</span>'
      +'<span class="glos-trans">'+v.translation
      +(v.phonetic?' <span class="glos-phonetic">'+v.phonetic+'</span>':'')
      +'</span>'
      +'<button class="glos-speak" onclick="speakGloss('+i+',this)" title="Ouvir">🔊</button>'
      +'<span class="glos-week-badge">Sem. '+v.week+'</span>'
      +'</div>';
  });
  return html;
}

function speakGloss(i,btn) {
  if (window._glossWords&&window._glossWords[i]) speakWord(window._glossWords[i],btn);
}

var glossaryOpen = false;
function toggleGlossary() {
  var section = document.getElementById("glossarySection");
  var cta = document.getElementById("glossaryBtnCta");
  if (!section) return;
  glossaryOpen = !glossaryOpen;
  if (glossaryOpen) {
    if (!section.innerHTML.trim()) section.innerHTML = buildGlossaryHTML();
    section.style.display = "block";
    if (cta) cta.textContent = "Fechar ↑";
    setTimeout(function(){section.scrollIntoView({behavior:"smooth",block:"start"});},80);
  } else {
    section.style.display = "none";
    if (cta) cta.textContent = "Ver palavras →";
  }
}

function renderGlossary() {}

document.getElementById("overlay").addEventListener("click", function(e) {
  if (e.target===this) closeModal();
});
document.addEventListener("keydown", function(e) {
  if (e.key==="Escape") closeModal();
});

var touchStartY = 0;
document.addEventListener("touchstart", function(e) {
  touchStartY = e.touches[0].clientY;
}, {passive:true});
document.addEventListener("touchmove", function(e) {
  if (document.getElementById("overlay").classList.contains("open")) {
    if (e.touches[0].clientY - touchStartY > 100) closeModal();
  }
}, {passive:true});

renderGrid();
renderGlossary();
