var container = document.getElementById("container");

// let url = "https://jsonplaceholder.typicode.com/todos/";

let url = "https://fakestoreapi.com/products/";

fetchData = async () => {
  let res = await fetch(url);
  let data = await res.json();

  for (let i = 0; i < data.length; i++) {
    container.innerHTML += `
    <div id="box">
       <img src="${data[i].image}" />
       <h3>$${data[i].price}</h3>
       <p>${data[i].title}</p>
       <p>${data[i].category}</p>
       <p>${data[i].id}</p>
    </div>
    `;
    console.log(data[i]);
  }
};
fetchData();


const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("mouseover", () => {
  dropdownContent.style.display = "block";
});

dropdown.addEventListener("mouseout", () => {
  dropdownContent.style.display = "none";
});

// For Mobiles

const dpMo = document.querySelector(".dpMO");
const dpcontent = document.querySelector(".dp-content");

dpMo.addEventListener("mouseover", () => {
dpcontent.style.display = "block";
});

dpMo.addEventListener("mouseout", () => {
  dpcontent.style.display = "none";
});
