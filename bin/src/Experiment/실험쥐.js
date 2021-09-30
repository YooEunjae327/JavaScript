// function Animal(type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
//   }
  
//   Animal.prototype.say = function() {
//     console.log(this.sound);
//   };
//   Animal.prototype.sharedValue = 1;
  
//   function Dog(name, sound) {
//     Animal.call(this, '개', name, sound);
//   }
//   Dog.prototype = Animal.prototype;
  
//   function Cat(name, sound) {
//     Animal.call(this, '고양이', name, sound);
//   }
//   Cat.prototype = Animal.prototype;
  
//   const dog = new Dog('멍멍이', '멍멍');
//   const cat = new Cat('야옹이', '야옹');
  
//   dog.say();
//   cat.say();


// const  ironMan =
// {
//     nmae :'토니 스타크',
//     actor : '로버트 주니어',
//     alias : '아이언맨 '
// }

// const captainAmerica = 
// {
//     name : '스티븐 로저스',
//     actor : '크리스 에반스',
//     alias : '캡틴 아메리카'
// }

// function print(hero)
// {
//     const {alias, name, actor} = hero   
//     const text  = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다`
//     console.log(text)
// }

// print(ironMan)
// print(captainAmerica)

// const dog = 
// {
//     name : '멍멍이',
//     sound: '멍멍!',
//     say : function say()
//     {
//         console.log(this.sound)
//     }
// }

// dog.say()
// console.log(dog.name)



// const number = 
// {
//     a : 1,
//     b : 2
// }
// number.a = 5
// console.log(number)

// const superheroes = [1,2,3,4]

// for(let i = 0; i < superheroes.length; i++)
// {
//     console.log(hero)
// }


// function Animal(type, name, sound)
// {
//     this.type = type
//     this.name = name
//     this.sound = sound
//     this.say = function()
//     {
//         console.log(this.sound)
//     }
// }

// const dog = new Animal('개', '멍멍이', '멍멍')
// const cat = new Animal('고양이', '야옹이','야옹' )

// dog.say()
// cat.say() 

// let im = 
// {
//     이름 : 'Nature of Code',
//     가격 : '30000원',
//     저자 : 'Deniel Shifman',
//     ISBN : '9788968481901',
//     페이지 : '620'
// }

// console.log(im.이름)
// console.log(im.저자)


// let blank =
// {
//     이름 : '유은재',
//     가격 : '26000원',
//     저자 : 'blank',
//     ISBN : '9929384850',
//     페이지 : '650쪽'
// }

// let bl =
// {
//     이름 : '남동규',
//     가격 : '60000원',
//     저자 : 'bl',
//     페이지 : '700쪽'
// }

// function print(sub)
// {
//     let {이름, 가격, 저자, ISBN, 페이지} = sub

//     console.log(`${이름}(${저자})가 쓴 책으로 가격은 ${가격}이며 페이지수는 ${페이지} 이다`)
// }

// print(bl)

// let objects = ['멍멍이', '고양이']

// console.log(objects[0])

// let objects =  ['멍멍이', '고양이']

// objects.push('야옹이')

// console.log(objects[2])

// console.log(objects.length)

// for(let i = 0; i < 10; i++)
// {
//     console.log(i)
// }

// for(let i =  10; i > 0; --i)
// {
//     console.log(i)
// }

// let names = ['멍멍이', '고양이', '멍뭉이']

// for(let i = 0; i < names.length; i++)
// {
//     console.log(names[i])
// }

// let i = 0;

// while(i < 10)
// {
//     console.log(i)
//     i++
// }

// function sum0f(number)
// {
//     let sum = 0;
//     for(let i = 0; i < number.length; i++)
//     {
//         sum += number[i]
//     }
//     return sum
// }

// let result = sum0f([1, 2, 3, 4, 5])
// console.log(result)

// function biggerThanThree(numbers)
// {
//     let blank = []

//     for(let i = 0; i < numbers.length; i++)
//     {
//         if(numbers[i] > 3)
//         {
//              blank.push(numbers[i])
//         }
//     }
//     return blank
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7]
// console.log(biggerThanThree(numbers))

// let heros = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지']

// heros.forEach(hero =>
//     {
//         console.log(hero)
//     })


// let we =  [1, 2, 3, 4]

// we.forEach(me =>
//     {
//         console.log(me)
// })

// let array = [1, 2, 3, 4, 5, 6 ,7 ,8]

// let p = []

// array.forEach(n =>
//     {
//         p.push(n * n)
//     })

// console.log(p)

// let arrray = [1,2,3,4,5,6,7,8]

// let square =  n => n * n

// let squares = arrray.map(square)

// console.log(squares)

// let square = arrray.map(n => n * n)

// console.log(square)

// let heros = ['아이언맨', '캡틴', '토르']


// function index(n)
// {
//     console.log(heros.indexOf(n))
// }

// index('아이언맨')

// function Aniaml(type, name, sound)
// {
//     this.type = type
//     this.name = name
//     this.sound = sound
//     this.say = function()
//     {
//         console.log(this.sound)
//     }
// }

// let dog = new Aniaml('개', '멍멍이', '멍멍')
// let cat = new Aniaml( '고양이', '야옹이', '야옹')

// console.log(Aniaml(dog))

// function Animal(type, name, sound) {
//     this.type = type
//     this.name = name
//     this.sound = sound
//     this.say = function() {
//       console.log(this.sound)
//     };
//   }
  
//   const dog = new Animal('개', '멍멍이', '멍멍')
//   const cat = new Animal('고양이', '야옹이', '야옹')
//   const tot = new Animal('토마토', '토마', '토토')
  
//   dog.say()
//   cat.say()
//   tot.say()
//   console.log(dog.name)

// let bl = [1, 2, 3, 4, 5, 6, 7, 8]

// let squared = []

// bl.forEach(neW => {
//     squared.push(neW * neW)
// })

// console.log(squared)

// let array = [1, 2, 3, 4, 5, 6, 7, 8]

// let square = n => n * n
// let squared = array.map(square)
// console.log(squared)

// let array = [1, 2, 3, 4, 5, 6, 7, 8]

// let squared = array.map(n => n * n)

// console.log(squared)

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(2, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]


// let number = [10, 20, 30, 40]

// let value = number.push(10)

// console.log(number)


// let numbers = [10, 20, 30, 40]
// let value2 = numbers.pop()

// console.log(value2)
// console.log(numbers)

// function solution(dartResult) {
//     var answer = 0;
//     let input = dartResult.split('') //dartResult값 배열로 변환
//     let number = []    //darResult중 숫자만 이곳으로

//     for(let i = 0; i <= input.length; i++) //숫자 보내는 코드
//     {
//         for(let j = 1; j <= 10; j++)
//         {
//             if(input[i] == j)
//             number.push(j)
//         }
//     }   

//     for(let j = 0; j <= input.length; i++)
//     {
//         if(number[i] == input[j])
//         {
//             if(input[j])
            
//         }
//     }


//     return answer;
// }