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