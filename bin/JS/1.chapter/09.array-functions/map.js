//map
//만약 배열에 변화를 주고 싶을떄 사용합니다


//push를 이용한

let array = [1, 2, 3, 4, 5, 6, 7, 8]

let squared = []

for(let i = 0; i < array.length; i++)
{
    squared.push(array[i] * array[i])
}

console.log(squared)

//forEach응용

let bl = [1, 2, 3, 4, 5, 6, 7, 8]

let squared = []

bl.forEach(neW => {
    squared.push(neW * neW)
})

console.log(squared)

//map

let array = [1, 2, 3, 4, 5, 6, 7, 8]

let square = n => n * n
let squared = array.map(square)
console.log(squared)

//선언하지 않고

let array = [1, 2, 3, 4, 5, 6, 7, 8]

let squared = array.map(n => n * n)
console.log(squared)


