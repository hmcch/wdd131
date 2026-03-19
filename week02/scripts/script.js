const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______'); // Fill in the blank to reference the unordered list element.
const li = document.createElement('li');// the variable name does not have to match the element type being created.
const deleteButton = document.createElement('button');//create delete button
li.textContent = input.value;//Populate the li element variable's textContent or innerHTML with the input value
deleteButton.textContent = '❌';// Set the delete button's textContent to ❌
li.append(deleteButton);//Append the delete button to the li element
list.append(li);
<button aria-label="Close" id="close-button">❌</button>
//To help screen readers understand the button's purpose.
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {...}
});