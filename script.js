// function calculateMinCost() {
//     //your code here

//       let text = document.getElementById("rope-lengths").value;

//       //console.log(text, typeof text)

//       let arr=text.split(", ");
//       for(let i in arr){
//         arr[i]=Number(arr[i]);
//       }

//       let sum=0;

//       function set(arr) {
//         console.log(arr);
//         arr.sort((a, b) => b - a);
//         let s = arr.pop() + arr.pop();
//         console.log(s,arr);
//         sum += s;
//         arr.push(s);
//       }

//       while (arr.length>1) {
//           set(arr);
//       }

//       let res = document.getElementById("result");
//       console.log(res);
//       const textNode = document.createTextNode(sum);
//         res.appendChild(textNode);
//   }

//   function myFirst() {
//     myDisplayer("Hello");
//   }

//   function mySecond() {
//     myDisplayer("Goodbye");
//   }

//   myFirst();
//   mySecond();

//   var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");

// ctx.fillStyle = "red";
// ctx.fillRect(0, 0, 100, 100);

// // function fun(person1, person2=person){
// //   if(person1!==person2)
// //   return "no";
// //   else return "yes"
// // }
// // const person={name:'lydia'}

// // console.log(fun(person));

// // console.log(20 + 12 * 2 - 10 / 2)

// // function test(a,b,c){
// //   console.log(a+b+c);
// // }

// // test(2,3,4,5);

// //var a ; console.log(a+"b");

// //console.log(1 -'1')

// var fruits = ['Apple', 'Orange','Kiwi','Strawberry']

// fruits.splice(4,0,'banana');

// console.log(fruits);

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("900");
//   }, 3000);
// });

// console.log(p1);

// p1.then((value) => {
//   console.log(value, "is logged");
// });

// setTimeout(() => {
//   console.log(p1);
// }, 6000);

//your JS code here. If required.

let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("2");
  }, 2000);
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("1");
  }, 1000);
});

let p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("3");
  }, 3000);
});

const tbody = document.getElementById("output");
const row = document.createElement("tr");
row.innerHTML = `<td>Loading...</td>`;
tbody.appendChild(row);

const startTime = performance.now();

Promise.all([p1, p2, p3])
  .then((value) => {
    value.map((value, index) => {
      if (index == 0) tbody.innerHTML = "";
      const row = document.createElement("tr");
      row.innerHTML = `<td>Promise ${index + 1}</td><td>${value}</td>`;
      tbody.appendChild(row);
    });
  })
  .then(() => {
    const endTime = performance.now();

    const row = document.createElement("tr");
    row.innerHTML = `<td>Total Time</td><td>${
      (endTime - startTime) / 1000
    }</td>`;
    tbody.appendChild(row);
  });
