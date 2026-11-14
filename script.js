let currentLang = 'korean';
let learnedItems = [];
let progressPercent = 0;

// GENİŞLETİLMİŞ DİL VE ALFABE VERİTABANI (EMOJİSİZ, KOD ROZETLİ)
const langData = {
    korean: {
        code: "KR", speechCode: "ko-KR", name: "Korece (Hangeul)", popular: true,
        desc: "1443'te tasarlanan bilimsel ve fonetik alfabe.",
        title: "Korece (Hangeul) Tarihçesi",
        history: "Hangeul, 1443 yılında Joseon Hanedanlığı'nın 4. kralı Kral Sejong tarafından halkın okuma-yazmayı kolayca öğrenebilmesi için bilimsel temellerle tasarlanmıştır.",
        letters: [
            { char: "ㄱ", pronoun: "G / K", word: "가 (Ga)" },
            { char: "ㄴ", pronoun: "N", word: "나 (Na)" },
            { char: "ㄷ", pronoun: "D / T", word: "다 (Da)" },
            { char: "ㅏ", pronoun: "A", word: "아 (A)" }
        ]
    },
    gokturk: {
        code: "OTK", speechCode: "tr-TR", name: "Göktürk Alfabesi", popular: true,
        desc: "Türkçenin bilinen en eski yazılı alfabesi.",
        title: "Göktürk Alfabesi Tarihçesi",
        history: "Orhun Yazıtları'nda kullanılan Göktürk alfabesi, 38 harften oluşur ve sağdan sola doğru yazılır. Taş ve ahşap üzerine kazımaya uygun keskin hatlara sahiptir.",
        letters: [
            { char: "𐰀", pronoun: "A / E", word: "𐰏 (Eg)" },
            { char: "𐰁", pronoun: "B", word: "𐰋 (Eb)" },
            { char: "𐰉", pronoun: "Ba", word: "𐰉𐰺 (Bar)" }
        ]
    },
    japanese: {
        code: "JP", speechCode: "ja-JP", name: "Japonca", popular: true,
        desc: "Hiragana, Katakana ve Kanji yazı sistemi.",
        title: "Japonca Yazı Sistemi Tarihçesi",
        history: "Japonca; dilbilgisi ekleri için Hiragana, yabancı kelimeler için Katakana ve anlam bildiren Çin kökenli Kanji karakterlerinin birleşiminden oluşur.",
        letters: [
            { char: "あ", pronoun: "A", word: "あめ (Yağmur)" },
            { char: "い", pronoun: "İ", word: "いぬ (Köpek)" },
            { char: "う", pronoun: "U", word: "うみ (Deniz)" }
        ]
    },
    chinese: {
        code: "ZH", speechCode: "zh-CN", name: "Çince (Hanzi)", popular: false,
        desc: "Logografik karakter tabanlı köklü yazı sistemi.",
        title: "Çince (Hanzi) Tarihçesi",
        history: "Dünyanın kesintisiz olarak en uzun süredir kullanılan yazı sistemidir. Her karakter bir heceyi ve belirli bir anlamı temsil eder.",
        letters: [
            { char: "你", pronoun: "Nǐ", word: "Sen" },
            { char: "好", pronoun: "Hǎo", word: "İyi" },
            { char: "水", pronoun: "Shuǐ", word: "Su" }
        ]
    },
    cyrillic: {
        code: "RU", speechCode: "ru-RU", name: "Kiril Alfabesi (Rusça)", popular: false,
        desc: "Doğu Avrupa ve Avrasya'da yaygın alfabe.",
        title: "Kiril Alfabesi Tarihçesi",
        history: "9. yüzyılda Aziz Kiril ve Metodius'un öğrencileri tarafından Yunan alfabesi temel alınarak Slav dilleri için geliştirilmiştir.",
        letters: [
            { char: "А", pronoun: "A", word: "Анна (Anna)" },
            { char: "Б", pronoun: "B", word: "Брат (Kardeş)" },
            { char: "Д", pronoun: "D", word: "Дом (Ev)" }
        ]
    },
    ancientGreek: {
        code: "GRC", speechCode: "el-GR", name: "Antik Yunanca", popular: false,
        desc: "Felsefe, bilim ve klasik dönem dili.",
        title: "Antik Yunanca Tarihçesi",
        history: "Fenike alfabesinden uyarlanarak sesli harflerin eklendiği ilk tam alfabetik sistemdir. Felsefe ve bilimin temel metinleri bu alfabeyle yazılmıştır.",
        letters: [
            { char: "Α", pronoun: "Alfa", word: "Αρχή" },
            { char: "Ω", pronoun: "Omega", word: "Ωκεανός" },
            { char: "Φ", pronoun: "Fi", word: "Φιλοσοφία" }
        ]
    },
    modernGreek: {
        code: "EL", speechCode: "el-GR", name: "Modern Yunanca", popular: false,
        desc: "Günümüz Yunanistan'ının resmi dili.",
        title: "Modern Yunanca Tarihçesi",
        history: "Antik Yunancanın doğal evrimiyle günümüze ulaşan ve 24 harften oluşan modern Avrupa dilidir.",
        letters: [
            { char: "Α", pronoun: "Alfa", word: "Αθήνα" },
            { char: "Β", pronoun: "Vita", word: "Βιβλίο" },
            { char: "Γ", pronoun: "Gama", word: "Γάτα" }
        ]
    },
    portuguese: {
        code: "PT", speechCode: "pt-PT", name: "Portekizce", popular: false,
        desc: "Geniş coğrafyaya yayılmış Latin kökenli dil.",
        title: "Portekizce Alfabesi",
        history: "Latin alfabesini temel alan ve özel aksan işaretleriyle (ç, ã, õ) zenginleştirilmiş küresel bir dildir.",
        letters: [
            { char: "Ç", pronoun: "Se-cedilha", word: "Coração" },
            { char: "Ã", pronoun: "Genizsi A", word: "Maçã" },
            { char: "LH", pronoun: "Ly", word: "Filho" }
        ]
    },
    arabic: {
        code: "AR", speechCode: "ar-SA", name: "Arapça", popular: true,
        desc: "Sağdan sola yazılan köklü Sami alfabesi.",
        title: "Arapça Alfabesi Tarihçesi",
        history: "28 temel harften oluşan, sağdan sola doğru yazılan ve harflerin kelimenin başındaki, ortasındaki ve sonundaki konumuna göre şekil aldığı estetik yazı sistemidir.",
        letters: [
            { char: "ا", pronoun: "Elif", word: "أسد (Aslan)" },
            { char: "ب", pronoun: "Be", word: "باب (Kapı)" },
            { char: "س", pronoun: "Sin", word: "سلام (Selam)" }
        ]
    },
    ukrainian: {
        code: "UK", speechCode: "uk-UA", name: "Ukraynaca", popular: false,
        desc: "І, Ї, Є harfli özel Kiril sürümü.",
        title: "Ukraynaca Kiril Alfabesi",
        history: "Doğu Slav dillerine ait olup kendine özgü І, Ї ve Є harfleriyle diğer Kiril alfabelerinden ayrılır.",
        letters: [
            { char: "Ї", pronoun: "Yi", word: "Україна" },
            { char: "Є", pronoun: "Ye", word: "Європа" },
            { char: "Г", pronoun: "H", word: "Гора" }
        ]
    },
    belarusian: {
        code: "BE", speechCode: "be-BY", name: "Beyaz Rusça", popular: false,
        desc: "Kısa 'Ў' harfiyle tanınan Kiril dili.",
        title: "Beyaz Rusça Kiril Alfabesi",
        history: "Kiril alfabesi içerisinde yalnızca Beyaz Rusçada bulunan kısa 'Ў' harfiyle öne çıkan fonetik alfabedir.",
        letters: [
            { char: "Ў", pronoun: "Kısa U", word: "Возера" },
            { char: "І", pronoun: "İ", word: "Імя" }
        ]
    },
    bulgarian: {
        code: "BG", speechCode: "bg-BG", name: "Bulgarca", popular: false,
        desc: "Kiril alfabesinin doğduğu tarihi dil.",
        title: "Bulgarca Kiril Tarihçesi",
        history: "Birinci Bulgar İmparatorluğu döneminde Preslav Edebiyat Okulu'nda geliştirilen ilk Kiril sisteminin doğrudan mirasçısıdır.",
        letters: [
            { char: "Ъ", pronoun: "Er Golyam", word: "България" },
            { char: "Щ", pronoun: "Şt", word: "Щастие" }
        ]
    },
    serbian: {
        code: "SR", speechCode: "sr-RS", name: "Sırpça (Vuk Kiril)", popular: false,
        desc: "Tamamen fonetik Kiril alfabesi.",
        title: "Sırpça Kiril Alfabesi",
        history: "19. yüzyılda Vuk Karadžić tarafından 'Yazdığın gibi oku, okuduğun gibi yaz' ilkesiyle 30 harfe sadeleştirilmiştir.",
        letters: [
            { char: "Љ", pronoun: "Ly", word: "Љубав" },
            { char: "Њ", pronoun: "Ny", word: "Њујорк" }
        ]
    },
    macedonian: {
        code: "MK", speechCode: "mk-MK", name: "Makedonca", popular: false,
        desc: "Güney Slav Kiril alfabesi.",
        title: "Makedonca Kiril Alfabesi",
        history: "31 harften oluşan ve her sesin tek bir harfle karşılandığı modern Güney Slav Kiril alfabesidir.",
        letters: [
            { char: "Ѕ", pronoun: "Dz", word: "Ѕвезда" },
            { char: "Ѓ", pronoun: "Gy", word: "Ѓавол" }
        ]
    },
    kazakh: {
        code: "KK", speechCode: "kk-KZ", name: "Kazakça", popular: false,
        desc: "Türkçe sesli Kiril adaptasyonu.",
        title: "Kazakça Alfabesi Tarihçesi",
        history: "Türk dillerinin ses zenginliğini karşılamak amacıyla standart Kiril harflerine Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, Һ karakterlerinin eklendiği alfabedir.",
        letters: [
            { char: "Ә", pronoun: "Açık E", word: "Әке (Baba)" },
            { char: "Қ", pronoun: "Gırtlak K", word: "Қазақ" },
            { char: "Ұ", pronoun: "Kalın U", word: "Ұлт" }
        ]
    },
    tatar: {
        code: "TT", speechCode: "tt-RU", name: "Tatarca", popular: false,
        desc: "İdil-Ural bölgesinin Kiril dili.",
        title: "Tatarca Kiril Alfabesi",
        history: "İdil-Ural Türkçesinin ses yapısına uyarlanmış Ә, Ө, Ү, Җ, Ң, Һ harflerini içeren alfabedir.",
        letters: [
            { char: "Җ", pronoun: "C", word: "Җыр (Şarkı)" },
            { char: "Ң", pronoun: "Nazal N", word: "Таң (Şafak)" }
        ]
    },
    bashkir: {
        code: "BA", speechCode: "ba-RU", name: "Başkırca", popular: false,
        desc: "Peltik sesler içeren Kiril dili.",
        title: "Başkırca Kiril Alfabesi",
        history: "Başkurtçaya özgü peltik 'Ҫ' ve 'Ҙ' seslerini karşılayan özel harfleri barındıran Türk dili alfabesidir.",
        letters: [
            { char: "Ҙ", pronoun: "Peltik Z", word: "Ҡаҙ (Kaz)" },
            { char: "Ҫ", pronoun: "Peltik S", word: "Ҫәс (Saç)" }
        ]
    },
    mongolian: {
        code: "MN", speechCode: "mn-MN", name: "Moğolca", popular: false,
        desc: "1940'tan beri kullanılan Kiril dili.",
        title: "Moğolca Kiril Alfabesi",
        history: "Geleneksel dikey Moğol yazısının yanında 1940'lı yıllardan itibaren Ө ve Ү harflerinin eklenmesiyle kullanılan Kiril sistemidir.",
        letters: [
            { char: "Ө", pronoun: "Ö", word: "Өглөө (Sabah)" },
            { char: "Ү", pronoun: "Ü", word: "Үнэн (Gerçek)" }
        ]
    },
    abkhaz: {
        code: "AB", speechCode: "ru-RU", name: "Abhazca", popular: false,
        desc: "60+ zengin sesli Kafkas Kiril dili.",
        title: "Abhazca Kiril Alfabesi",
        history: "Kuzeybatı Kafkas dillerinin zengin ünsüz yapısını yansıtmak için 62 harf ve digraftan oluşan özel Kiril sistemidir.",
        letters: [
            { char: "Ҟ", pronoun: "Gırtlak K", word: "Ҟабз" },
            { char: "Ҩ", pronoun: "Labial", word: "Ҩны" }
        ]
    },
    abaza: {
        code: "ABQ", speechCode: "ru-RU", name: "Abazaca", popular: false,
        desc: "Kafkas alfabesi ve ünsüz zenginliği.",
        title: "Abazaca Kiril Alfabesi",
        history: "Abhazca ile akraba olan ve gırtlak vurguları için Palochka (Ӏ) işaretini yoğun kullanan Kafkas alfabesidir.",
        letters: [
            { char: "Гъ", pronoun: "Ğ", word: "Гъаза" },
            { char: "КӀ", pronoun: "Vurgulu K", word: "КӀа" }
        ]
    },
    avar: {
        code: "AV", speechCode: "ru-RU", name: "Avarca", popular: false,
        desc: "Dağıstan'ın gırtlak sesli Kiril dili.",
        title: "Avarca Kiril Alfabesi",
        history: "Kuzeydoğu Kafkas dillerinden Avarcanın gırtlak ve yan ünsüzlerini ifade etmek için Kiril alfabesinden uyarlanmıştır.",
        letters: [
            { char: "Ӏ", pronoun: "Palochka", word: "ГӀаракь" },
            { char: "Кь", pronoun: "Lateral K", word: "Кьуру" }
        ]
    }
};

// SAYFA YÜKLENİNCE KARTLARI OLUŞTUR VE 1. SAYFAYI AÇ
document.addEventListener("DOMContentLoaded", function() {
    renderLanguageGrid();
    showPage('page1');
});

// DİL KARTLARINI ALFABETİK OLARAK OLUŞTUR
function renderLanguageGrid() {
    const grid = document.getElementById('langGrid');
    grid.innerHTML = '';

    const sortedKeys = Object.keys(langData).sort((a, b) => 
        langData[a].name.localeCompare(langData[b].name, 'tr')
    );

    sortedKeys.forEach(key => {
        const lang = langData[key];
        const card = document.createElement('div');
        card.className = 'lang-card' + (key === currentLang ? ' selected' : '');
        card.setAttribute('data-key', key);
        card.onclick = function() { selectLang(card, key); };
        card.innerHTML = `
            <span class="mono-badge">${lang.code}</span>
            <h3>${lang.name}</h3>
            <p>${lang.desc}</p>
        `;
        grid.appendChild(card);
    });
}

// ARAMA ÇUBUĞUNA TIKLANINCA POPÜLER ARAMALARI GÖSTER
function handleSearchFocus() {
    const inputVal = document.getElementById('searchInput').value.trim();
    if (inputVal === "") {
        showPopularDropdown();
    } else {
        handleSearchInput();
    }
}

// HARF YAZILDIĞINDA ANINDA ALFABETİK SÜZME (GRİ KUTUCUK)
function handleSearchInput() {
    const inputVal = document.getElementById('searchInput').value.trim().toLocaleLowerCase('tr');
    const dropdown = document.getElementById('searchDropdown');
    const cards = document.querySelectorAll('.lang-card');

    if (inputVal === "") {
        showPopularDropdown();
        cards.forEach(card => card.style.display = '');
        return;
    }

    const matchedKeys = Object.keys(langData).filter(key => {
        const nameLower = langData[key].name.toLocaleLowerCase('tr');
        return nameLower.startsWith(inputVal) || nameLower.includes(inputVal);
    }).sort((a, b) => langData[a].name.localeCompare(langData[b].name, 'tr'));

    if (matchedKeys.length === 0) {
        dropdown.innerHTML = `<div class="dropdown-item" style="color: #a1a1aa;">Eşleşen dil bulunamadı</div>`;
        dropdown.style.display = 'block';
    } else {
        let html = `<div class="dropdown-header">Eşleşen Diller (${matchedKeys.length})</div>`;
        matchedKeys.forEach(key => {
            html += `
                <div class="dropdown-item" onclick="selectLangFromDropdown('${key}')">
                    <span>${langData[key].name}</span>
                    <span class="dropdown-code">${langData[key].code}</span>
                </div>`;
        });
        dropdown.innerHTML = html;
        dropdown.style.display = 'block';
    }

    cards.forEach(card => {
        const cardKey = card.getAttribute('data-key');
        card.style.display = matchedKeys.includes(cardKey) ? '' : 'none';
    });
}

function showPopularDropdown() {
    const dropdown = document.getElementById('searchDropdown');
    let html = `<div class="dropdown-header">Popüler Aramalar</div>`;

    Object.keys(langData)
        .filter(k => langData[k].popular)
        .sort((a, b) => langData[a].name.localeCompare(langData[b].name, 'tr'))
        .forEach(key => {
            html += `
                <div class="dropdown-item" onclick="selectLangFromDropdown('${key}')">
                    <span>${langData[key].name}</span>
                    <span class="dropdown-code">${langData[key].code}</span>
                </div>`;
        });

    dropdown.innerHTML = html;
    dropdown.style.display = 'block';
}

function selectLangFromDropdown(langKey) {
    document.getElementById('searchInput').value = langData[langKey].name;
    document.getElementById('searchDropdown').style.display = 'none';

    const targetCard = document.querySelector(`.lang-card[data-key="${langKey}"]`);
    if (targetCard) {
        document.querySelectorAll('.lang-card').forEach(c => c.style.display = '');
        selectLang(targetCard, langKey);
    }
}

document.addEventListener('click', function(e) {
    const container = document.querySelector('.search-container');
    if (container && !container.contains(e.target)) {
        const dropdown = document.getElementById('searchDropdown');
        if (dropdown) dropdown.style.display = 'none';
    }
});

// ŞİFRE ÖNERİCİ VE GİRİŞ DOĞRULAMA
function suggestPassword() {
    const fname = document.getElementById('fname').value.trim() || "Global";
    const clean = fname.replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g');
    const num = Math.floor(100 + Math.random() * 900);
    document.getElementById('pass').value = `${clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase()}_Script${num}!`;
    hideError('passError');
}

function hideError(id) {
    document.getElementById(id).style.display = 'none';
}

function validateAndProceed() {
    const fname = document.getElementById('fname').value.trim();
    const pass = document.getElementById('pass').value.trim();
    let valid = true;

    if (!fname) { document.getElementById('nameError').style.display = 'block'; valid = false; }
    if (!pass) { document.getElementById('passError').style.display = 'block'; valid = false; }
    if (!valid) return;

    const badge = document.getElementById('navUserBadge');
    badge.innerText = fname;
    badge.style.display = 'inline-block';

    showPage('page2');
}

// SAYFA GEÇİŞLERİ
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    const navSteps = document.getElementById('navSteps');
    if (pageId === 'page1') {
        navSteps.style.display = 'none';
        document.getElementById('navUserBadge').style.display = 'none';
    } else {
        navSteps.style.display = 'flex';
        document.querySelectorAll('.step-tag').forEach(t => t.classList.remove('active'));
        if (pageId === 'page2') document.getElementById('step-lang').classList.add('active');
        if (pageId === 'page3') document.getElementById('step-history').classList.add('active');
        if (pageId === 'page4') document.getElementById('step-class').classList.add('active');
    }
    window.scrollTo(0, 0);
}

function selectLang(cardElement, langKey) {
    document.querySelectorAll('.lang-card').forEach(c => c.classList.remove('selected'));
    cardElement.classList.add('selected');
    currentLang = langKey;
    document.getElementById('selectedLangInfo').innerText = `Seçili Dil: ${langData[langKey].name}`;
}

// TARİHÇE SAYFASINI AÇ
function openHistoryPage() {
    const data = langData[currentLang];
    document.getElementById('historyCodeBadge').innerText = data.code;
    document.getElementById('historyTitle').innerText = data.title;
    document.getElementById('historyText').innerText = data.history;
    showPage('page3');
}

// DERSLİK SAYFASINI AÇ VE SESLİ HARF + ALIŞTIRMAYI HAZIRLA
function openClassroom() {
    const data = langData[currentLang];
    document.getElementById('classCodeBadge').innerText = data.code;
    document.getElementById('classTitle').innerText = `${data.name} Dersliği`;

    const container = document.getElementById('lettersContainer');
    container.innerHTML = '';

    data.letters.forEach(item => {
        const card = document.createElement('div');
        card.className = 'letter-card';
        card.onclick = function() {
            speakCharacter(item.char, data.speechCode);
            markItemLearned(item.char, item.pronoun);
        };
        card.innerHTML = `
            <div class="letter-char">${item.char}</div>
            <div class="letter-pronoun">${item.pronoun}</div>
            <div class="letter-speak-hint">Dinle ve Öğren</div>
        `;
        container.appendChild(card);
    });

    loadQuizQuestion();
    showPage('page4');
}

// SESLİ HARF SİMÜLASYONU (SPEECHSYNTHESIS API)
function speakCharacter(text, langCode) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCode;
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}

// ÖĞRENİLEN KELİME SAYACI VE DAİRESEL İLERLEME HALKASI
function markItemLearned(char, pronoun) {
    const label = `${char} (${pronoun})`;
    if (!learnedItems.includes(label)) {
        learnedItems.push(label);
        updateProgressUI(15);
    }
}

function updateProgressUI(increment) {
    progressPercent = Math.min(100, progressPercent + increment);

    // Dairesel Halka Güncellemesi
    const ring = document.getElementById('circularProgress');
    const deg = (progressPercent / 100) * 360;
    ring.style.background = `conic-gradient(#a855f7 ${deg}deg, #271042 
