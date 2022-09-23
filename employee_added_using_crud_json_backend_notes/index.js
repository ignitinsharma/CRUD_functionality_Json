// for pagination default is always on first page
let page = 1;


// step-2
// fetching json sever data form server to and sending to display the data into dom

let url = "https://frozen-tor-96992.herokuapp.com/api/useradd";

async function getdataformapi() {
  let res = await fetch(`${url}?_page=${page}&_limit=5`);
  res = await res.json();
  display(res);
}

getdataformapi();

// step-1
//  taking data form user and sending the data in json server
async function user() {
  let name = document.getElementById("name").value;
  let batch = document.getElementById("batch").value;
  let course = document.getElementById("course").value;
  let age = document.getElementById("age").value;
  let mobile = document.getElementById("mobile").value;
  let score = document.getElementById("score").value;

  let userdata = {
    name,
    batch,
    course,
    mobile,
    age,
    score,
    status: true,
  };
  console.log(userdata);


  // sending data into json server 
  let res = await fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(userdata),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);
  getdataformapi();
}


// step-3
// for showing fetched data form json server api to DOM
let con = document.getElementById("container");

function display(data) {
  con.innerHTML = null;

  data.forEach(({ name, batch, course, age, mobile, score, id, status }) => {
    let mdiv = document.createElement("div");
    let n = document.createElement("h3");
    n.innerText = name;

    let ba = document.createElement("p");
    ba.innerText = batch;

    let cou = document.createElement("p");
    cou.innerText = course;

    let a = document.createElement("p");
    a.innerText = age;

    let mobi = document.createElement("p");
    mobi.innerText = mobile;

    let sc = document.createElement("p");
    sc.innerText = score;

    let i = document.createElement("p");
    i.innerText = id;

    let s = document.createElement("p");
    s.innerText = status;

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.addEventListener("click", function () {
      remove(id);
    });

    let btn2 = document.createElement("button");
    btn2.innerText = "Update age";
    btn2.addEventListener("click", function () {
      updateage(id);
    });

    mdiv.append(n, ba, cou, a, mobi, sc, i, s, btn2, btn);
    con.append(mdiv);
  });
}

// step-4
// for updating the age of that person
// here we are simply taking data form user when user click on button
// we simply after taking new age put new age in obj and assign new age to that user
// and then we again fetch api and then send that updated obj to that id
// then again call that main api function for updated result

let updateage = async (id) => {
  const value = window.prompt("Enter new age");
  let newage = { age: value };

  let res = await fetch(`${url}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(newage),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // we are updating data so thats why we are calling fetch api function
  getdataformapi();
};


// for making sorting request is like GET
// sorting low to high we have to use query --> ?_sort=age&_order=asc
async function lth() {
  let res = await fetch(`${url}/?_sort=age&_order=asc`);
  res = await res.json();
  display(res);
}


// High to low  query --> ?_sort=age&_order=desc
async function htl() {
  let res = await fetch(`${url}/?_sort=age&_order=desc`);
  res = await res.json();
  display(res);
}



// this filter function is working when user is changing in html page
async function filter() {
  let val = document.getElementById("filter").value;
  let res = await fetch(`${url}?course=${val}`);
  res = await res.json();
  display(res);
}


// for name search
// after api --> ?name=mani
// means if page == 1 so dont back previous thats why
async function pre() {
  if (page == 1) {
    return;
  }
  page--;
  getdataformapi();
}


// pagination  next
async function next() {
  page++;
  // when we do pagination in json server so we have to call api fetch function
  // not a append function
  getdataformapi();
  // if we are simply fetching api and appending so we have to call display function
}



// delete data from json server we
// simply take id and fetch in server then change method to delete and
// call again fetch method because agin fetch method show tha update data from json server api
let remove = async (id) => {
  let res = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });

  getdataformapi();
};


// in JSON server
// getdataforapi() function means api function when we call this function
// when we do any operation on json server so we need to call that function 
// after performaing any kind of json server request


// display() we call display function when we need to work on dom things
// when we need to work on data that is already fetched we basically on like
// shorting filter