var data_container = document.querySelector('.data-container');
var data_template = document.querySelector('.data-template');

let gallery = [];

fetch("data.json").then(response => response.json())
.then(data => {
    gallery = data.map(photo => {
        const card = data_template.content.cloneNode(true).children[0];
        const sno = card.querySelector('.sno');
        const dot = card.querySelector('.dot');
        const name = card.querySelector('.name');
        const place = card.querySelector('.place');
        const image = card.querySelector('.image');

        sno.textContent = photo.id;
        dot.textContent = photo.dot;
        name.textContent = photo.name;
        place.textContent = photo.place;
        image.src = photo.image_url;

        data_container.appendChild(card)
    })
})