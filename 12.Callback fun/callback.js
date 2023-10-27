function asyncTask(cb){
    setTimeout(()=>{
        cb(null,"this is a data from server")

    },0)
}

asyncTask((err,data)=>{
    if (err) {
        throw err;
    }
    else {
        console.log("data: ",data)
    }

})

