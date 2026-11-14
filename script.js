* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

html, body {
    width: 100%;
    min-height: 100vh;
    background-color: #1a0033 !important;
    color: #ffffff;
    overflow-x: hidden; /* Sağa sola kayıp donmayı önler */
    position: relative;
}

body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 20% 20%, #4a154b 0%, transparent 40%),
        radial-gradient(circle at 80% 30%, #6b1175 0%, transparent 45%),
        radial-gradient(circle at 50% 70%, #2b004f 0%, transparent 50%),
        radial-gradient(circle at 10% 85%, #801399 0%, transparent 35%);
    pointer-events: none;
    z-index: 0;
}

body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 2;
}

.bg-floating-words {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
}

.word {
    position: absolute;
    font-family: 'Caveat', cursive;
    font-size: 4.5rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.12) !important;
    user-select: none;
}

.w1 { top: 10%; left: 5%; transform: rotate(-14deg); }
.w2 { top: 18%; right: 8%; transform: rotate(16deg); }
.w3 { bottom: 15%; left: 8%; transform: rotate(-8deg); }
.w4 { bottom: 10%; right: 12%; transform: rotate(10deg); }
.w5 { top: 45%; left: 35%; transform: rotate(-20deg); }
.w6 { top: 50%; right: 30%; transform: rotate(22deg); }
.w7 { top: 25%; left: 45%; transform: rotate(5deg); }
.w8 { bottom: 40%; left: 20%; transform: rotate(-15deg); }

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px;
    background: linear-gradient(135deg, 
        rgba(90, 24, 154, 0.85) 0%,    
        rgba(3, 105, 161, 0.75) 50%,   
        rgba(5, 150, 105, 0.65) 100%   
    ) !important;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.1rem;
    color: #ffffff;
    font-weight: 600;
}

.logo-text strong {
    color: #6ee7b7;
}

.nav-steps {
    display: flex;
    gap: 10px;
}

.step-tag {
    background: rgba(255, 255, 255, 0.1);
    padding: 5px 10px;
    border-radius: 6px;
    font-size: 0.75rem;
    color: #cbd5e1;
}

.step-tag.active {
    background: rgba(16, 185, 129, 0.3);
    color: #6ee7b7;
    font-weight: 600;
    border: 1px solid rgba(110, 231, 183, 0.4);
}

.nav-right {
    display: flex;
    gap: 8px;
}

.nav-btn {
    background: rgba(255, 255, 255, 0.18);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #ffffff;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 0.8rem;
    cursor: pointer;
}

.profile-btn {
    background: rgba(16, 185, 129, 0.35);
    border-color: rgba(52, 211, 153, 0.6);
    color: #ecfdf5;
}

/* SAYFA GEÇİŞ SİSTEMİ */
.page-section {
    display: none !important;
    width: 100%;
}

.page-section.active {
    display: flex !important;
    justify-content: center;
    align-items: center;
}

.main-container {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 100px 15px 40px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 85vh;
}

.login-card, .content-card {
    width: 100%;
    max-width: 700px;
    background: rgba(43, 0, 79, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.4);
}

.login-card {
    max-width: 400px;
}

.welcome-title {
    font-family: 'Caveat', cursive;
    font-size: 3.5rem;
    font-weight: 700;
    color: #ffffff !important;
    line-height: 1;
    margin-bottom: 6px;
}

.subtitle {
    color: #e9d5ff;
    font-size: 0.88rem;
    margin-bottom: 22px;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;
}

.input-group label {
    font-size: 0.8rem;
    color: #ffffff;
    font-weight: 500;
}

.input-group input {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: 10px 14px;
    border-radius: 8px;
    color: #ffffff;
    font-size: 0.9rem;
    outline: none;
}

.label-with-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.suggest-btn {
    font-size: 0.75rem;
    color: #c77dff;
    cursor: pointer;
    font-weight: 600;
}

.error-msg {
    display: none;
    font-size: 0.72rem;
    color: #ff8fa3;
    margin-top: 2px;
}

.btn-primary {
    width: 100%;
    background: linear-gradient(135deg, #7b2cbf 0%, #5a189a 100%);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    margin-top: 8px;
}

/* ARAMA VE DROPDOWN */
.search-container {
    position: relative;
    margin-bottom: 20px;
}

.search-box {
    position: relative;
}

.search-box input {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: 12px 14px 12px 40px;
    border-radius: 10px;
    color: #ffffff;
    outline: none;
    font-size: 0.9rem;
}

.search-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
}

.search-dropdown {
    display: none;
    position: absolute;
    top: 105%;
    left: 0;
    width: 100%;
    background: rgba(30, 20, 50, 0.98);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.6);
    z-index: 50;
    max-height: 200px;
    overflow-y: auto;
    padding: 6px 0;
}

.dropdown-header {
    padding: 6px 14px;
    font-size: 0.7rem;
    color: #a78bfa;
    font-weight: 600;
    text-transform: uppercase;
}

.dropdown-item {
    padding: 8px 14px;
    color: #e2e8f0;
    font-size: 0.85rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dropdown-item:hover {
    background: rgba(123, 44, 191, 0.5);
    color: #ffffff;
}

.dropdown-item .badge-tag {
    font-size: 0.7rem;
    background: rgba(255,255,255,0.1);
    padding: 2px 6px;
    border-radius: 4px;
    color: #cbd5e1;
}

/* DİL KARTLARI GRID */
.lang-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    max-height: 320px;
    overflow-y: auto;
    padding-right: 4px;
}

@media(min-width: 768px) {
    .lang-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.lang-card {
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 12px;
    border-radius: 12px;
    cursor: pointer;
    text-align: left;
}

.lang-card:hover {
    background: rgba(255, 255, 255, 0.12);
}

.lang-card.selected {
    background: rgba(123, 44, 191, 0.6);
    border-color: #e0aaff;
}

.lang-flag { font-size: 1.5rem; margin-bottom: 6px; }
.lang-card h3 { font-size: 0.95rem; color: #ffffff; margin-bottom: 2px; }
.lang-card p { font-size: 0.72rem; color: #cbd5e1; }

.history-card {
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 15px;
    border-radius: 14px;
    text-align: left;
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.85rem;
        }
                          
