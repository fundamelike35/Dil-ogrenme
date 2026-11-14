// KARTLARI VE ARAMAYI ANINDA VE KUSURSUZ FİLTRELEME
function handleSearchInput() {
    const inputVal = document.getElementById('searchInput').value.trim().toLowerCase();
    const dropdown = document.getElementById('searchDropdown');
    const cards = document.querySelectorAll('.lang-card');

    if (inputVal === "") {
        showPopularDropdown();
        // Tüm kartları orijinal grid görünümüne döndür
        cards.forEach(card => card.style.display = '');
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

    // Grid içerisindeki kartları eşleşenlere göre göster/gizle
    cards.forEach(card => {
        const cardKey = card.getAttribute('data-key');
        if (matchedKeys.includes(cardKey)) {
            card.style.display = ''; // Grid düzenini koruyarak göster
        } else {
            card.style.display = 'none'; // Gizle
        }
    });
}
