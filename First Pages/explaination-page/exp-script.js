﻿var loadGif = document.getElementById("loading");
var gif = document.createElement('div');

function CreateLoadGif() {
    loadGif.innerHTML = '<div id="gif-div"></div>';

    gif.innerHTML = '<img src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif" />';

    loadGif.appendChild(gif);

    setTimeout(audio, 2000);

}


function audio() {
    gif.innerHTML = '<img src="" />';
    loadGif.appendChild(gif);
    document.getElementById('audio').play();
    typeWriter();
}


var text = "במרכז תל אביב הונחה פצצת אטום המאיימת להשמיד מיליוני אנשים. במשימה שלפניכם תפקידכם לנטרל את הפצצה כחלק מצוות 'משימה בלתי אפשרית'. אל נטרול הפצצה תגיעו רק לאחר שתוכיחו שאתם ראויים לכך. ראשית, תעמדו מול חידון בנושא מדינות וערים בעולם, ובכל פעם שתענו על שתי שאלות נכונות תקבלו מספר אשר ישמש אתכם לנטרול הפצצה. אך לא הכל פשוט.... בכל פעם שתענו על שלוש שאלות נכונות תישלחו לאתגר שעליו תקבלו ניקוד. ככל שתקפידו לבצע את האתגר בצורה טובה יותר, כך תגיעו לניטרול הפצצה מהר יותר. לאחר שתשלימו את כלל האתגרים והשאלות תזינו את הקוד שקיבלתם ותוכלו לנטרל את הפצצה ולהציל את מיליוני חפים מפשע. עליכם יהיה להפגין יכולת זריזות, דיוק וזיכרון חזקים. אם ברצונכם לקבל על עצמכם את המשימה לחצו על הכפתור, במידה ותסרבו ההודעה תשמיד את עצמה...... בהצלחה!";

var speed = 65;
var i = 0;
function typeWriter() {

    if (i < text.length) {
        document.getElementById("explanation").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }

}

document.addEventListener("keydown", nextPage)

function nextPage(k) {
    // if arduino press space
    if (k.keyCode == 32) {
        window.location.href = '../../trivia/questionFormat.html';
    }
}