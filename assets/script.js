
let browserPrompt;
let computerChoice;

let win=0;
let loss=0;
let tie=0;

function compareChoices(browserPrompt, computerChoice) {
    browserPrompt = prompt("Enter r or p or s");
    let getRandom = Math.floor(Math.random() * 3);

    console.log(getRandom);
    
    if (getRandom === 0) {
        computerChoice = "r";
    } else if (getRandom === 1) {
        computerChoice = "p";
    } else {
        computerChoice = "s";
    }

    alert("Computer Choice is " + computerChoice);

    if (browserPrompt === "r" || browserPrompt === "s" || browserPrompt === "p") {
        if (computerChoice == browserPrompt) {
            tie+=1;
            alert("It's a Tie");
        } else if (browserPrompt === "p" && computerChoice === "r") {
            win+=1;
            alert("You Win!");
        } else if (browserPrompt === "s" && computerChoice === "p") {
            win+=1;
            alert("You Win!");
        } else if (browserPrompt === "r" && computerChoice === "s") {
            win+=1;
            alert("You Win!");
        } else {
            loss+=1;
            alert("Computer Wins!");
        }
    } else {
        alert("You Must Enter r or p or s");
    }

    alert("Your Win: "+win+ ", Your Loss: "+loss+ ", Ties: "+tie);

    if (window.confirm("Do you want to play again?")) {
        compareChoices(browserPrompt, computerChoice);
    }
    return;
}

compareChoices(browserPrompt, computerChoice);

