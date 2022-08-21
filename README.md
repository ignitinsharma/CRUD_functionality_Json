# 
# CRUD functionality JSON 

***How to start JSON server..***

## Commands


**1st**
```bash
  npm init
```

**2nd**

```bash
// Install Json sever

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


