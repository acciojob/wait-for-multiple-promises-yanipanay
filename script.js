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

const startTime = performance.now();

Promise.all([p1, p2, p3])
  .then((value) => {
    value.map((value, index) => {
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
