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
                        <h3>${project.name}</h3>
                        <img src="${project.image}" alt="${project.name}"/>
                        <p>${project.description}</p>
                    </div>
                `;
            }

            placeholder.innerHTML = out;
        })
}
