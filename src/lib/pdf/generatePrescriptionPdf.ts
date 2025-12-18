import { PDFDocument, StandardFonts } from "pdf-lib";

interface PrescriptionData {
  name: string;
  mobile: string;
  age?: number | string;
  address?: string;
  medicines: string;
  suggestion?: string;
  doseNotes?: string;
}

export async function generatePrescriptionPdf(data: PrescriptionData) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  let y = 800;
  const draw = (text: string, size = 12) => {
    page.drawText(text, { x: 50, y, size, font });
    y -= size + 8;
  };

  draw("MEDICAL PRESCRIPTION", 18);
  draw("--------------------------------");

  draw(`Patient Name: ${data.name}`);
  draw(`Mobile: ${data.mobile}`);
  draw(`Age: ${data.age || "N/A"}`);
  draw(`Address: ${data.address || "N/A"}`);
  draw("");

  draw("Medicines:");
  draw(data.medicines);
  draw("");

  draw(`Suggestions: ${data.suggestion || "N/A"}`);
  draw(`Dose Notes: ${data.doseNotes || "N/A"}`);

  return await pdfDoc.save();
}
