// Selecting the necessary elements from the DOM
const quantityNotification = document.getElementById('notification-quantity');
const markRead = document.getElementById('mark-read');
const markDiv = document.getElementById('mark-div');
const angelaDiv = document.getElementById('angela-div');
const jacobDiv = document.getElementById('jacob-div');
const markDot = document.getElementById('webber-dot');
const angelaDot = document.getElementById('angela-dot');
const jacobDot = document.getElementById('jacob-dot');






// Initializing the notification count to 3
let count = 3;








// Event listener for the "Mark All Read" button
markRead.addEventListener('click', () => {
    // Resetting the background and dot display for all notifications
    markDiv.style.background = 'var(--white)';
    markDot.style.display = 'none';
    angelaDiv.style.background = 'var(--white)';
    angelaDot.style.display = 'none';
    jacobDiv.style.background = 'var(--white)';
    jacobDot.style.display = 'none';
    // Setting the notification count to 0
    quantityNotification.textContent = '0';
})





// Event listener for the "Mark" notification
markDiv.addEventListener('click', () => {
    // Checking if the dot is currently visible
    if (markDot.style.display !== 'none') {
        // Hiding the dot and updating the notification count
        markDiv.style.background = 'var(--white)';
        markDot.style.display = 'none';
        count--;
        quantityNotification.textContent = count;
    }
});







// Event listener for the "Angela" notification
angelaDiv.addEventListener('click', () => {
    // Checking if the dot is currently visible
    if(angelaDot.style.display !== 'none'){
        // Hiding the dot and updating the notification count
        angelaDiv.style.background = 'var(--white)';
        angelaDot.style.display = 'none';
        count--;
        quantityNotification.textContent = count;
    }
})






// Event listener for the "Jacob" notification
jacobDiv.addEventListener('click', () =>{
    // Checking if the dot is currently visible
    if(jacobDot.style.display !== 'none'){
        // Hiding the dot and updating the notification count
        jacobDiv.style.background = 'var(--white)';
        jacobDot.style.display = 'none';
        count--;
        quantityNotification.textContent = count;
    }
})





