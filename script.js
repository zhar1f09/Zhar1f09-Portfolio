const projectSection = document.getElementById("projects");
const buttons = document.querySelectorAll(".filters button");

function renderCategory(category) {
  projectSection.innerHTML = "";
  portfolio[category].forEach(fileName => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="images/${fileName}" alt="${category} image">`;
    projectSection.appendChild(card);
  });
}

// Default load
renderCategory("modeling");

// Filter buttons
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    renderCategory(btn.dataset.category);
  });
});
