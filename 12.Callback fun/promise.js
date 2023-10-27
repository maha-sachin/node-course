// const promise = new Promise((resolve,reject)=>{
//     console.log("this is promise func")
//     throw "err"
//     if(false){
//         const pname = {name:"maha"}
//         resolve(pname)
//     }
//     else {
//         const error = {errcode:"error1001 "}
//         reject(error)
//     }
// })

// promise.then(
//     (valu)=>{console.log(valu)},
//     (erro)=>{console.log(erro)},
// ).catch(
//     ()=>{console.log("catch error")}
// ).finally(()=>(
//     console.log("clean up"))
// )


// Promise and  then

const p = Promise.reject("not done")

p.then((val)=>{
    console.log(val)
    return "done2"
}).then((val)=>{
    console.log(val)
    return "done3"
}).then((val)=>{
    console.log(val)
    
}).catch((val)=>{
    console.log(val)
})