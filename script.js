// Global Hata Koruma Mekanizması
window.onerror = function (msg, url, lineNo) {
    console.warn("Global Hata Yakalandı: ", msg, "Satır: ", lineNo);
    return true;
};

document.addEventListener('DOMContentLoaded', function () {
    try {
        const loginForm = document.getElementById('loginForm');
        const fnameInput = document.getElementById('fname');
        const lnameInput = document.getElementById('lname');
        const passInput = document.getElementById('pass');
        const nameError = document.getElementById('nameError');
        const passError = document.getElementById('passError');
        const suggestPassBtn = document.getElementById('suggestPassBtn');
        const togglePassBtn = document.getElementById('togglePassBtn');
        const eyeIcon = document.getElementById('eyeIcon');
        
        const googleLoginBtn = document.getElementById('googleLoginBtn');
        const googleModal = document.getElementById('googleModal');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const accountList = document.getElementById('accountList');
        const toggleNewAccBtn = document.getElementById('toggleNewAccBtn');
        const newAccountForm = document.getElementById('newAccountForm');
        const addNewAccSubmitBtn = document.getElementById('addNewAccSubmitBtn');

        const EYE_OPEN_PATH = '<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>';
        const EYE_CLOSED_PATH = '<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2z"/>';

        // 1. Dinamik Validasyon Temizleme
        if (fnameInput && nameError) {
            fnameInput.addEventListener('input', function () {
                nameError.style.display = 'none';
            });
        }

        if (passInput && passError) {
            passInput.addEventListener('input', function () {
                passError.style.display = 'none';
            });
        }

        // 2. Göz Simgesi (Şifre Göster / Gizle)
        if (togglePassBtn && passInput && eyeIcon) {
            togglePassBtn.addEventListener('click', function () {
                if (passInput.type === 'password') {
                    passInput.type = 'text';
                    eyeIcon.innerHTML = EYE_OPEN_PATH;
                } else {
                    passInput.type = 'password';
                    eyeIcon.innerHTML = EYE_CLOSED_PATH;
                }
            });
        }

        // 3. Akıllı Şifre Önerici
        if (suggestPassBtn && fnameInput && passInput && eyeIcon) {
            suggestPassBtn.addEventListener('click', function () {
                let fname = fnameInput.value ? fnameInput.value.trim() : "Global";
                if (!fname) fname = "Global";
                
                const clean = fname
                    .replace(/ı/g, 'i').replace(/İ/g, 'I')
                    .replace(/ö/g, 'o').replace(/Ö/g, 'O')
                    .replace(/ü/g, 'u').replace(/Ü/g, 'U')
                    .replace(/ş/g, 's').replace(/Ş/g, 'S')
                    .replace(/ç/g, 'c').replace(/Ç/g, 'C')
                    .replace(/ğ/g, 'g').replace(/Ğ/g, 'G');
                
                const num = Math.floor(100 + Math.random() * 900);
                passInput.value = `${clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase()}_Script${num}!`;
                passInput.type = 'text';
                eyeIcon.innerHTML = EYE_OPEN_PATH;
                if (passError) passError.style.display = 'none';
            });
        }

        // 4. Form Validasyonu (Uyarılar)
        if (loginForm && fnameInput && passInput) {
            loginForm.addEventListener('submit', function (e) {
                e.preventDefault();
                let isValid = true;

                if (!fnameInput.value || !fnameInput.value.trim()) {
                    if (nameError) nameError.style.display = 'block';
                    isValid = false;
                } else {
                    if (nameError) nameError.style.display = 'none';
                }

                if (!passInput.value || !passInput.value.trim()) {
                    if (passError) passError.style.display = 'block';
                    isValid = false;
                } else {
                    if (passError) passError.style.display = 'none';
                }

                if (isValid) {
                    alert("Başarılı! Hoş geldin " + fnameInput.value.trim() + ", giriş yapılıyor...");
                }
            });
        }

        // 5. Google Modal Yönetimi ve Hesap Seçimi
        function selectAccount(name, surname, email) {
            if (fnameInput) fnameInput.value = name || "";
            if (lnameInput) lnameInput.value = surname || "";
            if (passInput) {
                passInput.value = "GoogleAuth_" + Math.floor(1000 + Math.random() * 9000) + "!";
                passInput.type = 'text';
            }
            if (eyeIcon) eyeIcon.innerHTML = EYE_OPEN_PATH;
            
            if (nameError) nameError.style.display = 'none';
            if (passError) passError.style.display = 'none';
            if (googleModal) googleModal.style.display = 'none';
            if (newAccountForm) newAccountForm.style.display = 'none';
            
            alert(name + " " + surname + " (" + email + ") hesabı ile başarıyla giriş yapıldı!");
        }

        if (googleLoginBtn && googleModal) {
            googleLoginBtn.addEventListener('click', function () {
                googleModal.style.display = 'flex';
            });
        }

        if (closeModalBtn && googleModal && newAccountForm) {
            closeModalBtn.addEventListener('click', function () {
                googleModal.style.display = 'none';
                newAccountForm.style.display = 'none';
            });
        }

        if (accountList) {
            accountList.addEventListener('click', function (e) {
                const item = e.target.closest('.account-item');
                if (item) {
                    const name = item.getAttribute('data-name');
                    const surname = item.getAttribute('data-surname');
                    const email = item.getAttribute('data-email');
                    selectAccount(name, surname, email);
                }
            });
        }

        if (toggleNewAccBtn && newAccountForm) {
            toggleNewAccBtn.addEventListener('click', function () {
                newAccountForm.style.display = newAccountForm.style.display === 'block' ? 'none' : 'block';
            });
        }

        if (addNewAccSubmitBtn && accountList) {
            addNewAccSubmitBtn.addEventListener('click', function () {
                const newNameEl = document.getElementById('newFirstName');
                const newSurnameEl = document.getElementById('newLastName');
                const newEmailEl = document.getElementById('newEmail');

                const newName = newNameEl ? newNameEl.value.trim() : "";
                const newSurname = newSurnameEl ? newSurnameEl.value.trim() : "";
                const newEmail = newEmailEl ? newEmailEl.value.trim() : "";

                if (!newName || !newEmail) {
                    alert("Lütfen adınızı ve e-posta adresinizi girin.");
                    return;
                }

                const newDiv = document.createElement('div');
                newDiv.className = 'account-item';
                newDiv.setAttribute('data-name', newName);
                newDiv.setAttribute('data-surname', newSurname);
                newDiv.setAttribute('data-email', newEmail);
                newDiv.innerHTML = `
                    <div class="account-avatar">${newName.charAt(0).toUpperCase()}</div>
                    <div class="account-info">
                        <div class="name">${newName} ${newSurname}</div>
                        <div class="email">${newEmail}</div>
                    </div>
                `;
                accountList.appendChild(newDiv);

                if (newNameEl) newNameEl.value = '';
                if (newSurnameEl) newSurnameEl.value = '';
                if (newEmailEl) newEmailEl.value = '';

                selectAccount(newName, newSurname, newEmail);
            });
        }

    } catch (initErr) {
        console.error("Uygulama başlatılırken kritik hata yakalandı:", initErr);
    }
});
