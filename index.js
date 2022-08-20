async function addpost() {
  //--> taking vales to the user
  let Id = document.getElementById("id").value;
  let Title = document.getElementById("title").value;
  let Author = document.getElementById("author").value;

  //--> sending data in organized way
  let send_data = {
    id: Id,
    title: Title,
    author: Author,
  };

  //--> default fetch makes (GET--> get for get the data) request but
  //--> but this time we need to send data so we need (POST request) so we need to tell
  //--> fetch fetch(URl, { method:POST (so we are telling fetch we want that request) })

  //--> for accessing the post we are using that post server
  let res = await fetch(`http://localhost:3000/posts`, {
    
    //--> So we are telling fetch we want POST request(means send data request)
    method: "POST",

    //--> sending the obj data in Body after coverting....
    body: JSON.stringify(send_data),

    //--> we are talling the server is that data is on json format...
    headers: {
      "Content-Type": "application/json",
    },
  });

  //--> covertinga data
  let main_data = await res.json();
  console.log(main_data);
}

//--> delete method form JSON server

async function deletepost() {
  let id = document.getElementById("deleteid").value;

  //--> we are making things dynamic means which i wanna delete
  let res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",

    //--> header passing is very important in every request
    headers: {
      "Content-Type": "application/json",
    },
  });

  let maindata = await res.json();
  console.log(maindata);
}



//-->For updating the data we use (PATCH-(updating)) request

const updatepost = async () => {
  let id = document.getElementById("update").value;

  let title = document.getElementById("update_title").value;

  let send_data = {
    title,
  };

  let res = await fetch(`http://localhost:3000/posts/${id}`, {

   //--> for updating the data we use PATCH
    method: "PATCH",

    body: JSON.stringify(send_data),

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  console.log(data);
};




//-->For updating the data we use (PUT-(Replace)) request
let replacepost = async () => {
  let id = document.getElementById("replace_id").value;

  let title = document.getElementById("replace_title").value;

  let send_data = {
    title,
  };

  let res = await fetch(`http://localhost:3000/posts/${id}`, {

   //--> for replacing the data we use PUT
    method: "PUT",

    body: JSON.stringify(send_data),

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  console.log(data);
};

function display(data) {
  document.getElementById("showname").innerText = null;

  document.getElementById("showname").innerText = `Hello ${data.name}`;
}
