export async function exportPDF(elementId: string, fileName: string): Promise<void> {
  const { toPng } = await import("html-to-image");
  const { default: jsPDF } = await import("jspdf");

  const card = document.getElementById(elementId);
  if (!card) throw new Error(`Element #${elementId} not found`);

  const dataUrl = await toPng(card, {
    pixelRatio: 3,
    backgroundColor: "#FFFFFF",
    cacheBust: true,
  });

  // Wait for image to load to get dimensions
  const img = new Image();
  img.src = dataUrl;
  await new Promise<void>((resolve) => { img.onload = () => resolve(); });

  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const pageWidth = pdf.internal.pageSize.getWidth();   // 210mm
  const pageHeight = pdf.internal.pageSize.getHeight(); // 297mm

  // Card width = 90mm, maintain aspect ratio
  const cardW = 90;
  const cardH = (img.naturalHeight / img.naturalWidth) * cardW;

  const x = (pageWidth - cardW) / 2;
  const y = (pageHeight - cardH) / 2;

  // White background
  pdf.setFillColor(255, 255, 255);
  pdf.rect(0, 0, pageWidth, pageHeight, "F");

  pdf.addImage(dataUrl, "PNG", x, y, cardW, cardH);
  pdf.save(`${fileName}.pdf`);
}
