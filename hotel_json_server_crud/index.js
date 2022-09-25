//
let page = 1;

let url = "https://fathomless-everglades-39788.herokuapp.com/api/hotel";

// taking data and sending into json server
let submit = async () => {
  let obj = {
    image: document.getElementById("image").value,
    price1: +document.getElementById("price").value,
    rating: +document.getElementById("rating").value,
    category: document.getElementById("category").value,
  };

  let res = await fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

let data;
// fetching data from json server and sending into display function
async function getdata() {
  data = await fetch(`${url}?_page=${page}&_limit=3`);
  data = await data.json();
  console.log(data);
  display(data);
}

getdata();

let con = document.getElementById("container");
function display(data) {
  con.innerHTML = null;

  data.forEach((el) => {
    let mdiv = document.createElement("div");
    mdiv.id = "mdiv";

    let image = document.createElement("img");
    image.src = el.image;
    image.id = "imagesrc";

    let price1 = document.createElement("p");
    price1.innerText = el.price1;

    let rating = document.createElement("p");
    rating.innerText = el.rating;

    let category = document.createElement("p");
    category.innerText = el.category;

    // taking id for deleting
    let id = el.id;

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.onclick = () => {
      remove(id);
    };

    let update = document.createElement("button");
    update.innerText = "Update price";
    update.onclick = () => {
      updatefun(id);
    };

    mdiv.append(image, price1, rating, category, btn, update);
    con.append(mdiv);
  });
}

// delete function
async function remove(id) {
  let res = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  console.log(id);
  getdata();
}

// for updating things
async function updatefun(id) {
  let value = +window.prompt("Enter price for update");
  let data = { price1: value };

  let res = await fetch(`${url}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //   console.log(id);
  getdata();
}

async function ltH() {
  let res = await fetch(`${url}?_sort=price1&_order=asc`);
  res = await res.json();
  //  console.log(res);
  display(res);
}

async function htl() {
  let res = await fetch(`${url}?_sort=price1&_order=desc`);
  res = await res.json();
  //  console.log(res);
  display(res);
}

function pre() {
  if (page === 0) {
    return;
  }

  page--;
  getdata();
}

function next() {
  // console.log(data.length,page)
  page++;
  getdata();
}

// filter on onchange AC
async function ac() {
  let res = await fetch(`${url}?category=AC`);
  res = await res.json();
  console.log(res);
  display(res);
}

// filter on onchange Non AC
async function non() {
  let res = await fetch(`${url}?category=NOAC`);
  res = await res.json();
  console.log(res);
  display(res);
}
