//find
//찾아낸 값이 몇번째인지 알아내는 것이 아니라, 찾아낸 값 자체를 반환합니다

let toods = 
[
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
      },
      {
        id: 2,
        text: '함수 배우기',
        done: true
      },
      {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
      },
      {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
      }
]

console.log(toods.find(n => n.id === 3))

