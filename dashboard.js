let getdata = async () => {
  try {
    let res = await fetch(`http://localhost:3000/posts`);

    let resdata = await res.json(); //-->

    console.log(resdata);
    showbuttons(resdata);
  } catch (error) {
    console.log(error);
  }
};

getdata();

function appendfun(data) {
  data.forEach((el) => {
    let p = document.createElement("p");
    p.innerText;
  });
}

let showbuttons = () => {
  let btndiv = document.getElementById("btncode");
  let results = 11;
  let per_page = 3;

  let button = Math.ceil(results / per_page);

  for (let i = 1; i <= button; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;
    btndiv.append(btn);
  }
};
