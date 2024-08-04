### Day 2: Mastering Advanced JavaScript Concepts and ES6 Features

#### Key Topics to Cover:

1. **Arrow Functions:**
   - **What They Are:** Arrow functions provide a more concise syntax for writing function expressions and have a lexical `this` binding.
   - **What They Solve:** They simplify function syntax and help avoid common pitfalls with the `this` keyword.
   - **Old Way:**
     ```javascript
     function sum(a, b) {
       return a + b;
     }
     // Problem: 'this' can be tricky inside functions
     ```
   - **New Way:**
     ```javascript
     const sum = (a, b) => a + b;
     ```

2. **Destructuring:**
   - **What It Is:** A way to unpack values from arrays or properties from objects into distinct variables.
   - **What It Solves:** Simplifies extracting data from arrays and objects.
   - **Old Way:**
     ```javascript
     var person = { name: 'John', age: 30 };
     var name = person.name;
     var age = person.age;
     ```
   - **New Way:**
     ```javascript
     const { name, age } = { name: 'John', age: 30 };
     ```
   - **Array Example:**
     ```javascript
     const [first, second] = [10, 20];
     ```

3. **Template Literals:**
   - **What They Are:** Allow embedding expressions within string literals using backticks.
   - **What They Solve:** Make string interpolation and multi-line strings easier.
   - **Old Way:**
     ```javascript
     var name = 'John';
     var message = 'Hello, ' + name + '! Welcome to the course.';
     ```
   - **New Way:**
     ```javascript
     const name = 'John';
     const message = `Hello, ${name}! Welcome to the course.`;
     ```

4. **Spread and Rest Operators:**
   - **Spread (`...`):**
     - **What It Is:** Expands an array or object into individual elements.
     - **What It Solves:** Makes it easier to work with arrays and objects, such as merging or cloning.
     - **Old Way:**
       ```javascript
       var arr1 = [1, 2, 3];
       var arr2 = arr1.concat([4, 5]);
       ```
     - **New Way:**
       ```javascript
       const arr1 = [1, 2, 3];
       const arr2 = [...arr1, 4, 5];
       ```
  
5. **Promises:**
   - **What They Are:** Promises represent the eventual completion (or failure) of an asynchronous operation.
   - **What They Solve:** Provide a cleaner way to handle asynchronous operations compared to callbacks, avoiding "callback hell."
   - **Old Way (Callbacks):**
     ```javascript
     function fetchData(callback) {
       setTimeout(() => {
         callback(null, 'data');
       }, 1000);
     }

     fetchData((err, data) => {
       if (err) {
         console.error(err);
       } else {
         console.log(data);
       }
     });
     ```
   - **New Way:**
     ```javascript
     const fetchData = () => {
       return new Promise((resolve, reject) => {
         setTimeout(() => {
           resolve('data');
         }, 1000);
       });
     };

     fetchData()
       .then(data => console.log(data))
       .catch(error => console.error(error));
     ```

6. **Async/Await:**
   - **What It Is:** Syntactic sugar over Promises for writing asynchronous code.
   - **What It Solves:** Makes asynchronous code look and behave more like synchronous code, improving readability.
   - **Old Way:**
     ```javascript
     function fetchData() {
       return new Promise((resolve, reject) => {
         setTimeout(() => {
           resolve('data');
         }, 1000);
       });
     }

     fetchData()
       .then(data => console.log(data))
       .catch(error => console.error(error));
     ```
   - **New Way:**
     ```javascript
     async function fetchData() {
       try {
         const response = await fetch('https://api.example.com/data');
         const data = await response.json();
         console.log(data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     }
     
     fetchData();
     ```

7. **Higher-Order Array Methods:**
   - **forEach:**
     - **What It Is:** Executes a provided function once for each array element.
     - **What It Solves:** Provides a clean way to iterate over arrays.
     - **Old Way:**
       ```javascript
       var numbers = [1, 2, 3];
       for (var i = 0; i < numbers.length; i++) {
         console.log(numbers[i]);
       }
       ```
     - **New Way:**
       ```javascript
       const numbers = [1, 2, 3];
       numbers.forEach(num => console.log(num));
       ```
   - **map:**
     - **What It Is:** Creates a new array populated with the results of calling a provided function on every element.
     - **What It Solves:** Transforms arrays in a concise way.
     - **Old Way:**
       ```javascript
       var numbers = [1, 2, 3];
       var doubled = [];
       for (var i = 0; i < numbers.length; i++) {
         doubled.push(numbers[i] * 2);
       }
       ```
     - **New Way:**
       ```javascript
       const numbers = [1, 2, 3];
       const doubled = numbers.map(num => num * 2);
       console.log(doubled); // [2, 4, 6]
       ```
   - **filter:**
     - **What It Is:** Creates a new array with all elements that pass the test implemented by the provided function.
     - **What It Solves:** Filters arrays in a concise way.
     - **Old Way:**
       ```javascript
       var numbers = [1, 2, 3, 4];
       var evenNumbers = [];
       for (var i = 0; i < numbers.length; i++) {
         if (numbers[i] % 2 === 0) {
           evenNumbers.push(numbers[i]);
         }
       }
       ```
     - **New Way:**
       ```javascript
       const numbers = [1, 2, 3, 4];
       const evenNumbers = numbers.filter(num => num % 2 === 0);
       console.log(evenNumbers); // [2, 4]
       ```
   - **reduce:**
     - **What It Is:** Executes a reducer function on each array element, resulting in a single output value.
     - **What It Solves:** Aggregates array values into a single result, like summing numbers.
     - **Old Way:**
       ```javascript
       var numbers = [1, 2, 3];
       var sum = 0;
       for (var i = 0; i < numbers.length; i++) {
         sum += numbers[i];
       }
       console.log(sum); // 6
       ```
     - **New Way:**
       ```javascript
       const numbers = [1, 2, 3];
       const sum = numbers.reduce((acc, num) => acc + num, 0);
       console.log(sum); // 6
       ```

8. **Modules:**
   - **What They Are:** ES6 introduced modules to help organize code into reusable pieces.
   - **What They Solve:** Allow for better organization and modularization of code.
   - **Old Way:**
     ```javascript
     // In math.js
     var math = {
       add: function(a, b) {
         return a + b;
       }
     };

     // In main.js
     var math = require('./math');
     console.log(math.add(2, 3)); // 5
     ```
   - **New Way:**
     ```javascript
     // In math.js
     export const add = (a, b) => a + b;

     // In main.js
     import { add } from './math.js';
     console.log(add(2, 3)); // 5
     ```

#### Project: Build a GitHub User Finder

**Objective:** Create a simple application to search for GitHub users and display their profile information.

**Steps:**
1. **Setup:** Create an HTML file with a form to input the GitHub username and a section to display user information.
2. **Fetch API:** Use the Fetch API to get user data from the GitHub API.
3. **Promises and Async/Await:** Handle the asynchronous API calls using Promises and async/await.
4. **Template Literals and Destructuring:** Display the user data using template literals and destructuring.
5.

 **Higher-Order Array Methods:** Utilize methods like map and filter to handle user repositories data.

**Example Code:**
```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GitHub User Finder</title>
      </head>
      <body>
        <h1>GitHub User Finder</h1>
        <form id="user-form">
          <input type="text" id="username" placeholder="Enter GitHub username">
          <button type="submit">Search</button>
        </form>
        <div id="user-result"></div>

        <script>
          const form = document.querySelector('#user-form');
      const username = document.querySelector('#username');
      const userResult = document.querySelector('#user-result');



      async function fetchData(username) {

          try {
              const url = `https://api.github.com/users/${username}`;
              const resposne = await fetch(url);

              const { name, avatar_url, bio } = await resposne.json();

              userResult.innerHTML = ` 
                  <h1>${name}</h1>
                  <img src="${avatar_url}">
                  <p>${bio}</p>  
              `;
          } catch (err) {

              console.log(err)
          }
      }


      form.addEventListener('submit', (event) => {
          event.preventDefault();
          fetchData(username.value);
      })
  </script>
</body>
</html>
```
