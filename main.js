

let body = document.getElementsByTagName("BODY")[0]
let sliderValue = document.getElementById("range")

sliderValue.oninput = function(){
    let color1 = this.value;
    let color2 = 100-color1;

    let bg = "linear-gradient(90deg, red, red '+color1+'%, red '+color1+'%, black 'color1+'%, black '+color2+'%)";

    body.style.setProperty("background", bg)


}