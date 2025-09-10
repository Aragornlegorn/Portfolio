console.log("Stylesheet load")
loadProjects();





// Fonction
// Charger tous les projets depuis projects.json
function loadProjects() {
    fetch('./src/js/projects.json')
        .then(function(response){
            return response.json();
        })
        .then(function(projects){
            let placeholder = document.querySelector("#projects-output")
            let out = "";
            for(let project of projects){
                out += `
                    <div>
                        <h1>${project.name}</h1>
                    </div>
                `;
            }

            placeholder.innerHTML = out;
        })
}
