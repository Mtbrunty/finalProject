//open modal
function openModal() {
  let modal = document.getElementById("modal");

  modal.style.visibility = "visible";
}

//close modal
function closeModal() {
  let modal = document.getElementById("modal");

  modal.style.visibility = "hidden";
}

//add to cart function

function addToCart() {
  let itemObj = {
      name: "Hazy IPA",
      price: "$9.99",
      qty: 1
  }
  
  let modalContent = document.getElementById('modal-content'); // LINKS MODAL TO VARIABLES FOR PARSING DATA
  const cartContent = document.createElement('div');
  cartContent.classList.add('shoppingCartItem');
  cartContent.innerHTML = createHTML(itemObj); //injects object data into div 
  modalContent.appendChild(cartContent); //allows data to be able to be seen

}

function createHTML(productObj) {
  const innerHTMLString = `<ul>Name: ${productObj.name}</ul><ul>Price: ${productObj.price}</ul><ul>Quantity: ${productObj.qty}</ul>`;
  console.log(innerHTMLString)
  return innerHTMLString;
}