
// let a={
//     b:'raj',
//     c:{
//         d:'jimmy'
//     }
// }
const lodash = require('lodash');
// import lodash from ''
// let d={...a}
// // let d=a
// // shallow copy in which only first level attribute is getting copied
// // let d=Object.assign({},a)
// d.b='himanshu'
// console.log(a);
// console.log(d);

//deep copy 

// let a={
//     b:'raj',
//     c:undefined
// }
// // let d=JSON.parse(JSON.stringify(a)) // deep copy but data loss
// let d=structuredClone(a)  // deep copy but no data loss (when there is non-serizable property )
// // let d={...a} // shallow copy 
// console.log(d)
// console.log(a)

let a1={
   value:()=>{
      return 6
   }
}
// let a=JSON.parse(JSON.stringify(a1))
// let a=structuredClone(a1)
  let a=lodash.cloneDeep(a1) // best way if therer is function 
console.log(a)

