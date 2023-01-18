document.addEventListener("DOMContentLoaded", (e)=>{
    let currentTab = document.getElementById(window.localStorage.getItem('id'));
    new bootstrap.Tab(currentTab).show() // Select tab by name
})

const triggerTabList = document.querySelectorAll('#navigate button')
triggerTabList.forEach(triggerEl => {
  triggerEl.addEventListener('click', event => {
    window.localStorage.setItem("id", triggerEl.id);
  })
})

//tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

for(let i=0; i<tooltipTriggerList.length; i++){
  new bootstrap.Tooltip(tooltipTriggerList[i], {trigger: 'hover'});
}
