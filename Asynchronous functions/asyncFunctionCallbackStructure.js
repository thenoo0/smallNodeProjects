//Callback - function that is passed as an argument to the another function to 
//handle asyncronouse operation. Alternative to then syntax and async await


function doShoping(callback) {

    setTimeout(() => {
        const shopingDone = true;
        if (shopingDone) {
            console.log('You have done shoping');
        } else {
            console.log('You did not do shoping');
        }
        callback();
    }, 1000)
}


function walkTheDog() {
    const dogWalked = true;
    if (dogWalked) {
        console.log('You walked the dog');
    } else {
        console.log('You did not walk the dog');
    }
};



doShoping(walkTheDog);

