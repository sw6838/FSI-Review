
/*let container = document.querySelectorAll('.container');
for (let i = 0; i < container.lenght; i++) {
    let button = document.createElement('button');
    button.textContent = 'Vote';
    button.setAttribute('id','voting-container');
    container[i].append(button)

}*/

let dogDiv = document.querySelector('#doggo');
let catDiv = document.querySelector('#catto');
let fishDiv = document.querySelector('#fish');

let dogVotebtn = document.createElement('button');
dogVotebtn.textContent = "Vote for Dog";
dogDiv.append(dogVotebtn);

let catVotebtn =document.createElement('button');
catVotebtn.textContent = "Vote for Cat";
catDiv.append(catVotebtn);

let fishVotebtn = document.createElement('button');
fishVotebtn.textContent = "Vote for Fish";
fishDiv.append(fishVotebtn);
