window.addEventListener("DOMContentLoaded", getData)

const datalink = "https://quater.org/assignment/wp-json/wp/v2/property?_embed";

function getData(){
    const urlParams = new URLSearchParams(window.location.search);
    const house_id = urlParams.get("house_id");

    console.log(house_id)


    if(house_id) {
        fetch("https://quater.org/assignment/wp-json/wp/v2/property/" + house_id + "?_embed");
         fetch(datalink)
    .then(res => res.json())
    .then(handleData)

    }
}

function handleData(posts){
    console.log(posts);
}


/*
const queryTwo = urlParams.get("category");

console.log(query)
console.log(queryTwo)*/



/*const query = urlParams.get("title");


const queryTwo = urlParams.get("category");

console.log(query)
console.log(queryTwo)

const h1 = document.querySelector("h1");
h1.textContent += query;

const h2 = document.querySelector("h2");
h2.textContent += queryTwo;*/
