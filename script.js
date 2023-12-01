const products = document.querySelector(".products");
const url = 'https://course-api.com/javascript-store-products';

fetch (url)
  .then((response) => response.json())
  .then((productsArray) => {
    displayProducts(productsArray);
  })
  .catch((error) => {
    console.log(error)
  });

  function displayProducts(data) {
    data.map((product) => {
      const { name, price } = product.fields;
      const { id } = product;
      const { url } = product.fields.image[0];
      document.querySelector(".products").innerHTML += `
      <article class="product">
        <a href="modal.html?id=${id}">
          <img
            src="${url}"
            class="product-img img"
            alt="${name}"
          />
          <footer>
            <h5 class="product-name">${name}</h5>
            <span class="product-price">$ ${price/100}</span>
          </footer>
        </a>
      </article>
      `;
      return { name, price, id, url };
    });
  }


      


  
