function loadGame() {
    const grid = document.querySelector('.grid');
    let card_01 = new Card(1, "Name 01", "ty", "./test/img/luffy.jpeg", "./test/img/luffy.jpg", "Test1 description");
    card_01.action = () => {
        console.log('hi');
    };
    let card_02 = new Card(2, "Name 02", "ty", "./test/img/luffy.jpeg", "./test/img/luffy.jpg", "Test2 description");
    card_02.action = () => {
        console.log('hi');
    };
    let card_03 = new Card(3, "Name 03", "ty", "./test/img/luffy.jpeg", "./test/img/luffy.jpg", "Test3 description");
    card_03.action = () => {
        console.log('hi');
    };
    let card_04 = new Card(4, "Name 04", "ty", "./test/img/luffy.jpeg", "./test/img/luffy.jpg", "Test4 description");
    card_04.action = () => {
        console.log('hi');
    };
    let card_05 = new Card(5, "Name 05", "ty", "./test/img/luffy.jpeg", "./test/img/luffy.jpg", "Test5 description");
    card_05.action = () => {
        console.log('hi');
    };
    let card_06 = new Card(6, "Name 06", "ty", "./test/img/luffy.jpeg", "./test/img/luffy.jpg", "Test6 description");
    card_06.action = () => {
        console.log('hi');
    };

    grid.appendChild(card_01.toHTML());
    grid.appendChild(card_02.toHTML());
    grid.appendChild(card_03.toHTML());
    grid.appendChild(card_04.toHTML());
    grid.appendChild(card_05.toHTML());
    grid.appendChild(card_06.toHTML());
}

window.onload = () => {
    loadGame();
}