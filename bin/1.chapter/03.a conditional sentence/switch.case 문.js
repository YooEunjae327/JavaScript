//switch/case 문은 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 떄 사용합니다.

const number = 1

switch(number)
{
    case 1 :
        console.log('1입니다')
        break
    case 2 : 
        console.log('2입니다')
        break
    case 3 :
        console.log('3입니다')
        break
    default :
        console.log('모르는 숫자입니다')
}

//switch는 내가 원하는 변수르 선택하고 case중에서 그 변수의 숫자나 문자가 같은 것이
//존재하면 그 case를 실행합니다 

//switch는 마지막에 무조건 break를 널어야 합니다