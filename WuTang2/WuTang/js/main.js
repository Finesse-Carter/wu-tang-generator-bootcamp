//*Collaborated with Eric, Asiah, Vanessa, Zahmir, Nyah, Joshua  */
let button = document.getElementById('button')
let name = document.getElementById('response')
button.addEventListener("click", () => {
var adjectives = ["Ambivalent", "walker of shadows", "animistic", "shinobi", "Arcaic",
    "Arcane", "Brutal", "star duelist", "spy", "boorish", "calamitous",
    "caustic", "genius", "blaster", "Shadow Hunter", "contumacious", "corpulent","shinobu","host"]

var nouns = ["Ninja", "Technician", "dark warrior", "Zero-Assassin", "MegaLord", "wizard",
    "Murderer", "LastSamurai", "hired ruffian", "Captain", "ninjutsu", "hired killer", "Katana",
    "knight of night", "shadow", "killgrave","slap",
    "Exorcist", "warrior of the night"]    
    let pet = document.getElementById('pet').value
    let food = document.getElementById('food').value
    let music = document.getElementById('music').value
    let powers = document.getElementById('powers').value
    let tv = document.getElementById('tv').value
    let moive = document.getElementById('movie').value
    let noune = [food,tv,powers] 
    let sumOfNoune = 0
for(let i=0; i<noune.length; i++){
  sumOfNoune += Number(noune[i])
} 
    let adjective = [moive,pet,music]
    let sumOfadjective = 0
    for(let i=0; i<adjective.length; i++){
      sumOfadjective += Number(adjective[i])
    }   
console.log(noune);
console.log(adjective);
console.log(sumOfNoune);
console.log(sumOfadjective);
console.log(nouns[sumOfNoune]);
console.log(adjectives[sumOfadjective]);


name.innerHTML= adjectives[sumOfadjective]+" "+nouns[sumOfNoune]

 
});

document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
  });