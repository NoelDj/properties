fetch("http://quater.org/assignment/wp-json/wp/v2/property?_embed")
    .then(res=>res.json())
    .then(handeData)

function handeData(posts){
    console.log(posts);
    posts.forEach(showPost)
}

function showPost(post){
    console.log(post);
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent=post.title.rendered;

    copy.querySelector(".bed").textContent=post.bed;
    copy.querySelector(".bath").textContent=post.bath;
    /*copy.querySelector(".sqm").textContent=post.sq_meters;*/
    copy.querySelector(".sqm").textContent=post.sq_meters;

    copy.querySelector(".houseimg").src=post._embedded['wp:featuredmedia'][0].source_url;

    /*copy.querySelector(".descr1iption").innerHTML=post.content.rendered;*/

    document.querySelector("main").appendChild(copy);
}
