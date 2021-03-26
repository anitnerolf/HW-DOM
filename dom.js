//Detyra 1
/* Create a page that displays a numbered list of tracks: */


// var playList = [
//     {
//      author: "LED ZEPPELIN",
//      song:"STAIRWAY TO HEAVEN"
//     },
//     {
//      author: "QUEEN",
//      song:"BOHEMIAN RHAPSODY"
//     },
//     {
//      author: "LYNYRD SKYNYRD",
//      song:"FREE BIRD"
//     },
//     {
//      author: "DEEP PURPLE",
//      song:"SMOKE ON THE WATER"
//     },
//     {
//      author: "JIMI HENDRIX",
//      song:"ALL ALONG THE WATCHTOWER"
//     },
//     {
//      author: "AC/DC",
//      song:"BACK IN BLACK"
//     },
//     {
//      author: "QUEEN",
//      song:"WE WILL ROCK YOU"
//     },
//     {
//      author: "METALLICA",
//      song:"ENTER SANDMAN"
//     }
// ];

//let playlist = document.getElementsByClassName('playlist');
//let p = document.getElementsByClassName('playlist').childNodes;
//console.log(playlist);
//console.log(p);

//Detyra3

let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');


function changeLight() {
    console.log("HERE");
    console.log(yellow.style.backgroundColor);
    if (red.style.backgroundColor == "red") {
        yellow.style.backgroundColor = "yellow";
        red.style.backgroundColor = "black";
        green.style.backgroundColor = "black";
        // red.style.opacity = 0.1;
        // yellow.style.opacity = 1;
    } else if (yellow.style.backgroundColor == "yellow") {
        console.log("YELLOWWWWWW");
        yellow.style.backgroundColor = "black";
        red.style.backgroundColor = "black";
        green.style.backgroundColor = "green";
        // yellow.style.opacity = 0.1;
        // green.style.opacity = 1;
    } else  if (green.style.backgroundColor == "green") {
        yellow.style.backgroundColor = "black";
        red.style.backgroundColor = "red";
        green.style.backgroundColor = "black";
        // green.style.opacity = 0.1;
        // red.style.opacity = 1;
    } else {
        ;
    }
}











