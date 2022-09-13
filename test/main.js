function testLibCards() {
    const grid = document.querySelector('.grid-cards');
    let card_01 = new Card(1, "Name 01", "type-01", "./test/img/luffy.jpg", "./test/img/luffy.jpeg", "Description 01");
    card_01.action = () => {
        console.log('Card 01 flipped');
    };
    let card_02 = new Card(2, "Name 02", "type-02", "./test/img/luffy.jpg", "./test/img/luffy.jpeg", "Description 02");
    card_02.action = () => {
        console.log('Card 02 flipped');
    };
    let card_03 = new Card(3, "Name 03", "type-03", "./test/img/luffy.jpg", "./test/img/luffy.jpeg", "Description 03");
    card_03.action = () => {
        console.log('Card 03 flipped');
    };

    grid.appendChild(card_01.toHTML());
    grid.appendChild(card_02.toHTML());
    grid.appendChild(card_03.toHTML());
}

function testLibPaths() {
    Path.createPath(16, 3, false);
    console.log(Path.rooms);
    Path.createPath(10, 3);
    console.log(Path.rooms);
    Path.createPath(3, 1);
    console.log(Path.rooms);
}

function testLibBattle() {
    let player_01 = new Char(1, 30, 30, 59, 5, 5);
    let player_02 = new Char(2, 40, 40, 15, 20);
    let player_03 = new Char(3, 50, 50, 10, 10, 1);
    let player_04 = new Char(4, 60, 60, 5);
    Battle.addAlly(player_01);
    Battle.addAlly(player_02);
    Battle.addAlly(player_03);
    Battle.addAlly(player_04);
    console.table(Battle.allies);
    
    let enemy_01 = new Char(1, 30, 30, 15, 5, 5);
    let enemy_02 = new Char(2, 40, 40, 15, 20);
    let enemy_03 = new Char(3, 50, 50, 10, 10, 1);
    let enemy_04 = new Char(4, 60, 60, 5);
    Battle.addEnemy(enemy_01);
    Battle.addEnemy(enemy_02);
    Battle.addEnemy(enemy_03);
    Battle.addEnemy(enemy_04);
    console.table(Battle.enemies);

    Battle.normalAttack(player_01, enemy_01);
    Battle.normalAttack(player_02, enemy_02);
    Battle.normalAttack(player_03, enemy_03);
    Battle.normalAttack(player_04, enemy_04);

    Battle.autoAttack(player_01);
    Battle.updateTurn();
    
    Battle.autoAttack(enemy_01);
    Battle.updateTurn();

    Battle.autoAttack(player_01);
    Battle.autoAttack(player_01);
    Battle.autoAttack(player_01);
    Battle.autoAttack(player_01);
    Battle.autoAttack(player_01);
    Battle.autoAttack(player_01);
    Battle.autoAttack(player_01);
    Battle.autoAttack(player_01);
    Battle.autoAttack(player_01);
    Battle.autoAttack(player_01);
    Battle.autoAttack(player_01);
}

window.onload = () => {
    testLibCards();
    testLibBattle();
}