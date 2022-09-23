const url = "https://frozen-tor-96992.herokuapp.com/api/food";
let page = 1;
let getdata = async () => {
  let res = await fetch(`${url}?_page=${page}&_limit=5`);
  res = await res.json();
  display(res);
};
getdata();

let container = document.getElementById("container");
let display = (data) => {
  container.innerHTML = "";
  data.forEach(({ imz, t, d, pr, r, id }, el) => {
    let div = document.createElement("div");
    let title = document.createElement("h3");
    title.innerText = t;
    let img = document.createElement("img");
    img.src = imz;
    let price1 = document.createElement("h3");
    price1.innerText = pr;
    let desc = document.createElement("h4");
    desc.innerText = d;
    let rating = document.createElement("h5");
    rating.innerText = r;
    let order = document.createElement("button");
    order.innerText = "Order";
    // adding things on cart
    order.addEventListener("click", function () {
      addtoorder({ imz, t, d, pr, r, id });
    });

    div.append(img, title, price1, desc, rating, order);
    container.append(div);
  });
};


// add to cart functionlity
let cart = JSON.parse(localStorage.getItem("orderfood")) || [];
function addtoorder(el) {
  console.log(el);
  cart.push(el);
  alert("order added successfully");
  localStorage.setItem("orderfood", JSON.stringify(cart));
}

//price
async function low() {
  let res = await fetch(`${url}?_sort=pr&_order=asc`);
  res = await res.json();
  display(res);
}

async function high() {
  let res = await fetch(`${url}?_sort=pr&_order=desc`);
  res = await res.json();
  display(res);
}
//rating
async function lowtohigh() {
  let res = await fetch(`${url}?_sort=r&_order=asc`);
  res = await res.json();
  display(res);
}

async function hightolow() {
  let res = await fetch(`${url}?_sort=r&_order=desc`);
  res = await res.json();
  display(res);
}

//filter
async function filter() {
  let res = await fetch(`${url}?r_gte=5`);
  res = await res.json();
  display(res);
}

async function filter1 () {
  let res = await fetch(`${url}?pr_gte=500&pr_lte=1000`);
  res = await res.json();
  display(res);
}

async function pre() {
  if (page === 0) {
    return;
  }
  page--;
  getdata();
}

async function next() {
  page++;
  getdata();
}
