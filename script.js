let currentLang = 'korean';

// TÜM DİLLERİN AKILLI VERİTABANI
const langData = {
    korean: { name: "Korece (Hangeul)", popular: true, title: "Korece (Hangeul) Tarihçesi", history: "Hangeul, 1443 yılında Kral Sejong tarafından okuma-yazmayı kolaylaştırmak amacıyla icat edilen bilimsel ve mantıksal alfabedir.", letters: [{ char: "ㄱ", pronoun: "G / K", example: "가 (Ga)" }, { char: "ㄴ", pronoun: "N", example: "나 (Na)" }, { char: "ㅏ", pronoun: "A", example: "아 (A)" }] },
    gokturk: { name: "Göktürk Alfabesi", popular: true, title: "Göktürk Alfabesi Tarihçesi", history: "Türkçenin bilinen en eski yazılı alfabesidir (Orhun Yazıtları). Keskin ve düz çizgilerle tasarlanmıştır.", letters: [{ char: "𐰀", pronoun: "A / E", example: "𐰏 (Eg)" }, { char: "𐰁", pronoun: "B", example: "𐰋 (Eb)" }] },
    japanese: { name: "Japonca", popular: true, title: "Japonca (Hiragana & Katakana)", history: "Japon yazı sistemi Hiragana, Katakana hece alfabeleri ve Kanji karakterlerinden oluşur.", letters: [{ char: "あ", pronoun: "A", example: "あめ (Yağmur)" }, { char: "ア", pronoun: "A (Katakana)", example: "アイス" }] },
    chinese: { name: "Çince (Hanzi)", popular: false, title: "Çince (Hanzi & Pinyin)", history: "Harflerden değil, binlerce logografik karakterden oluşur.", letters: [{ char: "你", pronoun: "Nǐ", example: "Sen" }, { char: "好", pronoun: "Hǎo", example: "İyi" }] },
    cyrillic: { name: "Kiril Alfabesi (Rusça)", popular: false, title: "Kiril Alfabesi Tarihçesi", history: "9. yüzyılda Slav halkları için Yunan alfabesi temel alınarak geliştirilmiştir.", letters: [{ char: "А", pronoun: "A", example: "Анна" }, { char: "Б", pronoun: "B", example: "Брат" }] },
    ancientGreek: { name: "Antik Yunanca", popular: false, title: "Antik Yunanca Tarihçesi", history: "Felsefe, bilim ve mitolojinin dilidir. Klasik döneme damga vurmuştur.", letters: [{ char: "Ω", pronoun: "Omega", example: "Ωκεανός" }] },
    modernGreek: { name: "Modern Yunanca", popular: false, title: "Modern Yunanca Tarihçesi", history: "Günümüz Yunanistan'ının resmi dilidir.", letters: [{ char: "Α α", pronoun: "Alfa", example: "Αθήna" }] },
    portuguese: { name: "Portekizce", popular: false, title: "Portekizce Alfabesi", history: "Latin alfabesini kullanan zengin bir dünya dilidir.", letters: [{ char: "Ç ç", pronoun: "Se-cedilha", example: "Coração" }] },
    arabic: { name: "Arapça", popular: true, title: "Arapça Alfabesi", history: "Sağdan sola yazılan ve harfleri bağlantılı şekil değiştiren alfabe.", letters: [{ char: "ا", pronoun: "Elif", example: "أسد" }] },
    ukrainian: { name: "Ukraynaca", popular: false, title: "Ukraynaca Kiril", history: "İ, Ї, Є gibi kendine has özel Kiril harfleri barındırır.", letters: [{ char: "І і", pronoun: "İ", example: "Інформація" }] },
    belarusian: { name: "Beyaz Rusça", popular: false, title: "Beyaz Rusça Kiril", history: "Kısa 'Ў' harfiyle öne çıkan Kiril sürümüdür.", letters: [{ char: "Ў ў", pronoun: "Kısa U", example: "Возера" }] },
    bulgarian: { name: "Bulgarca", popular: false, title: "Bulgarca Tarihçesi", history: "Kiril alfabesinin doğduğu tarihi coğrafyanın dilidir.", letters: [{ char: "Ъ ъ", pronoun: "Er Golyam", example: "България" }] },
    serbian: { name: "Sırpça (Vuk Kiril)", popular: false, title: "Sırpça Kiril", history: "Tamamen fonetik 'okunduğu gibi yazılan' alfabedir.", letters: [{ char: "Љ љ", pronoun: "Ly", example: "Љубав" }] },
    macedonian: { name: "Makedonca", popular: false, title: "Makedonca Kiril", history: "Güney Slav Kiril alfabesi sürümüdür.", letters: [{ char: "Ѕ ѕ", pronoun: "Dz", example: "Ѕвезда" }] },
    kazakh: { name: "Kazakça", popular: false, title: "Kazakça Kiril", history: "Türkçe ses uyumlarına özel eklenmiş Kiril karakterleri içerir.", letters: [{ char: "Ә ә", pronoun: "Açık E", example: "Әке" }] },
    tatar: { name: "Tatarca", popular: false, title: "Tatarca Kiril", history: "İdil-Ural bölgesinde kullanılan Türk Kiril alfabesidir.", letters: [{ char: "Җ җ", pronoun: "C", example: "Җыр" }] },
    bashkir: { name: "Başkırca", popular: false, title: "Başkırca Kiril", history: "Peltik sesler içeren özel Kiril karakterlerine sahiptir.", letters: [{ char: "Ҙ ҙ", pronoun: "Peltik Z", example: "Ҡаҙ" }] },
    mongolian: { name: "Moğolca", popular: false, title: "Moğolca Kiril", history: "Moğolistan'da 1940'tan beri kullanılan Kiril sistemidir.", letters: [{ char: "Ө ө", pronoun: "Ö", example: "Өглөө" }] },
    abkhaz: { name: "Abhazca", popular: false, title: "Abhazca Kiril", history: "Zengin ses kümesi için 60'tan fazla Kiril karakter barındırır.", letters: [{ char: "Ҟ ҟ", pronoun: "Gırtlak K", example: "Ҟабз" }] },
    abaza: { name: "Abazaca", popular: false, title: "Abazaca Kiril", history: "Kafkas ünsüz zenginliğine sahip Kiril alfabesidir.", letters: [{ char: "Гъ гъ", pronoun: "Ğ", example: "Гъаза" }] },
    avar: { name: "Avarca", popular: false, title: "Avarca Kiril", history: "Gırtlak vurguları için Palochka (Ӏ) simgesi kullanan Kiril dili.", letters: [{ char: "Ӏ", pronoun: "Palochka", example: "ГӀаракь" }] }
};

// SAYFA İLK AÇILDIĞINDA SAYFALARI KESİN OLARAK AYIR
document.addEventListener("DOMContentLoaded", function() {
    showPage('page1');
});

// ARAMA ALANI ODAKLANINCA POPÜLER ARAMALARI GÖSTER
function handleSearchFocus() {
    const inputVal = document.getElementById('searchInput').value.trim();
    if(inputVal === "") {
        showPopularDropdown();
    } else {
        handleSearchInput();
    }
}

// HARF YAZILDIĞINDA KAPSAMLI VE ANINDA FİLTRELEME
function handleSearchInput() {
    const inputVal = document.getElementById('searchInput').value.trim().toLowerCase();
    const dropdown = document.getElementById('searchDropdown');
    const cards = document.querySelectorAll('.lang-card');

    if (inputVal === "") {
        showPopularDropdown();
        cards.forEach(card => card.style.display = 'block');
        return;
    }

    // Harf ile başlayan veya içeren dilleri filtrele ve alfabetik sırala
    const matchedKeys = Object.keys(langData).filter(key => {
        const langName = langData[key].name.toLowerCase();
        const langHistory = langData[key].history.toLowerCase();
        return langName.includes(inputVal) || langHistory.includes(inputVal);
    }).sort((a, b) => langData[a].name.localeCompare(langData[b].name, 'tr'));

    if (matchedKeys.length === 0) {
        dropdown.innerHTML = `<div class="dropdown-item" style="color: #94a3b8;">Sonuç bulunamadı</div>`;
        dropdown.style.display = 'block';
    } else {
        let html = `<div class="dropdown-header">Arama Sonuçları (${matchedKeys.length})</div>`;
        matchedKeys.forEach(key => {
            html += `<div class="dropdown-item" onclick="selectLangFromDropdown('${key}')">
                        <span>${langData[key].name}</span>
                        <span class="badge-tag">Seç</span>
                     </div>`;
        });
        dropdown.innerHTML = html;
        dropdown.style.display = 'block';
    }

    // Grid içerisindeki kartları anınında süz
    cards.forEach(card => {
        const cardKey = card.getAttribute('data-key');
        if (matchedKeys.includes(cardKey)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// POPÜLER ARAMALAR LİSTESİ
function showPopularDropdown() {
    const dropdown = document.getElementById('searchDropdown');
    let html = `<div class="dropdown-header">🔥 Popüler Aramalar</div>`;
    
    Object.keys(langData).filter(k => langData[k].popular).sort((a,b) => langData[a].name.localeCompare(langData[b].name, 'tr')).forEach(key => {
        html += `<div class="dropdown-item" onclick="selectLangFromDropdown('${key}')">
                    <span>${langData[key].name}</span>
                    <span class="badge-tag">Popüler</span>
                 </div>`;
    });

    dropdown.innerHTML = html;
    dropdown.style.display = 'block';
}

// DROPDOWN'DAN DİL SEÇME
function selectLangFromDropdown(langKey) {
    document.getElementById('searchInput').value = langData[langKey].name;
    document.getElementById('searchDropdown').style.display = 'none';
    
    const targetCard = document.querySelector(`.lang-card[data-key="${langKey}"]`);
    if (targetCard) {
        selectLang(targetCard, langKey);
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// DIŞARIYA TIKLANINCA DROPDOWN GİZLE
document.addEventListener('click', function(e) {
    const container = document.querySelector('.search-container');
    if (container && !container.contains(e.target)) {
        const dropdown = document.getElementById('searchDropdown');
        if(dropdown) dropdown.style.display = 'none';
    }
});

// ŞİFRE ÖNERİCİ
function suggestPassword() {
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    let baseText = fname ? fname : "Global";
    if (lname) baseText += lname.charAt(0).toUpperCase();

    baseText = baseText.replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g');
    const extraChars = ["Alpha", "Nova", "Star", "Code", "Web"];
    const randomExtra = extraChars[Math.floor(Math.random() * extraChars.length)];
    const randomNum = Math.floor(10 + Math.random() * 90);
    
    document.getElementById('pass').value = `${baseText.charAt(0).toUpperCase() + baseText.slice(1).toLowerCase()}_${randomExtra}${randomNum}!`;
    hideError('passError');
}

// SAYFA GEÇİŞ KONTROLLERİ
function validateAndProceed() {
    const fname = document.getElementById('fname').value.trim();
    const pass = document.getElementById('pass').value.trim();
    let isValid = true;

    if (!fname) { document.getElementById('nameError').style.display = 'block'; isValid = false; }
    if (!pass) { document.getElementById('passError').style.display = 'block'; isValid = false; }

    if (!isValid) return;

    showPage('page2');
}

function goToPage1() { showPage('page1'); }
function goToPage2() { showPage('page2'); }
function goToWorkspace() { renderWorkspace(); showPage('page3'); }

function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(p => {
        p.classList.remove('active');
        p.style.setProperty('display', 'none', 'important');
    });

    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');
    activePage.style.setProperty('display', 'flex', 'important');

    const navSteps = document.getElementById('navSteps');
    if (pageId === 'page1') {
        navSteps.style.display = 'none';
    } else {
        navSteps.style.display = 'flex';
        if (pageId === 'page2') {
            document.getElementById('step1-tag').classList.remove('active');
            document.getElementById('step2-tag').classList.add('active');
        }
    }

    window.scrollTo(0, 0);
}

function selectLang(cardElement, langKey) {
    document.querySelectorAll('.lang-card').forEach(c => c.classList.remove('selected'));
    cardElement.classList.add('selected');
    currentLang = langKey;
}

function renderWorkspace() {
    const data = langData[currentLang] || langData['korean'];
    document.getElementById('historyTitle').innerText = data.title;
    document.getElementById('historyText').innerText = data.history;
    
    const container = document.getElementById('lettersContainer');
    container.innerHTML = '';
    
    data.letters.forEach(item => {
        const card = document.createElement('div');
        card.style.cssText = "background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); padding: 15px; border-radius: 12px; text-align: center;";
        card.innerHTML = `
            <div style="font-size: 2.2rem; font-weight: bold; color: #ffffff; margin-bottom: 5px;">${item.char}</div>
            <div style="font-size: 0.85rem; color: #e9d5ff; margin-bottom: 3px;">Okunuş: ${item.pronoun}</div>
            <div style="font-size: 0.8rem; color: #cbd5e1; margin-bottom: 8px;">Örnek: ${item.example}</div>
        `;
        container.appendChild(card);
    });
}

function hideError(errorId) { document.getElementById(errorId).style.display = 'none'; }
