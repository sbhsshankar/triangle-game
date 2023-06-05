

const inputAngles = document.querySelectorAll(".input-angle");
const buttonSubmit = document.querySelector("#button-submit");
const outputAnswer = document.querySelector("#output-answer");

 function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
 }

function Triangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputAngles[0].value),Number(inputAngles[1].value),Number(inputAngles[2].value));
   
    if(sumOfAngles == 180){
        outputAnswer.innerText = "Yay, The angles form a triangle"
    }else{
        outputAnswer.innerText = "O Oo! The angles don't form a triangle"
    }
}

buttonSubmit.addEventListener('click', Triangle);
