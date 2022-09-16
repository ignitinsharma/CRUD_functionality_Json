async function Register() {
  //--> taking data form user in form
  let Register_data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("description").value,
  };

  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/auth/register`,
    {
      //--> for sending data  request
      method: "POST",

      body: JSON.stringify(Register_data),

      //--> we are telling what type of data we are sending into local server
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let maindata = await res.json();
  console.log(maindata);
}

//--> login data checking.........
async function login() {
  //--> taking data form user in form
  let login_data = {
    email: document.getElementById("loginemail").value,
    password: document.getElementById("loginpassword").value,
  };

  let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
    method: "POST",

    body: JSON.stringify(login_data),

    //--> we are telling what type of data we are sending into local server
    headers: {
      "Content-Type": "application/json",
    },
  });

  let maindata = await res.json();
  //--> passing things when user enter things they get what they have entered

  let {email}=login_data;
  let [token]= data;

  getprofile(email, token);

  console.log(maindata);
}


//--> token thing
let getprofile = (email, token) => {

  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/user/${username}`,
    {

      //--> we are telling what type of data we are sending into local server
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  let maindata = await res.json();

  console.log(maindata);
}


