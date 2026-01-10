const projectSection = document.getElementById("projects");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.title}" style="width:100%; border-radius:8px;">
    <h3>${p.title}</h3>
    <p>${p.description}</p>
  `;
  projectSection.appendChild(card);
});
