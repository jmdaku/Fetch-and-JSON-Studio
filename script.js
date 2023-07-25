// TODO: add code here


window.addEventListener('load', function() {
    const container = document.getElementById("container");
    async function getAstronauts(){
       let response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json"); 
    
    let data = await response.json();
    
    console.log(data)

    for(let i = 0; i < data.length; i++){
        container.innerHTML += `
        <div class="astronaut">
        <div class="bio">
        <h3>${data[i].firstName}  ${data[i].lastName}</h3>
        <ul>
        <li>Hours in space: ${data[i].hoursInSpace}</li>
        <li>Active: ${data[i].active}</li>
        <li>Skills: ${data[i].skills} </li>
        </ul>
        </div>
        <img class="avatar" src="${data[i].picture}">
        </div>
        `
       }
    }      
    getAstronauts();
});