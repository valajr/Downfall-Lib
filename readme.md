# Downfall Libraries

Fourth project of "In Web One Project Every Two Weeks". The objective of the project was to make libraries and understand how to document codes and libraries. This project will be used to make the next project.
Made in 01/09/2022 ~ 15/09/2022.

Trello of the project: https://trello.com/b/93WEH1OW/04-projeto-downfall-lib (not in english).

---

## File format

```
root
 ┝━ lib
 │   ┕━ [library]
 │       ┝━ img
 │       │   ┕━ ...
 │       ┝━ main.js
 │       ┝━ style.css
 │       ┕━ ...
 ┝━ test
 │   ┕━ img
 │    │  ┕━ ...
 │    ┝━ main.js
 │    ┝━ style.css
 │    ┕━ ...
 ┕━ index.html
```

Every library must be imported, you can download the libraries you need or import them directly from git pages.

`<script src="lib/<lib_folder>/main.js"></script>`
`<script src="https://valajr.github.io/Downfall-Libs/lib/<lib_folder>/main.js"></script>`

---

## Battle Library

File: **main.js**
### Char Class

| Properties |    Return    |
|     :-:    |       -      |
|    name    |  **String**  |
|    life    |  **Number**  |
|  max_life  |  **Number**  |
|   attack   |  **Number**  |
|   defense  |  **Number**  |
| initiative |  **Number**  |
|   skill    | **Function** |

|     Methods     |   Arguments   | Return |
|       :-:       |       -       |   -    |
| changeMaxLife() | ml **String** |   -    |

### Battle Class

|  Properties   |   Return   |
|      :-:      |     -      |
|    allies     | **Array**  |
|    enemies    | **Array**  |
|     turn      | **String** |
| escape_chance | **Number** |
|   end_game    |  **Null**  |

|     Methods     |    Arguments    | Return |
|       :-:       |        -        |   -    |
|  updateTurn()   | team **String** |   -    |
|    addAlly()    |  ally **Char**  |   -    |
|   addEnemy()    | enemy **Char**  |   -    |
|  removeAlly()   |  ally **Char**  |   -    |
|  removeEnemy()  | enemy **Char**  |   -    |
| removeEnemies() | enemy **Char**  |   -    |
| normalAttack()  | aggressor **Char**, victim **Char** |   -    |
|  autoAttack()   | aggressor **Char** |   -    |
|   checkLife()   | team **String** |   -    |
|  checkEscape()  |        -        |   -    |
|      win()      |        -        |   -    |
|     lose()      |        -        |   -    |
|    escape()     |        -        |   -    |

## Cards Library

### Card Class

| Properties  |    Return    |
|     :-:     |      -       |
|     id      |  **String**  |
|    name     |  **String**  |
|    type     |  **String**  |
|  img_front  |  **String**  |
|  img_back   |  **String**  |
| description |  **String**  |
|   action    | **Function** |

| Methods  | Arguments |       Return       |
|   :-:    |     -     |         -          |
| toHTML() |     -     | card_body **Card** |

### Deck Class

| Properties |  Return  |
|    :-:     |    -     |
|   cards    | **Card** |

|       Methods       | Arguments |       Return       |
|        :-:          |     -     |         -          |
|      addCard()      | card_instace **Card** |   -    |
|  removeCardById()   |  card_id **String**   |   -    |
| removeCardsByType() | card_type **String**  |   -    |
|    getCardById()    | card_id **String**  | **Card** |
|  getCardsByType()   |  type **String**   | **Array** |



## Inventory Library

## Paths Library

### Room Class

| Properties  |     Return     |
|     :-:     |        -       |
|     id      |  **Integer**   |
| connections | **Dictionary** |
|     lvl     |   **Number**   |
|    door     |  **Function**  |

### Path Class

| Properties |  Return   |
|    :-:     |     -     |
|   Rooms    | **Array** |

|    Methods    |    Arguments    | Return |
|      :-:      |        -        |   -    |
|   addRoom()   | room_instance **Room** | - |
| removeRoomById() | room_id **String** | - |
| getRoomById() | room_id **String** | - |
| getRoomsByLvl() | room_lvl **Number** | - |
| createPath() | qnt_rooms **Integer**, max_rooms **Integer**,  qnt_fixed **Boolean** | - |

