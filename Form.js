document.getElementById('add-skill').addEventListener('click', function() {
    // Get the skill input value
    const skillInput = document.getElementById('skill');
    const skillValue = skillInput.value.trim();

    if (skillValue) {
        const li = document.createElement('li');
        li.textContent = skillValue;
        document.getElementById('skills-list').appendChild(li);
        skillInput.value = '';
    }
});


const form = document.getElementById('user-form') 
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const skills = [];
    const skillItems = document.getElementById('skills-list').getElementsByTagName('li');
    for (let i = 0; i < skillItems.length; i++) {
        skills.push(skillItems[i].textContent);
    }   

    const forminnfo = new FormData(form)
    let outputarr = []
    let skillsarr= []
    for (let object of forminnfo){
        if (object[0]!="skill"){
            outputarr.push(object)
        }
    }
    if (skillItems.length){
        for (let i=0 ;i<skillItems.length;i++ ){
            skillsarr.push(skillItems.item(i).innerHTML)
        }
    } else{
        skillsarr = "No skills"
    }
    
    outputarr.push(["skills",skillsarr])
    const sendata = Object.fromEntries(outputarr)
    console.log("Test",sendata)
   

    fetch('http://localhost:3000/upload', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sendata)
    });
    
});

