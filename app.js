/* ── EJ Editor — app.js ── */

const STORE_KEY = 'ej-editor-v5';

const defaultVanilla = () => ([
  { id: 'f1', name: 'index.html', ext: 'html', content: `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello, EJ!</h1>\n  <p>Edit the code and hit Run.</p>\n  <button onclick="greet()">Click me</button>\n</body>\n</html>` },
  { id: 'f2', name: 'style.css',  ext: 'css',  content: `body {\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n  background: #f0f4ff;\n}\nh1 { color: #2563eb; font-size: 2rem; margin-bottom: .5rem; }\np  { color: #555; margin-bottom: 1.5rem; }\nbutton {\n  padding: 10px 28px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  cursor: pointer;\n}\nbutton:hover { background: #1d4ed8; }` },
  { id: 'f3', name: 'script.js',  ext: 'js',   content: `function greet() {\n  console.log("Hey EJ! JS is working!");\n  alert("Your code is running!");\n}\nconsole.log("Page loaded.");\nconsole.warn("This is a warning example.");` }
]);

const defaultReact = () => ([
  { id: 'r1', name: 'App.jsx', ext: 'jsx', content: `import { useState } from "react";\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState("EJ");\n\n  return (\n    <div style={s.wrap}>\n      <h1 style={s.h1}>Hello, {name}!</h1>\n      <input style={s.inp} value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />\n      <div style={s.card}>\n        <p style={s.num}>{count}</p>\n        <div style={s.row}>\n          <button style={s.btn} onClick={() => setCount(c => c - 1)}>-</button>\n          <button style={s.btn} onClick={() => setCount(c => c + 1)}>+</button>\n          <button style={{...s.btn, background:"#dc2626"}} onClick={() => setCount(0)}>Reset</button>\n        </div>\n      </div>\n    </div>\n  );\n}\n\nconst s = {\n  wrap: { fontFamily:"sans-serif", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:"100vh", margin:0, background:"#f0f4ff", padding:"20px" },\n  h1:  { fontSize:"2rem", color:"#2563eb", marginBottom:"1rem" },\n  inp: { padding:"8px 14px", border:"1.5px solid #93c5fd", borderRadius:"8px", fontSize:"1rem", marginBottom:"1.5rem", outline:"none", width:"100%", maxWidth:"260px" },\n  card:{ background:"#fff", borderRadius:"12px", padding:"24px 32px", border:"1px solid #dbeafe", display:"flex", flexDirection:"column", alignItems:"center", gap:"16px" },\n  num: { fontSize:"3.5rem", fontWeight:"700", color:"#1d4ed8", margin:0 },\n  row: { display:"flex", gap:"10px" },\n  btn: { padding:"8px 20px", background:"#2563eb", color:"#fff", border:"none", borderRadius:"8px", fontSize:"1.1rem", cursor:"pointer", fontWeight:"600" }\n};` }
]);

const defaultThree = () => ([
  { id: 't1', name: 'scene.js', ext: 'js', content: `// Three.js starter scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0d1117);
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
camera.position.z = 4;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const material = new THREE.MeshStandardMaterial({ color: 0x2563eb });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(3, 3, 3);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});` }
]);

const defaultPhaser = () => ([
  { id: 'p1', name: 'game.js', ext: 'js', content: `// Phaser 3 starter game
const config = {
  type: Phaser.AUTO, width: 480, height: 320, backgroundColor: '#0d1117',
  physics: { default: 'arcade', arcade: { gravity: { y: 400 }, debug: false } },
  scene: { preload, create, update }
};
const game = new Phaser.Game(config);
let player, stars, score = 0, scoreText;
function preload() {}
function create() {
  const ground = this.add.rectangle(240, 310, 480, 20, 0x2563eb);
  this.physics.add.existing(ground, true);
  player = this.add.rectangle(240, 260, 30, 30, 0x22c55e);
  this.physics.add.existing(player);
  player.body.setCollideWorldBounds(true);
  this.physics.add.collider(player, ground);
  stars = this.physics.add.group();
  for (let i = 0; i < 8; i++) {
    const star = this.add.rectangle(60 + i * 55, 150, 14, 14, 0xfbbf24);
    this.physics.add.existing(star);
    star.body.setCollideWorldBounds(true);
    star.body.setBounceY(0.4);
    stars.add(star);
  }
  this.physics.add.collider(stars, ground);
  this.physics.add.overlap(player, stars, collectStar, null, this);
  scoreText = this.add.text(10, 10, 'Score: 0', { fontSize: '16px', fill: '#ffffff' });
  this.cursors = this.input.keyboard.createCursorKeys();
}
function update() {
  if (this.cursors.left.isDown) { player.body.setVelocityX(-200); }
  else if (this.cursors.right.isDown) { player.body.setVelocityX(200); }
  else { player.body.setVelocityX(0); }
  if (this.cursors.up.isDown && player.body.touching.down) { player.body.setVelocityY(-350); }
}
function collectStar(player, star) {
  star.destroy(); score += 10; scoreText.setText('Score: ' + score);
}` }
]);

const defaultVue = () => ([
  { id: 'v1', name: 'App.vue', ext: 'js', content: `// Vue 3 starter app
const { createApp, ref, computed } = Vue;
createApp({
  template: \`
    <div style="font-family:sans-serif;max-width:400px;margin:40px auto;padding:20px">
      <h1 style="color:#2563eb">Hello from Vue!</h1>
      <p>Count: <strong>{{ count }}</strong></p>
      <p>Double: <strong>{{ double }}</strong></p>
      <button @click="count++" style="padding:8px 16px;background:#2563eb;color:#fff;border:none;border-radius:6px;cursor:pointer;margin-right:8px">Click me!</button>
      <button @click="count=0" style="padding:8px 16px;background:#555;color:#fff;border:none;border-radius:6px;cursor:pointer">Reset</button>
      <hr style="margin:20px 0">
      <input v-model="name" placeholder="Type your name..." style="padding:8px;border-radius:6px;border:1px solid #444;background:#1e1e1e;color:#fff;width:100%">
      <p v-if="name">Hello, <strong>{{ name }}</strong>!</p>
    </div>
  \`,
  setup() {
    const count = ref(0);
    const name = ref('');
    const double = computed(() => count.value * 2);
    return { count, name, double };
  }
}).mount('#app');` }
]);

const defaultTF = () => ([
  { id: 'tf1', name: 'model.js', ext: 'js', content: `// TensorFlow.js AI model
async function run() {
  const status = document.getElementById('status');
  const output = document.getElementById('output');
  status.textContent = 'Creating model...';
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 8, inputShape: [1], activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1 }));
  model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });
  const xs = tf.tensor2d([1,2,3,4,5,6,7,8],[8,1]);
  const ys = tf.tensor2d([2,4,6,8,10,12,14,16],[8,1]);
  status.textContent = 'Training model on y = x * 2...';
  await model.fit(xs, ys, {
    epochs: 100,
    callbacks: { onEpochEnd: (epoch, logs) => {
      if (epoch % 20 === 0) status.textContent = 'Training... epoch ' + epoch + ' loss: ' + logs.loss.toFixed(4);
    }}
  });
  status.textContent = 'Done! Here are the predictions:';
  const results = [];
  for (let i = 1; i <= 10; i++) {
    const pred = model.predict(tf.tensor2d([i],[1,1]));
    const val = (await pred.data())[0];
    results.push('Input: ' + i + ' -> Predicted: ' + val.toFixed(2) + ' (expected: ' + (i*2) + ')');
  }
  output.innerHTML = results.join('<br>');
}
document.getElementById('train-btn').addEventListener('click', run);` }
]);

const defaultAngular = () => ([
  { id: 'ng1', name: 'app.js', ext: 'js', content: `// Angular starter app
const { Component, NgModule, BrowserModule } = ng.core ? ng : { Component: ng.core.Component, NgModule: ng.core.NgModule };

// Angular uses decorators — @Component defines a UI block
ng.core.platformBrowserDynamic || (window.ng = window.ng || {});

const app = angular.module('ejApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.title = 'Hello from Angular!';
  $scope.count = 0;
  $scope.name = '';
  $scope.items = ['Learn HTML', 'Learn CSS', 'Learn JavaScript', 'Learn Angular'];
  $scope.newItem = '';

  $scope.increment = function() { $scope.count++; };
  $scope.reset = function() { $scope.count = 0; };
  $scope.addItem = function() {
    if ($scope.newItem.trim()) {
      $scope.items.push($scope.newItem.trim());
      $scope.newItem = '';
    }
  };
  $scope.removeItem = function(idx) { $scope.items.splice(idx, 1); };
});` }
]);

/* ── State ── */
let mode = 'vanilla';
let files = [];
let activeFile = null;
let cdnLinks = [];
let cdnVisible = false;
let findVisible = false;
let layoutStacked = false;
let sidebarOpen = true;
let autoTimer = null;
let gitLog = [];
let deferredInstallPrompt = null;

/* ── Load / Save ── */
function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const d = JSON.parse(raw);
      mode = d.mode || 'vanilla';
      files = d.files && d.files.length ? d.files : (mode === 'react' ? defaultReact() : mode === 'three' ? defaultThree() : mode === 'phaser' ? defaultPhaser() : mode === 'vue' ? defaultVue() : mode === 'tf' ? defaultTF() : mode === 'angular' ? defaultAngular() : defaultVanilla());
      cdnLinks = d.cdnLinks || [];
      const pn = d.projectName;
      if (pn) document.getElementById('proj-name').value = pn;
      return;
    }
  } catch (e) {}
  files = defaultVanilla();
}

function saveState() {
  try {
    if (activeFile) activeFile.content = ed.value;
    const d = {
      mode, files: files.map(f => ({ ...f })),
      cdnLinks, projectName: document.getElementById('proj-name').value
    };
    localStorage.setItem(STORE_KEY, JSON.stringify(d));
    setSaveStatus(true);
  } catch (e) {}
}

function setSaveStatus(saved) {
  const el = document.getElementById('save-status');
  if (!el) return;
  el.textContent = saved ? '● Saved' : '○ Unsaved';
  el.className = 'save-status' + (saved ? '' : ' unsaved');
}

/* ── DOM refs ── */
const ed   = document.getElementById('ed');
const ln   = document.getElementById('ln');
const cout = document.getElementById('cout');

/* ── File helpers ── */
function getExt(name) { const p = name.lastIndexOf('.'); return p >= 0 ? name.slice(p + 1).toLowerCase() : 'txt'; }
function extClass(ext) { return { html:'ext-html', css:'ext-css', js:'ext-js', jsx:'ext-jsx' }[ext] || 'ext-txt'; }

function renderFileList() {
  const fl = document.getElementById('file-list');
  fl.innerHTML = files.map(f => `
    <div class="file-item${f.id === activeFile?.id ? ' active' : ''}" onclick="openFile('${f.id}')">
      <span class="fi-ext ${extClass(f.ext)}">.${f.ext}</span>
      <span class="fi-name">${f.name}</span>
      ${files.length > 1 ? `<span class="fi-del" onclick="delFile(event,'${f.id}')">✕</span>` : ''}
    </div>`).join('');
  document.getElementById('file-ct').textContent = `${files.length} file${files.length !== 1 ? 's' : ''}`;
}

function renderFileTabs() {
  document.getElementById('filetabs').innerHTML = files.map(f => `
    <div class="ftab${f.id === activeFile?.id ? ' active' : ''}" onclick="openFile('${f.id}')">
      <span class="fi-ext ${extClass(f.ext)}" style="font-size:8px">.${f.ext}</span>
      ${f.name}
      ${files.length > 1 ? `<span class="tc" onclick="delFileTab(event,'${f.id}')">✕</span>` : ''}
    </div>`).join('');
}

function openFile(id) {
  if (activeFile) activeFile.content = ed.value;
  activeFile = files.find(f => f.id === id) || files[0];
  ed.value = activeFile.content;
  renderFileList(); renderFileTabs();
  updLines(); updCur(); ed.focus();
}

function openNewFile() { document.getElementById('newfile-modal').classList.add('open'); setTimeout(() => document.getElementById('nf-input').focus(), 50); }
function closeNewFile() { document.getElementById('newfile-modal').classList.remove('open'); document.getElementById('nf-input').value = ''; }

function confirmNewFile() {
  const name = document.getElementById('nf-input').value.trim();
  if (!name) return;
  const ext = getExt(name);
  const id = 'f' + Date.now();
  files.push({ id, name, ext, content: `/* ${name} */\n` });
  closeNewFile();
  openFile(id);
  saveState();
}

function delFile(e, id) {
  e.stopPropagation();
  if (files.length <= 1) { addLog('Cannot delete the last file.', 'cwarn'); return; }
  if (!confirm('Delete this file?')) return;
  files = files.filter(f => f.id !== id);
  if (activeFile?.id === id) openFile(files[0].id);
  else { renderFileList(); renderFileTabs(); }
  saveState();
}
function delFileTab(e, id) { e.stopPropagation(); delFile(e, id); }

/* ── Editor utils ── */
function updLines() {
  const n = ed.value.split('\n').length;
  ln.textContent = Array.from({ length: n }, (_, i) => i + 1).join('\n');
  ln.scrollTop = ed.scrollTop;
}
function updCur() {
  const v = ed.value.substring(0, ed.selectionStart);
  const ls = v.split('\n');
  document.getElementById('cur').textContent = `Ln ${ls.length}, Col ${ls[ls.length - 1].length + 1}`;
  document.getElementById('cc').textContent = `${ed.value.length} ch`;
}
ed.addEventListener('scroll', () => { ln.scrollTop = ed.scrollTop; });

function setFont(v) {
  ed.style.fontSize = v + 'px';
  ln.style.fontSize = v + 'px';
  document.getElementById('sz-lbl').textContent = v + 'px';
}

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  document.getElementById('sidebar').classList.toggle('collapsed', !sidebarOpen);
}

function toggleLayout() {
  layoutStacked = !layoutStacked;
  const pw = document.getElementById('preview-wrap');
  const ea = document.getElementById('editor-area');
  pw.classList.toggle('stacked', layoutStacked);
  ea.style.flexDirection = layoutStacked ? 'column' : '';
}

/* ── CDN ── */
function toggleCDN() {
  cdnVisible = !cdnVisible;
  document.getElementById('cdn-bar').style.display = cdnVisible ? 'flex' : 'none';
}
function addCDN() {
  const inp = document.getElementById('cdn-inp');
  const url = inp.value.trim();
  if (!url || cdnLinks.includes(url)) return;
  cdnLinks.push(url); inp.value = '';
  renderCDNTags();
  document.getElementById('cdn-ct').textContent = `${cdnLinks.length} CDN`;
  saveState(); runCode();
}
function removeCDN(i) {
  cdnLinks.splice(i, 1); renderCDNTags();
  document.getElementById('cdn-ct').textContent = `${cdnLinks.length} CDN`;
  saveState(); runCode();
}
function renderCDNTags() {
  const ct = document.getElementById('cdn-tags');
  ct.innerHTML = cdnLinks.map((u, i) => {
    const s = u.split('/').pop().replace('.min', '').substring(0, 22);
    return `<div class="ctag"><span title="${u}">${s}</span><span class="cx" onclick="removeCDN(${i})">×</span></div>`;
  }).join('');
}

/* ── Find & Replace ── */
function toggleFind() {
  findVisible = !findVisible;
  document.getElementById('find-bar').style.display = findVisible ? 'flex' : 'none';
  if (findVisible) document.getElementById('find-inp').focus();
}
function doFind() {
  const q = document.getElementById('find-inp').value;
  if (!q) { document.getElementById('find-count').textContent = ''; return; }
  const m = (ed.value.match(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')) || []).length;
  document.getElementById('find-count').textContent = `${m} found`;
}
function doReplace() {
  const q = document.getElementById('find-inp').value;
  const r = document.getElementById('repl-inp').value;
  if (!q) return;
  const idx = ed.value.toLowerCase().indexOf(q.toLowerCase());
  if (idx < 0) return;
  ed.value = ed.value.substring(0, idx) + r + ed.value.substring(idx + q.length);
  if (activeFile) activeFile.content = ed.value;
  updLines(); doFind();
}
function doReplaceAll() {
  const q = document.getElementById('find-inp').value;
  const r = document.getElementById('repl-inp').value;
  if (!q) return;
  ed.value = ed.value.replace(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), r);
  if (activeFile) activeFile.content = ed.value;
  updLines(); doFind();
}

/* ── Format ── */
function formatCode() {
  if (!activeFile) return;
  const ext = activeFile.ext;
  let code = ed.value;
  try {
    if (ext === 'json') {
      code = JSON.stringify(JSON.parse(code), null, 2);
    } else if (ext === 'css') {
      code = code
        .replace(/\s*\{\s*/g, ' {\n  ')
        .replace(/;\s*/g, ';\n  ')
        .replace(/\s*\}\s*/g, '\n}\n')
        .replace(/  \n}/g, '\n}')
        .replace(/\n{3,}/g, '\n\n').trim();
    } else if (ext === 'html') {
      let ind = 0;
      const voidTags = /^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)/i;
      code = code.split('\n').map(l => {
        l = l.trim(); if (!l) return '';
        if (l.match(/^<\//)) ind = Math.max(0, ind - 1);
        const r = '  '.repeat(ind) + l;
        if (l.match(/^<[^\/!][^>]*>/) && !l.match(/\/>/) && !l.match(/<\//) && !voidTags.test(l)) ind++;
        return r;
      }).join('\n');
    } else {
      let ind = 0;
      code = code.split('\n').map(l => {
        l = l.trim(); if (!l) return '';
        if (l.startsWith('}') || l.startsWith(')')) ind = Math.max(0, ind - 1);
        const r = '  '.repeat(ind) + l;
        if (l.endsWith('{') || l.endsWith('(')) ind++;
        return r;
      }).join('\n');
    }
    ed.value = code;
    if (activeFile) activeFile.content = code;
    updLines(); addLog('Code formatted.', 'cinfo');
  } catch (e) { addLog('Format error: ' + e.message, 'cerr'); }
}

/* ── Theme ── */
function setTheme(t) {
  document.body.className = t || '';
}

/* ── Key handling ── */
function handleKey(e) {
  if (e.key === 'Tab') {
    e.preventDefault();
    const s = ed.selectionStart, end = ed.selectionEnd;
    ed.value = ed.value.substring(0, s) + '  ' + ed.value.substring(end);
    ed.selectionStart = ed.selectionEnd = s + 2;
    updLines();
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter')       { e.preventDefault(); runCode(); }
  if ((e.ctrlKey || e.metaKey) && e.key === 's')           { e.preventDefault(); downloadCode(); }
  if ((e.ctrlKey || e.metaKey) && e.key === 'f')           { e.preventDefault(); toggleFind(); }
  if ((e.ctrlKey || e.metaKey) && e.key === 'b')           { e.preventDefault(); toggleSidebar(); }
  if ((e.ctrlKey || e.metaKey) && e.key === 'n')           { e.preventDefault(); openNewFile(); }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'F') { e.preventDefault(); formatCode(); }
  if (e.key === 'Escape' && findVisible)                    { toggleFind(); }
}

function onEdit() {
  updLines(); updCur();
  if (activeFile) activeFile.content = ed.value;
  setSaveStatus(false);
  clearTimeout(autoTimer);
  autoTimer = setTimeout(() => { saveState(); runCode(); }, 1500);
}

/* ── Console ── */
function addLog(msg, cls) {
  const f = cout.querySelector('.muted'); if (f) f.remove();
  const d = document.createElement('div'); d.className = cls; d.textContent = msg;
  cout.appendChild(d); cout.scrollTop = cout.scrollHeight;
}
function clearConsole() { cout.innerHTML = '<span class="muted">— Console cleared —</span>'; }

/* ── Run ── */
const CPATCH = `<script>
function __send(t,c){try{parent.postMessage({type:'console',msg:t,cls:c},'*')}catch(e){}}
function __log(...a){__send(a.map(x=>typeof x==='object'?JSON.stringify(x):String(x)).join(' '),'clog')}
function __warn(...a){__send(a.map(x=>String(x)).join(' '),'cwarn')}
function __err(...a){__send(a.map(x=>String(x)).join(' '),'cerr')}
function __info(...a){__send(a.map(x=>String(x)).join(' '),'cinfo')}
window.onerror=function(m,s,l){__send('Error: '+m+' (line '+l+')','cerr');return true};
<\/script>`;

function patchC(code) {
  return code
    .replace(/console\.log\(/g, '__log(')
    .replace(/console\.warn\(/g, '__warn(')
    .replace(/console\.error\(/g, '__err(')
    .replace(/console\.info\(/g, '__info(');
}

function runCode() {
  if (activeFile) activeFile.content = ed.value;
  clearConsole();
  const frame = document.getElementById('pframe');
  const cdnS = cdnLinks.map(u => `<script src="${u}"><\/script>`).join('\n');

  if (mode === 'react') {
    const jsx = files.find(f => f.ext === 'jsx');
    if (!jsx) return;
    const code = patchC(jsx.content)
      .replace(/import\s+.*?from\s+['"]react['"]/g, '')
      .replace(/import\s+.*?from\s+['"][^'"]+['"]/g, '');
    frame.srcdoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box}body{margin:0}</style></head><body><div id="root"></div>${CPATCH}${cdnS}<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script><script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script><script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script><script type="text/babel">const{useState,useEffect,useRef,useCallback,useMemo,useReducer,useContext,createContext}=React;${code}try{ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));}catch(e){__err('Render error: '+e.message);}<\/script></body></html>`;
    addLog('React app rendered.', 'cinfo');
  } else if (mode === 'three') {
    const js = files.map(f => patchC(f.content)).join('\n');
    frame.srcdoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box;margin:0;overflow:hidden}</style></head><body>${CPATCH}${cdnS}<script src="https://unpkg.com/three@0.160.0/build/three.min.js"><\/script><script>try{${js}}catch(e){__err('Error: '+e.message);}<\/script></body></html>`;
    addLog('Three.js scene rendered.', 'cinfo');
  } else if (mode === 'phaser') {
    const js = files.map(f => patchC(f.content)).join('\n');
    frame.srcdoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box;margin:0;overflow:hidden}canvas{display:block;margin:auto}</style></head><body>${CPATCH}${cdnS}<script src="https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.min.js"><\/script><script>try{${js}}catch(e){__err('Error: '+e.message);}<\/script></body></html>`;
    addLog('Phaser game running! Use arrow keys to play.', 'cinfo');
  } else if (mode === 'vue') {
    const js = files.map(f => patchC(f.content)).join('\n');
    frame.srcdoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box}body{margin:0;background:#0d1117;color:#e6edf3}</style></head><body><div id="app"></div>${CPATCH}${cdnS}<script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script><script>try{${js}}catch(e){__err('Error: '+e.message);}<\/script></body></html>`;
    addLog('Vue 3 app running!', 'cinfo');
  } else if (mode === 'tf') {
    const js = files.map(f => patchC(f.content)).join('\n');
    frame.srcdoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box}body{margin:20px;background:#0d1117;color:#e6edf3;font-family:sans-serif}button{padding:10px 20px;background:#2563eb;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:16px}#status{margin:16px 0;color:#fbbf24}#output{margin-top:12px;line-height:2;font-size:14px}</style></head><body><h2>TensorFlow.js AI Model</h2><button id="train-btn">Train Model</button><p id="status">Click Train to start!</p><div id="output"></div>${CPATCH}${cdnS}<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.17.0/dist/tf.min.js"><\/script><script>try{${js}}catch(e){__err('Error: '+e.message);}<\/script></body></html>`;
    addLog('TensorFlow.js ready! Click Train Model to start.', 'cinfo');
  } else if (mode === 'angular') {
    const js = files.map(f => patchC(f.content)).join('\n');
    frame.srcdoc = `<!DOCTYPE html><html ng-app="ejApp"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box}body{margin:0;background:#0d1117;color:#e6edf3;font-family:sans-serif}.card{max-width:420px;margin:30px auto;padding:20px;background:#161b22;border-radius:10px}h1{color:#2563eb}input{padding:8px;border-radius:6px;border:1px solid #444;background:#1e1e1e;color:#fff;width:70%;margin-right:8px}button{padding:8px 14px;background:#2563eb;color:#fff;border:none;border-radius:6px;cursor:pointer;margin:4px}.btn-red{background:#dc2626}.count-box{font-size:2rem;font-weight:bold;color:#fbbf24;margin:10px 0}li{padding:6px 0;border-bottom:1px solid #30363d;display:flex;justify-content:space-between;align-items:center}.del{background:#dc2626;padding:3px 8px;font-size:12px}</style></head><body><div class="card" ng-controller="MainCtrl"><h1>{{ title }}</h1><div class="count-box">{{ count }}</div><button ng-click="increment()">+1</button><button class="btn-red" ng-click="reset()">Reset</button><br><br><input ng-model="name" placeholder="Type your name..."><br><p ng-if="name" style="color:#22c55e">Hello, {{ name }}!</p><hr style="border-color:#30363d;margin:16px 0"><h3>To-do list</h3><ul style="list-style:none;padding:0"><li ng-repeat="item in items track by $index">{{ item }}<button class="del" ng-click="removeItem($index)">x</button></li></ul><input ng-model="newItem" placeholder="Add a task..." ng-keyup="$event.keyCode==13&&addItem()"><button ng-click="addItem()">Add</button></div>${CPATCH}${cdnS}<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js"><\/script><script>try{${js}}catch(e){__err('Error: '+e.message);}<\/script></body></html>`;
    addLog('Angular app running!', 'cinfo');
  } else {
    const html = files.find(f => f.ext === 'html');
    const css  = files.filter(f => f.ext === 'css').map(f => `<style>${f.content}</style>`).join('\n');
    const js   = files.filter(f => f.ext === 'js').map(f => `<script>${patchC(f.content)}<\/script>`).join('\n');
    let base = html ? html.content : '<body></body>';
    const inject = CPATCH + cdnS + css + js;
    frame.srcdoc = base.includes('</body>') ? base.replace('</body>', inject + '</body>') : base + inject;
    addLog('Running...', 'cinfo');
  }
}

window.addEventListener('message', e => { if (e.data?.type === 'console') addLog(e.data.msg, e.data.cls); });

/* ── Mode switch ── */
function setMode(m) {
  if (activeFile) activeFile.content = ed.value;
  mode = m;
  const isReact = m === 'react';
  const isThree = m === 'three';
  const isPhaser = m === 'phaser';
  const isVue = m === 'vue';
  const isTF = m === 'tf';
  const isAngular = m === 'angular';
  if (isReact) files = defaultReact();
  else if (isThree) files = defaultThree();
  else if (isPhaser) files = defaultPhaser();
  else if (isVue) files = defaultVue();
  else if (isTF) files = defaultTF();
  else if (isAngular) files = defaultAngular();
  else files = defaultVanilla();
  ['btn-v','btn-r','btn-t','btn-p','btn-vue','btn-tf','btn-ng'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('on','ron');
  });
  const activeBtn = isReact?'btn-r':isThree?'btn-t':isPhaser?'btn-p':isVue?'btn-vue':isTF?'btn-tf':isAngular?'btn-ng':'btn-v';
  const el = document.getElementById(activeBtn);
  if (el) el.classList.add(isReact ? 'ron' : 'on');
  document.getElementById('mode-lbl').textContent = isReact ? 'React + JSX' : isThree ? 'Three.js' : isPhaser ? 'Phaser' : isVue ? 'Vue 3' : isTF ? 'TensorFlow.js' : isAngular ? 'Angular' : 'Vanilla';
  document.getElementById('react-hint').style.display = isReact ? 'flex' : 'none';
  activeFile = files[0];
  ed.value = activeFile.content;
  renderFileList(); renderFileTabs(); updLines(); updCur();
  saveState(); runCode();
}

/* ── Download ── */
function downloadCode() {
  if (activeFile) activeFile.content = ed.value;
  const pname = document.getElementById('proj-name').value || 'my-project';
  if (mode === 'react') {
    const b = new Blob([files[0].content], { type: 'text/plain' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'App.jsx'; a.click();
    addLog('Saved App.jsx', 'cinfo'); return;
  }
  const html = files.find(f => f.ext === 'html');
  const css  = files.filter(f => f.ext === 'css').map(f => `<style>${f.content}</style>`).join('\n');
  const js   = files.filter(f => f.ext === 'js').map(f => `<script>${f.content}<\/script>`).join('\n');
  let base = html ? html.content : '';
  const full = base.includes('</body>') ? base.replace('</body>', css + js + '</body>') : base + css + js;
  const b = new Blob([full], { type: 'text/html' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = pname + '.html'; a.click();
  URL.revokeObjectURL(a.href);
  addLog(`Saved ${pname}.html`, 'cinfo');
}

/* ── Git ── */
function openGit() {
  document.getElementById('git-modal').classList.add('open');
  document.getElementById('gm').value = `Update from EJ Editor — ${new Date().toLocaleDateString()}`;
}
function closeGit() { document.getElementById('git-modal').classList.remove('open'); }

function setGitStatus(msg, type) {
  const el = document.getElementById('gst');
  el.textContent = msg; el.className = 'git-status ' + type; el.style.display = 'block';
}

async function gitPush() {
  const token  = document.getElementById('gt').value.trim();
  const owner  = document.getElementById('go').value.trim();
  const repo   = document.getElementById('gre').value.trim();
  const branch = document.getElementById('gb').value.trim() || 'main';
  const msg    = document.getElementById('gm').value.trim() || "Update from EJ Editor";
  if (!token || !owner || !repo) { setGitStatus('Fill in token, owner, and repo.', 'err'); return; }
  setGitStatus('Pushing...', 'loading');
  if (activeFile) activeFile.content = ed.value;
  const pushFiles = mode === 'react' ? files.filter(f => f.ext === 'jsx') : files;
  const base = `https://api.github.com/repos/${owner}/${repo}/contents/`;
  const headers = { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json', 'Accept': 'application/vnd.github+json' };
  try {
    for (const f of pushFiles) {
      let sha = null;
      try { const c = await fetch(base + f.name + '?ref=' + branch, { headers }); if (c.ok) { sha = (await c.json()).sha; } } catch (e) {}
      const body = { message: `${msg} — ${f.name}`, content: btoa(unescape(encodeURIComponent(f.content))), branch };
      if (sha) body.sha = sha;
      const r = await fetch(base + f.name, { method: 'PUT', headers, body: JSON.stringify(body) });
      if (!r.ok) { const err = await r.json(); setGitStatus(`Error on ${f.name}: ${err.message}`, 'err'); return; }
    }
    const ts = new Date().toLocaleTimeString();
    gitLog.unshift(`[${ts}] ${msg} → ${owner}/${repo}:${branch}`);
    document.getElementById('gl2').innerHTML = gitLog.map(l => `<div class="gle">${l}</div>`).join('');
    setGitStatus(`Pushed ${pushFiles.length} file${pushFiles.length !== 1 ? 's' : ''} successfully!`, 'ok');
    addLog(`Git: pushed to ${owner}/${repo}@${branch}`, 'cgit');
  } catch (e) { setGitStatus('Network error — check token and repo.', 'err'); }
}

/* ── Shortcuts modal ── */
function openKb() { document.getElementById('kb-modal').classList.add('open'); }
function closeKb() { document.getElementById('kb-modal').classList.remove('open'); }

/* ── PWA: Service Worker ── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      addLog('PWA: offline support active.', 'cinfo');
    }).catch(e => console.warn('SW failed:', e));
  });
}

/* ── PWA: Install banner ── */
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const banner = document.getElementById('install-banner');
  if (banner) banner.classList.add('show');
});

function installApp() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(() => {
    deferredInstallPrompt = null;
    const banner = document.getElementById('install-banner');
    if (banner) banner.classList.remove('show');
  });
}

window.addEventListener('appinstalled', () => {
  addLog('PWA installed to home screen!', 'cinfo');
  const banner = document.getElementById('install-banner');
  if (banner) banner.classList.remove('show');
});

/* ── Offline indicator ── */
function updateOnline() {
  const badge = document.getElementById('offline-badge');
  if (!badge) return;
  if (navigator.onLine) {
    badge.textContent = '● Online'; badge.className = 'offline-badge';
  } else {
    badge.textContent = '◌ Offline'; badge.className = 'offline-badge offline';
  }
}
window.addEventListener('online',  updateOnline);
window.addEventListener('offline', updateOnline);

/* ── Init ── */
loadState();
activeFile = files[0];
ed.value = activeFile.content;
renderFileList(); renderFileTabs();
updLines(); updCur(); renderCDNTags();
updateOnline();
if (mode === 'react') {
  document.getElementById('btn-r').classList.add('ron');
  document.getElementById('btn-v').classList.remove('on');
  document.getElementById('mode-lbl').textContent = 'React + JSX';
  document.getElementById('react-hint').style.display = 'flex';
}
document.getElementById('cdn-ct').textContent = `${cdnLinks.length} CDN`;

/* Install banner HTML (injected) */
const banner = document.createElement('div');
banner.id = 'install-banner';
banner.innerHTML = `<span>📲 Add EJ Editor to your home screen!</span><button onclick="installApp()">Install</button><button id="install-dismiss" onclick="this.parentElement.classList.remove('show')">✕</button>`;
document.getElementById('ide').insertBefore(banner, document.getElementById('titlebar').nextSibling);

runCode();
