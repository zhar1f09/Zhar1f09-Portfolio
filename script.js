const projectSection = document.getElementById("projects");

function renderCategory(category) {
  projectSection.innerHTML = "";
  portfolio[category].forEach(fileName => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="images/${fileName}" alt="${category}">`;
    projectSection.appendChild(card);
  });
}

// Default load
renderCategory("modeling");

// Filter buttons
document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    renderCategory(btn.dataset.category);
  });
});
