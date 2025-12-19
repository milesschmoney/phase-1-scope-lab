// 1. Declare a global variable called customerName using var
var customerName = 'bob';

// 2. Write a function that uppercases the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Declare a global variable from inside a function (bad on purpose)
function setBestCustomer() {
  bestCustomer = 'not bob'; // no var/let/const = global
}

// 4. Overwrite the globally declared bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// 6. Attempt to change a constant (this should throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}
