const element = document.body;
        const options = {
            filename: 'Adrian_Reina_CV.pdf',
            html2canvas: {
                scale: 2
            },
            exclude: [
                '#downloadPdfBtn', // Excluir el botón de descarga del PDF
                '.switch' // Excluir el switch de modo oscuro
            ]
        };

        const downloadBtn = document.getElementById('downloadPdfBtn');

        downloadBtn.addEventListener('click', function() {
            html2pdf().from(element).set(options).save();
        });

        