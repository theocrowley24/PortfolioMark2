
/*
* Hamburger menu
*/

let hamburgerButton = document.getElementById('hamburger-button');
let hamburgerMenu = document.getElementById('hamburger');

let showingHamburger = false;

hamburgerButton.addEventListener('click', function (event) {
    if (showingHamburger) {
        hamburgerMenu.classList.remove('hamburger-displayed');
        hamburgerMenu.classList.add('hamburger-not-displayed');
        showingHamburger = false;
    } else {
        hamburgerMenu.classList.remove('hamburger-not-displayed');
        hamburgerMenu.classList.add('hamburger-displayed');
        showingHamburger= true;
    }
});

/*
* API calls
*/

let nameElement = document.getElementById('name-title');
let nameDesc = document.getElementById('about-me');

fetch("https://209.97.186.249:1337/main").then(response => response.json()).then(data => {
    nameElement.innerHTML = data.name;
    nameDesc.innerHtml = data.titleDesc;
});

let section2 = document.getElementById('section-2');

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

fetch("https://209.97.186.249:1337/work-experiences").then(response => response.json()).then(data => {
    

    for (let i = 0; i < data.length; i++) {
        let workExample = htmlToElement(`<div class='work-example'>
                                            <p id='header'>${data[i].companyName || "" }</p>
                                            <p id='date'>${data[i].date || "" }</p>
                                            <p id='text'>
                                                ${data[i].description || "" }
                                            </p>

                                            <p id='quote'>
                                                ${data[i].feedback || "" }
                                            </p>

                                            ${data[i].technologiesUsed&& data[i].technologiesUsed.length > 0 ? `<p id='list-header'>Technologies used</p><div id='tech-wrapper'></div>` : ""}
                                        </div>`);

        if (data[i].technologiesUsed && data[i].technologiesUsed.length > 0) {
            let tech = document.createElement('ul');

            for (let j = 0; j < data[i].technologiesUsed.length; j++) {
                let listItem = document.createElement('li');
                listItem.innerHTML = data[i].technologiesUsed[j];
                tech.appendChild(listItem);
            }

            workExample.querySelector('#tech-wrapper').appendChild(tech);
        }                             

        section2.appendChild(workExample);


    }    
});



