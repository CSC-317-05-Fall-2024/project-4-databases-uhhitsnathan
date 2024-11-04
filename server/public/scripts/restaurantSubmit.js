document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Extract values from the form fields
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const photo = document.getElementById('photo').value; // Use a default photo if none is provided

        // Send a POST request to the backend to create the restaurant
        fetch('/api/restaurants', 
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {name,phone,address,photo}
            ),
        }).then(response =>{
            return response.json();
        }).then(data => {
            console.log(data);
            window.location.href = `/restaurants/${data.id}`;
        }).catch(error =>{
            console.error('error:', error);
        })
    });
});