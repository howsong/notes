### useState
> 状态管理、颗粒度更高
### useReducer 
> 多个状态合并成对象来管理
### useRef
- 父组件调用子组件的方法
```js
import React, { useRef } from 'react'
const Child = ()=>{
    const fn = ()=>{
        console.og('调用子组件方法')
    }
    useImperativeHandle(cRef, () => {
        return {
            childFn1: fn1
        }
    })
    return (
        <div></div>
    )
}
const Parent = ()=>{
    const childRef = useRef()
    return (
        <div>
            <button onClick={()=>{
                childRef.current.childFn1()
            }}>调用子组件方法</button>
            <Child cRef={childRef} />
        </div>
    )
}

```

### useMemo 
> 缓存计算结果数据
### useCallback 
> 实现原理和useMemo，不过其返回值是函数

### useEffect 
> 用于处理函数的副作用
- useEffect依赖某个函数的不可变性，这个函数的不可变性又依赖于另一个函数的不可变性，这样便形成了一条依赖链。一旦这条依赖链的某个节点意外地被改变了，你的useEffect就被意外地触发了，如果你的useEffect是幂等的操作，可能带来的是性能层次的问题，如果是非幂等，那就糟糕了
不要在useEffect里面写太多的依赖项，划分这些依赖项成多个单一功能的useEffect。其实这点是遵循了软件设计的“单一职责模式”
```ts
useEffect(()=>{
    const subscription = props.source.subscribe()
    return () => {
        subscription.unsubscribe()
    }
})
```
### useLayoutEffect 
> 和useEffect使用原理一样，如果逻辑涉及到操作dom时就需要用到useLayoutEffect

### useContext
> 可以基于useContext和useReducer实现类似redux的功能
### useDebugValue
> useDebugValue 接受一个格式化函数作为可选的第二个参数。该函数只有在 Hook 被检查时才会被调用。它接受 debug 值作为参数，并且会返回一个格式化的显示值。
### useImperativeHandle
> useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用


### 为什么要用react hooks
react hooks
- 代码更加简洁
- 可以基于基础的hooks, 脱离组件抽离出纯逻辑结构
class 
- 业务逻辑揉在生命周期里面，不利于逻辑复用

hooks很好用很强大，但它不擅长异步。但在有太多异步逻辑的代码时，class比它更适合、更稳、更好维护
