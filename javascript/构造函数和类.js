// 类和构造函数其实本质是一样的，类你可以理解构造函数的一种语法糖
class Dog {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat(food) {
        console.log(`${this.name}正在吃${food || '东西'}`)
    }
}


// 构造函数写法
function DogF(name, age) {
    this.name = name
    this.age = age
}
DogF.prototype.eat = function (food) {
    console.log(`${this.name}正在吃${food || '东西'}`)
}

const littleBlackDog = new Dog('小黑', 2)
littleBlackDog.eat('骨头')
const littleYellowDog = new DogF('小黄', 5)
littleYellowDog.eat('肉')
