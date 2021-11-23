
/*let container = document.querySelectorAll('.container');
for (let i = 0; i < container.lenght; i++) {
    let button = document.createElement('button');
    button.textContent = 'Vote';
    button.setAttribute('id','voting-container');
    container[i].append(button)

}*/

let dogVotes = 0;
let catVotes = 0;
let fishVotes =0;

let dogDiv = document.querySelector('#doggo');
let catDiv = document.querySelector('#catto');
let fishDiv = document.querySelector('#fish');

let dogVotebtn = document.createElement('button');
dogVotebtn.textContent = "Vote for Dog";
dogDiv.append(dogVotebtn);

dogVotebtn.addEventListener('click', function(){
dogVotes = dogVotes + 1;
document.querySelector("#doggo-votes") .textContent = dogVotes;
localStorage.setItem('dogVotes', dogVotes);
document.querySelector("#total-votes") .textContent = dogVotes + catVotes + fishVotes;
})

let catVotebtn = document.createElement('button');
catVotebtn.textContent = "Vote for Cat";
catDiv.append(catVotebtn);

catVotebtn.addEventListener('click', function(){
    catVotes = catVotes + 1;
    document.querySelector("#catto-Votes") .textContent = catVotes;
    localStorage.setItem('catVotes', catVotes);
    document.querySelector("#total-votes") .textContent = dogVotes + catVotes + fishVotes;
})

let fishVotebtn = document.createElement('button');
fishVotebtn.textContent = "Vote for Fish";
fishDiv.append(fishVotebtn);

fishVotebtn.addEventListener('click', function(){
    fishVotes = fishVotes + 1;
    document.querySelector("#fish-Votes") .textContent = fishVotes;
    localStorage.setItem('fishVotes', fishVotes);
    document.querySelector("#total-votes") .textContent = dogVotes + catVotes + fishVotes;
})
