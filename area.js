

const inputBH = document.querySelectorAll(".input-bh");
const buttonArea = document.querySelector("#button-area");
const outputArea = document.querySelector("#output-area");

function calculateBxH(a, b){
    const mulOfBH =  (a * b) / 2;
    return mulOfBH;
}
    
function calculateArea() {
    const mulOfBH = calculateBxH(Number(inputBH[0].value), Number(inputBH[1].value));

    outputArea.innerText = "Area of a Triangle is " + mulOfBH + "cm²"
    
}

buttonArea.addEventListener("click", calculateArea);