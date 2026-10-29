// Harf ve sayıları dinamik olarak karıştırarak akıllı şifre öneren fonksiyon
function suggestPassword() {
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const passInput = document.getElementById('pass');

    let baseText = fname ? fname : "Global";
    if (lname) {
        baseText += lname.charAt(0).toUpperCase();
    }

    // Türkçe karakter düzenlemesi
    baseText = baseText.replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g');
    
    // Ekstra rastgele harf ve eklemeler havuzu
    const extraChars = ["X", "K", "Z", "Net", "Pro", "Alpha", "2026"];
    const randomExtra = extraChars[Math.floor(Math.random() * extraChars.length)];
    const randomNum = Math.floor(10 + Math.random() * 90);
    
    // İsmi ve rastgele harf/sayıları birleştir
    const formattedName = baseText.charAt(0).toUpperCase() + baseText.slice(1).toLowerCase();
    const suggestedPass = `${formattedName}_${randomExtra}${randomNum}!`;
    
    passInput.value = suggestedPass;
}

// Boş bırakıldığında uyarı verme kontrolü
function validateAndProceed() {
    const fname = document.getElementById('fname').value.trim();
    const pass = document.getElementById('pass').value.trim();

    if (!fname || !pass) {
        alert("Lütfen burayı doldurun");
        return;
    }

    alert("Giriş Başarılı! 2. Sayfaya geçebiliriz.");
}
