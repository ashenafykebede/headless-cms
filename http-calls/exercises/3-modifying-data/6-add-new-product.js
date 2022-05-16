/**
 * Complete the following function that creates a new product
 */
async function createNewProduct(name, description, price, discount, category, outOfStock) {
  const path = 'products';
  const body = {
    "data":{
      "name":name,
      "description":description,
      "price":price,
      "discount":discount,
      "category":category,
      "outOfStock":outOfStock
    }
  };
  const url = `http://localhost:1337/api/${path}`
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body) 
  });
  return response.json();
}

createNewProduct("Test product", "description", 36, 2, 2, false)