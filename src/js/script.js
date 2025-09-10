console.log("Stylesheet load")
loadProjects();





// Fonction
// Charger tous les projets depuis projects.json
async function loadProjects() {
  const container = document.getElementById('projects');

  try {
    const res = await fetch('../json/Projects.json');
    const projects = await res.json();

    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = "bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow";

      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="rounded-lg mb-3" />
        <h3 class="text-xl font-bold">${project.title}</h3>
        <p class="text-gray-600 dark:text-gray-400">${project.description}</p>
        <a href="${project.link}" target="_blank" class="text-blue-500 dark:text-blue-400">Voir le projet</a>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Impossible de charger projects.json :", err);
  }
}
