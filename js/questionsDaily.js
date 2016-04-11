$(document).ready(function() {

    mainDiv = document.getElementById("rightbody");
    for (var i=0; i < questions.length; i++ ){
        qDiv = document.createElement("div");
        qDiv.id = "q1"
        t = "author: " + questions[i].author + ",  question: " + questions[i].question;
        text = document.createTextNode(t);
        qDiv.appendChild(text)
        mainDiv.appendChild(qDiv)
    };
});