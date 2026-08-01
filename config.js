// Configuration Firebase de l'application Milybo DZ
const firebaseConfig = {
  apiKey: "AIzaSyAjq_MZZBniosiWUNcqi4XdRum5mUS7I84",
  authDomain: "milybo-969df.firebaseapp.com",
  projectId: "milybo-969df",
  storageBucket: "milybo-969df.firebasestorage.app",
  messagingSenderId: "35710826746",
  appId: "1:35710826746:web:dbcd7d7bfd45cceabdb143",
  measurementId: "G-TYJB6HB0PV"
};

// Export pour utilisation globale
window.firebaseConfig = firebaseConfig;
window.adminPassword = "admin2024bebechic";

// ── URL de base du site ───────────────────────────────────────
window.siteBaseUrl = "https://younes15-reda.github.io/Milybo";

// ── Notifications Telegram automatiques (CallMeBot Telegram API) ──
// ÉTAPE D'ACTIVATION TELEGRAM :
// 1. Ouvrez Telegram et cherchez le bot : @CallMeBot_txtbot
// 2. Cliquez sur START (/start). Le bot vous donnera votre Apikey et votre Username / Chat ID.
// 3. Remplissez ci-dessous votre username Telegram (ex: '@mon_pseudo') et votre apikey
window.telegramUser   = localStorage.getItem('telegramUser') || ''; // <-- Ex: '@mon_pseudo' ou '123456789'
window.telegramApiKey = localStorage.getItem('telegramApiKey') || ''; // <-- Ex: '9876543'
window.callmebotPhone = '213698578155'; // Numéro principal BABY HOUSE
window.shopPhone      = '213698578155';

// ── Notifications Email automatiques (EmailJS) ────────────────
// ÉTAPE D'ACTIVATION :
// 1. Créez un compte gratuit sur https://www.emailjs.com/
// 2. Connectez votre Gmail et créez un template d'email
// 3. Remplissez les 3 champs ci-dessous
window.emailjsServiceId  = ''; // <-- Ex: 'service_abc123'
window.emailjsTemplateId = ''; // <-- Ex: 'template_xyz789'
window.emailjsPublicKey  = ''; // <-- Ex: 'user_ABCDEFGHIJK'


