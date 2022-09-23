let login=document.getElementById("login");
login.addEventListener("click",loginfunc)

async function loginfunc(){

    let login_data= {

        username:document.getElementById("login_username").value, 
        password:document.getElementById("login_password").value,
    };
    let res=await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
        method:'POST',
        body: JSON.stringify(login_data),

        headers:{
            'Content-Type': 'application/json',
        },
    });

    let data= await res.json();
    alert("login successful");
    console.log("data",data);
     //location.href="admin.html";
    //get profile code function call/invoke
    let {username} = login_data;
    let {token} = data; //bcoz token uder the data
    getprofile(username,token);

//completed code of getprofile

}

let  getprofile = async (username,token) =>{
    try{ let res=await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
    
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    alert("welcome"+" "+username)
    let data1= await res.json();
    localStorage.setItem("admin", JSON.stringify(data1))
    append(data1);
    
    //setTimeout(test,3000)
    console.log("data1",data1);
}
  catch(err){
    console.log("err:",err)

  } 
};

let profile=document.getElementById("profile_container");
let append= (data) =>{
    let div=document.createElement("div");
    let name=document.createElement("h3")
    name.innerText="welcome:-"+" "+data.name
    div.append(name);
    profile.append(div);
   
}

// function test() {
//     location.href="index.html";
// }
