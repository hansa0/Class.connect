replyClick = function(e) {
    console.log("REPLY BUTTON CLICKED", e)
    var sp = ' onFocus="this.value=\'\'; this.onfocus=null;" ';
    var textAreaHtml = '<div class="replyDiv"><textarea id="'+ e.target.parentNode.id+"_reply"+ '"'+sp+ ' ></textarea>';
    textAreaHtml = textAreaHtml + '<button type="button" id="'+ e.target.parentNode.id+'_submit' + '">Submit</button></div>';
    // $(textAreaHtml).insertAfter(e.target.parentNode)
    $(e.target.parentNode).append(textAreaHtml)
    var btn_id =e.target.parentNode.id+'_submit'; 
    var submit_button = document.getElementById(btn_id);
    submit_button.onclick=function(){replySubmit(event)};

    initializeTinymce();
};

initializeTinymce = function() {
    tinymce.init({
    toolbar: "undo redo | link image | styleselect | bold italic | bullist numlist outdent indent",
    selector : "textarea"
    });
    tinymce.execCommand("mceAddControl", false, "");
};

replySubmit = function(e) {
    // console.log ("HADHFAHDSFHAS", e);
    var textarea_id = e.target.parentNode.childNodes[1].id;
    var text = tinymce.get(textarea_id).getContent();
    var question_id = e.target.parentNode.parentNode.id + "_question"
    // console.log("question_id ", question_id)
    var question = document.getElementById(question_id).firstChild.nodeValue;
    // console.log("QUestion: ", question)
    var question_index = getQuestionIndex(question)
    questions[question_index].reply = text;
    questions[question_index].hasReply = true;
    // console.log("questions: ", questions)


    // console.log("TEXT AREA SAYS: ", text);

    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    // e.target.parentNode.removeChild(e.target.parentNode);


};

getQuestionIndex = function(q) {
    for (var i=0; i < questions.length; i++ ){
        if (questions[i].question == q){
            return i
        }
    }
};



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

        var p_question = document.createElement("p")
        var question = document.createTextNode(questions[i].question);
        p_question.appendChild(question)
        p_question.id = qDiv.id + "_question";
        p_question.className = "questionText"
        qDiv.appendChild(p_question)

        var button = document.createElement("button");        // Create a <button> element
        var buttonText = document.createTextNode("Reply");       // Create a text node
        button.appendChild(buttonText);
        button.onclick=function(){replyClick(event)};

        qDiv.appendChild(button)   

        mainDiv.appendChild(qDiv)
    };
});