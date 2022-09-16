# 
# CRUD functionality JSON 

***How to start JSON server..***

## Commands


**1st**
```bash
  npm init
  
  // also you can use this if you don't wanna hit enter
  npm init -y
```

**2nd**

```bash
// Install Json server
// we can use anyone 

  npm i json-server

 npm install -g json-server
```

**3rd**

```bash
// Create a db.json file and paste below data 

 {
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

**4th**

```bash
// Start JSON Server

 json-server --watch db.json
```

**5th**

```bash
// Types of request in CRUD

 C = create(Post)
 R = Read (GET)
 U = Update (PUT/Patch)
 //Put- replace the complete object
 //PATCH- update the existing object
 D = delete (delete)
 
```


