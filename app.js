const myName = document.getElementById('name');
const myInput = document.getElementById('name-input');
const myButton = document.getElementById('name-button');

myButton.addEventListener('click', () => {
    const userInput = myInput.value;
    myName.textContent = userInput;  
    console.log(userInput)
});
