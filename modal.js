const queryString = location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const url = 'https://course-api.com/javascript-store-single-product';

fetch (`${url}?id=${id}`)
  .then((response) => response.json())
  .then((singleProduct) => {
    const { name, price, colors, description, company } = singleProduct.fields;
    const { url: img } = singleProduct.fields.image[0];
    const productColors = colors
    .map((color) => {
      return `<span class = "single-product-color" style="background-color: ${color}"></span>`
    })
    .join("");
    document.querySelector(".single-product-wrapper").innerHTML = `
      <img
        src="${img}"
        class="single-product-img"
        alt="${name}"
      />
      <div class ="single-product-info">
        <h3 class="single-product-name">${name}</h3>
        <span class="single-product-company">${company}</span>
        <span class="single-product-price">$ ${price/100}</span>
        <div class="single-product-colors">${productColors}</div>
        <p class="single-product-description">${description}</p>
        <button class="addToCart-btn">add to cart</button>
      </div>
      `;
    })
  .catch((error) => {
    console.log(error)
  });
