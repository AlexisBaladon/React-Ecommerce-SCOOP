import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
const pdf = require('./scoop-pdf.pdf');

const createPDF = async (setlink: (pdf: Uint8Array) => any) => {
    fetch(pdf).then(responsePDF => {
        responsePDF.arrayBuffer().then(async responseAB => {
            const pdfDoc = PDFDocument.load(responseAB);
            const pages = (await pdfDoc).getPages()
            const firstPage = pages[0];
            const { width, height } = firstPage.getSize();
            const helveticaFont = await (await pdfDoc).embedFont(StandardFonts.Helvetica)
            console.log(firstPage)
            firstPage.drawText('This text was added with JavaScript!', {
                x: 5,
                y: height / 2 + 300,
                size: 50,
                font: helveticaFont,
                color: rgb(0.95, 0.1, 0.1),
                rotate: degrees(-45),
              })
            const pdfBytes = await (await pdfDoc).save();
            setlink(pdfBytes);
        })

    });
}

export default createPDF;