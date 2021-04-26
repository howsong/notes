# 高级类

### Record
```typescript
// 源码
type Record<K extends keyof any,T> =  {
    [P in K]:T
}
// 示例
type Person = Record<'name'|'age',string>
// 等价于 type Person = {name:string,age:string}
```
### Partial vs Required
```typescript
interface Person {
    name:string
    age:number
}
// 源码
type Partial<T> =  {
    [P in keyof T]?:T[P]
}
// 示例
type PartialPerson = Partial<Person>
// 等价于 interface Person {
//    name?:string
//    age?:number
//}
```
```typescript
interface Person {
    name?:string
    age:number
}
// 源码
type Required<T> =  {
    [P in keyof T]-?:T[P]
}
// 示例
type RequiredPerson = Required<Person>
// 等价于 interface Person {
//    name:string
//    age:number
//}
```

### Readonly
```typescript
interface Person {
    name?:string
    age:number
}
// 源码
type Readonly<T> =  {
   readonly [P in keyof T]:T[P]
}
// 示例
type ReadonlyPerson = Readonly<Person>
// 等价于 interface ReadonlyPerson {
//   readonly name?:string
//   readonly age:number
//}
```
### Pick vs Omit
```typescript
// Pick 选择出指定属性
interface Person {
    name?:string
    age:number
}
// 源码
type Pick<T, K extends keyof T> =  {
    [P in keyof T]:T[P]
}
// 示例
type PickAgePerson = Pick<Person, 'age'>
// 等价于 interface PickAgePerson {
//   age:number
//}

// Omit 剔除指定属性
// 示例
type OmitAgePerson = Omit<Person, 'age'>
// 等价于 interface OmitAgePerson {
//   name?:string
//}

```

### Exclude  vs Extract
```ts
interface Worker {
 name: string
 age: number
 email: string
 salary: number
}
 
interface Student {
 name: string
 age: number
 email: string
 grade: number
}

type ExcludeKeys = Exclude<keyof Worker, keyof Student>
// 'name' | 'age' | 'email'
type ExtractKeys = Exclude<keyof Worker, keyof Student>
// 'name' | 'age' | 'email' | 'grade'
```

### &
