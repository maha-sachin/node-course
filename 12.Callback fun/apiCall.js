const makeApiCall = (time)=>{
    return () => 
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("this API is execute in : "+time)

            
        },time)
    })
}

// makeApiCall(2000).then((val)=>console.log(val))

let multiApiCall = [makeApiCall(1000),makeApiCall(2000),makeApiCall(3000),makeApiCall(4000)]


// Promise.all(multiApiCall).then((val)=>console.log(val))
// Promise.race(multiApiCall).then((val)=>console.log(val))

(async function(){
    for(let request of multiApiCall){
        console.log(await request())
    }
})()