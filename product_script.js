// script.js

// ดึง id ของสินค้า

document.addEventListener("DOMContentLoaded", function() {
  // Existing script logic here...



const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// ดึงข้อมูลจาก products.json
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const product = products.find(p => String(p.id) === productId);
    if (product) {
      // แสดงข้อมูลใน product.html
      const container = document.getElementById('product-container');
      container.innerHTML = `
      <div class="product-details">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div> 
        <div class="product-info">
          <h1>${product.name}</h1>
          <p>Product Description: ${product.description}</p>
          <p>Price: ${product.price}</p>
          <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        </div>
        </div>
      `;
    } else {
      document.getElementById('product-container').innerHTML = '<p>ไม่พบสินค้า</p>';
    }
  })
  .catch(error => console.error('Error loading products:', error));
});