g = 0;
var questionStack = new Array();
max_question_len = 150;

//
replyClick = function(e) {
    g = g + 1;
    console.log("REPLY BUTTON CLICKED", e)
    var sp = ' onFocus="this.value=\'\'; this.onfocus=null;" ';

    var qDiv_id = e.target.parentNode.parentNode.parentNode.id;

    var question_id = qDiv_id + "_question"
    var question = document.getElementById(question_id).firstChild.nodeValue;
    var question_index = getQuestionIndex(question)

    var textAreaHtml = '<div class="replyDiv"><textarea id="'+ qDiv_id+"_reply"+ g+ '"'+sp+ ' ></textarea>';
    textAreaHtml = textAreaHtml + '<button type="button" class="btn btn-default submit-btn" id="'+ qDiv_id+'_submit' + '">Submit</button>';
    textAreaHtml = textAreaHtml + '<button type="button" class="btn btn-default submit-btn" id="'+ qDiv_id+'_close' + '">Close</button>';


    $(e.target.parentNode).append(textAreaHtml)
    var btn_id =qDiv_id+'_submit';
    var submit_button = document.getElementById(btn_id);
    submit_button.onclick=function(){replySubmit(event)};

    btn_id =qDiv_id+'_close';
    submit_button = document.getElementById(btn_id);
    submit_button.onclick=function(){closeButtonAction(event)};

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
        var author_id = e.target.parentNode.parentNode.parentNode.parentNode.id + "_author"
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
        $(reply_html).insertAfter(document.getElementById(author_id))
        $(reply_text_id).append(text)
    }

    var replybtn_id = "#"+e.target.parentNode.parentNode.parentNode.parentNode.id + "_replybtn"
    $(replybtn_id).show();
    // hideDescription(e);

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
    }

    var replybtn_id = "#"+e.target.parentNode.parentNode.parentNode.parentNode.id + "_replybtn"
    $(replybtn_id).show();
    hideDescription(e);

    e.target.parentNode.parentNode.removeChild(e.target.parentNode);



};

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
    var question_index = getQuestionIndex(question);
    var pushedQuestion = jQuery.extend(true, [], questions);
    console.log(pushedQuestion);
    questionStack.push(pushedQuestion);
    questions.splice(question_index, 1);
    console.log("QUestion ASDFASDFASFASDF")
    console.log(questions[question_index])
    questions[question_index].reply = text;
    questions[question_index].hasReply = true;

    var daily_q_div =  e.target.parentNode.parentNode.parentNode.parentNode.parentNode
    qDiv.parentNode.removeChild(qDiv);

    //e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    if (!daily_q_div.hasChildNodes()) {
        $("#daily-questions").append("<p style='text-align: center;'>No questions from students right now!</p>");
    }


    $.notify({
        text: 'Question submitted',
        html: '<button onclick="questionUndo()">Undo</button>'
    }, {
        style: 'bootstrap',
        className: 'success',
        autoHide: true,
        clickToHide: true
    });

};

getQuestionIndex = function(q) {
    for (var i=0; i < questions.length; i++ ){
        if (questions[i].question == q){
            return i
        }
    }
};

var qDiv_show = new Array();

$(document).ready(function() {
    displayQuestions();
});


// 
function showQuestion(event){
    event.preventDefault();
    var qDiv_id = event.data.param1
    if (qDiv_show[qDiv_id] == true) {
        var question_id = "#"+ qDiv_id + "_question"
        var question = $(question_id).text();
        var question_index = getQuestionIndex(question)
        var p_id =  "#"+ qDiv_id+ "_description";
        var see_more_link_id =  qDiv_id+ "_show";
        if (questions[question_index].question_description.length > max_question_len) {
            var t = questions[question_index].question_description.substring(0, max_question_len) + "... ";
            $(p_id).text(t);
            var show_t ='<a href="" id="'+ see_more_link_id + '">See more</a>';
            $(p_id).append(show_t)
            $("#"+see_more_link_id).click({param1: qDiv_id}, showQuestion);
        }
        qDiv_show[qDiv_id] = false;
    } else {
        var question_id = "#"+ qDiv_id + "_question"
        var question = $(question_id).text();
        var question_index = getQuestionIndex(question)
        console.log("question text: ", question)

        var p_id =  "#"+ qDiv_id + "_description";
        var see_less_link_id = qDiv_id + "_hide"
        var t = questions[question_index].question_description;
        var show_t = '  <a href="" id="'+ see_less_link_id + '">See less</a>';
        $(p_id).text(t);
        $(p_id).append(show_t)
        $("#"+see_less_link_id).click({param1: qDiv_id}, showQuestion);
        qDiv_show[qDiv_id] = true;
    }
};

function questionUndo(){
    questions = questionStack.pop();
    mainDiv = document.getElementById("daily-questions");
    mainDiv.innerHTML = "";

    var current_date = new Date(localStorage.getItem("selectedDay"));
    curr_date_str = current_date.toISOString().substring(0, 10);
    console.log("SELECTED DAY: ")
    console.log(current_date)
    console.log(typeof(current_date)) 

    if (questions.length == 0) {
        $("#daily-questions").append("<p style='text-align: center;'>No questions from students right now!</p>")
    }

    for (var i=0; i < questions.length; i++ ){
        // console.log(questions[i].date.toISOString().substring(0, 10) == curr_date_str)
        // console.log(questions[i].date.toISOString().substring(0, 10))
        if (questions[i].date.toISOString().substring(0, 10) == curr_date_str) {
            var qDiv = document.createElement("div");
            qDiv.id = "q" + i;
            qDiv.classList.add("questionDiv");
            qDiv.classList.add("panel");
            qDiv.classList.add("panel-primary");

            var question_description = questions[i].question_description;


            qDiv_show[qDiv.id] = false;

            var question_header = document.createElement("div");
            question_header.classList.add("panel-heading");

            question_header.id = qDiv.id + "_panel-heading";
            var p_question = document.createElement("h4")
            var question = document.createTextNode(questions[i].question);
            p_question.appendChild(question)

            p_question.id = qDiv.id + "_question";
            p_question.className = "questionText";

            var author = document.createTextNode(questions[i].author);
            var p_author = document.createElement("p");
            p_author.appendChild(author);
            p_author.className = "questionAuthor";
            p_author.id = qDiv.id + "_author"
            $(p_author).append(author)


            $(question_header).append(p_question);
            $(qDiv).append(question_header);


            var question_body = document.createElement("div");
            question_body.className = "panel-body";

            var more_to_show = false;

            var description = document.createElement("p");
            description.id = qDiv.id + "_description";
            if (question_description.length > max_question_len) {
                see_more_link_id = qDiv.id + '_show'; 
                question_description_1 = question_description.substring(0, max_question_len) + '... ';
                question_description = question_description_1 +'<a href="" id="'+ see_more_link_id + '">See more</a>';
                more_to_show = true;
            }
            $(description).append(question_description);
            $(question_body).append(description);
            $(question_body).append(p_author)
            $(qDiv).append(question_body);

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


            mainDiv.appendChild(qDiv);

            if (more_to_show) { $("#"+see_more_link_id).click({param1: qDiv.id}, showQuestion);} 
        };
    };

    if (!mainDiv.hasChildNodes()) {
        $("#daily-questions").append("<p style='text-align: center;'>No questions from students right now!</p>")
    };
};

var displayQuestions = function() {
    mainDiv = document.getElementById("daily-questions");

    var current_date = new Date(localStorage.getItem("selectedDay"));
    curr_date_str = current_date.toISOString().substring(0, 10);
    

    if (questions.length <2) {
        $("#daily-questions").append("<p style='text-align: center;'>No questions from students right now!</p>")
    };

    for (var i=0; i < questions.length; i++ ){
        // console.log(questions[i].date.toISOString().substring(0, 10) == curr_date_str)
        // console.log(questions[i].date.toISOString().substring(0, 10))
        if (questions[i].date.toISOString().substring(0, 10) == curr_date_str) {
            var qDiv = document.createElement("div");
            qDiv.id = "q" + i;
            qDiv.classList.add("questionDiv");
            qDiv.classList.add("panel");
            qDiv.classList.add("panel-primary");

            var question_description = questions[i].question_description;


            qDiv_show[qDiv.id] = false;

            var question_header = document.createElement("div");
            question_header.classList.add("panel-heading");

            question_header.id = qDiv.id + "_panel-heading";
            var p_question = document.createElement("h4")
            var question = document.createTextNode(questions[i].question);
            p_question.appendChild(question)

            p_question.id = qDiv.id + "_question";
            p_question.className = "questionText";

            var author = document.createTextNode(questions[i].author);
            var p_author = document.createElement("p");
            p_author.appendChild(author);
            p_author.className = "questionAuthor";
            p_author.id = qDiv.id + "_author"
            $(p_author).append(author)


            $(question_header).append(p_question);
            $(qDiv).append(question_header);


            var question_body = document.createElement("div");
            question_body.className = "panel-body";

            var more_to_show = false;

            var description = document.createElement("p");
            description.id = qDiv.id + "_description";
            if (question_description.length > max_question_len) {
                see_more_link_id = qDiv.id + '_show'; 
                question_description_1 = question_description.substring(0, max_question_len) + '... ';
                question_description = question_description_1 +'<a href="" id="'+ see_more_link_id + '">See more</a>';
                more_to_show = true;
            }
            $(description).append(question_description);
            $(question_body).append(description);
            $(question_body).append(p_author)
            $(qDiv).append(question_body);

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


            mainDiv.appendChild(qDiv);

            if (more_to_show) { $("#"+see_more_link_id).click({param1: qDiv.id}, showQuestion);} 
        };
    };

    if (!mainDiv.hasChildNodes()) {
        $("#daily-questions").append("<p style='text-align: center;'>No questions from students right now!</p>")
    };
};


