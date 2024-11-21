const peopleList = document.getElementById('peopleList');
const preloader = document.getElementById('preloader');

function showLoad(){
    preloader.classList.add('load');
}

function hideLoad(){
    preloader.classList.remove('load');
}

showLoad();
fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
        hideLoad();
        for (let i = 0; i < data.results.length; i++){
            let newPerson = document.createElement('div');
            newPerson.classList.add('people-list__item');
            newPerson.innerHTML = 
                `<img src="${data.results[i].picture.large}" alt="">
                <div class='people-list__item-body'>
                <p>Имя: ${data.results[i].name.first}</p>
                <p>email: ${data.results[i].email}</p>
                </div>`;
            peopleList.appendChild(newPerson);
        }
    }).catch((error)=>{
        console.log('Ошибка ' + error);
    });

