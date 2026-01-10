const tabs = document.getElementById('tabs');
const grid = document.getElementById('grid');
const categories = Object.keys(portfolio);

// Build tabs
categories.forEach((cat, i) => {
  const b = document.createElement('button');
  b.className = 'tab-btn' + (i === 0 ? ' active' : '');
  b.textContent = cat;
  b.onclick = () => {
    document.querySelectorAll('.tab-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    render(cat);
  };
  tabs.appendChild(b);
});

// Render portfolio grid
function render(cat) {
  grid.innerHTML = '';
  portfolio[cat].forEach((f, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    thumb.innerHTML = `
      <img src="Images/${cat}/${f}" alt="${cat} ${i+1}">
      <div class="label">${cat} ${i+1}</div>
    `;
    grid.appendChild(thumb);
  });
}
render(categories[0]);

// Lightbox
const lb = document.getElementById('lb');
const lbimg = document.getElementById('lbimg');
const lbclose = document.getElementById('lbclose');
const lbleft = document.getElementById('lbleft');
const lbright = document.getElementById('lbright');

let currentCategory = null;
let currentIndex = 0;

document.addEventListener('click', (e) => {
  const img = e.target.closest('.thumb img');
  if (!img) return;
  const activeTab = document.querySelector('.tab-btn.active').textContent.toLowerCase();
  currentCategory = activeTab;
  const files = portfolio[currentCategory];
  currentIndex = files.findIndex(f => img.src.includes(f));
  lbimg.src = img.src;
  lb.classList.add('show');
});

lbclose.addEventListener('click', () => lb.classList.remove('show'));
lb.addEventListener('click', (e) => { if (e.target === lb) lb.classList.remove('show'); });

lbright.addEventListener('click', () => {
  if (!currentCategory) return;
  const files = portfolio[currentCategory];
  currentIndex = (currentIndex + 1) % files.length;
  lbimg.src = `Images/${currentCategory}/${files[currentIndex]}`;
});

lbleft.addEventListener('click', () => {
  if (!currentCategory) return;
  const files = portfolio[currentCategory];
  currentIndex = (currentIndex - 1 + files.length) % files.length;
  lbimg.src = `Images/${currentCategory}/${files[currentIndex]}`;
});
