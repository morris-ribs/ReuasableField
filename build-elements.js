const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/ReusableComponents/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/reusable-components.js');
})();