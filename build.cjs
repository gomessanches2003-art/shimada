const fs = require('node:fs');
const path = require('node:path');
const output = path.join(__dirname, 'dist');
const files = ['index.html', 'styles.css', 'visual.css', 'app.js', 'experience.js', 'visual.js', 'config.js'];
fs.mkdirSync(output, { recursive: true });
for (const file of files) fs.copyFileSync(path.join(__dirname, file), path.join(output, file));
console.log(`Site estatico preparado em dist: ${files.length} arquivos.`);
