// Girilen isim ve soyisme göre akıllı şifre oluşturma
function suggestPassword() {
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const passInput = document.getElementById('pass');

    let baseName = fname ? fname : "Global";
    if (lname) {
        baseName += lname.charAt(0).toUpperCase();
    }

    // Türkçe karakterleri temizle ve güvenli harfe çevir
    baseName = baseName.replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g');
    
    // Rastgele 3 haneli sayı + özel simge
    const randomNum = Math.floor(100 + Math.random() * 900);
    const symbols = ["!", "*", "@", "#"];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

    const suggestedPass = baseName.charAt(0).toUpperCase() + baseName.slice(1).toLowerCase() + randomNum + randomSymbol;
    
    passInput.value = suggestedPass;
}

function goToPage2() {
    alert("1. Sayfa Tasarımı Başarıyla Onaylandı! 2. Sayfaya Geçebiliriz.");
}
