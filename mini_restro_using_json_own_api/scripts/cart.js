let data=JSON.parse(localStorage.getItem("orderfood")) || [];

let container=document.getElementById("container")
let append = (data) =>{
    container.innerHTML="";
    data.forEach(({i,t,d,pr,r,id},index) =>{
       
          let div=document.createElement("div");
          let title=document.createElement("h3");
          title.innerText=t;
          let img=document.createElement("img");
          img.src=i;
          let price1=document.createElement("h3");
          price1.innerText=pr;
          let desc=document.createElement("h4");
          desc.innerText=d;
          let rating=document.createElement("h5");
          rating.innerText=r;
          let delbtn=document.createElement("button");
          delbtn.innerText="Delete";
          delbtn.onclick = () =>{
            deleteitem(index);
          }
        
          div.append(img,title,price1,desc,rating,delbtn);
          container.append(div);
        
    })
    
}
append(data);

function deleteitem(index){
   data.splice(index,1)
   localStorage.setItem("orderfood",JSON.stringify(data));
   append(data);
}

