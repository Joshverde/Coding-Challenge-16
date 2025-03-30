// Task 2
function fetchProductThen() {
    // creates a function
    fetch("https://www.course-api.com/javascript-store-products") // fetches data from the provided link
      .then((products) => {
        return products.json(); //  returns data as a json file
      })
      .then((data) => {
        data.forEach((product) => {
          console.log(product.fields.name); //  console logs the name of each product using forEach
        });
      })
      .catch((error) => {
        console.error("Error:", error); // catches any erors and logs them to the console as an error
      });
  }
//Task 3
const fetchProducts = async function () {
    // creates an async fucntion
    try {
      // trys block of code
      const result = await fetch(
        // waits for fetch to complete
        "https://www.course-api.com/javascript-store-products"
      );
      if (!result.ok) {
        // if the result is not ok
        throw new Error("failed to fetch"); //  creates an error message
      }
      const products = await result.json(); // waits for result.json to be created
      displayProducts(products); // calls the displayProducts function with products as the parameters
    } catch (error) {
      handleError(error); // calls the handle error function with the error as the parameters
    }
  };
// Task 4
function displayProducts(products) {
    const container = document.querySelector("#product-container");
  
    products.slice(0, 5).forEach((product) => {
      // for  each of the  first 5 products
      const prodDiv = document.createElement("div"); // create a div element
      prodDiv.classList.add("product"); // cerates a class for products (used in style.css)
  
      const prodName = document.createElement("h3"); // creates a header element
      prodName.textContent = product.fields.name; // assigns text content
  
      const prodPrice = document.createElement("p"); // creates a paragraph element
      prodPrice.textContent = `Price: $${product.fields.price}`; // assigns text content
  
      const prodImage = document.createElement("img"); // creates image element
      prodImage.src = product.fields.image[0].url; // calls ther corelating image url
      prodImage.alt = product.fields.names; // assigns slternative text for the image
  
      prodDiv.appendChild(prodName); // appends to prodDiv
      prodDiv.appendChild(prodPrice); // appends to prodDiv
      prodDiv.appendChild(prodImage); // appends to prodDiv
  
      container.appendChild(prodDiv); // appends prodDiv to container
    });
  }
  