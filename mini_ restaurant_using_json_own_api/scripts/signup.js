let signup=document.getElementById("signup");
signup.addEventListener("click", register);

async function register(){
    let register_data= {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        username:document.getElementById("username").value,
        mobile:document.getElementById("mobile").value,
        description:document.getElementById("description").value,
            };
        
            let res=await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
                method:'POST',
                body: JSON.stringify(register_data),
        
                headers:{
                    'Content-Type': 'application/json',
                },
            });
        
            let data= await res.json();
            alert("signup successful");
            console.log("data",data);
        }
        

