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