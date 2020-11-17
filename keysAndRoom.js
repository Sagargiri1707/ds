var canVisitAllRooms = function(rooms) {
    let queue = []
    let set = new Set();
    set.add(0)
    queue.push(0)
    while (queue.length > 0) {
        console.log(queue);
        console.log(set);
        let current = queue.shift();
        for (let key of rooms[current]) {
            if (!set.has(key)) {
                set.add(key)
                queue.push(key)
            }
        }
        console.log(queue, set);
        console.log('-------------');
    }
    return set.size === rooms.length
};

console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));