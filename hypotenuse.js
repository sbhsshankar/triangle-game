

const inputSide = document.querySelectorAll(".side-input");
const buttonHypotenuse = document.querySelector("#button-hypotenuse");
const outputHypotenuse = document.querySelector("#output-hypotenuse");

function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(inputSide[0].value), Number(inputSide[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

    outputHypotenuse.innerText = "The length of hypotenuse is " + lengthOfHypotenuse
}

buttonHypotenuse.addEventListener('click', calculateHypotenuse);