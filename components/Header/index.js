// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


let headerContainer = document.querySelector(".header-container");

function Header() {
    let header = document.createElement("div");
    header.classList.add("header");

    let date = document.createElement("span");
    date.classList.add("date");
    date.innerText = "May 10th, 1993";

    let h1 = document.createElement("h1");
    h1.innerText = "Lambda Times";

    let temp = document.createElement("span");
    temp.classList.add("temp");
    temp.innerText = "84";

    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);

    headerContainer.appendChild(header);
}

Header();