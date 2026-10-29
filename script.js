let currentLang = 'korean';

// Dillerin Veritabanı
const langData = {
    korean: {
        title: "Korece (Hangeul) Tarihçesi",
        history: "Hangeul, 1443 yılında Joseon Hanedanlığı'nın 4. kralı olan Kral Sejong tarafından tasarlanmıştır. Halkın Çince karakterleri öğrenmekte zorlanması üzerine, okuma-yazmayı kolaylaştırmak amacıyla icat edilen bilimsel ve mantıksal bir alfabedir.",
        letters: [
            { char: "ㄱ", pronoun: "G / K", example: "가 (Ga - Git)" },
            { char: "ㄴ", pronoun: "N", example: "나 (Na - Ben)" },
            { char: "ㄷ", pronoun: "D / T", example: "다 (Da - Hepsi)" },
            { char: "ㄹ", pronoun: "R / L", example: "라 (Ra)" },
            { char: "ㅏ", pronoun: "A", example: "아 (A)" },
            { char: "ㅓ", pronoun: "EO (Açık O)", example: "어 (Eo)" }
        ]
    },
    gokturk: {
        title: "Göktürk Alfabesi Tarihçesi",
        history: "Türkçenin bilinen en eski yazılı metinleri olan Orhun Yazıtları'nda kullanılan alfabedir. 38 harften oluşur. Taşlara kazınmaya uygun olacak şekilde keskin ve düz çizgilerle tasarlanmıştır. Sağdan sola yazılır.",
        letters: [
            { char: "𐰀", pronoun: "A / E", example: "𐰏 (Eg)" },
            { char: "𐰁", pronoun: "B (Ince)", example: "𐰋 (Eb)" },
            { char: "𐰓", pronoun: "D (Ince)", example: "𐰓 (Ed)" },
            { char: "𐰺", pronoun: "R (Kalin)", example: "𐰺 (Ar)" }
        ]
    },
    japanese: {
        title: "Japonca (Hiragana) Tarihçesi",
        history: "Hiragana, Heian döneminde Çin karakterlerinin (Kanji) basitleştirilmesiyle geliştirilmiştir. Başlangıçta saray kadınları tarafından edebiyatta yaygın kullanıldığı için 'kadın yazısı' olarak da anılmıştır.",
        letters: [
            { char: "あ", pronoun: "A", example: "あめ (Ame - Yağmur)" },
            { char: "い", pronoun: "I", example: "いぬ (Inu - Köpek)" },
            { char: "う", pronoun: "U", example: "うみ (Umi - Deniz)" },
            { char: "え", pronoun: "E", example: "えき (Eki - İstasyon)" }
        ]
    },
    cyrillic: {
        title: "Kiril Alfabesi Tarihçesi",
        history: "9. yüzyılda Bizanslı din adamları Aziz Kiril ve Methodios'un öğrencileri tarafından Doğu Slav halklarının Hristiyanlığı öğrenmesini kolaylaştırmak amacıyla Yunan alfabesi temel alınarak geliştirilmiştir.",
        letters: [
            { char: "А", pronoun: "A", example: "Анна (Anna)" },
            { char: "Б", pronoun: "B", example: "Брат (Brat - Kardeş)" },
            { char: "В", pronoun: "V", example: "Вода (Voda - Su)" },
            { char: "Г", pronoun: "G", example: "Город (Gorod - Şehir)" }
        ]
    }
};

// Sayfa Geçiş Fonksiyonları
function goToPage1() {
    showPage('page1', 'step1-tag');
}

function goToPage2() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    
    if(fname && lname) {
        document.getElementById('displayName').innerText = `${fname} ${lname}`;
        document.getElementById('userBadge').style.display = 'block';
    }
    
    showPage('page2', 'step2-tag');
}

function goToPage3() {
    renderWorkspace();
    showPage('page3', 'step3-tag');
}

function showPage(pageId, tagId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.step-tag').forEach(t => t.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    document.getElementById(tagId).classList.add('active');
}

// Dil Seçim Fonksiyonu
function selectLang(cardElement, langKey) {
    document.querySelectorAll('.lang-card').forEach(c => c.classList.remove('selected'));
    cardElement.classList.add('selected');
    currentLang = langKey;
}

// Canlı Arama Filtresi
function filterLanguages() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.lang-card');
    
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if(text.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Çalışma Alanını Doldurma
function renderWorkspace() {
    const data = langData[currentLang];
    document.getElementById('historyTitle').innerText = data.title;
    document.getElementById('historyText').innerText = data.history;
    
    const container = document.getElementById('lettersContainer');
    container.innerHTML = '';
    
    data.letters.forEach(item => {
        const card = document.createElement('div');
        card.className = 'letter-card';
        card.innerHTML = `
            <div class="char">${item.char}</div>
            <div class="pronoun">Okunuş: ${item.pronoun}</div>
            <div class="example">Örnek: ${item.example}</div>
            <div class="learned-box">
                <input type="checkbox"> Öğrendim
            </div>
        `;
        container.appendChild(card);
    });
                  }
