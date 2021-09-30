//객체는 우리가 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해줍니다

const dog = 
{
    name: '멍멍이',
    age : 2
}

console.log(dog.name)
console.log(dog.age)
//결과 멍멍이  2


//심화
const ironMan = 
{
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
}

const captainAmerica =
{
    name : '스티븐 로저스',
    actore : '크리스 에반스',
    alias: '캡틴 아메리카'
}

console.log(ironMan)
console.log(captainAmerica)



const  ironMan =
{
    nmae :'토니 스타크',
    actor : '로버트 주니어',
    alias : '아이언맨 '
}

const captainAmerica = 
{
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
}

function print(hero)
{
    const {alias, name, actor} = hero   
    const text  = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다`
    console.log(text)
}

print(ironMan)
print(captainAmerica)

const dog = 
{
    name : '멍멍이',
    sound: '멍멍!',
    say : function say()
    {
        console.log(this.sound)
    }
}

dog.say()
console.log(dog.name)


const number = 
{
    a : 1,
    b : 2
}
number.a = 5
console.log(number)

