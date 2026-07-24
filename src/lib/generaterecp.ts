import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { CarItem } from "@/types/car.types";

interface RecpData {
    items: CarItem[];
    totalPrice: number;
    customerName: string;
    customerEmail: string;
}

export function generateRecp({ items, totalPrice, customerName, customerEmail }: RecpData) {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.setTextColor(219, 39, 119); 
    doc.text("Postres App", 14, 20);

    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text("Factura de compra", 14, 28);

    const today = new Date().toLocaleDateString("es-ES");
    doc.text(`Fecha: ${today}`, 14, 34);
    doc.text(`Cliente: ${customerName}`, 14, 40);
    doc.text(`Correo: ${customerEmail}`, 14, 46);

    const tableRows = items.map((item) => [
    item.title,
    item.carQuantity.toString(),
    `$${item.price.toFixed(2)}`,
    `$${(item.price * item.carQuantity).toFixed(2)}`,
    ]);

    autoTable(doc, {
    startY: 54,
    head: [["Producto", "Cantidad", "Precio Unit.", "Subtotal"]],
    body: tableRows,
    headStyles: { fillColor: [219, 39, 119] },
    styles: { fontSize: 10 },
    });

    const finalY = (doc as any).lastAutoTable.finalY || 70;

    doc.setFontSize(13);
    doc.setTextColor(0);
    doc.text(`Total: $${totalPrice.toFixed(2)}`, 14, finalY + 10);

    doc.setFontSize(9);
    doc.setTextColor(150);
    doc.text("¡Gracias por tu compra en Postres App!", 14, finalY + 20);

    const fileName = `factura-postres-${Date.now()}.pdf`;
    doc.save(fileName);

    return fileName;
}