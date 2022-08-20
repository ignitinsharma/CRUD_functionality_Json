function addpost() {

    //--> taking vales to the user 
    let id = document.getElementById("id").value;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;

    let send_data = {
        id: id,
        title: title,
        author: author,
    };


    //--> for accessing the post we are using that post server
    let res=await fetch(`http://localhost:3000/posts`,{

    method:'POST',

    body:JSON.stringify(send_data),
    
    headers:{

        'Content-Type':'application/json',

    },
        
    });

    let data=await res.json();
    console.log(data);

}

