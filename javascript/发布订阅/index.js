function PubSub() {
    this.store = {}
}
PubSub.prototype.subscribe = function (type, cb) {
    const arr = this.store[type]
    if (arr && arr instanceof Array) {
        arr.push(cb)
    }
}
PubSub.prototype.unsubscribe = function (type) {
    const arr = this.store(type)
}
PubSub.prototype.publish = function(type){
    const arr = this.store(type)
    if(arr instanceof Array && arr.length>0){
        arr.forEach(cb =>{
            
        })
    }
}

const pubSub = PubSub()
const sayHello = function () {
    console.log('SAY HELLO!', '---------')
}
PubSub.subscribe('TEST', sayHello)
PubSub.publish('TEST')