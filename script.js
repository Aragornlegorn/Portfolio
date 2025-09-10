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
                    <div class="card-Project">
                        <h3>${project.name}</h3>
                        <div class="project-img-container">
                            <img src="${project.image}" alt="${project.name}"/>
                        </div>
                        <p>${project.description}</p>
                    </div>
                `;
            }

            placeholder.innerHTML = out;
        })
}
