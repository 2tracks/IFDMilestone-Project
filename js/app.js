const key = 'key=$2a$10$9fftCXDrCb6LJ27jrH38EubyvIEFVfxRlezzYggIBpwJvj2ATZh9K';
const API = 'https://www.potterapi.com/v1/';
const hpAPI = 'https://hp-api.herokuapp.com/api/';

const houseInfos = document.getElementById('houseInfos');
const characterList = document.getElementById('characterList');
const randomHouse = document.querySelector('#house');
const Hbg = document.querySelector('.landingPage');

document.querySelector('#sorting').addEventListener('click', function () {
    console.log("sorting button pressed");
    sortHat();
})

function sortHat() {
    fetch(`${API}sortingHat`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((dataHouse) => {
            console.log(dataHouse);
            randomHouse.textContent = (dataHouse);
            // invokes the function after the house Value is received
            InfoHouses(dataHouse);
            changeBg(dataHouse);
            houseMates(dataHouse);
        })
}

// Changes the background depending on the house

function changeBg(dataHouse) {
    var classList = Hbg.classList;
    while (classList.length > 0) {
        classList.remove(classList.item(0));
    }

    if (dataHouse == 'Hufflepuff') {
        Hbg.classList.add('Hufflepuff');
        Hbg.classList.item(0).remove;
    } else if (dataHouse == 'Gryffindor') {
        Hbg.classList.add('Gryffindor');
        Hbg.classList.item(0).remove;
    } else if (dataHouse == 'Slytherin') {
        Hbg.classList.add('Slytherin');
        Hbg.classList.item(0).remove;
    } else if (dataHouse == 'Ravenclaw') {
        Hbg.classList.add('Ravenclaw');
        Hbg.classList.item(0).remove;
    }
}

// gets house Infos
function InfoHouses(dataHouse) {
    fetch(`${API}houses?${key}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((houses) => {
            console.log(houses);
            let houseValues = houses
                .map((house) => {
                    if (house.name == dataHouse) {
                        return `
                <div class='houseInfoItem text-center'>Head of House: ${house.headOfHouse}</div>
                <div class='houseInfoItem text-center'>Mascot: ${house.mascot}</div>
                <div class='houseInfoItem text-center'>House Ghost: ${house.houseGhost}</div>
                <div class='houseInfoItem text-center'>Founder: ${house.founder}</div>`
                    }
                })
                .join('');
                houseInfos.innerHTML = (houseValues);
        })
}

// gets the character List from potterapi.com
function houseMates(dataHouse) {
    fetch(`${API}characters?${key}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((characters) => {
            console.log(characters);
            let characterValues = characters
                .map((character) => {
                    if (character.house == dataHouse) {
                        return `
                            <div class = "character flex-fill flex-grow ml-2 mr-2">
                                <h2 id='characterName'>${character.name}</h2>
                                <p>House: ${character.house}</p>
                            </div>`;
                    }
                })
                .join('');
            characterList.innerHTML = (characterValues);
        });
}