//if문은 말그대로 만약~하다면 입니다
//만약의 조건이 충족 될 경우 하다면의 코드를 실행 합니다
//if
//if ~else 
//if ~else if

const blank = 1

if (blank + 1 === 2) //이 부분이 조건 //만약 이 부분으 true로 바꿀 경우에 무조건 코드를 실행 합니다     
{
    console.log('a + 1이 2입니다') //그 조건이 true일때 값을 실행 입니다
}


//if ~else는 조건이 true일 경우 if안에 있는 코드르 실행하고  아닐 경우 else에 있는 코드를 실행 한다 

const bl = 10

if(bl > 15)
{
    console.log('bl이 15보다 큽니다')
}
else
{
    console.log('bl이 15보다 작습니다')
}


//if ~else if는 if ~else같지만 else 여러번 지정할 수 있습니다

const a = 10

if(a === 5)
{
    console.log('5입니다')
}
else if(a === 10)
{
    console.log('10입니다')
}
else
{
    console.log('5도 아니고 10도 아닙니다')
}