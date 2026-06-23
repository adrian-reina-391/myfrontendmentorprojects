// Default to English if not set
if (!document.body.classList.contains('lang-es')) {
    document.body.classList.add('lang-en');
}

const langToggleBtn = document.getElementById('langToggleBtn');
const downloadBtnLink = document.querySelector('#downloadPdfBtn a');

// Define file paths
const pdfEnglish = "./assets/files/Adrian Reina's Resume.pdf";
const pdfSpanish = "./assets/files/Curriculum_de_Adrian_Reina.pdf";

function updateDownloadLink() {
    if (downloadBtnLink) {
        if (document.body.classList.contains('lang-es')) {
            downloadBtnLink.href = pdfSpanish;
            downloadBtnLink.download = "Curriculum_de_Adrian_Reina.pdf"; // Optional: force download name
        } else {
            downloadBtnLink.href = pdfEnglish;
            downloadBtnLink.download = "Adrian_Reina_Resume.pdf";
        }
    }
}

// Initialize link
updateDownloadLink();

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', function () {
        if (document.body.classList.contains('lang-en')) {
            document.body.classList.replace('lang-en', 'lang-es');
            langToggleBtn.textContent = 'EN';
        } else {
            document.body.classList.replace('lang-es', 'lang-en');
            langToggleBtn.textContent = 'ES';
        }
        updateDownloadLink();
    });
}


