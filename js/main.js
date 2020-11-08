window.addEventListener("DOMContentLoaded", getNav)


fetch("https://quater.org/assignment/wp-json/wp/v2/property?_embed")
    .then(res=>res.json())
    .then(handleData)

function handleData(posts){
    posts.forEach(showPost)
}


function showPost(post){

const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent=post.title.rendered;

    copy.querySelector(".bed").textContent=post.bed;
    copy.querySelector(".bath").textContent=post.bath;
    /*copy.querySelector(".sqm").textContent=post.sq_meters;*/
    copy.querySelector(".sqm").textContent=post.sq_meters;

    copy.querySelector(".houseimg").src=post._embedded['wp:featuredmedia'][0].source_url;

    /*copy.querySelector(".descr1iption").innerHTML=post.content.rendered;*/


    const a  = copy.querySelector("a");
    a.href += post.id;


    document.querySelector("main").appendChild(copy);



}


/*Adding links*/

function getNav(){
    fetch("https://quater.org/assignment/wp-json/wp/v2/categories?parent=0&orderby=count")
    .then(res => res.json())
    .then(createNav)
}

function createNav(category){
    category.forEach(addLink);
}

function addLink(oneCategory){
    console.log(oneCategory)
    const link = document.createElement("a");
    link.textContent = oneCategory.name;
    link.href = "category.html?category=" + oneCategory.id;
    console.log(link);
    document.querySelector("nav").appendChild(link);
}


/*for(i=0; i < links.length; i++){
    console.log(links[i].textContent)
}*/
