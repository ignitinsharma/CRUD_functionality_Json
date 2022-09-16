
// when we add task so screen got onload automatically
window.addEventListener("load", () => {
  getdata();
});


//fetching data form json server

let getdata = async () => {
  let result = await fetch("http://localhost:3000/api/todo");
  let mainres = await result.json();
  display(mainres);
  console.log(mainres);
};


let container = document.getElementById("container");


// appending data in dom after fetching from own json server
function display(data) {
  container.innerHTML = null;
  data.forEach(({ id, title, status }) => {
    let div = document.createElement("div");

    let i = document.createElement("h3");
    i.innerText = id;

    let ti = document.createElement("h2");
    ti.innerText = title;

    let sta = document.createElement("h3");
    sta.innerText = status;

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.onclick = () => {
      remove(id);
    };

    let btntoggle = document.createElement("button");
    btntoggle.innerText = "Toggle";
    btntoggle.onclick = () => {
      toggle(id);
    };

    div.append(ti, sta, btn, btntoggle);
    container.append(div);
  });
}

// sending the data into json backend  from taking from user

let addTodo = async () => {

  //this line we have to take inside that function otherwise title data is blank
  let todod = document.getElementById("todo").value;
  let todo_data = {
    title: todod,
    id: Date.now() + todod,
    status: false,
  };

  let res = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    body: JSON.stringify(todo_data),
    headers: {
      "Content-Type": "application/json",
    },
  });
   getdata();
};

// deleting things by using id
let remove = async (id) => {
  let res = await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "DELETE",
  });

   getdata();
};


let toggle = async (id) => {
  let todo = await fetch(`http://localhost:3000/api/todo/${id}`);
  todo = await todo.json();

  let todo_status = { status: !todo.status };

  let res = await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "PATCH",
    body: JSON.stringify(todo_status),
    headers: {
      "Content-Type": "application/json",
    },
  });

  getdata();
};
