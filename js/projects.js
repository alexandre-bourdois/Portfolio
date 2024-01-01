document.addEventListener('DOMContentLoaded', function () {
  loadProject();
});

function loadProject() {
    const projectContainer = document.getElementById("projects-container");
    projectContainer.innerHTML = "";

    // Load JSON data
    load_json("../Ressources/jsons/projects.json")
      .then(data => {
        data.forEach((project, index) => {
          const hasImage = project.image && project.image !== "none";
          const hasVideo = project.video && project.video !== "none";
  
          
          const alignment = index % 2 === 0 ? "left" : "right";
          const marginRightValue = alignment === "left" ? "-100px" : "0";
          const marginLeftValue = alignment === "right" ? "-100px" : "0";

          if (window.innerWidth > 780)
          {
          const projectTextHTML = `
            <div class="project-text">
              <h3>${project.project} (${project.date})</h3>
              <div class="box-project-text style="margin-right: ${marginRightValue}; margin-left: ${marginLeftValue};">
                <p>${project.description}</p>
              </div>
              <a href="${project.link}" target="_blank">View on GitHub</a>
            </div>
          `;
          const projectImageHTML = `
            <div class="project-image">
              ${hasImage ? `<img src="${project.image}" alt="Project Image" width="500px" height="400px">` : ""}
              ${hasVideo ? `<video src="${project.video}" controls></video>` : ""}
            </div>
          `;
        
          const projectHTML = `
            <div class="projects_content" style="text-align: ${alignment};">
              ${alignment === "left" ? projectTextHTML + projectImageHTML : projectImageHTML + projectTextHTML}
            </div>
          `;
          projectContainer.innerHTML += projectHTML;

          }
          else{
            const projectCONTENT = `
            <div class="project_background" style="background-image: url(${project.image});">
              <div class="project-text">
                <h3>${project.project} (${project.date})</h3>
                <div class="box-project-text style="margin-right: ${marginRightValue}; margin-left: ${marginLeftValue};">
                  <p>${project.description}</p>
                </div>
                <a href="${project.link}" target="_blank">View on GitHub</a>
              </div>
            </div>
          `;
          projectContainer.innerHTML += projectCONTENT;

          }
        });
      })
      .catch(error => console.error("Error loading data:", error));
      projectCONTENT= "";
      projectTextHTML= "";
      projectImageHTML= "";
      projectHTML= "";
  };