//findIndex
//배열 안에 있는 객체의 특정 값이 소속해 있는 것을 찾기 위한 함수

let tools = 
[
    {
        id : 1,
        text : '자바스크립트 입문',
        done : true
    },
    {
        id : 2,
        text : '함수 배우기',
        done : true
    },
    {
        id : 3,
        text : '객체와 배열 배우기',
        done : true
    },
    {
        id : 4,
        text : '배열 내장함수 배우기',
        done : false
    }
]

console.log(tools.findIndex(n => n.id === 3))
