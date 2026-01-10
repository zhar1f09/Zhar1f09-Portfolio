const projectSection = document.getElementById("projects");
const buttons = document.querySelectorAll(".filters button");

function renderCategory(category) {
  projectSection.innerHTML = "";
  portfolio[category].forEach(fileName => {
    const card = document.createElement("div");
    card.className = "card";
    // Use /Images/<category>/<filename>
    card.innerHTML = `<img src="Images/${category}/${fileName}" alt="${category}">`;
    projectSection.appendChild(card);
  });
}

// Default load
renderCategory("modeling");

// Filter buttons
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCategory(btn.dataset.category);
  });
});
