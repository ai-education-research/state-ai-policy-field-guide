const fs=require('fs');
const data=fs.readFileSync('data.js','utf8').replace(/^const STATES = /,'').replace(/module\.exports = STATES;\s*$/,'').trim().replace(/;$/,'');
const paths=fs.readFileSync('paths.json','utf8');
let h=fs.readFileSync('template.html','utf8');
h=h.replace('__DATA__',data).replace('__PATHS__',paths);
fs.mkdirSync('./dist',{recursive:true});
fs.writeFileSync('./dist/state-ai-policy-field-map.html',h);
console.log('built', (h.length/1024).toFixed(0)+'KB');
