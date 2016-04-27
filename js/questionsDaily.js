g = 0;

max_question_len = 150;

//
replyClick = function(e) {
    g = g + 1;
    console.log("REPLY BUTTON CLICKED", e)
    var sp = ' onFocus="this.value=\'\'; this.onfocus=null;" ';

    var qDiv_id = e.target.parentNode.parentNode.parentNode.id;

    // console.log(e.target);
    // console.log(e.target.parentNode.parentNode.parentNode);
    var question_id = qDiv_id + "_question"
    // console.log("question_id ", question_id)
    var question = document.getElementById(question_id).firstChild.nodeValue;
    // console.log("QUestion: ", question)
    var question_index = getQuestionIndex(question)

   var textAreaHtml = '<div class="replyDiv"><textarea id="'+ qDiv_id+"_reply"+ g+ '"'+sp+ ' ></textarea>';
    textAreaHtml = textAreaHtml + '<button type="button" class="btn btn-default submit-btn" id="'+ qDiv_id+'_submit' + '">Submit</button>';
    textAreaHtml = textAreaHtml + '<button type="button" class="btn btn-default submit-btn" id="'+ qDiv_id+'_close' + '">Close</button>';
   // textAreaHtml = textAreaHtml + '<button type="button" class="btn btn-default submit-btn" id="'+ qDiv_id+'_cancel' + '">Cancel</button></div>';


    // $(textAreaHtml).insertAfter(e.target.parentNode)
    $(e.target.parentNode).append(textAreaHtml)
    var btn_id =qDiv_id+'_submit';
    var submit_button = document.getElementById(btn_id);
    submit_button.onclick=function(){replySubmit(event)};

    // btn_id =qDiv_id+'_save';
    // submit_button = document.getElementById(btn_id);
    // submit_button.onclick=function(){saveButtonAction(event)};

    // btn_id =qDiv_id+'_cancel';
    // submit_button = document.getElementById(btn_id);
    // submit_button.onclick=function(){cancelButtonAction(event)};

    btn_id =qDiv_id+'_close';
    submit_button = document.getElementById(btn_id);
    submit_button.onclick=function(){closeButtonAction(event)};



    //show full question and hide show and hide buttons
    var p_id =  "#"+ qDiv_id + "_description";
    $(p_id).text(questions[question_index].question_description);
    $("#"+ qDiv_id + "_hidebtn").hide()
    $("#"+ qDiv_id + "_showbtn").hide()



    if (questions[question_index].hasReply) {
        var textarea_id = "#"+ qDiv_id +"_reply"+ g
        console.log(textarea_id)
        $(textarea_id).text(questions[question_index].reply)
    }


    id = "#"+ qDiv_id +"_reply"+g
    initializeTinymce(id);
    $(e.target).hide();
    console.log(e.target.id)


};

//
initializeTinymce = function() {
    tinymce.init({
    toolbar: "undo redo | link image | styleselect | bold italic | bullist numlist outdent indent",
    selector : id
    });
    tinymce.execCommand("mceAddControl", false, "");
};

closeButtonAction = function(e){
    console.log("Close button pressed");
    console.log(e.target.parentNode.parentNode.parentNode.parentNode);

    var textarea_id = e.target.parentNode.childNodes[1].id;
    var text = tinymce.get(textarea_id).getContent();

    if (text.length > 0) {
        var question_id = e.target.parentNode.parentNode.parentNode.parentNode.id + "_question"
        var description_id = e.target.parentNode.parentNode.parentNode.parentNode.id + "_description"
        // console.log("question_id ", question_id)
        var question = document.getElementById(question_id).firstChild.nodeValue;
        // console.log("QUestion: ", question)
        var question_index = getQuestionIndex(question)
        questions[question_index].reply = text;


        var reply_text_id = "#" + e.target.parentNode.parentNode.id + '_replyText';
         $(reply_text_id).remove();
         $("#reply_divider").remove();

        console.log(text)
        questions[question_index].hasReply = true;
        var reply_html = ' <hr id="reply_divider" style ="border-top: 1px solid #D6DBDF " ><p id="'+ e.target.parentNode.parentNode.id + '_replyText' +'" class="replyText">Saved reply: '+'</p>'
        // console.log("REPLY HTML: ", reply_html)
        $(reply_html).insertAfter(document.getElementById(description_id))
        $(reply_text_id).append(text)
        $.notify("draft saved", "success");
    }

    var replybtn_id = "#"+e.target.parentNode.parentNode.parentNode.parentNode.id + "_replybtn"
    $(replybtn_id).show();
    hideDescription(e);

    e.target.parentNode.parentNode.removeChild(e.target.parentNode);



};


saveButtonAction = function(e){
    console.log("Save button pressed");
    console.log(e.target.parentNode.parentNode.parentNode.parentNode);

    var textarea_id = e.target.parentNode.childNodes[1].id;
    var text = tinymce.get(textarea_id).getContent();

    if (text.length > 0) {
        var question_id = e.target.parentNode.parentNode.parentNode.parentNode.id + "_question"
        var description_id = e.target.parentNode.parentNode.parentNode.parentNode.id + "_description"
        // console.log("question_id ", question_id)
        var question = document.getElementById(question_id).firstChild.nodeValue;
        // console.log("QUestion: ", question)
        var question_index = getQuestionIndex(question)
        questions[question_index].reply = text;


        var reply_text_id = "#" + e.target.parentNode.parentNode.id + '_replyText';
         $(reply_text_id).remove();
         $("#reply_divider").remove();

        console.log(text)
        questions[question_index].hasReply = true;
        var reply_html = ' <hr id="reply_divider" style ="border-top: 1px solid #D6DBDF " ><p id="'+ e.target.parentNode.parentNode.id + '_replyText' +'" class="replyText">Saved reply: '+'</p>'
        // console.log("REPLY HTML: ", reply_html)
        $(reply_html).insertAfter(document.getElementById(description_id))
        $(reply_text_id).append(text)
        $.notify("draft saved", "success");
    }

    var replybtn_id = "#"+e.target.parentNode.parentNode.parentNode.parentNode.id + "_replybtn"
    $(replybtn_id).show();
    hideDescription(e);

    e.target.parentNode.parentNode.removeChild(e.target.parentNode);



};

cancelButtonAction = function(e) {
    console.log("Cancel button pressed")

    var replybtn_id = "#"+e.target.parentNode.parentNode.parentNode.parentNode.id + "_replybtn"
    $(replybtn_id).show();
    hideDescription(e);

    e.target.parentNode.parentNode.removeChild(e.target.parentNode);


};

hideDescription = function(e) {
    //handle hide show stuff
    // console.log(e.target.parentNode.parentNode)
    var qDiv_id = e.target.parentNode.parentNode.parentNode.parentNode.id;

    var question_id = "#"+ qDiv_id + "_question"
    var question = $(question_id).text();
    var question_index = getQuestionIndex(question)
    var p_id =  "#"+ qDiv_id+ "_description";
    $(p_id).text(questions[question_index].question_description.substring(0, max_question_len) + "...");

    $("#"+ qDiv_id+ "_showbtn").show()
    $("#"+ qDiv_id + "_hidebtn").hide()
};

showDescription = function(e) {
    console.log("Show button pressed")
    var question_id = "#"+e.target.parentNode.id + "_question"
    var question = $(question_id).text();
    var question_index = getQuestionIndex(question)

    var p_id =  "#"+ e.target.parentNode.id + "_description";
    $(p_id).text(questions[question_index].question_description);
    $("#"+ e.target.parentNode.id + "_showbtn").hide();
    $("#"+ e.target.parentNode.id + "_hidebtn").show()
};

//
replySubmit = function(e) {
    console.log ("HADHFAHDSFHAS", e);
    console.log(e.target.parentNode.parentNode.parentNode.parentNode);
    var qDiv = e.target.parentNode.parentNode.parentNode.parentNode;
    var textarea_id = e.target.parentNode.childNodes[1].id;
    var text = tinymce.get(textarea_id).getContent();
    var question_id = qDiv.id + "_question"
    console.log("question_id ", question_id)
    console.log(document.getElementById(question_id));
    var question = document.getElementById(question_id).firstChild.nodeValue;
    // console.log("QUestion: ", question)
    var question_index = getQuestionIndex(question)
    questions[question_index].reply = text;
    questions[question_index].hasReply = true;
    // console.log("questions: ", questions)

    // console.log("TEXT AREA SAYS: ", text);
    var daily_q_div =  e.target.parentNode.parentNode.parentNode

    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    if (!daily_q_div.hasChildNodes()) {
        $("#daily-questions").append("<p style='text-align: center;'>No questions from students right now!</p>");
    }
    qDiv.parentNode.removeChild(qDiv);

    $.notify("Question successfully answered", "success");
};

getQuestionIndex = function(q) {
    for (var i=0; i < questions.length; i++ ){
        if (questions[i].question == q){
            return i
        }
    }
};

showButtonAction = function(e) {

    console.log("Show button pressed")
    var question_id = "#"+e.target.parentNode.id + "_question"
    var question = $(question_id).text();
    var question_index = getQuestionIndex(question)

    var p_id =  "#"+ e.target.parentNode.id + "_description";
    $(p_id).text(questions[question_index].question_description);
    $(e.target).hide();
    $("#"+ e.target.parentNode.id + "_hidebtn").show()

};

hideButtonAction = function(e) {

    var question_id = "#"+e.target.parentNode.id + "_question"
    var question = $(question_id).text();
    var question_index = getQuestionIndex(question)
    var p_id =  "#"+ e.target.parentNode.id + "_description";
    $(p_id).text(questions[question_index].question_description.substring(0, max_question_len) + "...");

    $("#"+ e.target.parentNode.id + "_showbtn").show()
    $(e.target).hide()

};

var qDiv_array = new Array();

$(document).ready(function() {

    mainDiv = document.getElementById("daily-questions");

    if (questions.length == 0) {
        $("#daily-questions").append("<p style='text-align: center;'>No questions from students right now!</p>")
        // var p = document.createElement("p");
        // var text = document.createTextNode("No questions from students right now!");
        // p.appendChild(text)
        // mainDiv.appendChild(p)
    }

    // var qDiv_array = new Array();
    // myArray["abc"] = 200; myArray["xyz"] = 300;

    for (var i=0; i < questions.length; i++ ){
        var qDiv = document.createElement("div");
        qDiv.id = "q" + i;
        qDiv.classList.add("questionDiv");
        qDiv.classList.add("panel");
        qDiv.classList.add("panel-primary");

        qDiv_array[qDiv.id] = false;

        var question_header = document.createElement("div");
        question_header.className = "panel-heading";
        question_header.id = qDiv.id + "_panel-heading";
        var p_question = document.createElement("h4")
        var question = document.createTextNode(questions[i].question);
        p_question.appendChild(question)

        p_question.id = qDiv.id + "_question";
        p_question.className = "questionText";

        var carrot_icon_span = document.createElement("span");
        // carrot_icon_span.classList.add("ui-icon");
        // carrot_icon_span.classList.add("ui-icon-carat-1-e");
        carrot_icon_span.className="carrot_icon"
        carrot_icon_span.id = qDiv.id + "_carrot_icon";
        $(carrot_icon_span).append('<h4>&gt;</h4>')

        var author = document.createTextNode(questions[i].author);
        var p_author = document.createElement("p");
        p_author.appendChild(author);
        p_author.className = "questionAuthor";
        

        $(question_header).append(p_question);
        $(question_header).append(carrot_icon_span);
        // question_header.appendChild(p_author);
        $(qDiv).append(question_header);

        // qDiv.appendChild(p_question);

        var question_body = document.createElement("div");
        question_body.className = "panel-body";

        var more_to_show = false;

        var description = document.createElement("p");
        description.id = qDiv.id + "_description";
        var question_description = questions[i].question_description;
        if (question_description.length > max_question_len) {
            question_description = question_description.substring(0, max_question_len) + "...";
            more_to_show = true;
        }
        $(description).append(question_description);
        $(question_body).append(description);
        $(qDiv).append(question_body);
        

        if (more_to_show){
            var show_btn = document.createElement("button");        // Create a <button> element
            buttonText = document.createTextNode("Show more");       // Create a text node
            show_btn.classList.add('btn');
            show_btn.classList.add('btn-default');
            show_btn.classList.add('btn-show');
            show_btn.id = qDiv.id + "_showbtn";
            show_btn.appendChild(buttonText);
            show_btn.onclick=function(){showButtonAction(event)};
            qDiv.appendChild(show_btn)

            var hide_btn = document.createElement("button");        // Create a <button> element
            buttonText = document.createTextNode("Hide");       // Create a text node
            hide_btn.classList.add('btn');
            hide_btn.classList.add('btn-default');
            hide_btn.classList.add('btn-hide');
            hide_btn.id = qDiv.id + "_hidebtn";
            hide_btn.appendChild(buttonText);
            hide_btn.onclick=function(){hideButtonAction(event)};
            qDiv.appendChild(hide_btn)
        }


        var bottom_reply_div = document.createElement("ul");
        bottom_reply_div.className = "list-group";
        

        var bottom_line = document.createElement("li");
        bottom_line.className = "list-group-item";
        $(bottom_reply_div).append(bottom_line);
        $(qDiv).append(bottom_reply_div);

        var button = document.createElement("button");        // Create a <button> element
        var buttonText = document.createTextNode("Reply");       // Create a text node
        button.classList.add('btn');
        button.classList.add('btn-default');
        button.id = qDiv.id + "_replybtn";
        button.appendChild(buttonText);
        button.onclick=function(){replyClick(event)};
        bottom_line.appendChild(button);


        mainDiv.appendChild(qDiv)

        $("#"+question_header.id).click({param1: qDiv.id}, showQuestion);


        if (more_to_show) { $("#"+hide_btn.id).hide(); }

        // $("#"+qDiv.id).append("<div id='" + qDiv.id + "_tag_row' class='row'></div>")
        // for (var j=0; j<questions[i].topic_tags.length; j++) {
        //     console.log(j)
        //     $("#"+ qDiv.id +"_tag_row").append("<div class='tag'>"+ questions[i].topic_tags[j] +"</div>")
        // }
    }

});

function showQuestion(event){
    var qDiv_id = event.data.param1
    if (qDiv_array[qDiv_id] == true) {
        var question_id = "#"+ qDiv_id + "_question"
        var question = $(question_id).text();
        var question_index = getQuestionIndex(question)
        var p_id =  "#"+ qDiv_id+ "_description";
        $(p_id).text(questions[question_index].question_description.substring(0, max_question_len) + "...");

        $("#"+ qDiv_id+ "_showbtn").show()
        $("#"+ qDiv_id + "_hidebtn").hide()
        qDiv_array[qDiv_id] = false;
    } else {
        var question_id = "#"+ qDiv_id + "_question"
        var question = $(question_id).text();
        var question_index = getQuestionIndex(question)
        console.log("question text: ", question)

        var p_id =  "#"+ qDiv_id + "_description";
        $(p_id).text(questions[question_index].question_description);
        $("#"+ qDiv_id + "_showbtn").hide();
        $("#"+ qDiv_id + "_hidebtn").show()
        qDiv_array[qDiv_id] = true;
    }
};