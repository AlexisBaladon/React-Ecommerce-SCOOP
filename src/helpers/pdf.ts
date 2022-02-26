import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import Order from '../dataTypes/purchase/order';
const pdf = require('./scoop-pdf.pdf');

const setMetadata = (pdfDoc: PDFDocument) => {
  pdfDoc.setTitle('🍦 Scoop')
  pdfDoc.setAuthor('Alexis Baladón')
  pdfDoc.setSubject('Recibo de heladería')
  pdfDoc.setKeywords(['ice', 'cream', 'icecream', 'scoop', 'react', 'Alexis Baladón'])
  pdfDoc.setCreationDate(new Date());
}

const createPDF = async (ord: Order, setlink: (pdf: Uint8Array) => any) => {
    fetch(pdf).then(responsePDF => {
        responsePDF.arrayBuffer().then(async responseAB => {
            const pdfDoc = PDFDocument.load(responseAB);
            const pages = (await pdfDoc).getPages()
            const firstPage = pages[0];
            const { height } = firstPage.getSize();
            const helveticaFont = await (await pdfDoc).embedFont(StandardFonts.Helvetica)
            //Auxiliar function
            setMetadata(await pdfDoc);

            //Order destructuring
            const [buyer, items, purchaseInfo] = [ord.buyer, ord.items, ord.purchaseInfo];
            
            //Left side
            //Email
            firstPage.drawText(buyer.email, {
                x: 75,
                y: height / 2 + 260,
                size: 6,
                font: helveticaFont,
                color: rgb(0, 0, 0),
              })
            //Date
            firstPage.drawText(purchaseInfo.date.toString().split('GMT')[0], {
                x: 75,
                y: height / 2 + 190,
                size: 6,
                font: helveticaFont,
                color: rgb(0, 0, 0),
              })

            //City
            firstPage.drawText(purchaseInfo.city, {
                x: 75,
                y: height / 2 + 135,
                size: 6,
                font: helveticaFont,
                color: rgb(0, 0, 0),
              })

            //Postal code
            firstPage.drawText(purchaseInfo.postalCode.toString(), {
                x: 75,
                y: height / 2 + 80,
                size: 6,
                font: helveticaFont,
                color: rgb(0, 0, 0),
              })

            //Phone
            firstPage.drawText(purchaseInfo.phoneNumber.toString(), {
                x: 75,
                y: height / 2 + 30,
                size: 6,
                font: helveticaFont,
                color: rgb(0, 0, 0),
              })

            //Center side
            items.forEach((it, i) => {
              if (i < 25) { //Page overflow
                //Title
                firstPage.drawText(it.title, {
                    x: 180,
                    y: height / 2 - i*17.5 + 252.5,
                    size: 7,
                    font: helveticaFont,
                    color: rgb(0, 0, 0),
                  })

                //Price
                firstPage.drawText((it.price*it.amount).toString() + "US$", {
                  x: 443.5,
                  y: height / 2 - i*17.5 + 252.5,
                  size: 8,
                  font: helveticaFont,
                  color: rgb(0.858, 0.419, 0.592),
                })

                //amount
                firstPage.drawText(it.amount.toString(), {
                  x: 515,
                  y: height / 2 - i*17.5 + 252.5,
                  size: 8,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                })
              }
              else if (i === 25) {
                firstPage.drawText('Cantidad máxima de productos excedida. Para consultar todos sus productos contáctese con Scoop', {
                  x: 180,
                  y: height / 2 - i*17.5 + 252.5,
                  size: 8,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                })
              }
            })

            //Bottom side
            //Total price
            let totalPrice = 0;
            items.forEach(it => totalPrice += it.price*it.amount);
            firstPage.drawText(totalPrice.toString() +"US$", {
              x: 460,
              y: height / 2 - 202,
              size: 8,
              font: helveticaFont,
              color: rgb(0.858, 0.419, 0.592),
            })

            //Total amount
            let totalAmount = 0;
            items.forEach(it => totalAmount += it.amount);
            firstPage.drawText(totalAmount.toString(), {
              x: 515,
              y: height / 2 - 202,
              size: 8,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })

            const pdfBytes = await (await pdfDoc).save();
            setlink(pdfBytes);
        })

    });
}

export default createPDF;