// ===== Portfolio Tabs =====
const tabs = document.getElementById('tabs');
const grid = document.getElementById('grid');
const categories = Object.keys(portfolio);

// Build tab buttons
categories.forEach((cat, i) => {
  const button = document.createElement('button');
  button.className = 'tab-btn' + (i === 0 ? ' active' : '');
  button.textContent = cat;
  button.onclick = () => {
    document.querySelectorAll('.tab-btn').forEach(x => x.classList.remove('active'));
    button.classList.add('active');
    renderCategory(cat);
  };
  tabs.appendChild(button);
});

// Render portfolio grid
function renderCategory(cat) {
  grid.innerHTML = '';
  portfolio[cat].forEach((file, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    thumb.innerHTML = `
      <img src="Images/${cat}/${file}" alt="${cat} ${i+1}">
      <div class="label">${cat} ${i+1}</div>
    `;
    grid.appendChild(thumb);
  });
}
renderCategory(categories[0]);

// ===== Lightbox =====
const lb = document.getElementById('lb');
const lbimg = document.getElementById('lbimg');
const lbclose = document.getElementById('lbclose');
const lbleft = document.getElementById('lbleft');
const lbright = document.getElementById('lbright');

let currentCategory = null;
let currentIndex = 0;

// Open lightbox when clicking a thumbnail
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

// Close lightbox
lbclose.addEventListener('click', () => lb.classList.remove('show'));
lb.addEventListener('click', (e) => {
  if (e.target === lb) lb.classList.remove('show');
});

// Navigate right
lbright.addEventListener('click', () => {
  if (!currentCategory) return;
  const files = portfolio[currentCategory];
  currentIndex = (currentIndex + 1) % files.length;
  lbimg.src = `Images/${currentCategory}/${files[currentIndex]}`;
});

// Navigate left
lbleft.addEventListener('click', () => {
  if (!currentCategory) return;
  const files = portfolio[currentCategory];
  currentIndex = (currentIndex - 1 + files.length) % files.length;
  lbimg.src = `Images/${currentCategory}/${files[currentIndex]}`;
});
