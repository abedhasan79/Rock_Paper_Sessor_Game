
let browserPrompt = prompt("Enter r or p or s");

let getRandom = Math.floor(Math.random() * 3);

console.log(getRandom);
let computerChoice;
if(getRandom==0){
    computerChoice="r";
}else if(getRandom==1){
    computerChoice="p";
}else{
    computerChoice="s";
}

alert("Computer Choice is "+computerChoice);

if(computerChoice==browserPrompt){
    alert("It's a Tie");
}else if( browserPrompt=="p" && computerChoice=="r"){
    alert("You Win!");
}else if(browserPrompt=="s" && computerChoice=="p"){
    alert("You Win!");
}else if(browserPrompt=="r" && computerChoice=="s"){
    alert("You Win!");
}else{
    alert("Computer Wins!");
}



if(window.confirm("Do you want to play again?")){
    location.reload();
}