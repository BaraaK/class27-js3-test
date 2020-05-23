// Version 3

/*
1.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following URL: https://randomuser.me/api?results=5
- Makes use of async/await syntax
- Display the "name", "email" and "city" of the first person inside an unordered list.
*/
async function fetchJSON() {
  try {
    const response = await fetch("https://randomuser.me/api?results=5")
    const json = await response.json();
    const output =
      `<ul><li>${json.results[0].name.title} ${json.results[0].name.first} ${json.results[0].name.last}</li>
    <li>${json.results[0].email}</li>
    <li>${json.results[0].location.city}</li></ul >`
    document.body.innerHTML = output

  }
  catch (error) {
    console.error(error); // or we can render a message on the page to let user know there is problem
  }
}
//fetchJSON()

/*
2. 
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs

b) Explain in 100 words or less your approach for implementing the library
  1.include CDN link to index.html as script tag in the head 
    (<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>)
  2.include single <canvas> node in HTML to render the chart 
    <canvas id="myChart" width="400" height="400"></canvas>
  3.include script into HTML file too.
    <script>
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  </script>
*/

/*
3.
a) Create a class, called Car, that includes:
- A constructor method
- "model", "color", "seats" properties
- 1 additional method, called "getModel", which returns the model

b) Instantiate the class, and give it the name and attributes of a random animal

c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less
*/
class Car {
  constructor(model, color, seats) {
    this.model = model
    this.color = color
    this.seats = seats
  }
  getModel() {
    return this.model
  }
}
let myCar = new Car('ferari', 'red', 2)
/*
c.we made a class car which is a blueprint or description for a car 
with multi properties (model,color,seats)
*/

/*
4.
Write a function that:
- Takes in an array of strings as an argument
- Sorts the array alphabetically
- Adds -----> this one is not clear enough 

Example: ["Zebra", "Cookie", "Flower"]
Expected output: ["Cookies", "Flowers", "Zebras"]

Make use of the following array:
*/
function sortArray(arr) {
  const sortedArray = arr.sort(function (a, b) {
    return a.localeCompare(b);
  });
  return sortedArray.map(item => `${item}s`) //-Adds -----> this one is not clear enough 
}
const fruits = ['Strawberry', 'Apple', 'Tangerine', 'Banana', 'Melon', 'Pear'];
//console.log(sortArray(fruits))

/*
5.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!")
- Creates an empty <img> and add it to the document.
- When the button is clicked, inserts an image URL into the <img> tag and remove the button
- Uses the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/
function renderPage() {
  const btn = document.createElement('button')
  btn.innerText = 'click me!'
  const img = document.createElement('img')
  document.body.appendChild(btn)
  document.body.appendChild(img)
  btn.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('img').src = 'https://avatars3.githubusercontent.com/u/20858568?s=200&v=4'
    btn.style.display = 'none'

  })
}
//window.onload = () => renderPage()

/*
6.
Answer the following questions:
- What is an Application Programming Interface (API)?
- How does this relate to your HackYourRepo project?

Explain each in 200 words or less.
API is a set of instructions/methods so that software developers can implement it and make use of it
so they have not to rebuild some of services they need in their programs.
HackYourRepo has many function that could any one use it in case it's public such as fetchJSON
*/
