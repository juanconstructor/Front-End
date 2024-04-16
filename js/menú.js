const editButton = document.getElementById('edit-button');
const menuItems = document.querySelectorAll('.menu-contenido p');

editButton.addEventListener('click', () => {
    menuItems.forEach(item => {
        item.contentEditable = true;
    });
});

const saveButton = document.getElementById('save-button');
const successModal = document.getElementById('successModal');
const continueButton = document.getElementById('continueButton');

saveButton.addEventListener('click', () => {
    // Add your save logic here

    // Show the success modal
    successModal.style.display = 'block';
});

continueButton.addEventListener('click', () => {
    // Hide the success modal
    successModal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target == successModal) {
        successModal.style.display = 'none';
    }
});