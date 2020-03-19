/*jshint esversion:6 */

const key = 'key=$2a$10$9fftCXDrCb6LJ27jrH38EubyvIEFVfxRlezzYggIBpwJvj2ATZh9K';
const API = 'https://www.potterapi.com/v1/';

const houseInfos = document.getElementById('houseInfos');
const characterList = document.getElementById('characterList');
const randomHouse = document.querySelector('#house');
const Hbg = document.querySelector('.landingPage');
const dumbledorsArmy = document.querySelector('#dumbledorsArmy');
const NodumMember = document.querySelector('.no-dumMember');
const deatheaters = document.querySelector('#deatheaters');
const selectSpell = document.querySelector('#spells');
const aSpell = document.getElementById('aSpell');

//-----gets a random house -----------------------------------------------------------------------------------------

document.querySelector('#sorting').addEventListener('click', function () {
    console.log("sorting button pressed");
    sortHat();
});

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
            dumbledorsArmyMember(dataHouse);
            deatheaterMember(dataHouse);
        });
}

//-------- Changes the background depending on the house-------------------------------------------------------------

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

//----- gets the infos of the selected house------------------------------------------------------------------------------

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
                <div class='houseInfoItem text-center'>Founder: ${house.founder}</div>`;
                    }
                })
                .join('');
                houseInfos.innerHTML = (houseValues);
        });
}

//----- gets the character List from potterapi.com-------------------------------------------------------------

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
                            <div class = "character flex-fill ml-2 mr-2">
                                <h2 id='characterName'>${character.name}</h2>
                                <p>House: ${character.house}</p>
                            </div>`;
                    }
                })
                .join('');
            characterList.innerHTML = (characterValues);
        });
}

//-------Shows how many Member of Dumbledors Army are in the selected house -----------------------------------------------

function dumbledorsArmyMember(dataHouse) {
    fetch(`${API}characters?${key}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((characters) => {
            console.log(characters);
            let dCharacterValues = characters
                .map((character) => {
                    if ((character.house == dataHouse) && (character.dumbledoresArmy == true)) {
                        return `
                            <div class = "Dcharacter">
                                <h2 id='DcharacterName'>${character.name}</h2>
                                <p>House: ${character.house}</p>
                            </div>`;
                    } else if((character.house == dataHouse) && (character.dumbledoresArmy == false)){
                        
                        NodumMember.innerHTML=("There is no member of Dumbledors Army in this house");
                    }
                })
                .join('');
            dumbledorsArmy.innerHTML = (dCharacterValues);
            console.log('dumbledores', dCharacterValues);
        });
}

//-------Shows how many deatheaters are in the selected house -----------------------------------------------

function deatheaterMember(dataHouse) {
    fetch(`${API}characters?${key}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((characters) => {
            console.log(characters);
            let deathCharacterValues = characters
                .map((character) => {
                    if ((character.house == dataHouse) && (character.deathEater == true)) {
                        return `
                            <div class = "DECharacter">
                                <h2 id='DECharacterName'>${character.name}</h2>
                                <p>House: ${character.house}</p>
                            </div>`;
                    }
                })
                .join('');
            deatheaters.innerHTML = (deathCharacterValues);
            console.log('deatheaters', deathCharacterValues);
        });
}

//-------------Spell section---------------------------------------------------------------------------


function hpSpells() {
    fetch(`${API}spells?${key}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((spells) => {
            console.log(spells);
            let spellValues = spells
                .map((spell) => {
                    return `    
                                <option id='spellName' value='${spell.spell}'>${spell.spell}</option>
                            `;
                })
                .join('');
            selectSpell.innerHTML = (spellValues);
            console.log('spells', spellValues);
        });
}
hpSpells();

//-------EventListener for the select menu -------------------------------------------------------------

selectSpell.addEventListener('change', (getSelectedValue) =>{
    let selectValue = document.getElementById('spells').value;
    console.log(selectValue);
    spellType(selectValue);
});

//-------Shows the type and effect of the selected spell -----------------------------------------------

function spellType(selectValue) {
    fetch(`${API}spells?${key}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((spells) => {
             let TEValue = spells
                    .map((spell)=> {
                        if(selectValue == spell.spell){
                            return `
                                    <div class = 'col'>Spell name: ${spell.spell}</div>
                                    <div class = 'col'>Type: ${spell.type}</div>
                                    <div class = 'col'>Effect: ${spell.effect}</div>
                            `;
                        }
                    })
                    .join('');

            aSpell.innerHTML = (TEValue);
            console.log(TEValue);
        
        });
}

