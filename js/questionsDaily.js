replyClick = function(e) {
    console.log("REPLY BUTTON CLICKED", e)
    // $('rightbody').append('<textarea id="TypeHere"> Type some text here.</textarea>' );
    var textAreaHtml = '<div id="replyDiv"><textarea id="'+ e.target.parentNode.id+"_reply"+ '"">Type some text here.</textarea>';
    textAreaHtml = textAreaHtml + '<button type="button" id="'+ e.target.parentNode.id+'_submit' + '">Submit</button></div>';
    $(textAreaHtml).insertAfter(e.target.parentNode)
    var btn_id =e.target.parentNode.id+'_submit'; 
    var submit_button = document.getElementById(btn_id);
    submit_button.onclick=function(){replySubmit(event)};


    // $('body').append('<script type="application/x-javascript">tinymce.init({selector:"#TypeHere"});</script>');
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
    console.log ("HADHFAHDSFHAS", e);
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

        var question = document.createTextNode(questions[i].question);
        question.className = "questionText"
        qDiv.appendChild(question)

        var button = document.createElement("button");        // Create a <button> element
        var buttonText = document.createTextNode("Reply");       // Create a text node
        button.appendChild(buttonText);
        button.onclick=function(){replyClick(event)};

        qDiv.appendChild(button)   

        mainDiv.appendChild(qDiv)
    };
});