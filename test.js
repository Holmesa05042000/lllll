// Sample phone data (replace with your actual phone data)
const phones = [
    { name: 'Phone A', price: 499 },
    { name: 'Phone B', price: 599 },
    { name: 'Phone C', price: 699 }
  ];
  
  // Function to display phones in the phone list
  function displayPhones() {
    const phoneList = document.getElementById('phone-list');
    phoneList.innerHTML = '';
    phones.forEach(phone => {
      const phoneItem = document.createElement('div');
      phoneItem.classList.add('phone-item');
      phoneItem.innerHTML = `
        <h2>${phone.name}</h2>
        <p>Price: $${phone.price}</p>
        <button onclick="addToCart('${phone.name}', ${phone.price})">Add to Cart</button>
      `;
      phoneList.appendChild(phoneItem);
    });
  }
  
  // Function to add item to the cart
  function addToCart(name, price) {
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    cartItem.textContent = `${name} - $${price}`;
    cartItems.appendChild(cartItem);
  }
  
  // Display phones when the page loads
  window.onload = displayPhones;
  