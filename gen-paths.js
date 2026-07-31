const fs=require('fs'), topojson=require('topojson-client'), simplify=require('topojson-simplify');
let topo=JSON.parse(fs.readFileSync('node_modules/us-atlas/states-albers-10m.json','utf8'));
topo=simplify.presimplify(topo);
topo=simplify.simplify(topo,3);
const fc=topojson.feature(topo,topo.objects.states);
const skip=new Set(['Puerto Rico','United States Virgin Islands','Guam','American Samoa','Commonwealth of the Northern Mariana Islands']);
let minX=1e9,minY=1e9,maxX=-1e9,maxY=-1e9;
function ring(r){
  if(r.length<4) return '';
  return 'M'+r.map(p=>{
    if(p[0]<minX)minX=p[0]; if(p[0]>maxX)maxX=p[0];
    if(p[1]<minY)minY=p[1]; if(p[1]>maxY)maxY=p[1];
    return p[0].toFixed(1)+','+p[1].toFixed(1);
  }).join('L')+'Z';
}
function toPath(g){
  if(g.type==='Polygon') return g.coordinates.map(ring).join('');
  if(g.type==='MultiPolygon') return g.coordinates.map(p=>p.map(ring).join('')).join('');
  return '';
}
const out={};
for(const f of fc.features){
  const n=f.properties.name; if(skip.has(n)) continue;
  const p=toPath(f.geometry); if(p) out[n]=p;
}
fs.writeFileSync('paths.json',JSON.stringify(out));
console.log('states:',Object.keys(out).length);
console.log('bbox X:',minX.toFixed(1),'to',maxX.toFixed(1));
console.log('bbox Y:',minY.toFixed(1),'to',maxY.toFixed(1));
console.log('size:',(fs.statSync('paths.json').size/1024).toFixed(1)+'KB');
const bad=Object.entries(out).filter(([k,v])=>v.length<40);
console.log('suspiciously short paths:',bad.map(b=>b[0]));
