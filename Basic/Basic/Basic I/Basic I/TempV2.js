var randomTemp = Math.floor(Math.random() * 50 - 20);


var temp = randomTemp
var image_src = document.getElementById("image")
if (temp < -10) {
    console.log("Get your snowboard/ ski out and shred");
    image_src.src = "snb.jpg";

} else if (temp < 4) {
    console.log("A faint breeze");
    image_src.src = "null grad.jpg";

} else if (temp < 19) {
    console.log("Do you feel the warmth coming?");
    image_src.src = "silhouette-man.jpg";

} else {
    console.log("Summertime - Get nekkid :D");
    image_src.src = "beach.jpg";

}

document.write(randomTemp);