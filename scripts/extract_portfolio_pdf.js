const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

(async () => {
  try {
    const publicDir = path.join(__dirname, '..', 'public');
    const filename = "Rayyan's portfolio (2).pdf";
    const filePath = path.join(publicDir, filename);

    if (!fs.existsSync(filePath)) {
      console.error('PDF not found at', filePath);
      process.exit(2);
    }

    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);

    const outDir = path.join(__dirname, '..', 'tmp');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, 'portfolio_text.txt');
    fs.writeFileSync(outPath, data.text, 'utf8');

    console.log('Extracted text written to', outPath);
    console.log('--- Preview (first 1000 chars) ---');
    console.log(data.text.slice(0, 1000));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
