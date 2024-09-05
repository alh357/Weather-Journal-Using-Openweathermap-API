setTimeout(function () {
  console.log("third");
}, 3000);

function sync() {
  console.log("first");
}

sync();

//console.log("second");
//e.preventDefault();
// a = [];
// let entry = document.createElement("div");
// entry.classList.add("entry");
// let cite = document.createElement("div");
// cite.textContent = city.value;
// a.push(cite);
// let dat = document.createElement("div");
// dat.textContent = "12/2/2021";
// a.push(dat);
// let temp = document.createElement("div");
// temp.textContent = "30.7℃";
// a.push(temp);
// let feel = document.createElement("div");
// feel.textContent = note.value;
// a.push(feel);
// let x = document.createElement("div");
// x.textContent = "x";
// x.classList.add("x");
// entry.appendChild(x);
// for (i of a) {
//   i.classList.add("ent");
//   entry.appendChild(i);
// }
// entries.appendChild(entry);

//const task = await sendZip("http://localhost:8000/zip");

a = { b: 3 };
c = [a];
console.log(c[0].b);
