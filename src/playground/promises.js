const promise = new Promise((resolve, reject) => {
        //setTimeout(() =>{resolve('This is my resolve data')},5000)

        reject('something went wrong');
        
});
console.log('before');
promise.then((data) => {
    console.log(data);
}).catch((error)=>{
    console.log('error',error);
});

console.log('after');