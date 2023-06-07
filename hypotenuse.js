

const inputSide = document.querySelectorAll(".side-input");
const buttonHypotenuse = document.querySelector("#button-hypotenuse");
const outputHypotenuse = document.querySelector("#output-hypotenuse");

function calculateSumOfSquares(c, d){
    const sumOfSquares = c*c + d*d;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(inputSide[0].value), Number(inputSide[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

    outputHypotenuse.innerText = "The length of hypotenuse is " + lengthOfHypotenuse
}

buttonHypotenuse.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse(){
    console.log("clicked");
}