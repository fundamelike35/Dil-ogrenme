let currentLang = 'korean';
let learnedItems = [];
let progressPercent = 0;

const langData = {
    korean: {
        code: "KR", speechCode: "ko-KR", name: "Korece (Hangeul)", popular: true,
        desc: "1443'te tasarlanan bilimsel ve fonetik alfabe.",
        title: "Korece (Hangeul) Tarihçesi",
        history: "Hangeul, 1443 yılında Joseon Hanedanlığı'nın 4. kralı Kral Sejong tarafından halkın okuma-yazmayı kolayca öğrenebilmesi için bilimsel temellerle tasarlanmıştır.",
        subText: "Dilin ses ve ağız yapısına birebir uyum sağlayan benzersiz bir kökene sahiptir.",
        type: "Fonetik / Bilimsel Alfabe", direction: "Soldan Sağa (Yatay)",
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
        history: "Orhun Yazıtları'nda kullanılan Göktürk alfabesi, 38 harften oluşur ve sağdan sola doğru yazılır.",
        subText: "Taş ve ahşap üzerine kazımaya uygun köşeli ve keskin hatlı runik karakterler barındırır.",
        type: "Runik Kökenli Alfabe", direction: "Sağdan Sola (Dikey / Yatay)",
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
        history: "Japonca; Hiragana, Katakana hece alfabeleri ve Çin kökenli Kanji karakterlerinin birleşiminden oluşur.",
        subText: "Hece tabanlı iki ayrı alfabe ve binlerce logografik karakterin harmoni içinde kullanıldığı sistemdir.",
        type: "Karma Hece ve Logografik", direction: "Soldan Sağa / Yukarıdan Aşağıya",
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
        history: "Dünyanın kesintisiz olarak en uzun süredir kullanılan logografik yazı sistemidir.",
        subText: "Her karakter tek başına bir fikir veya kelime kökünü temsil eder.",
        type: "Logografik Karakterler", direction: "Yukarıdan Aşağıya / Soldan Sağa",
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
        history: "9. yüzyıldta Slav halkları için Yunan alfabesi temel alınarak geliştirilmiştir.",
        subText: "Doğu Avrupa ve Asya coğrafyasında pek çok dilin temelini oluşturan köklü sistemdir.",
        type: "Yunan Esaslı Fonetik", direction: "Soldan Sağa (Yatay)",
        letters: [
            { char: "А", pronoun: "A", word: "Анна" },
            { char: "Б", pronoun: "B", word: "Брат" },
            { char: "Д", pronoun: "D", word: "Дом" }
        ]
    },
    ancientGreek: {
        code: "GRC", speechCode: "el-GR", name: "Antik Yunanca", popular: false,
        desc: "Felsefe, bilim ve klasik dönem dili.",
        title: "Antik Yunanca Tarihçesi",
        history: "Fenike alfabesinden uyarlanarak sesli harflerin eklendiği ilk tam alfabetik sistemdir.",
        subText: "Batı felsefesinin ve biliminin temel metinlerinin kaleme alındığı tarihi dildir.",
        type: "Klasik Alfabe", direction: "Soldan Sağa (Yatay)",
        letters: [
            { char: "Α", pronoun: "Alfa", word: "Αρχή" },
            { char: "Ω", pronoun: "Omega", word: "Ωκεανός" }
        ]
    },
    modernGreek: {
        code: "EL", speechCode: "el-GR", name: "Modern Yunanca", popular: false,
        desc: "Günümüz Yunanistan'ının resmi dili.",
        title: "Modern Yunanca Tarihçesi",
        history: "Antik Yunancanın doğal evrimiyle günümüze ulaşan modern Avrupa dilidir.",
        subText: "24 harften oluşan günümüz Yunanistan resmi dilidir.",
        type: "Modern Fonetik", direction: "Soldan Sağa (Yatay)",
        letters: [
            { char: "Α", pronoun: "Alfa", word: "Αθήνα" },
            { char: "Β", pronoun: "Vita", word: "Βιβλίο" }
        ]
    },
    portuguese: {
        code: "PT", speechCode: "pt-PT", name: "Portekizce", popular: false,
        desc: "Geniş coğrafyaya yayılmış Latin kökenli dil.",
        title: "Portekizce Alfabesi",
        history: "Latin alfabesini temel alan ve özel aksan işaretleriyle zenginleştirilmiş dildir.",
        subText: "Avrupa ve Güney Amerika'da milyonlarca kişi tarafından konuşulan küresel dildir.",
        type: "Latin Esaslı", direction: "Soldan Sağa (Yatay)",
        letters: [
            { char: "Ç", pronoun: "Se-cedilha", word: "Coração" },
            { char: "Ã", pronoun: "Genizsi A", word: "Maçã" }
        ]
    },
    arabic: {
        code: "AR", speechCode: "ar-SA", name: "Arapça", popular: true,
        desc: "Sağdan sola yazılan köklü Sami alfabesi.",
        title: "Arapça Alfabesi Tarihçesi",
        history: "28 temel harften oluşan, sağdan sola doğru yazılan estetik yazı sistemidir.",
        subText: "Harflerin kelime içindeki konumlarına göre şekil değiştirdiği zengin hat sanatı geleneğine sahiptir.",
        type: "Sami Abced Sistemi", direction: "Sağdan Sola (Yatay)",
        letters: [
            { char: "ا", pronoun: "Elif", word: "أسد" },
            { char: "ب", pronoun: "Be", word: "باب" }
        ]
    },
    ukrainian: { code: "UK", speechCode: "uk-UA", name: "Ukraynaca", popular: false, desc: "Özel Kiril sürümü.", title: "Ukraynaca Tarihçesi", history: "Ukrayna'nın resmi dilidir.", subText: "İ, Ї ve Є karakterleriyle özelleşmiştir.", type: "Slav Kiril", direction: "Soldan Sağa", letters: [{ char: "Ї", pronoun: "Yi", word: "Україна" }] },
    belarusian: { code: "BE", speechCode: "be-BY", name: "Beyaz Rusça", popular: false, desc: "Kısa Ў harfli Kiril.", title: "Beyaz Rusça Tarihçesi", history: "Belarus'un resmi dilidir.", subText: "Ў harfiyle fonetik ayrışma gösterir.", type: "Slav Kiril", direction: "Soldan Sağa", letters: [{ char: "Ў", pronoun: "Kısa U", word: "Возера" }] },
    bulgarian: { code: "BG", speechCode: "bg-BG", name: "Bulgarca", popular: false, desc: "Tarihi Kiril dili.", title: "Bulgarca Tarihçesi", history: "Kiril alfabesinin doğduğu topraklarda gelişmiştir.", subText: "Zengin kökenli güney Slav dilidir.", type: "Slav Kiril", direction: "Soldan Sağa", letters: [{ char: "Ъ", pronoun: "Er Golyam", word: "България" }] },
    serbian: { code: "SR", speechCode: "sr-RS", name: "Sırpça", popular: false, desc: "Fonetik Kiril.", title: "Sırpça Tarihçesi", history: "Vuk Karadžić reformuyla şekillenmiştir.", subText: "Yazıldığı gibi okunan fonetik yapı.", type: "Fonetik Kiril", direction: "Soldan Sağa", letters: [{ char: "Љ", pronoun: "Ly", word: "Љубав" }] },
    macedonian: { code: "MK", speechCode: "mk-MK", name: "Makedonca", popular: false, desc: "Güney Slav Kiril.", title: "Makedonca Tarihçesi", history: "Makedonya'nın resmi dilidir.", subText: "31 harfli modern Slav alfabesidir.", type: "Slav Kiril", direction: "Soldan Sağa", letters: [{ char: "Ѕ", pronoun: "Dz", word: "Ѕвезда" }] },
    kazakh: { code: "KK", speechCode: "kk-KZ", name: "Kazakça", popular: false, desc: "Türkçe sesli Kiril.", title: "Kazakça Tarihçesi", history: "Türk ses uyumuna göre uyarlanmıştır.", subText: "Özel sesli harf eklemeleri barındırır.", type: "Türk Kiril Adaptasyonu", direction: "Soldan Sağa", letters: [{ char: "Ә", pronoun: "Açık E", word: "Әке" }] },
    tatar: { code: "TT", speechCode: "tt-RU", name: "Tatarca", popular: false, desc: "İdil-Ural Kiril dili.", title: "Tatarca Tarihçesi", history: "Tataristan coğrafyasında kullanılır.", subText: "İdil-Ural ses özelliklerini yansıtır.", type: "Türk Kiril", direction: "Soldan Sağa", letters: [{ char: "Җ", pronoun: "C", word: "Җыр" }] },
    bashkir: { code: "BA", speechCode: "ba-RU", name: "Başkırca", popular: false, desc: "Peltik sesli Kiril.", title: "Başkırca Tarihçesi", history: "Başkurdistan'ın resmi dilidir.", subText: "Peltik ses karakterleri içerir.", type: "Türk Kiril", direction: "Soldan Sağa", letters: [{ char: "Ҙ", pronoun: "Peltik Z", word: "Ҡаҙ" }] },
    mongolian: { code: "MN", speechCode: "mn-MN", name: "Moğolca", popular: false, desc: "Moğol Kiril dili.", title: "Moğolca Tarihçesi", history: "Moğolistan'da kullanılan sistemdir.", subText: "1940'tan beri Kiril tabanlıdır.", type: "Moğol Kiril", direction: "Soldan Sağa", letters: [{ char: "Ө", pronoun: "Ö", word: "Өглөө" }] },
    abkhaz: { code: "AB", speechCode: "ru-RU", name: "Abhazca", popular: false, desc: "Kafkas Kiril dili.", title: "Abhazca Tarihçesi", history: "Kafkas dil ailesine aittir.", subText: "Zengin ünsüz yapısına sahiptir.", type: "Kafkas Kiril", direction: "Soldan Sağa", letters: [{ char: "Ҟ", pronoun: "Gırtlak K", word: "Ҟабз" }] },
    abaza: { code: "ABQ", speechCode: "ru-RU", name: "Abazaca", popular: false, desc: "Kafkas ünsüz dili.", title: "Abazaca Tarihçesi", history: "Abazalar tarafından konuşulur.", subText: "Gırtlak vurguları yoğundur.", type: "Kafkas Kiril", direction: "Soldan Sağa", letters: [{ char: "Гъ", pronoun: "Ğ", word: "Гъаза" }] },
    avar: { code: "AV", speechCode: "ru-RU", name: "Avarca", popular: false, desc: "Dağıstan dili.", title: "Avarca Tarihçesi", history: "Dağıstan'ın köklü dillerindendir.", subText: "Özel lateral sesler barındırır.", type: "Kafkas Kiril", direction: "Soldan Sağa", letters: [{ char: "Ӏ", pronoun: "Palochka", word: "ГӀаракь" }] }
};

document.addEventListener("DOMContentLoaded", function() {
    renderLanguageGrid();
    showPage('page1');
});

function renderLanguageGrid() {
    const grid = document.getElementById('langGrid');
    if (!grid) return;
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

function handleSearchFocus() {
    const inputVal = document.getElementById('searchInput').value.trim();
    if (inputVal === "") {
        showPopularDropdown();
    } else {
        handleSearchInput();
    }
}

function handleSearchInput() {
    const rawVal = document.getElementById('searchInput').value.trim();
    const inputVal = rawVal.toLocaleLowerCase('tr');
    const dropdown = document.getElementById('searchDropdown');
    const cards = document.querySelectorAll('.lang-card');

    if (inputVal === "") {
        showPopularDropdown();
        cards.forEach(card => card.style.display = '');
        return;
    }

    const matchedKeys = Object.keys(langData).filter(key => {
        const item = langData[key];
        const nameLower = item.name.toLocaleLowerCase('tr');
        const codeLower = item.code.toLocaleLowerCase('tr');
        const descLower = item.desc.toLocaleLowerCase('tr');
        return nameLower.includes(inputVal) || codeLower.includes(inputVal) || descLower.includes(inputVal);
    }).sort((a, b) => {
        const nameA = langData[a].name.toLocaleLowerCase('tr');
        const nameB = langData[b].name.toLocaleLowerCase('tr');
        const aStarts = nameA.startsWith(inputVal) ? 0 : 1;
        const bStarts = nameB.startsWith(inputVal) ? 0 : 1;
        if (aStarts !== bStarts) return aStarts - bStarts;
        return langData[a].name.localeCompare(langData[b].name, 'tr');
    });

    if (matchedKeys.length === 0) {
        dropdown.innerHTML = `<div class="dropdown-item" style="color: #a1a1aa;">"${rawVal}" için sonuç bulunamadı</div>`;
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

function suggestPassword() {
    const fnameInput = document.getElementById('fname');
    let fname = fnameInput ? fnameInput.value.trim() : "Global";
    if (!fname) fname = "Global";
    
    const clean = fname.replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g');
    const num = Math.floor(100 + Math.random() * 900);
    
    const passField = document.getElementById('pass');
    if (passField) {
        passField.value = `${clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase()}_Script${num}!`;
    }
    hideError('passError');
}

function loginWithGoogle() {
    document.getElementById('fname').value = "Google Kullanıcısı";
    document.getElementById('pass').value = "GGL_SecureAuth99!";
    validateAndProceed();
}

function hideError(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
}

function validateAndProceed() {
    const fnameInput = document.getElementById('fname');
    const passInput = document.getElementById('pass');
    
    const fname = fnameInput ? fnameInput.value.trim() : "";
    const pass = passInput ? passInput.value.trim() : "";
    let valid = true;

    if (!fname) { 
        const err = document.getElementById('nameError');
        if (err) err.style.display = 'block'; 
        valid = false; 
    }
    if (!pass) { 
        const err = document.getElementById('passError');
        if (err) err.style.display = 'block'; 
        valid = false; 
    }
    if (!valid) return;

    const badge = document.getElementById('navUserBadge');
    const logoutBtn = document.getElementById('navLogoutBtn');
    if (badge) {
        badge.innerText = fname;
        badge.style.display = 'inline-block';
    }
    if (logoutBtn) {
        logoutBtn.style.display = 'inline-block';
    }

    showPage('page2');
}

function logoutToPage1() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('pass').value = '';
    showPage('page1');
}

function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) target.classList.add('active');

    const navSteps = document.getElementById('navSteps');
    const userBadge = document.getElementById('navUserBadge');
    const logoutBtn = document.getElementById('navLogoutBtn');
    
    if (pageId === 'page1') {
        document.body.classList.remove('dark-workspace');
        if (navSteps) navSteps.style.display = 'none';
        if (userBadge) userBadge.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'none';
    } else {
        document.body.classList.add('dark-workspace');
        if (navSteps) navSteps.style.display = 'flex';
        if (userBadge) userBadge.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
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
    const info = document.getElementById('selectedLangInfo');
    if (info) info.innerText = `Seçili Dil: ${langData[langKey].name}`;
}

function openHistoryPage() {
    const data = langData[currentLang];
    document.getElementById('historyCodeBadge').innerText = data.code;
    document.getElementById('historyHeaderTitle').innerText = `${data.name} Tarihçesi`;
    document.getElementById('historyTitle').innerText = data.title;
    document.getElementById('historyText').innerText = data.history;
    document.getElementById('historySubText').innerText = data.subText;
    document.getElementById('historyTypeInfo').innerText = data.type;
    document.getElementById('historyDirectionInfo').innerText = data.direction;
    showPage('page3');
}

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
            <div class="letter-pronoun">${i
