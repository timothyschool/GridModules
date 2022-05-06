let speed = 20;
//let scale = 0.17; // Image scale (I work on 1080p monitor)
let scale = 0.17;
let canvas;
let ctx;
let logoColor;
/*const img1 = new Image();
img1.onload = someFunctionToCallWhenTheImageHasLoaded
img1.src = '5.png';*/

let randomBG = new Array();
randomBG[0] = "1.png";
randomBG[1] = "2.png";
randomBG[2] = "3.png";
randomBG[3] = "4.png";

let wuerfel = Math.floor(Math.random() * randomBG.length);
let bild = randomBG[wuerfel];

/*
let myImage = new Image(100, 100);
myImage.src = bild;
document.body.appendChild(myImage);*/
let dvd = {
    x: 200,
    y: 300,
    xspeed: 5,
    yspeed: 5,
    img: new Image()
};
/*let dvd2 = {
    x: 300,
    y: 400,
    xspeed: 6,
    yspeed: 6,
    img: new Image()
};
*/
(function main() {
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    //ctx.img.src = '5.png';

    dvd.img.src = bild;



    //Draw the "tv screen"
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    update();
})();
/*(function main2() {
    canvas = document.getElementById("tv-screen");
    // ctx = canvas.getContext("2d");
    ctx = canvas.getContext("2d");
    dvd2.img.src = '2.png';

    //Draw the "tv screen"
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.

    //  pickColor();
    update();
})();
*/
function update() {
    setTimeout(() => {
        //ctx.drawImage(img1, 500, 500);
        //Draw the canvas background
        //ctx.fillStyle = "rgba(0,0,0,0)";
        //ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // ctx.body.style.backgroundImage = "url('5.png')";

        //document.body.style.backgroundImage = "url('5.png')";
        // body.width = '100%';
        //Draw DVD Logo and his background
        // ctx.fillStyle = logoColor;
        ctx.fillRect(dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
        //Move the logo
        dvd.x += dvd.xspeed;
        dvd.y += dvd.yspeed;
        //Check for collision 
        checkHitBox();
        update();
    }, speed)
}

/*function update2() {
    setTimeout(() => {
        //Draw the canvas background
        //ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //Draw DVD Logo and his background
        ctx.fillStyle = logoColor;
        ctx.fillRect(dvd2.x, dvd2.y, dvd2.img.width * scale, dvd2.img.height * scale);
        ctx.drawImage(dvd2.img, dvd2.x, dvd2.y, dvd2.img.width * scale, dvd2.img.height * scale);
        //Move the logo
        dvd2.x += dvd2.xspeed - 2;
        dvd2.y += dvd2.yspeed - 2;
        //Check for collision 
        checkHitBox2();
        update2();
    }, speed)
}*/
//Check for border collision
function checkHitBox() {
    if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
        dvd.xspeed *= -1;
        pickImg();
    }

    if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
        dvd.yspeed *= -1;
        pickImg();
    }
}
/*
function checkHitBox2() {
    if (dvd2.x + dvd2.img.width * scale >= canvas.width || dvd2.x <= 0) {
        dvd2.xspeed *= -1;
        pickColor();
    }

    if (dvd2.y + dvd2.img.height * scale >= canvas.height || dvd2.y <= 0) {
        dvd2.yspeed *= -1;
        pickColor();
    }
}*/

//Pick a random color in RGB format
function pickImg() {
    wuerfel = Math.floor(Math.random() * randomBG.length);
    bild = randomBG[wuerfel];
    dvd.img.src = bild;

}