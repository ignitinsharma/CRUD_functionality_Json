const url="https://frozen-tor-96992.herokuapp.com/api/food";
let admin={
    username:"nklm@nklm",
    email:"nklm@nklm",
}
let admindata=JSON.parse(localStorage.getItem("admin"))


let submit = async () =>{
   
//console.log("admindata:", admindata);
if(admin.username !== admindata.username && admin.email !== admindata.email){
    alert("not authorised");
    location.href="login.html"
}



let imz=document.getElementById("image").value;
let t=document.getElementById("title").value;
let d=document.getElementById("description").value;
let pr=document.getElementById("price").value;
let r=document.getElementById("rating").value;

let product={
    imz,
    t,
    d,
    pr,
    r,
};


// for sending that data into json api
let res= await fetch(url,{
    
method:"POST",
body:JSON.stringify(product),
headers:{
    "Content-Type": "application/json",
},

});
getdata();
};

//getdata
let getdata = async () =>{
let res=await fetch(url);
res= await res.json();
append(res)
console.log("res:",res)

};
getdata(); 

let container=document.getElementById("container")
let append = (data) =>{
    container.innerHTML="";
    data.forEach(({imz,t,d,pr,r,id}) =>{
       
          let div=document.createElement("div");
          let title=document.createElement("h3");
          title.innerText=t;
          let img=document.createElement("img");
          img.src=imz;
          let price1=document.createElement("h3");
          price1.innerText=pr;
          let desc=document.createElement("h4");
          desc.innerText=d;
          let rating=document.createElement("h5");
          rating.innerText=r;
          let delbtn=document.createElement("button");
          delbtn.innerText="Delete";
          delbtn.onclick = () =>{
            deleteitem(id);
          }
          let update=document.createElement("button");
          update.innerText="Update Price";
          update.onclick = () =>{
            updateprice(id);
          }
          div.append(img,title,price1,desc,rating,delbtn,update);
          container.append(div);
        
    })
    
}
//delete
let deleteitem = async (id) =>{
    if(admin.username !== admindata.username && admin.email !== admindata.email){
        alert("not authorised");
        location.href="login.html"
    }
    let res=await fetch(`${url}/${id}`, {
        method: "DELETE",
    });
getdata();
}

//update
let updateprice = async (id) => {
    if(admin.username !== admindata.username && admin.email !== admindata.email){
        alert("not authorised");
        location.href="login.html"
    }
const newprice=window.prompt("Enter new price");

let newdata= {pr: newprice};
let res=await fetch(`${url}/${id}`, {
method:"PATCH",
body:JSON.stringify(newdata),
headers:{
    "Content-Type": "application/json",
},

});
console.log(res);
getdata();
}


