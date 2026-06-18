export async function exportPNG(elementId: string, fileName: string): Promise<void> {
  const { toPng } = await import("html-to-image");

  const card = document.getElementById(elementId);
  if (!card) throw new Error(`Element #${elementId} not found`);

  const dataUrl = await toPng(card, {
    pixelRatio: 3,
    backgroundColor: "#FFFFFF",
    cacheBust: true,
  });

  const link = document.createElement("a");
  link.download = `${fileName}.png`;
  link.href = dataUrl;
  link.click();
}
