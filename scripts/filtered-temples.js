const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const templesList = document.querySelector("#templesList");
const h1 = document.querySelector("h1");

const homeLink = document.querySelector("#allTemples");
const oldLink = document.querySelector("#oldTemples");
const newLink = document.querySelector("#newTemples");
const largeLink = document.querySelector("#largeTemples");
const smallLink = document.querySelector("#smallTemples");


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tuxtla Gutierrez Mexico",
        location: "Tuxtla Gutierrez, Chiapas, Mexico",
        dedicated: "2000, March, 12",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tuxtla-gutierrez-mexico-temple/tuxtla-gutierrez-mexico-temple-15226-main.jpg"
    },
    {
        templeName: "Merida Mexico",
        location: "Merida, Yucatan, Mexico",
        dedicated: "2000, July, 8",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/merida-mexico-temple/merida-mexico-temple-14119-main.jpg"
    },
    {
        templeName: "Puebla, Mexico",
        location: "Puebla, Puebla, Mexico",
        dedicated: "2024, May, 19",
        area: 35865,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46342-main.jpg"
    },
];

hamButton.addEventListener("click", () => {

    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

function createCard(filteredTemples) {
    templesList.innerHTML = "";

    filteredTemples.forEach((temple, index) => {



        const card = document.createElement("div");
        card.classList.add("temple-card");

        const h2 = document.createElement("h2");
        h2.textContent = temple.templeName;

        const templeInformations = document.createElement("div");
        templeInformations.classList.add("temple-informations");

        let location = temple.location.split(",");
        location = `${location.at(0)}, ${location.at(-1)}`;

        let dedication = temple.dedicated.split(",");
        dedication = `${dedication.at(1)}, ${dedication.at(0)}`

        templeInformations.innerHTML = `<ul>
      <li>
          <span class="data-label">Location: </span>
          <span class="data-information">${location}</span>
      </li>
      <li>
          <span class="data-label">Dedicated: </span>
          <span class="data-information">${dedication}</span>
      </li>
      <li>
          <span class="data-label">Size: </span>
          <span class="data-information">${temple.area} sq fit</span>
      </li>
    </ul>`

        const picture = document.createElement("picture");

        if (index == 0) {
            picture.innerHTML = `<img src=${temple.imageUrl} alt=An image of ${temple.templeName} width="400" height="250" fetchpriority="high">`;
        } else {
            picture.innerHTML = `<img src=${temple.imageUrl} alt=An image of ${temple.templeName} loading="lazy" width="400" height="250">`;
        }

        card.appendChild(h2);

        card.appendChild(templeInformations);

        card.appendChild(picture);

        templesList.appendChild(card);
    });

}

createCard(temples);

function removeActiveClass() {
    const activeElement = document.querySelector(".active");
    if (activeElement) {
        activeElement.classList.remove("active");
    }
}

homeLink.addEventListener("click", (event) => {

    h1.textContent = "Home";

    hamButton.classList.remove("open");
    navigation.classList.remove("open");

    removeActiveClass()
    event.target.classList.add("active");

    createCard(temples);
});

oldLink.addEventListener("click", (event) => {

    h1.textContent = "Old Temples";

    hamButton.classList.remove("open");
    navigation.classList.remove("open");

    removeActiveClass()
    event.target.classList.add("active");

    const oldTemples = temples.filter(temple => {
        let templeDedication = parseInt(temple.dedicated.split(",")[0]);
        return templeDedication < 1900;
    });
    // debugger;
    createCard(oldTemples);
});

newLink.addEventListener("click", (event) => {

    h1.textContent = "New Temples";

    hamButton.classList.remove("open");
    navigation.classList.remove("open");

    removeActiveClass()
    event.target.classList.add("active");

    const newTemples = temples.filter(temple => {
        let templeDedication = parseInt(temple.dedicated.split(",")[0]);
        return templeDedication > 2000;
    });
    // debugger;
    createCard(newTemples);
});

largeLink.addEventListener("click", (event) => {

    h1.textContent = "Large Temples";

    hamButton.classList.remove("open");
    navigation.classList.remove("open");

    removeActiveClass()
    event.target.classList.add("active");

    const largeTemples = temples.filter(temple => {
        let area = temple.area;
        return area > 90000;
    });
    // debugger;
    createCard(largeTemples);
});

smallLink.addEventListener("click", (event) => {

    h1.textContent = "Small Temples";

    hamButton.classList.remove("open");
    navigation.classList.remove("open");

    removeActiveClass()
    event.target.classList.add("active");

    const smallTemples = temples.filter(temple => {
        let area = temple.area;
        return area < 10000;
    });

    createCard(smallTemples);
});

// const menuButton = document.getElementById('navigation');
// const navigation = document.querySelector('.navigation-menu');
// const lastModified = document.querySelector('#lastModified');
// const currentYear = document.getElementById('currentyear');
// const main = document.querySelector('main');

// menuButton.addEventListener('click', () => {
//     if (navigation.classList.contains('open')) {
//         navigation.classList.remove('open');
//         menuButton.textContent = '☰'
//     }

//     else {
//         navigation.classList.add('open');
//         menuButton.textContent = 'X';

//     }
// });

// function displayTemples(temples) {
//     main.innerHTML = "<h1>Temple Album</h1>";

//     const grid = document.createElement('div');
//     grid.classList.add('temple-grid');
// }

// temples.forEach((temple) => {
//     const card = document.createElement('section');
//     const name = document.createElement('h3');
//     const location = document.createElement('p');
//     const dedicated = document.createElement('p');
//     const area = document.createElement('p');
//     const image = document.createElement('img');

//     name.textContent = temple.templeName;
//     location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
//     dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
//     area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

//     image.setAttribute('src', temple.imageUrl);
//     image.setAttribute('alt', temple.templeName);
//     image.setAttribute('loading', 'lazy');
//     image.setAttribute('width', '400');
//     image.setAttribute('height', '250');

//     card.appendChild(name);
//     card.appendChild(location);
//     card.appendChild(dedicated);
//     card.appendChild(area);
//     card.appendChild(image);

//     main.appendChild(card);
// });

// displayTemples(temples);

// document.querySelector('#home').addEventListener('click', () => {
//     displayTemples(temples);
// });

// document.querySelector('#old').addEventListener('click', () => {
//     const oldTemples = temples.filter((temple) => {
//         return Number(temple.dedicated.split(',')[0]) < 1900;
//     });
//     displayTemples(oldTemples);
// });

// document.querySelector('#new').addEventListener('click', () => {
//     const newTemples = temples.filter((temple) => {
//         return Number(temple.dedicated.split(',')[0]) > 2000;
//     });
//     displayTemples(newTemples);
// });

// document.querySelector('#large').addEventListener('click', () => {
//     const largeTemples = temples.filter((temple) => {
//         return temple.area > 90000;
//     });
//     displayTemples(largeTemples);
// });

// document.querySelector('#small').addEventListener('click', () => {
//     const smallTemples = temples.filter((temple) => {
//         return temple.area < 10000;
//     });
//     displayTemples(smallTemples);
// });

// document.getElementById("currentyear").textContent = new Date().getFullYear();
// document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;