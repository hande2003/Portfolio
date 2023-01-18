import data from "../json/project-data.json" assert{type:"json"};

let projector = document.getElementById("project-holder");

for(let key in data){
    let actData = data[key];
    
    let column = document.createElement("div");
    column.classList.add("col-4", "d-flex", "align-items-stretch", "justify-content-center");
    
    let card = document.createElement("div");
    card.classList.add("card", "m-5", "shadow-sm");
    
    let cardBody = document.createElement("div");
    cardBody.classList.add('card-body', "d-flex", "flex-column", "justify-content-between");
    
    // card body elements
    let imgLink = document.createElement("a");
    // imgLink.classList.add("btn");
    imgLink.href = "#";
    imgLink.setAttribute("data-bs-toggle", "modal") ; 
    imgLink.setAttribute("data-bs-target", "#proj-video");

    let img = document.createElement('img');
    img.setAttribute('src', actData.image);
    img.setAttribute('id', key);
    img.classList.add("card-img-top", "w-100");
    
    imgLink.appendChild(img);

    let title = document.createElement('h4');
    title.innerHTML = actData.title;
    title.classList.add("card-title", "fw-bold");
    title.style="color:#333;"
    
    let description = document.createElement('p');
    description.innerHTML = actData.description;
    description.classList.add("card-text");

    let mainbody = document.createElement("div");
    mainbody.append(title, description);
    
    let goToProject = document.createElement('a');
    goToProject.innerHTML = 'GO';
    goToProject.classList.add("btn", "btn-primary");
    goToProject.href = actData["project-display"];
    goToProject.classList.add("card-link", "d-block", "mt-3");
    goToProject.target = "_blank";

    cardBody.append(mainbody, goToProject);

    projector.appendChild(column).appendChild(card).append(imgLink, cardBody);
    
    // Video Display
    document.getElementById(key).addEventListener('click', (e)=>{
        
        let proj = document.getElementById('modal-body');
        if(proj.childElementCount){
            proj.firstElementChild.remove();   
        }
        document.getElementById("project-title").innerHTML = actData.title;
        let video = document.createElement('video');
        let source = document.createElement('source');
        video.classList.add('w-100');
        video.controls=true;
        video.autoplay=true;
        video.loop=true;
        proj.appendChild(video).appendChild(source).setAttribute('src', actData.video);
    })
}

