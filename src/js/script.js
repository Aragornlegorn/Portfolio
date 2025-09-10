console.log("Stylesheet load")
loadProjects();





// Fonction
// Fonction pour charger tous les projets automatiquement
async function loadProjects() {
  const container = document.getElementById('projects');

  // Récupérer la liste des fichiers JSON depuis le serveur
  const listRes = await fetch('../json/projects/list');
  const projectFiles = await listRes.json();

  for (const file of projectFiles) {
    const res = await fetch(`/projects/${file}`);
    const project = await res.json();

    const card = document.createElement('div');
    card.className = "bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow";

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="rounded-lg mb-3" />
      <h3 class="text-xl font-bold">${project.title}</h3>
      <p class="text-gray-600 dark:text-gray-400">${project.description}</p>
      <a href="${project.link}" target="_blank" class="text-blue-500 dark:text-blue-400">Voir le projet</a>
    `;

    container.appendChild(card);
  }
}