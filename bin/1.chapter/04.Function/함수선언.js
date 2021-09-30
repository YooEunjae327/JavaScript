//함수는 복잡 코드들을 정리 해서 하나의 코드로 실행 가능 하게 만드는 기능 입니다 


//일반 적인
const a = 1
const b = 2
const sum = a + b

//함수
function add(a, b)
{
    return a + b
}

const sum = add(1, 2)
console.log(sum)

//둘다 출력 값은 3입니다 
//여기서 return 키워드를 사용하면 함수가 끝나게 됩니다


function hello(name)
{
    console.log('Hello,' + name + '!')
}

hello('tomato')

//ES6문법을 사용 하여 좀더 쉬운 함수 선언이 가능합니다

function hello(name)
{
    console.log(`Hello, ${name}!`)
}

hello('tomato')


//이를 이용한 점수를 성적등급으로 변환하기

function getGrade(score)
{
    if(score === 100)
    {
        return 'A+'
    }
    else if(score >= 90)
    {
        return 'A'
    }
    else if (score >= 89)
    {
        return 'B+'
    }
    else if (score >= 80)
    {
        return 'B'
    }
}

console.log(getGrade(100))