const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Jonatan',
        //     age: 29
        // });
        reject('Something went wrong!');
    }, 1500);
});
console.log('before');
promise.then((data) => {
    console.log('1', data);
}).catch(error => {
    console.error(error);
});

console.log('after');

