window.addEventListener("DOMContentLoaded", function (e) {
    const urlParams = new URLSearchParams(window.location.search);
    const cat_id = urlParams.get("category");
    console.log(cat_id);
    getNav()

    if (cat_id) {
        fetch("https://quater.org/assignment/wp-json/wp/v2/categories/" + cat_id + "?_embed")
            .then(res => res.json())
            .then(showCategory)
    }

})

function showCategory(cat) {
    document.querySelector(".category").textContent = cat.name;
    fetch("https://quater.org/assignment/wp-json/wp/v2/property?_embed")
        .then(res => res.json())
        .then(handleData)

}


function handleData(posts) {
    posts.forEach(showPost)
}


function showPost(post) {
    const urlParams = new URLSearchParams(window.location.search);
    const cat_id = urlParams.get("category");

    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = post.title.rendered;

    copy.querySelector(".bed").textContent = post.bed;
    copy.querySelector(".bath").textContent = post.bath;
    /*copy.querySelector(".sqm").textContent=post.sq_meters;*/
    copy.querySelector(".sqm").textContent = post.sq_meters;

    copy.querySelector(".houseimg").src = post._embedded['wp:featuredmedia'][0].source_url;

    /*copy.querySelector(".descr1iption").innerHTML=post.content.rendered;*/


    const a = copy.querySelector("a");
    a.href += post.id;

    console.log(post.categories[0])
    if(post.categories[0] == cat_id){
        document.querySelector("main").appendChild(copy);
    }



}


/*nav*/
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
