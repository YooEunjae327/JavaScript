//객체생성자
//객체생성자는 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 구현 할 수 있게 한다

function job(type, name, sound)
{
    this.type = type
    this.name = name
    this.sound = sound
    this.say = function() 
    {
        console.log(th1is.name, this.type)
    }
}

const order = new job('명령자', '오더', '윙')
let ivd = new job('1.type', '2.name', '3.sound')

console.log(order)



