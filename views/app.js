const city = document.querySelector(".city");
const note = document.querySelector(".feel");
const form = document.querySelector("form");
const entries = document.querySelector(".entries");

//const date = new date();

form.addEventListener("submit", addCard);

async function addCard(e) {
  e.preventDefault();
  a = [];
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
  const task = sendZip("http://localhost:8000/zip");
}

const sendZip = async (url = "") => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      zip: city.value,
    }),
  });

  // try {
  //     const newData = await response.json();
  //     return newData;
  // } catch (error) {
  //     console.log(error);
  // }
};
