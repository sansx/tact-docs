const matter = require('gray-matter');
const fs = require('fs');
const path = require('path');
const process = require('process');

// Update metadata
let meta = {
    "index": "Evolution Process"
};
const cwd = process.cwd(); // current working directory of the process
const files = fs.readdirSync(cwd + '/pages/evolution');
for (let f of files) {
    if (f.endsWith('.mdx') && f.startsWith("OTP-")) {
        let name = f.substring(0, f.length - 4);
        let title = matter(fs.readFileSync(path.join(cwd, '/pages/evolution', f), 'utf8')).data.title;
        meta[name] = title;
    }
}

// Write metadata
fs.writeFileSync(path.join(cwd, '/pages/evolution/_meta.json'), JSON.stringify(meta, null, 4));