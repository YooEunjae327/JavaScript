//NOT : !
//AND : &&
//OR : ||
//논리 연산자는 true와 false를 위한 연산자 입니다


//NOT는 true를 false로 false를 true로 변환 합니다

const blank = !true
console.log(blank)
//출력값 : false 


//AND는 양쪽의 값이 둘 다 true일때만 true가 출력 됩니다

const bl = true && true
console.log(bl)
//출력값 : true

let b = false && false
    b = false && true
    b = true && false
//다음과 같은 상황에는 모두 false로 출력 됩니다


//OR은 양쪽의 값중 하나라도 true면 true입니다

let t = true || false
    t = false || true
    t = true || true
//다음과 같은 상황에는 모두 true입니다


//연산 순서
//NOT -> AND -> OR