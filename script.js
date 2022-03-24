let num1=8
let num2 =2
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
    let sumEl = document.getElementById("sum-el")
let Additon = num1+num2
let subtruction = num1-num2
let Devision = num1/num2
let Multiplication = num1*num2
function Add(){
    Additon
    sumEl.textContent = "OuPut ="+ Additon
}
function Subtruct(){
    subtruction
    sumEl.textContent = "OuPut ="+ subtruction
}
function Divede(){
    Devision
    sumEl.textContent = "OuPut ="+  Devision
}
function Multply(){
    Multiplication
    sumEl.textContent = "OuPut ="+ Multiplication
}