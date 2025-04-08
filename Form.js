document.getElementById('add-skill').addEventListener('click', function() {
    const skillInput = document.getElementById('skill');
    const skillValue = skillInput.value.trim();
    if (skillValue) {
        const li = document.createElement('li');
        li.textContent = skillValue;
        document.getElementById('skills-list').appendChild(li);
        skillInput.value = '';
    }
});

emailnode = document.getElementById("email")
birthdaynode = document.getElementById("birthday")
passwordnode = document.getElementById("password")
const form = document.getElementById('user-form') 



form.addEventListener('submit', function(event) {
    event.preventDefault();
    const skills = [];
    const skillItems = document.getElementById('skills-list').getElementsByTagName('li');
    const collection = form.querySelectorAll(".error")
    for (const el of collection){
        el.remove();
    }
    
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
        //  document.getElementById("email").insertAdjacentHTML("afterend","<p>Make sure email ends in a valid domain</p>")
    let passes = 0;
    fetch('http://localhost:3000/validateEmail', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: sendata.email })
    }).then(response => response.json())
    .then(result => {
        data = result.data
        length= data.length
        if (data === true){
            console.log("rmail_clear")
            passes +=1
            console.log(passes)
        } else{
            emailclear=false
            emailnode.insertAdjacentHTML("afterend",data)
        }

    })
    .catch(error => {
        console.error('Error:', error);
    });

    fetch('http://localhost:3000/validateDate', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ birthday: sendata.birthday })
    }).then(response => response.json())
    .then(result => {

        data = result.data
        length= data.length
        if (data === true){
            console.log("date_clear")
            passes +=1
            console.log(passes)
        } else{
            birthdayclear = false
            birthdaynode.insertAdjacentHTML("afterend",data)
        }

    })
    .catch(error => {
        console.error('Error:', error);
    });

    fetch('http://localhost:3000/validatePassword', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ password: sendata.password })
    }).then(response => response.json())
    .then(result => {
        data = result.data
        length= data.length
        if (data === true){
            console.log("pass_clear")
            passes +=1
            console.log(passes)
        } else{
            passwordnode.insertAdjacentHTML("afterend",data)
        }

    })
    .catch(error => {
        console.error('Error:', error);
    });

    if (passes ==3){
        
    }
});

