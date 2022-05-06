let randomBG = new Array();
randomBG[0] = "1.png";
randomBG[1] = "2.png";
randomBG[2] = "3.png";
randomBG[3] = "4.png";

let wuerfel = Math.floor(Math.random() * randomBG.length);
let bild = randomBG[wuerfel];
//console.log(wuerfel);