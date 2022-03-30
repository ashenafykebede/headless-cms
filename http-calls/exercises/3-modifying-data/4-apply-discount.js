/**
 * Complete the following function that applies a discount 
 * to a product
 */
async function applyDiscount(productId, discountId) {
  const path = `products/${productId}`;
  const body = {
    "data":{
      "discount":discountId
    }
  };
  const url = `http://localhost:1337/api/${path}`
  const response = await fetch(url, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body) 
  });
  return response.json();
}

applyDiscount(5, 2);