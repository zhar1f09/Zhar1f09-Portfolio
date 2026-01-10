const projectSection = document.getElementById("projects");
const buttons = document.querySelectorAll(".filters button");

function renderCategory(category) {
  projectSection.innerHTML = "";

  if (category === "all") {
    // Show everything
    Object.keys(portfolio).forEach(cat => {
      portfolio[cat].forEach(fileName => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<img src="Images/${cat}/${fileName}" alt="${cat}">`;
        projectSection.appendChild(card);
      });
    });
  } else {
    // Show only selected category
    portfolio[category].forEach(fileName => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<img src="Images/${category}/${fileName}" alt="${category}">`;
      projectSection.appendChild(card);
    });
  }
}

// Default load: show all
renderCategory("all");

// Filter buttons
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCategory(btn.dataset.category);
  });
});
