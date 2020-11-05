window.addEventListener("DOMContentLoaded", getData)

const datalink2 = "https://quater.org/assignment/wp-json/wp/v2/property?_embed";

function getData() {
    const urlParams = new URLSearchParams(window.location.search);
    const house_id = urlParams.get("house_id");
    console.log(window.location)
    console.log(house_id)

    if (house_id) {
        fetch("https://quater.org/assignment/wp-json/wp/v2/property/" + house_id + "?_embed")
            .then(res => res.json())
            .then(showPost)
    } else if (!house_id && window.location.pathname == "/singlepage.html") {
        window.location.replace("index.html");
    } else {
        fetch(datalink)
            .then(res => res.json())
            .then(handleData)
    }
}

function handleData(posts) {
    console.log(posts);
}

function showPost(post) {
    console.log(post)

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
