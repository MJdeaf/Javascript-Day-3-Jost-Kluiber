var randomTemp = Math.floor(Math.random() * 31 - 5);
//0.01 * 31 - 5= - 4.69
// 0.99 * 31 - 5 = 30.88 -5 = 25. 88

var temp = randomTemp

if (temp > 10) {
    console.log("The weather is moderate");
} else {
    console.log("The weather is cold");
}

document.write(randomTemp);