function loadGame() {
    const grid = document.querySelector('.grid');
    let card = new Card(1, "Test Name", "type", "./lib/cards/img/luffy.jpeg", "./lib/cards/img/luffy.jpg", "Test description");

    card.action = () => {
        console.log('hi');
    };

    grid.appendChild(card.toHTML());
    grid.appendChild(card.toHTML());
    grid.appendChild(card.toHTML());
    grid.appendChild(card.toHTML());
    grid.appendChild(card.toHTML());

    let element = document.createElement("div");
    grid.appendChild(element);
}

window.onload = () => {
    loadGame();
}