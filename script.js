// Akıllı şifre önerici (harf ve sayı kombinasyonlu)
function suggestPassword() {
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const passInput = document.getElementById('pass');

    let baseText = fname ? fname : "Global";
    if (lname) {
        baseText += lname.charAt(0).toUpperCase();
    }

    baseText = baseText.replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g');
    
    const extraChars = ["Alpha", "Nova", "Star", "Code", "Web"];
    const randomExtra = extraChars[Math.floor(Math.random() * extraChars.length)];
    const randomNum = Math.floor(10 + Math.random() * 90);
    
    const formattedName = baseText.charAt(0).toUpperCase() + baseText.slice(1).toLowerCase();
    const suggestedPass = `${formattedName}_${randomExtra}${randomNum}!`;
    
    passInput.value = suggestedPass;
    hideError('passError');
}

// Alanlar boşsa ekranda uyarı gösterme
function validateAndProceed() {
    const fname = document.getElementById('fname').value.trim();
    const pass = document.getElementById('pass').value.trim();
    
    let isValid = true;

    if (!fname) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    if (!pass) {
        document.getElementById('passError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passError').style.display = 'none';
    }

    if (!isValid) return;

    alert("Giriş Başarılı! 2. Sayfaya geçebiliriz.");
}

// Yazı yazıldığında hatayı kaldırma
function hideError(errorId) {
    document.getElementById(errorId).style.display = 'none';
}
