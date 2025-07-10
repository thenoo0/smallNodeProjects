// to wait for a function which returns a promise (wait until promise will be resolved)
// we can use asyn await structure
// async -  makes function to return a promise
// await - makes a function to wait for a promise


function walkTheDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
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


async function doChores() {
    try {
        console.log(await cleanTheCitchen());
        console.log(await doShoping());
        console.log(await walkTheDog());
    } catch(error) {
        console.log(error);
    }
    
}

doChores();



// cleanTheCitchen().then(value => { console.log(value); return doShoping() })
//     .then(value => { console.log(value); return doShoping() })
//     .then(value => { console.log(value); return true })
//     .catch(error => console.log(error)); //this catches rejected promises. If rejected promis is at the beginning of code, then following instructions will not be executed.



// walkTheDog().then(value => { console.log(value); return walkTheDog() })
//     .then(value => { console.log(value); return walkTheDog() })
//     .then(value => { console.log(value); return true })
//     .catch(error => console.log(error));

// console.log('I am at the end')



