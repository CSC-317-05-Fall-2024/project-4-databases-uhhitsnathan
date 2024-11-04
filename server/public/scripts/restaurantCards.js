// scripts/restaurantCards.js

document.addEventListener('DOMContentLoaded', () => {
    // Select the restaurant grid container
    const restaurantGrid = document.querySelector('.restaurant-grid');
    
    // Find all the delete buttons within the grid
    const deleteButtons = restaurantGrid.querySelectorAll('button');

    // Loop through all the delete buttons and attach event listeners
    for (let button of deleteButtons) {
        button.addEventListener('click', (event) => {
            // Get the restaurant ID from the button's data attribute (or id)
            let restaurantId = button.getAttribute('data-id'); // Assuming data-id is set on each button

            // Make the DELETE request to the server
            fetch(`/api/restaurants/${restaurantId}`, {
                method: 'DELETE'
            })
            .then(response => {
                return response.json(); // Parse the JSON response from the server
            })
            .then(data => {
                console.log(data); // Optional: Log the deleted data to the console
                window.location.reload(); // Auto-reload the page to reflect changes
            })
            .catch(error => {
                console.error('Error:', error); // Handle any errors
            });
        });
    }
});