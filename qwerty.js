/**
 * Created by h205p2 on 3/6/17.
 */
sign ="";

function submit(){
    var date = document.getElementById("day").value;
    var month =document.getElementById("month").value;
    console.log(month);
    console.log(date);
  determinesign(date,month);
  determineHoroscope(sign);
  determineimage(sign);
}

function determinesign(date,month){
    if(month ==="3" && date >="21"){
        sign="aries";
        document.getElementById("sign").innerHTML  = "aries:";
    }
    else if(month ==="4" && date <= "19" ){
        sign="aries";
        document.getElementById("sign").innerHTML  = "aries:";
    }
    else if(month ==="4" && date >="20" ) {
        sign="taurus";
        document.getElementById("sign").innerHTML  = "taurus:";
    }
    else if(month ==="5" && date <= "20" ){
        sign="taurus";
        document.getElementById("sign").innerHTML  = "taurus:";
    }
    else if(month === "5" && date >= "21") {
        sign="gemini";
        document.getElementById("sign").innerHTML  = "gemini:";
    }
    else if(month === "6" && date <= "20"){
        sign="gemini";
        document.getElementById("sign").innerHTML  = "gemini:";
    }
    else if(month === "6" && date >="21"){
        sign="cancer";
        document.getElementById("sign").innerHTML  = "cancer:";
    }
    else if(month === "7" && date <= "22"){
        sign="cancer";
        document.getElementById("sign").innerHTML  = "cancer:";
    }
    else if(month === "7" && date >= "23"){
        sign="leo";
        document.getElementById("sign").innerHTML  = "leo:";
    }
    else if(month === "8" && date <= "22"){
        sign="leo";
        document.getElementById("sign").innerHTML  = "leo:";
    }
    else if(month === "8" && date >="23"){
        sign="virgo";
        document.getElementById("sign").innerHTML  = "virgo:";
    }
    else if(month === "9" && date <= "22"){
        sign="virgo";
        document.getElementById("sign").innerHTML  = "virgo:";
    }
    else if(month === "9" && date >="23"){
        sign="libra";
        document.getElementById("sign").innerHTML  = "libra:";
    }
    else if(month === "10" && date <="22"){
        sign="libra";
        document.getElementById("sign").innerHTML  = "libra:";
    }
    else if(month === "10" && date >= "23"){
        sign="scorpio";
        document.getElementById("sign").innerHTML  = "scorpio:";
    }
    else if(month === "11" && date <= "21"){
        sign="scorpio";
        document.getElementById("sign").innerHTML  = "scorpio:";
    }
    else if(month === "11" && date >="22"){
        sign="sagitarius";
        document.getElementById("sign").innerHTML  = "sagitarius:";
    }
    else if(month === "12" && date <="21"){
        sign="sagitarius";
        document.getElementById("sign").innerHTML  = "sagitarius:";
    }
    else if(month === "12" && date >= "22"){
        sign="capricorn";
        document.getElementById("sign").innerHTML  = "capricorn:";
    }
    else if(month === "1" && date <= "19"){
        sign="capricorn";
        document.getElementById("sign").innerHTML  = "capricorn:";
    }
    else if(month === "1" && date >= "20"){
        sign="aquarius";
        document.getElementById("sign").innerHTML  = "aquarius:";
    }
    else if(month === "2" && date <="18"){
        sign="aquarius";
        document.getElementById("sign").innerHTML = "aquarius:";
    }

    else if(month ==="2" && date >= "19"){
       sign="pisces";
        document.getElementById("sign").innerHTML = "pisces:";
    }
     else {
        sign = "pisces";
        document.getElementById("sign").innerHTML = "pisces:";
    }
}

function determineHoroscope(sign){
var fortune = "";
    if (sign === "aries") {
        fortune = "you can't fail if you never try";
    }
    else if (sign === "taurus") {
        fortune  = "try your luck in armed robbery";
    }
    else if (sign === "gemini") {
         fortune  = "with global warming, a house in the hills today could be a beach front property tomorrow. Start investing.";
    }
    else if (sign === "cancer") {
         fortune = "a doctor a day keeps the apple away";
    }
    else if (sign === "leo") {
         fortune = "there is no I in colaboraton";
    }
    else if (sign === "virgo") {
         fortune= "make sure to save your money so you can gamble it at casinos";
    }
    else if (sign === "libra") {
         fortune = "Venus retro in the sign of Aries asks a simple question... Is what I am paying for, really worth it?... Am I getting my money's value, or am I just going along with what everybody else appears to be doing?... This is the exact kind of transit that most of us have all been waiting for, because Venus is trying to streamline and improve our financial positions... This energy tries to send us clarifications and suggestions to make sure that we are on the right path.        Not only that, but as Venus backs up it is connecting to Chiron and this combo then works to try to resolve and release any hurt and pain from the past... This isn't instant karma but it will create the conditions where significant progress can be made... At first the Venus/Chiron combo can really throw things into a spin, but as the dust starts to settle it brings physical, mental and emotional relief where needed." +
        "The big thing with todays chart is the need to pay very close attention to the facts, figures and details... It's all about getting things done correctly and not cutting corners... That is a usual cycle of life, but it's extra important right now because Venus is there to show us that things are not always as they appear and this is a transit that will lead to greater truth and understanding being revealed. ";
    }
    else if (sign === "scorpio") {
         fortune= "what would you do for a klondike bar?";
    }
    else if (sign === "sagitarius") {
         fortune = "you won a $500 wal-mart gift card";
    }
    else if (sign === "capricorn") {
         fortune = "having trouble scooping out icecream? heat the spoon in a microwave.";
    }
    else if (sign === "aquarius") {
         fortune = "you will at some point cross a street";
    }
    else  fortune = "there is a bear behind you";

    document.getElementById("fortune").innerHTML = fortune;
}

function determineimage(sign) {

    if (sign === "aries") {
        document.getElementById("zodiac").innerHTML =
            "<img src='img/" + sign + ".png'>"
    }
    else if (sign === "taurus") {
        document.getElementById("zodiac").innerHTML =
            "<img src='img/" + sign + ".png'>"
    }
    else if (sign === "gemini") {
        document.getElementById("zodiac").innerHTML =
            "<img src='img/" + sign + ".png'>"
    }
    else if (sign === "cancer") {
        document.getElementById("zodiac").innerHTML =
            "<img src='img/" + sign + ".png'>"
    }
    else if (sign === "leo") {
        document.getElementById("zodiac").innerHTML =
            "<img src='img/" + sign + ".jpg'>"
    }
    else if (sign === "virgo") {
        document.getElementById("zodiac").innerHTML =
            "<img src='img/" + sign + ".png'>"
    }
    else if (sign === "libra") {
        document.getElementById("zodiac").innerHTML =
            "<img src='img/" + sign + ".jpg'>"
    }
    else if (sign === "scorpio") {
        document.getElementById("zodiac").innerHTML =
            "<img src='img/" + sign + ".jpg'>"
    }
    else if (sign === "sagitarius") {
        document.getElementById("zodiac").innerHTML =
            "<img src='img/" + sign + ".jpg'>"
    }
    else if (sign === "capricorn") {
        document.getElementById("zodiac").innerHTML =
            "<img src='img/" + sign + ".jpg'>"
    }
    else if (sign === "aquarius") {
        document.getElementById("zodiac").innerHTML =
            "<img src='img/" + sign + ".png'>"
    }
    else if (sign === "pisces") {
        document.getElementById("zodiac").innerHTML =
            "<img src='img/" + sign + ".jpg'>"
    }
}