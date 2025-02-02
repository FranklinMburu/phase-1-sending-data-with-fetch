// Add your code here
// index.js

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
      // Appends the id to the DOM (for testing purposes)
      document.body.innerHTML = data.id;
    })
    .catch(error => {
      // Appends error message to the DOM (for testing purposes)
      document.body.innerHTML = error.message;
    });
  }
  
  // Export the function for use in tests
  module.exports = submitData;
  