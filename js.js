// function detectCollision(objects, point) {
//
//     for (let i = 0; i < objects.length; i++) {
//         let object = objects[i]
//         if (point.x >= object.x && point.x <= object.x + object.width &&
//             point.y >= object.y && point.y <= object.y + object.height)
//             return object
//     }
// }
function detectCollision(objects, point) {
    let object = objects.find(({x, y, width, height}) => {
            return (point.x >= x && point.x <= x + width &&
                point.y >= y && point.y <= y + height);
        }
    )
    return object;
}

// const myObjects = [
//
//
//     {x:  10, y: 20, width: 30, height: 30},
//
//
//     {x: -40, y: 20, width: 30, height: 30},
//
//
//     {x:   0, y:  0, width: 10, height:  5}
//
//
// ]
//
// console.log(detectCollision(myObjects, {x: 4, y: 2}))
