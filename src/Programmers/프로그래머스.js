//직사각형 별찍기
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);

//     for(let i = 0; i < b; i++)
//     {   
//         let star = ''
//         for(let j = 0; j < a; j++)
//         {
//             star += '*'
//         }
//         console.log(star)
//     }
// });


//x만큼 간격이 있는 n개의 숫자
// function solution(x, n) {
//     var answer = [];
    
//     for(let i = 1; i <= n; i++)
//     {
//         answer.push(x * i)
//     }

//     return answer;
// }

//핸드폰 번호 가리기 

// function solution(phone_number) {
//     var answer = ''

//     for(let i = 0; i < phone_number.length; i++)
//     {
//         if(i < phone_number.length -4)
//         {
//             answer += '*'
//         }
//         else
//         {
//             answer += phone_number[i]
//         }
//     }
    

//     return answer
// }

//하샤드의 수 
// function solution(x) {
//     var answer = true;

//     let pl = (x / 10) + (x % 10)
//     let p2 = Math.floor(pl)

//     if(x % p2 != 0)
//     {
//         answer = false
//     }
//     return answer;
// }


//평균 구하기

// function solution(arr) {
//     var answer = 0;

//     for(let i = 0; i < arr.length; i++)
//     {
//         answer += arr[i]
//     }

//     answer /= arr.length
//     return answer;
// }

// function solution(num) {
//     var answer = 0;

//     while(num !== 1)
//     {
//         if(answer >= 500)
//             return -1
//         if(num % 2 === 0)
//         num /= 2
//         else
//         num = num * 3 + 1

//         answer++
//     }
//     return answer;
// }

//제일 작은 수 제거하기


// function solution(arr) {
//     var answer = [];

//     arr.length <= 1 ? answer.push(-1) : arr.splice(arr.indexOf(Math.min(...arr)),1)
    
//     if(arr.length > 1)
//     for(let a in arr) 
//     answer.push(arr[a])

//     return answer;
// }


// 짝수와 홀수

// function solution(num) {
//     var answer = '';
//     num % 2 === 0 ? answer += 'Even' : answer += 'Odd'
//     return answer;
// }


//정수 내림차순으로 배치하기

// function solution(n) {
//     let number = (n + '').split('')
//     number.sort((a, b) => b - a)
//     const numbers = parseInt(number.join(''))
    
//     return numbers;
// }


//정수 제곱근 판별

// function solution(n) {
//     return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1) : -1  
// }


//자연수 뒤집어 배열로 만들기

// function solution(n) {
// let answer = []
// let val = (n + '').split('').map(Number)
// for(let i = val.length -1; i >= 0; i--)
// answer.push(val[i])
        
// return answer
// }

// function solution(n)
// {
//     var answer = 0;
//     let a =(n + '').split('').map(Number)
//     for(let i = 0; i < a.length; i++)
//     answer += a[i]

//     return answer;
// }


//이상한 문자 만들기

// function solution(s) {
//     let val = s.split('')

//     for(let i = 0; i < val.length; i++)
//     {
//     if(i % 2 === 0)
//         val[i] = val[i].toUpperCase()
//     else
//         val[i] = val[i].toLowerCase()
//     }
//     val[val.length] = null

//     return val.join('')
// }


//약수의 합
// function solution(n) {
//     var answer = 0;

//     for(let i = 1; i <= n; i++)
//     {
//         if(n % i === 0)
//             answer += i            
//     }
//     return answer;
// }


//문자열을 정수로 바꾸기

// function solution(s) {
//     let answer = 0
//     let b = s.split('')

//     if(b[0] === '-')
//     {
//         b.shift()
//         return answer = b.map(Number).join('') - b.map(Number).join('') * 2
//     }
//     else 
//     {   
        
//         return answer = parseInt(s)
//     } 
// }


//수박수박수박수박수박수박수박수박?

// function solution(n) {
//     var answer = '';

//     for(let i = 1; i <= n; i++)
//     if(i % 2 === 0)
//         answer += '박'
//     else 
//         answer += '수'
//     return answer;
// }



//문자열 다루기 기본

// function solution(s) {
//     let input
    
//        for(let i = 0; i < 6; i++)
//         if(s[i] == 'e')
//         return false
    
//     if(s.length  === 4 || s.length === 6)
//     {
//         input = s / 1
//     }
//     else
//     {
//         return false
//     }

//         return input == s ? true : false;   
// }


//문자열 내림차순으로 배치

// function solution(s) {
//     return s.split('').sort().reverse().join('')
// }


//문자열 내 p와 y의 개수


// function solution(s){
//     let bi = 0, sm = 0

// for(let i = 0; i < s.length; i++)
//     if(s[i] === 'p' || s[i] === 'P')
//     {
//     bi++
//     }
//     else if(s[i] === 'y' || s[i] === 'Y')
//     {
//     sm++
//     }

//     return bi === sm ? true : false   
// }


//서울에서 김서방 찾기

// function solution(seoul) {
//     let plus = 0
//     for(let i = 0; i < seoul.length; i++)
//     {
//         if(seoul[i] === 'Kim')
//             plus = i        
//     }
//     return `김서방은 ${plus}에 있다`;
// }

//두 정수 사이의 합

// function solution(a, b) {
//     var answer = 0;
//      let t = 0
//     if(a > b)
//     {
//         t = a
//         a = b
//         b = t
//     }
//     for(let i = a; i <= b; i++)
//     {
//         answer += i
//     }
//     return answer;
// }

//나누어 떨어지는 숫자 배열


// function solution(arr, divisor) {
//     var answer = [];
//     let end = 0
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i] % divisor === 0)
//             answer.push(arr[i])
//         else 
//             end++
//     }

//     if(end === arr.length)
     
//         return [-1]
//     else 
//         answer.sort((a,b) => a - b)
    
//     return answer;
// }


//가운데 글자 가져오기

// function solution(s) {
//     var answer = '';
//     let a = s.length / 2
//     s.length % 2 ===  0 ? answer =  s[(s.length / 2) - 1] +  s[s.length / 2] : answer = s[Math.floor(a)]
//     return answer
// }

//갈은 숫자는 싫어
// function solution(arr)
// {
//     var answer = [];

//     for(let i = 0; i < arr.length; i++)
//     {       
//     if(arr[i] === arr[i -1])
//         continue
//     else
//         answer.push(arr[i])
//     }
    
//     return answer;
// }




// function solution(strings, n) {
//     let time = strings.length

// var answer = []
// let number = 'abcdefghijklmnopqrstuvwxyz'

// for(let i = 0; i < time; i++)
// {
//     for(let j = 0; j < 26; j++)
//     {
//         if(strings[i][n] === number[j])
//             answer.push(strings[i][n])
//     }
// }
// answer.sort()

// for(let i = 0; i < time; i++)
// {
//     for(let j = 0; j < strings.length ; j++)
//     {
//         if(answer[i] === strings[j][n])
//             answer[i] = strings[j]
        
//     }
//     if(i < strings.length - 1)
//     strings.shift()
// }

//     return answer;
// }


//두 개 뽑아서 더하기

// function solution(numbers) {
//     let result = []
//     var answer = [];

//     for(let i = 0; i < numbers.length; i++)
//     {
//         for(let j = 0; j < numbers.length; j++)
//         {
//             if(i === j)
//                 continue
//             else
//                 answer.push(numbers[i] + numbers[j])
//         }
//     }
//     answer.sort((a, b) => a - b)

//     for(let i = 1; i <= answer.length; i++)
//     {
//         if(answer[i] === answer[i - 1])
//             continue
//         else
//             result.push(answer[i - 1])
//     }
//         return result
// }


//예산

// function solution(d, budget) {
//     var answer = 0;
//     let i = 0

//         d.sort((a, b) => a - b)
//         for(let j = 0; j <   d.length; j++)
//         {
//             answer += d[i]
//             i++
            
//             if(answer > budget)
//             {
//                 i--
//                 break
//             }
//         }
    
//     return i;
// }





// function solution(n) {
//     var answer = 0;
    
//     let v = []
//     let b = n.toString(3)

//     for(let i = b.length - 1; i >= 0; i--) {
//         v.push(b[i])
//     }


//     return Number.parseInt(v.join(''), 3)
// }


//숫자 문자열과 영단어

// function solution(s) {
//         let ch = ['zer', 'one', 'two', 'thr', 'fou', 'fiv', 'six', 'sev', 'eig', 'nin']
//     let b = []

//     for(let i = 0; i  < s.length; i++)
//     {
//         for(let j = 0; j < ch.length; j++)
//         {
//             if(s[i] + s[i + 1] + s[i + 2] === ch[j])
//                 b.push(ch[j])
        
//         }
//         if(isNaN(s[i]) === false)
//             b.push(s[i])
//     }

//     for(let i = 0; i < b.length; i++)
//     {
//         for(let j = 0; j < ch.length; j++)
//         {
//             if(b[i] === ch[j])
//                 b.splice(i , 1, j)
//         }            
// }

//     return parseInt(b.map((Number) => parseInt(Number)).join(''))
// }


// function solution(lottos, win_nums) {
//     let win = [6, 5, 4, 3, 2, 0]
//     let gd = 0
//     let ba = 0
//     let answer = []

//     lottos.sort((a,b) => a - b)
//     win_nums.sort((a,b) => a - b)

//     for(let i = 0; i < 6; i++)
//     {   
//         if(lottos[i] === 0)
//             gd++

//         for(let j = 0; j < 6; j++)
//         {
//             if(lottos[i] === win_nums[j])
//             {
//                 gd++    
//                 ba++
//             }    
//         }
//     }

//     if(ba >= 2 )
//     {
//         for(let i = 0; i < win.length; i++)
//     {   
  
//             if(ba === win[i])
//             {
//                 ba = i + 1
//                 break
//             }
//         }
//     }
//     else
//     {
//         ba = 6
//     }


//     if(gd >= 2)
//     {
//         for(let i = 0; i < win.length; i++)
//         {   
//             if(gd === win[i])
//             {
//                 gd = i + 1
//                 break
//             }
//         }
//     }
//     else
//     {
//         gd = 6
//     }


//     answer.push(gd)
//     answer.push(ba)

//     return answer
// }


// function solution(n, arr1, arr2) {

//     let arr1in = []
//     let arr2in = []
//     let val = []
//     let input =[]
    
//     for(let i = 0; i < n; i++)
//     {
//         arr1in[i] = '0'.repeat(n - arr1[i].toString(2).length) + arr1[i].toString(2)
//         arr2in[i] = '0'.repeat(n - arr2[i].toString(2).length) + arr2[i].toString(2)
//     }
    
//     for(let i = 0; i < arr1.length; i++)
//     {
//         for(let j = 0; j < n; j++)
//         {
//             if(arr1in[i][j] == 0 && arr2in[i][j] == 0)
            
//             {
//                input += ' '
//             }
//             else
//             {
//                 input += '#'
//             }
         
            
//         }
//         val.push(input)
//         input = []
//     }
        
//     return val;
// }


