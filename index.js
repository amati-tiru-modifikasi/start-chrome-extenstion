console.log("My extenstion")


/* GOOGLE */

var dom = document.getElementById("rso");
// var links = dom.getElementsByClassName("g");

// for(let i = 0; i < links.length; i++){
//     let title = links[i].getElementsByTagName("h3");
//     console.log("Link is:", title);
// }

/* YOUTUBE */

var links = dom.getElementsByTagName("a");

for(let i = 0; i < links.length; i++){
    let title = links[i].innerHTML;
    console.log("Link is:", title);
}