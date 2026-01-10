const projectSection = document.getElementById("projects");

Object.keys(portfolio).forEach(category => {
  const grid = document.createElement("div");
  grid.className = "grid";

  portfolio[category].forEach(fileName => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="images/${fileName}" alt="${category} image">`;
    grid.appendChild(card);
  });

  projectSection.appendChild(grid);
});
