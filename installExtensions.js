const { execSync } = require('child_process');
const extensionCategories = require('./extensions');

const command = 'code --install-extension';

const categoryNames = Object.keys(extensionCategories);
categoryNames.forEach(category => {
    console.log(`Installing ${category}...`);

    const extensions = extensionCategories[category];

    extensions.forEach(extension => {
        console.log(`  -> ${extension}`);
        execSync(`${command} ${extension}`);
    });
});