// Data Stub
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg", rating: 3, comment: "Good but needs more flavor." }
];

// Function to display all ramens as images
function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; 

    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen)); // Handle image click

        ramenMenu.appendChild(img);
    });
}

// Function to display ramen details when an image is clicked
function handleClick(ramen) {
    document.getElementById('ramen-name').textContent = ramen.name;
    document.getElementById('ramen-restaurant').textContent = `Restaurant: ${ramen.restaurant}`;
    document.getElementById('ramen-rating').textContent = `Rating: ${ramen.rating}`;
    document.getElementById('ramen-comment').textContent = `Comment: ${ramen.comment}`;
}


function addSubmitListener() {
    const ramenForm = document.getElementById('ramen-form');
    
    ramenForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const restaurant = document.getElementById('restaurant').value;
        const image = document.getElementById('image').value;
        const rating = parseInt(document.getElementById('rating').value);
        const comment = document.getElementById('comment').value;

        const newRamen = {
            id: ramens.length + 1,
            name: name,
            restaurant: restaurant,
            image: image,
            rating: rating,
            comment: comment
        };

        ramens.push(newRamen); 

        displayRamens(); 
        ramenForm.reset(); 
    });
}


function main() {
    displayRamens(); 
    addSubmitListener(); 
}

document.addEventListener('DOMContentLoaded', main);
