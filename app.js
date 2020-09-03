const myName = document.getElementById('name');
const myInput = document.getElementById('name-input');
const myButton = document.getElementById('name-button');
const blueButton = document.getElementById('blue-button')
const greenButton = document.getElementById('green-button')
const pinkButton = document.getElementById('pink-button')

myButton.addEventListener('click', () => {
    const userInput = myInput.value;
    myName.textContent = userInput;  
});
blueButton.addEventListener('click', () => {
    document.body.style.backgroundColor = "blue"
})
greenButton.addEventListener('click', () => {
    document.body.style.backgroundColor = "green"
})
pinkButton.addEventListener('click', () => {
    document.body.style.backgroundColor = "palevioletred"
})