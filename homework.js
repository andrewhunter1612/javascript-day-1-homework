// 1 - themurderer is miss scarlet

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

// 2 - will give prof plum as the murdered

// 3 - first verdict will be mrs peacock, second verdict will be prof plum

// 4 - first line: scarlet, plum, mustard. second line: peacock

// 5 - will return revolver

// 6 - murderer is mrs white

// 7 - murderer is mr green

// 8 - weapon is candlestick, murderer is col mustard, room is dining room

// 9 - murderer is prof plum



let murderer = 'Miss Scarlet';
let weapon = "candlestick"
let room = "bedroom"

const changeMurderer = function(new_murderer){
     murderer = new_murderer;
}

const changeWeapon = function(new_weapon){
    weapon = new_weapon;
}

const changeScenario = function(){
    if (weapon === 'Candlestick'){
        changeWeapon('revolver')
    }

    if (murderer !== "Miss Scarlet"){
        changeMurderer('Col Mustard')
    } else {
        room = 'Study'
    }
}
changeScenario();
const getEverything = function(){
    return `The murderer is ${murderer}, in the ${room} and the weapon is ${weapon}`
}

const verdict = getEverything();
console.log(verdict)

