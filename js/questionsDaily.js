$(document).ready(function() {

    mainDiv = document.getElementById("rightbody");
    for (var i=0; i < questions.length; i++ ){
        var qDiv = document.createElement("div");
        qDiv.id = "q" + i;
        qDiv.className = "questionDiv";
        var author = document.createTextNode(questions[i].author);
        var p_author = document.createElement("p")
        p_author.appendChild(author)
        p_author.className = "questionAuthor"
        qDiv.appendChild(p_author)

        var question = document.createTextNode(questions[i].question);
        question.className = "questionText"
        qDiv.appendChild(question)

        var button = document.createElement("button");        // Create a <button> element
        var buttonText = document.createTextNode("Reply");       // Create a text node
        button.appendChild(buttonText);
        qDiv.appendChild(button)   

        mainDiv.appendChild(qDiv)
    };
});