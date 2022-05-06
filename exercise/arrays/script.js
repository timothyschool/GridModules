console.log('Hello world');
let number = 9
let string = 'string'
console.log(number.toString())
console.log(string)

//arrays
/*let array = [0, 1, 2, 3, 4, 5, 6]
console.log(array)
*/
/*let array = [4, 7 , 33, 55, 52 ,71]
array.push(0)
array.push(1)
array.push(2)

console.log(array)*/
/*let array = [4, 7, 67, 33, 55, 52, 71, 67]
array.push(0)
array.push(1)
array.push(2)

console.log(array.length)
    //console.log(array[3])
for (let i = 0; i < 5; i += 1) {
    /* console.log('for loop in position: ');
     console.log(i)
     console.log('show array in position')
     console.log(array[i])*/
/*  console.log('showing array in positionm: ' + i)
    console.log(array[i])
}*/

// how to Fill an array  with random  Values

/*let empty_array = []
let number_of_item = 50
for (let i = 0; i < number_of_item; i++) {
    let random_value = Math.random() + 1000
    empty_array.push(random_value)
}
console.log(empty_array)
*/
//lets see whar are Objects 

let object = {
    x: 100,
    y: 200,
    width: 100,
    height: 300,
}
let div = document.createElement('div')
div.style.position = 'fixed'
div.style.width = object.width + 'px'
div.style.height = object.height + 'px'
div.style.top = object.y + 'px'
div.style.left = object.x + 'px'
div.style.backgroundColor = '#f33'

document.body.appendChild(div)
console.log(object)

document.onmousemove = function(e) {
    let pos_x = e.clientX
    let pos_y = e.clientY
    console.log(pos_x, pos_y)
}