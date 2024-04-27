const element = document.body;
const options = {
    filename: 'Adrian_Reina_CV.pdf',
    html2canvas: {
        scale: 3 // Aumentar la escala
    },
    exclude: [
        '#downloadPdfBtn', // Excluir el botón de descarga del PDF
        '.switch' // Excluir el switch de modo oscuro
    ],
    pagebreak: { mode: 'avoid-all' }, // Evitar división de hojas
    jsPDF: {
        format: 'a4', // Establecer el formato del documento PDF
        orientation: 'portrait' // Establecer la orientación del documento
    }
};

const downloadBtn = document.getElementById('downloadPdfBtn');

downloadBtn.addEventListener('click', function() {
    html2pdf().from(element).set(options).save();
});
