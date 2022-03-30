/**
 * Complete the following function 
 * that can be used to mark a product 
 * as out of stock
 * @param {*} productId the id of the product that is out of stuck
 */
async function markOutOfStock(productId) {
 const path = `products/${productId}`;
 const url = `http://localhost:1337/api/${path}`
 const body = {
   "data":{
     "outOfStock":true
   }
 };
   const response = await fetch(url,{
     method:'PUT',
     headers: {
       'content-type':'application/json'
     },
     body:JSON.stringify(body)
   }); 
   return response.json();
}

markOutOfStock(7);