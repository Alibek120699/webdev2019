// constructing a promise object
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};
const myExecutor = (resolve, reject) => {
    if(inventory.sunglasses>0){
        resolve('Sunglasses order processed.');
    }
    else{
        reject('That item is sold out.');
    }
}
  
function orderSunglasses(){
    return new Promise(myExecutor);
}
let orderPromise = orderSunglasses();
console.log(orderPromise);
// we enter "node app.js" command in terminal to run program

// setTimeout() function
console.log("This is the first line code in app.js.");:
function usingSTO(){
  console.log('This is the last line of synchronous code');
}
setTimeout(usingSTO, 2000);
console.log("This is the last line of code in app.js.");

// onFulfilled and onRejected functions
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
    console.log(rejectReason);
};

checkInventory(order).then(handleSuccess, handleFailure);

// .catch() function
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

checkInventory(order)
	.then(handleSuccess)
	.catch(handleFailure);

// chaining multiple promises
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});

// avoiding common mistakes
// mistake 1: nesting promises instead of chaining them
// instead of .then() inside .then() we should use chain of multiple .then():
checkInventory(order)
    .then((resolvedValueArray) => {
        processPayment(resolvedValueArray)
	})
    .then((resolvedValueArray) => {
        shipOrder(resolvedValueArray)
    })
    .then((successMessage) => {
        console.log(successMessage);
    });
// mistake 2: forgetting to return a promise
// we should always return promise in .then():
checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray)
			})
    .then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray)
      })
     .then((successMessage) => {
        console.log(successMessage);
        return successMessage;
      });

// Promise.all()
const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');
Promise.all([checkSunglasses, checkPants, checkBags])
.then(onFulfill)
.catch(onReject);