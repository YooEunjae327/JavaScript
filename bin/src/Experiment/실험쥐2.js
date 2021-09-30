// class Animal {
//     constructor(type, name, sound) {
//       this.type = type;
//       this.name = name;
//       this.sound = sound;
//     }
//     say() {
//       console.log(this.sound);
//     }
//   }
  
//   const dog = new Animal
//   const cat = new Animal
  
//   dog.say();
//   cat.say();


//   function solution(d, budget) {
//     let input  //메인 
//     let ou = 0 //마지막으로 넘어선 수를 빼기 위해
//     let pu = 0 //배열 값
//     let end = 0
 
//     for(let i = 0; i < d.length; i++)
//     {
//          input += d[i]
//          if(input > budget)
//          {
//              pu++
//              input -= d[i]
//              break
//          }
//     }
 
//     while(input === budget)
//     {
//         intput++
//         ou++
//     }
 
//     input[pu] -= ou
 
//     for(let pu; i < d.length; i++)
//     {
//         end += intput[pu]
//     }
//      return end;
//  }

// let arr = [1 ,2 ,3, 4, 5]
// var answer = [];

//     arr.length <= 1 ? answer.push(-1) : arr.splice(arr.indexOf(Math.min(...arr)),1)
    
//     if(arr.length > 1)
//     for(let a in arr)
//     answer.push(arr[a])

//     console.log(answer)


// let a = 118372
// let number = (a + '').split('')
// number.sort((a, b) => b - a)

// const numbers = parseInt(number.join(''))
// console.log(typeof(numbers))

// let n = 121
// let output = 0
//     for(let i = 0; i < 100; i++)
//     {
//         if(n % i === 0)
//             output = n / i
//     }

//     console.log(output)


// let n = 123456789654345
// let answer = []
// let val = (n + '').split('').map(Number)
// for(let i = val.length - 1; i >= 0; i--)
// answer.push(val[i])

// console.log(answer)


// let a = [1, 2, ,3, 4]

// for(let i in a.length)
// console.log(a)

// let s = 'try hello world'
// let val = s.split(' ')

// for(let i = 0; i < val.length; i++)
// {
// if(i % 2 === 0)
//     val[i] = val[i].toUpperCase()
// else
//     val[i] = val[i].toLowerCase()
// }

// console.log(val)




//점수는 총 3번 얻고
// S , D , T가 존재 이는 점수 뒤에 붙고 
//S일시에 수의 1제곱
//D일시에 수의 2제곱
//t일시에 수의 3제곱

//옵션으로는 *과 #
//*는 전에 있던 수들을 2X한다 
//#는 해당점수는 마이너스 된다 예 3D# = (3*3) * (-1)


//2월은 29

//6월은 30
//4월은 30
//11월은 30
//9월은 30

//1월은 31
//3월은 31
//5월은 31
//7월은 31
//8월은 31
//10월은 31
//12월은 31
    
// let a = 'ab'

// let d = []
// d.push(a.charCodeAt(0) )
// console.log(d)
// d[0] += 1


// console.log(String.fromCharCode(d))

// let s = 'ab'
// let n = 2

// let intput = []
    
// for(let i = 0; i < s.length; i++)
//     intput.push(s.charCodeAt(i))


// for(let i = 0; i < s.length; i++)
//     if(intput[0])

//     console.log(intput)
// let answer
// let s = '1e34'
// let number = s.length
// let input 
    
//     if(number <= 8 || number >= 1)
//     {
//         input = s / 1
//     }
//     else
//     {
//         console.log(false)
//     }
//         console.log(input)
//         console.log(input == s ? true : false)
    
// let s = "Zbcdefg" 

// console.log(s.split('').reverse().join(''))


// let s = "Pyy"

// let bi = 0, sm = 0

// for(let i = 0; i < s.length; i++)
//     if(s[i] === 'p' || s[i] === 'P')
//     {
//     bi++
//     }
//     else if(s[i] === 'y' || s[i] === 'Y')
//     {
//     sm++
//     }

// console.log(bi === sm ? true : false)

// let seoul = ["Jane", "Kim"]
// let plus = 0
// for(let i = 0; i < seoul.length; i++)
// {
//     plus++
//     if(seoul[i] === 'Kim')
//         break
// }


//         console.log(plus)
// let a = 3, b = 5
//     let answer = 0;
//     let t = 0
//     if(a > b)
//     {
//         t = a
//         a = b
//         b = t
//     }

//     for(let i = a; i <= b; i++)
//     {
//         answer = answer + i
//     }
//     console.log(answer)


// let arr = [3, 2 ,6]
// let divisor = 10
// var answer = [];
//     let end = 0
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i] % divisor === 0)
//             answer.push(arr[i])
//         else 
//             end++
//     }

//     console.log(end)

// let n = 2
// let strings = ["car", "bed", "sun"]
// let time = strings.length

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
// }


// console.log(strings)
// console.log(answer)

// let answer = ''
// let s = 'qswer'
// let a = s.length / 2

// s.length % 2 ===  0 ? answer =  s[(s.length / 2) - 1] +  s[s.length / 2] : answer = s[Math.floor(a)]
// console.log(answer)



// let arr = [1,1,3,3,0,1,1]
// var answer = [];

// for(let i = 0; i < arr.length; i++)
// {       
//     if(arr[i] === arr[i -1])
//         continue
//     else
//         answer.push(arr[i])
// }

// arr[i] === arr[i - 1] ? continue : 

// console.log(answer)
        
// let numbers = [2, 1, 3, 4, 1]
// let result = []
// var answer = [];

// for(let i = 0; i < numbers.length; i++)
// {
//     for(let j = 0; j < numbers.length; j++)
//     {
//         if(i === j)
//             continue
//         else
//             answer.push(numbers[i] + numbers[j])
//     }
// }
// answer.sort((a, b) => a - b)

// for(let i = 1; i <= answer.length; i++)
// {
//     if(answer[i] === answer[i - 1])
//         continue
//     else
//         trash.push(answer[i - 1])
// }
// console.log(answer)
// console.log()

// let budget = 10
// let d = [2,2,3,3]
// var answer = 0;
// let i = 0

//     d.sort((a, b) => a - b)
//     for(let j = 0; j <   d.length; j++)
//     {
//         answer += d[i]
//         i++
        
//         if(answer > budget)
//         {
//             i--
//             break
//         }
//     }

// console.log(i)


// let a = 125
// let v = []
// let b = a.toString(3)

// for(let i = b.length - 1; i >= 0; i--) {
//     v.push(b[i])
// }

// console.log(Number.parseInt(v.join(''), 3))



// let s = "one4seveneight"
// let ch = ['zer', 'one', 'two', 'thr', 'fou', 'fiv', 'six', 'sev', 'eig', 'nin']
// let b = []

// for(let i = 0; i  < s.length; i++)
// {
//     for(let j = 0; j < ch.length; j++)
//     {
//         if(s[i] + s[i + 1] + s[i + 2] === ch[j])
//             b.push(ch[j])
        
//     }
//     if(isNaN(s[i]) === false)
//         b.push(s[i])
// }

// for(let i = 0; i < b.length; i++)
// {
//     for(let j = 0; j < ch.length; j++)
//     {
//         if(b[i] === ch[j])
//             b.splice(i , 1, j)
//     }            
// }

// console.log(b)


// let lottos = [0, 0, 0, 0, 0, 0]
// let win_nums = [38, 19, 20, 40, 15, 25]

// let win = [6, 5, 4, 3, 2]
// let gd = 0
// let ba = 0
// let va = 0
// let answer = []

// lottos.sort((a,b) => a - b)
// win_nums.sort((a,b) => a - b)

// for(let i = 0; i < 6; i++)
// {   
//     if(lottos[i] === 0)
//         gd++

//     for(let j = 0; j < 6; j++)
//     {
//         if(lottos[i] === win_nums[j])
//         {
//             gd++
//             ba++
//         }    
//     }
// }

// if(ba >= 2 )
// {
//     for(let i = 0; i < win.length; i++)
//     {   
  
//         if(ba === win[i])
//         {
//             ba = i + 1
//             break
//         }
//     }
// }
// else
// {
//     ba = 6
// }


// if(gd >= 2)
// {
//     for(let i = 0; i < win.length; i++)
//     {   
//         if(gd === win[i])
//         {
//             gd = i + 1
//             break
//         }
//     }
// }
// else
// {
//     gd = 6
// }


// console.log(gd)
// console.log(ba)

// let n = 5
// let arr1 = [9, 20, 28, 18, 11]
// let arr2 = [30, 1, 21, 17, 28]
// //--------------------------------------

// let arr1in = []
// let arr2in = []
// let val = []
// let input =[]

// for(let i = 0; i < n; i++)
// {
//     arr1in[i] = '0'.repeat(n - arr1[i].toString(2).length) + arr1[i].toString(2)
//     arr2in[i] = '0'.repeat(n - arr2[i].toString(2).length) + arr2[i].toString(2)
// }

// for(let i = 0; i < arr1.length; i++)
// {
//     for(let j = 0; j < n; j++)
//     {
//         if(arr1in[i][j] == 0 && arr2in[i][j] == 0)
        
//         {
//            input += ' '
//         }
//         else
//         {
//             input += '#'
//         }
     
        
//     }
//     val.push(input)
//     input = []
// }
// console.log(val)
// console.log(input)
// console.log(arr1in)
// console.log(arr2in)




