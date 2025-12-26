const fs = require('fs');
const path = require('path');
// Ensure a DOMMatrix implementation exists (pdfjs expects DOMMatrix in Node)
try {
  if (typeof globalThis.DOMMatrix === 'undefined') {
    const dommatrix = require('dommatrix');
    globalThis.DOMMatrix = dommatrix.DOMMatrix || dommatrix;
  }
} catch (e) {
  // If dommatrix isn't available, continue — import may still fail with a clear error.
}

(async () => {
  try {
    const publicDir = path.join(__dirname, '..', 'public');
    const filename = "Rayyan's portfolio (2).pdf";
    const filePath = path.join(publicDir, filename);

    if (!fs.existsSync(filePath)) {
      console.error('PDF not found at', filePath);
      process.exit(2);
    }

    const data = new Uint8Array(fs.readFileSync(filePath));
    // Dynamically import the legacy ESM build which works in Node when polyfills are present
    const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
    const getDocument = pdfjs.getDocument || (pdfjs.default && pdfjs.default.getDocument);
    if (!getDocument) throw new Error('pdfjs getDocument not found after import');
    const loadingTask = getDocument({ data });
    const pdf = await loadingTask.promise;

    let fullText = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map((item) => item.str);
      fullText += strings.join(' ') + '\n\n';
    }

    const outDir = path.join(__dirname, '..', 'tmp');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, 'portfolio_text_pdfjs.txt');
    fs.writeFileSync(outPath, fullText, 'utf8');

    console.log('Extracted text written to', outPath);
    console.log('--- Preview (first 2000 chars) ---');
    console.log(fullText.slice(0, 2000));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
