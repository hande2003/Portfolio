// Modal Display
let proj = document.getElementById('modal-body');
let element = document.getElementsByClassName('proj');
let projList = {'loan-calci': './public/project-media/videos/Banking-Calculator.mp4', 
                'exercise-tracker': './public/project-media/videos/Exercise-Tracker.mp4',
                'file-metadata': './public/project-media/videos/File-Metadata-Microservices.mp4',
                'header-parser': './public/project-media/videos/Header-Parser-Microservices.mp4',
                'timestamp': './public/project-media/videos/Timestamp-Microservices.mp4',
                'url-shortner': './public/project-media/videos/URL-Shortner.mp4'
                };

for (let index = 0; index < element.length; index++) {
    element[index].addEventListener('click', (e)=>{
        switch(e.target.name){
            case 'loan-calci':
                projDisplay(projList["loan-calci"], e.target.innerHTML);
                break;
            case 'timestamp':
                projDisplay(projList.timestamp, e.target.innerHTML);
                break;
            case 'header-parser':
                projDisplay(projList["header-parser"], e.target.innerHTML);
                break;
            case 'file-metadata':
                projDisplay(projList["file-metadata"], e.target.innerHTML);
                break;
            case 'url-shortner':
                projDisplay(projList["url-shortner"], e.target.innerHTML);
                break;
            case 'exercise-tracker':
                projDisplay(projList["exercise-tracker"], e.target.innerHTML);
                break;
        }
    })
    
}

function projDisplay(i, title){
    if(proj.childElementCount){
        proj.firstElementChild.remove();   
    }
    document.getElementById("project-title").innerHTML = title;
    let video = document.createElement('video');
    let source = document.createElement('source');
    video.classList.add('w-100');
    video.controls=true;
    video.autoplay=true;
    video.loop=true;
    proj.appendChild(video).appendChild(source).setAttribute('src', i);
}

// Full-Form Display
//"Justified Advertising Software Services India Digital Private Ltd"
document.getElementById('full-form').addEventListener('pointerover', (e)=>{
    new bootstrap.Tooltip(document.getElementById('full-form'));
})

// Navigation Active
const navItems = document.getElementsByClassName('nav-link');

for(let i=0; i<navItems.length; i++){
    navItems[i].addEventListener('click', (e)=>{
        
        [...navItems].map(item =>{
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }
        })
        navItems[i].classList.add("active");
        console.log(e.target.id);
        navItems[i].setAttribute("href", e.target.id);
    
    }
    )
}

