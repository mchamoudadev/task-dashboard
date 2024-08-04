// function sum(a, b) {
//     return a + b
// }

// console.log(sum(10, 20))


// arrow function


// const sum = (a, b) => a + b


// console.log(sum(10, 40))


// const student = {
//     name: "Kalid",
//     age: 30,
//     class: "CA141"
// }



// let name = student.name;
// let age = student.age;
// let studentClass = student.class;


// distructuring

// const { name, age, id } = {
//     name: "Farah",
//     age: 29,
//     id: "11EE"
// }


// console.log(name);
// console.log(age);
// console.log(id);



// const students = ["hamuda", "Farhio", "Kalthuma"];

// const student1 = students[0];
// const stuent2 = students[1];
// const student3 = students[2];



// const [jm, duraan, kalid] = ["Jamal", "Duraan", "Kalid"];


// const { name, age, id } = jm

// console.log(name);
// // console.log(duraan);



// const myName = "Kalid";

// const date = new Date().getFullYear();



// console.log("Hi " + myName + " Habeen Wanaagsan " + date);


// // template literal

// console.log(`Hi ${myName} Habeen Wanaagsan ${date}`);

// const arr1 = [1, 2, 3];

// const arr2 = arr1.concat([4, 5]);


// const arr1 = [1, 2, 3];

// const arr2 = [...arr1, 4, 5];

// console.log(arr2);


// function fetchData(callback) {

//     setTimeout(() => {
//         callback(null, 'data');
//     }, 1000)

// }

// fetchData((err, data) => {
//     if (err) {
//         console.log("Fetching data error");
//     } else {
//         console.log(data);
//     }
// })




// const fetchData = () => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data");
//         }, 2000)
//     })
// }



// fetchData()
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err))



// async function fetchData() {

//     try {

//         const resposne = await fetch('https://jsonplaceholder.typicode.com/postss');

//         const data = await resposne.json();

//         console.log(data)

//     } catch (err) {

//         console.log(err)

//     }
// }

// fetchData();





// console.log(students[0]);
// console.log(students[1]);

// console.log(students[2]);

// console.log(students[3]);

// using for loop


// starting point = xamar
// end point = afgooye 
// yaa kugeynaayo = driver

// const students = ["Naima", "Kasim", "Ayanle", "Ciise", "Tood", "Tman"];

// console.log(students.length)

// // students.length = 6

// for (let i = 0; i < students.length; i++) {

//     console.log(students[i]);

// }

// forEach

// students.forEach(student => console.log(student));

// const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const doubled = ids.map(id => id * 2);

// console.log(doubled);


// const evenNumbers = ids.filter(id => id % 2 == 0);

// console.log(evenNumbers)


// const numbers = [1, 2, 3];

// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum);

// export const add = (a, b) => a + b;


// console.log(add(1, 4))



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