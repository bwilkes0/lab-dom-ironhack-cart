// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const calculatePrice = price * quantity

  product.querySelector('.subtotal span').innerHTML = calculatePrice
  return calculatePrice

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multipleProducts = document.querySelectorAll('.product')
  let subtotalPrice = 0

  multipleProducts.forEach(function (elm) {
    subtotalPrice += updateSubtotal(elm)
  })
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = subtotalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});