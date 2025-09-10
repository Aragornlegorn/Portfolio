console.log("Stylesheet load")
loadProjects();





// Fonction
// Charger tous les projets depuis projects.json
function loadProjects() {
    fetch('projects.json')
        .then(function(response){
            return response.json();
        })
        .then(function(projects){
            let placeholder = document.querySelector("#projects-output")
            let out = "";
            for(let project of projects){
                out += `
                    <div class="case-Project">
                        <h2>${project.name}</h2>
                        <img src="${project.image}" alt="${project.name}" />
                        <p>${project.description}</p>
                    </div>
                `;
            }

            placeholder.innerHTML = out;
        })
}
