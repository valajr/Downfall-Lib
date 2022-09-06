/**
 * Rooms base; has a private property named "door" that have to be replaced with what have in the room
 * 
 */
class Room {
    #door;

/**
 * Constructor of the new element of class Room.
 * 
 * @param {integer} id - ID of the room
 * @param {array} conections_prev - Rooms of the previous floor that are conneted to this room
 * @param {array} conections_next - Rooms of the next floor that are conneted to this room
 * @param {number} lvl - Level of the room are optional, in case you don't need this to be different, will be 0
 */
    constructor(id, conections_prev, conections_next, lvl='0') {
        this.id = id;
        this.conections = {
            'prev': conections_prev,
            'next': conections_next
        }
        this.lvl = lvl;
    }

    /**
     * get set of the door of the room (the object that exists in the room, can be one action too).
     * 
     */
    set door(obj) {
        this.#door = obj;
    }
    get door() {
        return this.#door;
    }

    /**
     * Method to return a instance of this room as an HTML element.
     * 
     * @returns HTML element of this room
     */
    toHMTL() {

    }
}

class Path {
    static rooms = []; 

    /**
     * Method to add a room to Path.
     * 
     * @param {Room} room_instance - instance of class Room
     */
     static addRoom(room_instance) {
        Path.rooms.push(room_instance);
    }

    /**
     * Method to remove one room with a given ID.
     * 
     * @param {string} room_id - ID of the room to be removed of the Path
     */
    static removeRoomById(room_id) {
        rooms = Path.rooms.filter(room => room.id != room_id);
    }

    /**
     * Method to find a room with a given ID.
     * 
     * @param {string} room_id - ID of the room to be found in Path
     * @returns {Room} - returns the room of the given ID or null in case didn't encouter a room with that ID
     */
    static getRoomById(room_id) {
        return Path.rooms.filter(room => room.id == room_id)[0] || null;
    }

    /**
     * Method to create a path with a given number of rooms, maximum of conections and if all floors have the same maximum number of rooms. All the rooms of one floor will conect to the previous one and to the next one; the IDs of the rooms and the levels of the floors will be initiated in 1.
     * 
     * @param {integer} qnt_rooms - quantity of rooms of the path
     * @param {integer} max_conections - maximum of rooms of a floor of the path
     * @param {string} qnt_fixed - if not given will be 'yes' and the floors will have the same maximum number of conections that was given untill the end
     * @returns quantity of floors/levels are in your path
     */
    static createPath(qnt_rooms, max_conections, qnt_fixed='yes') {
        Path.rooms = [];
        let lvl_max;
        let lvls = [];

        if(qnt_fixed == 'yes') {
            lvl_max = qnt_rooms/max_conections;
            for(var floor=0; floor < lvl_max; floor++) {
                let lvl = [];
                for(var conection=0; conection < max_conections; conection ++) {
                    lvl.push((floor*max_conections) + conection);
                }
                lvls.push(lvl);
            }
        }
        else {
            lvl_max = 0;
            for(var room=0; room < qnt_rooms; room++) {
                let floor_rooms = getRandom(qnt_rooms - room);
                if(floor_rooms > max_conections) {
                    floor_rooms = max_conections;
                }
                let lvl = [];
                for(var r=0; r < floor_rooms; r ++) {
                    lvl.push(room);
                    if(r + 1 != floor_rooms) { 
                        room++;
                    }
                }
                lvls.push(lvl);
                lvl_max++;
            }
        }

        let new_room;
        let id = 0;        

        for(var lvl=0; lvl < lvl_max; lvl++) {
            for(var _=0; _ < lvls[lvl].length; _++) {
                id++;

                let conections_prev = [];
                let prev_lvl = lvls[lvl - 1];
                if(prev_lvl) { conections_prev = prev_lvl; }
                let conections_next = [];
                let next_lvl = lvls[lvl + 1];
                if(next_lvl) { conections_next = next_lvl; }

                new_room = new Room(id, conections_prev, conections_next, lvl+1);
                Path.addRoom(new_room);
            }
        };

        return lvl_max;
    }
}

function getRandom(max) {
    if(max <= 1) { 
        return 1
    }
    let random = Math.floor(Math.random() * (max - 1) + 1)
    return random;
}