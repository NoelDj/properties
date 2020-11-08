window.addEventListener("DOMContentLoaded", getData)

const datalink = "https://quater.org/assignment/wp-json/wp/v2/property?_embed";

function getData() {
    getNav()
    const urlParams = new URLSearchParams(window.location.search);
    const house_id = urlParams.get("house_id");

    if (house_id) {
        fetch("https://quater.org/assignment/wp-json/wp/v2/property/" + house_id + "?_embed")
            .then(res => res.json())
            .then(showPost)
    } else if (!house_id && window.location.pathname == "/singlepage.html") {
        window.location.replace("index.html");
    }
        fetch(datalink)
            .then(res => res.json())
            .then(handleData)

}

function getNav(){
    fetch("https://quater.org/assignment/wp-json/wp/v2/categories?parent=0&orderby=count")
    .then(res => res.json())
    .then(createNav)
}


function createNav(category){
    category.forEach(addLink);
}

function addLink(oneCategory){
    const link = document.createElement("a");
    link.textContent = oneCategory.name;
    link.href = "category.html?house_id=" + oneCategory.id;
    document.querySelector("nav").appendChild(link);
}


function handleData(posts){
    /*if (posts.bath == 1){
        posts.forEach(randomItem)
    }*/
    posts.forEach(randomItem);
}

function randomItem(posts) {



    const template = document.querySelector("#two").content;
    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = posts.title.rendered;
    copy.querySelector(".houseimg").src = posts._embedded['wp:featuredmedia'][0].source_url

    document.querySelector("section").appendChild(copy);


}

function showPost(post) {

    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = post.title.rendered;
    copy.querySelector(".bed").textContent = post.bed;
    copy.querySelector(".bath").textContent = post.bath;
    copy.querySelector(".sqm").textContent=post.sq_meters;
    copy.querySelector(".sqm").textContent = post.sq_meters;
    copy.querySelector(".houseimg").src=post._embedded['wp:featuredmedia'][0].source_url;

    /*const a = copy.querySelector("a");
    a.href += post.id;*/


    document.querySelector("main").appendChild(copy);




}


