// async -  makes function to return a promise
// await - makes a function to wait for a promise


function walkTheDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve('You walked the dog');
            } else {
                reject('You did not walk the dog');
            }
        }, 1000)
    })
};

function doShoping() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shopingDone = true;
            if (shopingDone) {
                resolve('You have done shoping');
            } else {
                reject('You did not do shoping');
            }
        }, 1000)
    })
};

function cleanTheCitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned) {
                resolve('You cleaned the kitchen');
            } else {
                reject('You did not clean the kitchen');
            }
        }, 4000)
    })
}



doShoping().then(value => { console.log(value); return cleanTheCitchen() })
    .then(value => { console.log(value); return doShoping()})
    .then(value => { console.log(value); return true})


    
walkTheDog().then(value => { console.log(value); return walkTheDog() })
    .then(value => { console.log(value); return walkTheDog()})
    .then(value => { console.log(value); return true})

console.log('I am at the end')



