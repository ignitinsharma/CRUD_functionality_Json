function addpost() {

    //--> taking vales to the user 
    let Id = document.getElementById("id").value;
    let Title = document.getElementById("title").value;
    let Author = document.getElementById("author").value;

    let send_data = {
        id: Id,
        title: Title,
        author: Author,
    };

    //--> default fetch makes (GET--> get for get the data) request but 
    //--> but this time we need to send data so we need (POST request) so we need to tell
    //--> fetch fetch(URl, { methid:POST (so we are telling fetch we want that request) })

    
    //--> for accessing the post we are using that post server
    let res=await fetch(`http://localhost:3000/posts`,{

    //--> So we are telling fetch we want POST request(means send data request)
    method:'POST',

    body:JSON.stringify(send_data),
    
    headers:{

        'Content-Type':'application/json',

    },
        
    });

    let data=await res.json();
    console.log(data);

}

