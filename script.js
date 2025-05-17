function redirigir(pagina) {
  window.location.href = pagina;
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      alert("¡Gracias por contactarnos! Nos comunicaremos contigo pronto.");
      form.reset();
    });
  }
});


const translations = {
  recomendados: {
    es: {
      recomendadosTitle: "Animes Recomendados",
      anime0: "Una serie que trae emoción, aventuras, risas y batallas increíbles. Es una historia de superación personal, siendo aún el anime más famoso hasta la fecha. No te pierdas sus historias.",
      anime1: "Una serie cargada de aventuras y batallas épicas en un mundo medieval de magia y pecado. Sigue a Meliodas y su grupo de guerreros mientras enfrentan amenazas oscuras para proteger el reino de Liones.",
      anime2: "Una secuela que introduce nuevos héroes con poderes heredados, mientras enfrentan una profecía sombría que podría marcar el fin del mundo. Una historia de valentía y legado en expansión.",
      anime3: "Un thriller psicológico fascinante donde un estudiante obtiene el poder de matar con solo escribir un nombre. Una batalla intelectual entre el bien, el mal y la justicia retorcida.",
      anime4: "Una historia impactante de supervivencia en un mundo asediado por titanes. Intrigas políticas, traiciones y revelaciones cambian para siempre la lucha por la humanidad.",
      anime5: "Un anime explosivo que combina hechicería, combates espectaculares y una narrativa con profundidad emocional. Yuji Itadori enfrenta maldiciones para salvar vidas.",
      anime6: "Un viaje legendario de piratas en busca del tesoro más grande de todos. Personajes entrañables, mundos increíbles y un mensaje eterno de libertad.",
      anime7: "Una historia intensa sobre la lucha de Tanjiro contra demonios para salvar a su hermana. Animación de primer nivel, emociones profundas y combates memorables.",
      anime8: "En un mundo de superpoderes, un joven sin dones lucha por convertirse en el héroe número uno. Inspirador y cargado de acción y compañerismo.",
      anime9: "Una obra maestra de aventuras con tramas complejas, evolución constante de personajes y un enfoque único hacia los vínculos y desafíos humanos.",
      anime10: "Violento, caótico y emocionalmente crudo, este anime mezcla terror, humor y existencialismo a través de su carismático protagonista Denji.",
      anime11: "Un anime visualmente dinámico que combina lo sobrenatural con el crecimiento personal, explorando emociones humanas con mucho corazón y comedia.",
      anime12: "En un mundo de mazmorras y monstruos, Sung Jin-Woo, un cazador de bajo nivel, descubre un sistema secreto que le otorga un poder inimaginable. Su ascenso a la cima es una lucha épica contra criaturas aterradoras y enemigos poderosos, donde se convertirá en el único capaz de salvar a la humanidad.",
      anime13: "sigue las aventuras de Ichigo Kurosaki, un adolescente que obtiene los poderes de una Shinigami para proteger a su familia de los Hollows, espíritus malignos. Acompañado de sus amigos, Ichigo lucha contra poderosos enemigos en un mundo de acción y misterio, descubriendo secretos sobre su pasado y el destino de los mundos espirituales."
    },
    en: {
      recomendadosTitle: "Recommended Animes",
      anime0: "A series full of excitement, adventure, laughter, and epic battles. A story of personal growth and still the most famous anime today. Don't miss its adventures.",
      anime1: "An epic tale of adventure and battles in a medieval world of magic and sin. Meliodas and his knights fight dark forces to protect the kingdom of Liones.",
      anime2: "A sequel introducing new heroes with inherited powers, facing a grim prophecy that could bring about the end of the world. A story of courage and legacy.",
      anime3: "A fascinating psychological thriller where a student gains the power to kill by writing a name. A moral battle between good, evil, and justice.",
      anime4: "A gripping survival story in a world besieged by titans. Political schemes and revelations forever change humanity's fight.",
      anime5: "An explosive anime that mixes sorcery, intense battles, and emotional depth. Yuji Itadori fights curses to save lives.",
      anime6: "A legendary pirate journey in search of the greatest treasure of all. Heartwarming characters, amazing worlds, and a timeless message of freedom.",
      anime7: "An intense story about Tanjiro's fight against demons to save his sister. Top-tier animation, deep emotions, and memorable fights.",
      anime8: "In a world of superpowers, a powerless boy strives to become the number one hero. Inspiring and full of action and friendship.",
      anime9: "A masterpiece of adventure with complex plots, constant character growth, and a unique focus on bonds and challenges.",
      anime10: "Violent, chaotic, and emotionally raw, this anime blends horror, humor, and existentialism through its charismatic protagonist Denji.",
      anime11: "A visually dynamic anime blending supernatural themes with personal growth, exploring human emotions with heart and humor.",
      anime12: "In a world of dungeons and monsters, Sung Jin-Woo, a low-level hunter, discovers a secret system that grants him unimaginable power. His rise to the top is an epic struggle against terrifying creatures and powerful enemies, where he will become the only one capable of saving humanity.",
      anime13: "follows the adventures of Ichigo Kurosaki, a teenager who gains the powers of a Shinigami to protect his family from Hollows, evil spirits. Accompanied by his friends, Ichigo battles powerful enemies in a world of action and mystery, uncovering secrets about his past and the fate of the spirit worlds."
    },
    jp: {
      recomendadosTitle: "おすすめのアニメ",
      anime0: "感動、冒険、笑い、壮大な戦いが詰まったシリーズ。自己成長の物語であり、今でも最も有名なアニメです。見逃さないで。",
      anime1: "魔法と罪の中世世界での冒険と戦いの物語。メリオダスたちがリオネス王国を守るために闇の脅威と戦う。",
      anime2: "新たな力を継いだ英雄たちが世界の終焉を予言する運命に挑む続編。勇気と遺産の物語。",
      anime3: "名前を書くことで人を殺せる力を得た学生の心理スリラー。善と悪、正義の間の知的戦い。",
      anime4: "巨人に包囲された世界での衝撃的な生存物語。政治的陰謀や真実が人類の戦いを変える。",
      anime5: "呪術、激しい戦い、感情の深さを組み合わせた爆発的なアニメ。虎杖悠仁が命を救うために呪いと戦う。",
      anime6: "伝説の財宝を求めて旅する海賊たちの冒険。心温まるキャラクター、素晴らしい世界、そして自由の永遠のメッセージ。",
      anime7: "妹を救うために鬼と戦う炭治郎の激しい物語。最高のアニメーション、深い感情、記憶に残る戦い。",
      anime8: "超能力の世界で、無力な少年がナンバーワンヒーローを目指す。感動的で友情に満ちたアクション。",
      anime9: "複雑なプロット、キャラクターの成長、絆と課題に焦点を当てた冒険の傑作。",
      anime10: "暴力的で混沌とし、感情的に生々しいこのアニメは、カリスマ的な主人公デンジを通してホラー、ユーモア、実存主義を融合する。",
      anime11: "超常的なテーマと個人の成長を融合させたビジュアル的にダイナミックなアニメで、人間の感情を心とユーモアで探求する。",
      anime12: "ダンジョンとモンスターの世界で、低レベルのハンターであるソン・ジンウは、彼に想像を超える力を与える秘密のシステムを発見する。彼の頂点への上昇は、恐ろしいクリーチャーや強力な敵との壮大な闘争であり、彼は人類を救うことができる唯一の存在となる。",
      anime13: "家族を邪悪な霊である虚から守るために死神の力を得た少年、黒崎一護の冒険を追う。一護は友人たちとともに、アクションとミステリーの世界で強大な敵と戦い、自分の過去と霊界の運命に関する秘密を発見していきます。",
    },
  },
    menu: {
    es: ["Inicio", "Series", "Recomendados", "Contacto"],
    en: ["Home", "Series", "Recommended", "Contact"],
    jp: ["ホーム", "シリーズ", "おすすめ", "連絡先"]
  },
  home: {
    es: {
      topDelMes: "Top del Mes",
      title: "Bienvenido a Mundo Anime",
      darkModeToggle: "Modo Oscuro",
      text: "Explora tus series favoritas, descubre nuevos animes y sumérgete en un mundo lleno de emoción y aventura.",
      text2: "Esta pagina esta destinada a personas que les gusta el anime y quieran conocer los gustos de otras personas.",
      text3: "Y recomendar animes variados para la comunidad.",
      dragonball1: "Dragon ball es una serie que trae emoción, aventuras, risas y batallas increíbles.",
      dragonball2: "Es una historia de superación personal teniendo varias continuaciones.",
      dragonball3: "Siendo aún el anime más famoso hasta la fecha, no te pierdas sus historias.",
      onepiece1: "One Piece sigue rompiendo récords con su nueva saga.",
      onepiece2: "Además de sus increíbles personajes y nuevas habilidades.",
      onepiece3: "Es una serie que definitivamente no se pueden perder."
    },
    en: {
      topDelMes: "Top of the Month",
      title: "Welcome to Mundo Anime",
      darkModeToggle: "Dark mode",
      text: "Explore your favorite series, discover new anime, and dive into a world full of excitement and adventure.",
      text2: "This page is for people who like anime and want to know what other people like.",
      text3: "And recommend various anime for the community.",
      dragonball1: "Dragon Ball is a series full of excitement, adventure, laughter, and incredible battles.",
      dragonball2: "It's a story of personal growth with several continuations.",
      dragonball3: "Still the most famous anime to date don't miss its adventures.",
      onepiece1: "One Piece keeps breaking records with its new saga.",
      onepiece2: "It features amazing characters and new abilities.",
      onepiece3: "It's a series you definitely can't miss."
    },
    jp: {
      topDelMes: "今月のトップ",
      title: "ようこそMundo Animeへ",
      darkModeToggle: "ダークモード",
      text: "お気に入りのアニメを探し、新しいシリーズを見つけ、ワクワクの世界に飛び込もう。",
      text2: "このページはアニメが好きで、他の人が何を好むかを知りたい人のためのものです。",
      text3: "そしてコミュニティに様々なアニメを推薦します。",
      dragonball1: "ドラゴンボールは感動、冒険、笑い、壮大な戦いが詰まったシリーズです。",
      dragonball2: "いくつかの続編を持つ自己成長の物語です。",
      dragonball3: "今でも最も有名なアニメとして、その物語をお見逃しなく。",
      onepiece1: "ワンピースは新しいサガで記録を更新し続けています。",
      onepiece2: "素晴らしいキャラクターと新しい能力が登場します。",
      onepiece3: "絶対に見逃せないシリーズです。"
    }
  },
  contacto: {
     es: {
      contactoTitle: "Contáctanos",
      contactoText: "Déjanos tu mensaje y nos pondremos en contacto contigo pronto.",
      labelNombre: "Nombre:",
      labelEmail: "Correo electrónico:",
      labelMensaje: "Mensaje:",
      btnEnviar: "Enviar"
    },
      en: {
       contactoTitle: "Contact Us",
       contactoText: "Leave us your message and we will get back to you soon.",
       labelNombre: "Name:",
       labelEmail: "Email:",
       labelMensaje: "Message:",
       btnEnviar: "Send"
    },
     jp: {
      contactoTitle: "お問い合わせ",
      contactoText: "メッセージを残してください。すぐにご連絡いたします。",
      labelNombre: "名前：",
      labelEmail: "メールアドレス：",
      labelMensaje: "メッセージ：",
      btnEnviar: "送信"
    }
    },
    series: {
      es: {
        title: "Bienvenido a Mundo Anime",
        mensaje: "Descubre tus series favoritas, nuevos lanzamientos y más contenido otaku.",
        topAnimes: "Top 3 Animes Populares (Últimos 3 Meses)",
        anime1Title: "Demon Slayer: Kimetsu no Yaiba (Temporada de los Pilares)",
        anime1Desc1: "Con una animación impecable y una historia que sigue emocionando, esta temporada ha sido un éxito rotundo.",
        anime1Desc2: "El cambio de personalidad en Zenitsu Agasuma, uno de los personajes más tímidos que tuvo un gran cambio.",
        anime2Title: "Jujutsu Kaisen (Temporada 2)",
        anime2Desc1: "El arco de Shibuya ha mantenido a los fans al borde de sus asientos con batallas épicas y revelaciones impactantes.",
        anime2Desc2: "Tiene personajes muy carismáticos que te sacarán más de una sonrisa, habilidades increíbles y un desarrollo impactante.",
        anime3Title: "Frieren: Beyond Journey's End",
        anime3Desc1: "Un anime que mezcla fantasía y emociones profundas, conquistando rápidamente el corazón de la audiencia.",
      },
      en: {
        title: "Welcome to Mundo Anime",
        mensaje: "Discover your favorite series, new releases, and more otaku content.",
        topAnimes: "Top 3 Popular Animes (Last 3 Months)",
        anime1Title: "Demon Slayer: Kimetsu no Yaiba (Hashira Training Arc)",
        anime1Desc1: "With flawless animation and a story that keeps thrilling, this season has been a massive hit.",
        anime1Desc2: "Zenitsu Agatsuma shows a major personality shift, surprising fans with his transformation.",
        anime2Title: "Jujutsu Kaisen (Season 2)",
        anime2Desc1: "The Shibuya Arc has kept fans on edge with epic battles and shocking twists.",
        anime2Desc2: "It features charismatic characters, incredible powers, and an emotionally powerful story.",
        anime3Title: "Frieren: Beyond Journey's End",
        anime3Desc1: "An anime blending fantasy and deep emotion, it has quickly captured the audience's hearts.",
      },
      jp: {
        title: "ようこそMundo Animeへ",
        mensaje: "お気に入りのシリーズ、新作、そしてもっとオタクなコンテンツを見つけよう。",
        topAnimes: "人気アニメトップ3(過去3か月)",
        anime1Title: "鬼滅の刃（柱稽古編）",
        anime1Desc1: "完璧なアニメーションと心を動かすストーリーで、このシーズンは大成功となっています。",
        anime1Desc2: "我妻善逸の性格の変化は驚きで、臆病だった彼が大きな成長を見せています。",
        anime2Title: "呪術廻戦(第2期)",
        anime2Desc1: "渋谷事変編は壮絶な戦いと衝撃的な展開でファンを夢中にさせています。",
        anime2Desc2: "魅力的なキャラクターたち、素晴らしい能力、そして感動的なストーリーが詰まっています。",
        anime3Title: "葬送のフリーレン",
        anime3Desc1: "ファンタジーと深い感情が交差するアニメで、瞬く間に視聴者の心をつかみました。",
      }
    }
}
 

// SPA Navegación entre secciones
function redirigir(seccionId) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => sec.style.display = 'none');

  const target = document.getElementById(seccionId);
  if (target) target.style.display = 'block';

  // Reaplica idioma cada vez que se cambia de sección
  const lang = localStorage.getItem('selectedLanguage') || 'es';
  applyLanguage(lang);
}

// Evento para envío del formulario
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("¡Gracias por contactarnos! Nos comunicaremos contigo pronto.");
      form.reset();
    });
  }
});

// Traducciones y aplicación de idioma
function changeLanguage() {
  const lang = document.getElementById('language-selector').value;
  localStorage.setItem('selectedLanguage', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const applySection = (section, keys) => {
    if (!translations[section]?.[lang]) return;
    keys.forEach(key => {
      const el = document.getElementById(key);
      if (el && translations[section][lang][key]) {
        el.textContent = translations[section][lang][key];
      }
    });
  };

  const setTextById = (dict) => {
    for (const key in dict) {
      const el = document.getElementById(key);
      if (el) el.textContent = dict[key];
    }
  };

  // Menú
  const menuItems = document.querySelectorAll('.menu li a');
  if (menuItems.length === 4 && translations.menu?.[lang]) {
    menuItems.forEach((item, index) => {
      item.textContent = translations.menu[lang][index];
    });
  }

  // Home
  if (translations.home?.[lang]) setTextById(translations.home[lang]);

  // Contacto
  if (translations.contacto?.[lang]) setTextById(translations.contacto[lang]);

  // Series
  if (translations.series?.[lang]) setTextById(translations.series[lang]);

  // Recomendados
  if (translations.recomendados?.[lang]) setTextById(translations.recomendados[lang]);

  // Selector visual
  const selector = document.getElementById('language-selector');
  if (selector) selector.value = lang;
}

// Modo oscuro
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const elementsToToggle = [
    'nav', 'form', 'input[type="text"]', 'input[type="email"]',
    'textarea', '.menu li a', 'ul.recomendados li a', '#language-selector'
  ];

  const applyDarkMode = (enabled) => {
    if (enabled) {
      body.classList.add('dark-mode');
      elementsToToggle.forEach(sel =>
        document.querySelectorAll(sel).forEach(el => el.classList.add('dark-mode'))
      );
    } else {
      body.classList.remove('dark-mode');
      elementsToToggle.forEach(sel =>
        document.querySelectorAll(sel).forEach(el => el.classList.remove('dark-mode'))
      );
    }
  };

  const savedMode = localStorage.getItem('darkMode') === 'true';
  applyDarkMode(savedMode);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = body.classList.contains('dark-mode');
      applyDarkMode(!isDark);
      localStorage.setItem('darkMode', !isDark);
    });
  }

  // Aplicar idioma
  const savedLang = localStorage.getItem('selectedLanguage') || 'es';
  applyLanguage(savedLang);

  // Mostrar solo la sección inicial (inicio)
  redirigir('inicio');
});

// Partículas de fondo
document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("tsparticles", {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 80, density: { enable: true, area: 1000 } },
      color: { value: ["#ff6ec7", "#ffe600", "#00ffff", "#b388ff"] },
      shape: { type: ["circle", "star", "polygon"] },
      opacity: { value: 0.6, random: true },
      size: { value: { min: 1.5, max: 4 }, random: true },
      move: {
        enable: true, speed: { min: 0.5, max: 1.5 }, direction: "none",
        outModes: { default: "bounce" },
        parallax: { enable: true, force: 60, smooth: 10 }
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 90, duration: 0.4 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  });
});

// Música de fondo
const audio = document.getElementById("bg-music");
const toggleBtn = document.getElementById("toggle-music");
const musicSelector = document.getElementById("music-selector");

let isPlaying = localStorage.getItem("isPlaying") === "true";
let currentTrack = localStorage.getItem("currentTrack") || "music/music1.mp3";

audio.src = currentTrack;
musicSelector.value = currentTrack;

if (isPlaying) {
  audio.play();
  toggleBtn.textContent = "■ Silenciar";
} else {
  toggleBtn.textContent = "♫ Música";
}

toggleBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggleBtn.textContent = "■ Silenciar";
    localStorage.setItem("isPlaying", true);
  } else {
    audio.pause();
    toggleBtn.textContent = "♫ Música";
    localStorage.setItem("isPlaying", false);
  }
});

musicSelector.addEventListener("change", () => {
  const selected = musicSelector.value;
  audio.src = selected;
  localStorage.setItem("currentTrack", selected);
  audio.play();
  toggleBtn.textContent = "■ Silenciar";
  localStorage.setItem("isPlaying", true);
});
