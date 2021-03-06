// var add_materials_btn = '<button class="btn btn-default btn-add-materials" onclick="addMaterials(event)"></button>';

var add_assignments_btn = '<button id="add-assignment-btn" class="btn btn-default btn-add-materials" ><span class="glyphicon glyphicon-plus" aria-hidden="true"</span></button>';
var new_file_name;

var current_topic_h4_id;
var current_panel_heading_id;
var editing_topic_name = false;
// var cd;
// var currentDay;

//SimpleDateFormat formatter=new SimpleDateFormat("DD-MMM-yyyy");  
 // cd=new Date(localStorage.getItem("selectedDay"));

var topicStack = new Array();
var fileStack = new Array();

// function dayToString(day){
//     var yyyy = day.getFullYear().toString();
//    var mm = (day.getMonth()+1).toString(); // getMonth() is zero-based
//    var dd  = (day.getDate()+1).toString();
//     var stringDay=yyyy +"-"+ (mm[1]?mm:"0"+mm[0]) +"-"+ (dd[1]?dd:"0"+dd[0]);
//    return  stringDay
// }

function undoDeleteFile(){
    var parent = fileStack.pop();
    var child = fileStack.pop();
    console.log(child);
    console.log(child.lastChild);
    parent.insertBefore(child, parent.firstChild);
}
function undoDeleteTopic(){ //udos to the notification
    //For each time topic or whatever is added
    //topicStack.push($(this).closest('.col-md-5').clone());
    var poppedTopic = topicStack.pop();
    console.log(poppedTopic);
    topics.push(poppedTopic);
    $('#topics').empty();
    displayAllTopics();
    displayAddNewTopic();
}
$(document).ready(function() {
    
    // currentDay=dayToString(cd);
    // console.log(currentDay);
    $('#topics').on("click", ".btn-add-materials", function(e){
        e.stopPropagation();
        e.preventDefault();
        if (e.target.className == "glyphicon glyphicon-plus") {		
            var btn_id = e.target.parentNode.id;
            var btn_id = e.target.parentNode.id;
            var topic_name = btn_id.split("_")[2];
            var upload = document.getElementById("id_input_" + topic_name);
            upload.click();
        } else {		
            var btn_id = e.target.id;		
            var topic_name = btn_id.split("_")[2];		
            var upload = document.getElementById("id_input_" + topic_name);
            upload.click();
        };
    });

    var isEditing = false;
    // var add_materials_btn = document.createElement('button');
    // add_materials_btn.classList = ['btn', 'btn-default', 'btn-add-materials'];
    // $(add_materials_btn).append('<span class="glyphicon glyphicon-plus" aria-hidden="true"</span>');
    // = '<button class="btn btn-default btn-add-materials" type="button"></button>';



    // display topics with materials
    displayAllTopics();

    // display assignments
    // displayAssignments();

    // display add topic box
    displayAddNewTopic();


    // fetches file on file upload selection
    // --> source: http://abandon.ie/notebook/simple-file-uploads-using-jquery-ajax
    $('#topics').on('change', 'input[type=file]', prepareUpload);


    // let users edit topic names by clicking them, only if NOT in editing mode
    $('body').on('click', '.materials-panel-heading', function(event) {
        if (!isEditing){
            console.log('clicked panel heading');
      event.stopPropagation();
      var target = event.target;

      if (editing_topic_name) {
        // do nothing if clicks topic already being edited
        if (target.tagName == "INPUT") {
          return;
        }
        else {
          // close existing topic
          closeTopicNameInput(current_topic_h4_id);
        };
      };

      change_topic_name(event);
      }

    });

    // close topic name input if user clicks anywhere outside of
    // the input box
    $(document).click(event, function() {
      closeTopicNameInput(current_topic_h4_id);
    });

    // act on enter click when inputing new topic name
    $('.materials-panel-heading').keypress(function(e) {
      if(e.keyCode ==13) {
        closeTopicNameInput(current_topic_h4_id);
        editing_topic_name = false;
      };
    });



    $('#topics').on("click", ".folder", function(e){
        e.stopPropagation();
        e.preventDefault();
        var top=$(this).closest('.col-md-5').children().children()[0].innerHTML.split("<")[0];
        console.log(top,"topic to remove");
        $(this).closest('.col-md-5').remove();
        $.notify({
            text: 'Topic Deleted',
            html: '<button onclick="undoDeleteTopic()">Undo</button>'
        }, {
            style: 'bootstrap',
            className: 'success',
            autoHide: true,
            clickToHide: true
        });

        for (var i = 0; i < topics.length; i++) {
            var cat=topics[i];
            if (cat.name==top){
                console.log(cat.name);
                console.log(topics[i]);
                topicStack.push(jQuery.extend(true, {}, topics[i]));
                topics.splice(i, 1);
                console.log(topicStack[topicStack.length - 1]);
            }
        }
    console.log("remove a topic")});




    //delete x for a header shows up on hover
    $('body').on("mouseover", ".panel-heading", function(){
        if (isEditing){
        $(this).children('h4').children('span').css({'display' : 'inline' });
        }

    });

    //delete x icon for a header leaves after hover leaving
    $('body').on("mouseleave", ".panel-heading", function(){
        if (isEditing){
        $(this).children('h4').children('span').css({'display' : 'none' });
        }

    });

    //delete doc icon shows up on hover
    $('body').on("mouseover", ".doc", function(){
        if (isEditing){

          //$(this).css({'background' : '#B3E5FC' })
        $(this).children('span').css({'display' : 'inline' });
        }
    });

    //delete x icon for a doc leaves after hover leaving
    $('body').on("mouseleave", ".doc", function(){
        if (isEditing){

          //$(this).css({'background' : '#B3E5FC' })
        $(this).children('span').css({'display' : 'none' });
        }
    });

    //delete a doc on click
    $('body').on("click", ".doc", function(){
        if (isEditing){

          //$(this).css({'background' : '#B3E5FC' })
        var fileClicked=$(this).closest('p').text().replace(/\s+/g, '');
        //console.log(fileClicked , "file clicked");
            //first get rid of red x beside node
            $(this).find('span').css('display', 'none');
            fileStack.push(this.cloneNode(true));
            fileStack.push(this.parentNode);
        $(this).closest('p').remove();
            $.notify({
                text: 'File deleted',
                html: '<button onclick="undoDeleteFile()">Undo</button>'
            }, {
                style: 'bootstrap',
                className: 'success',
                autoHide: true,
                clickToHide: true
            });

        for (var i = 0; i < topics.length; i++) {
            var cat=topics[i];
            //console.log(cat);
            for (var j = 0; j < cat.handouts.length; j++) {

                if
                    (topics[i].handouts[j].title.replace(/\s+/g, '').toLowerCase()==String(fileClicked).toLowerCase()){
                    //console.log("match", String(topics[i].handouts[j].title), String(fileClicked));
                    topics[i].handouts.splice(j,1);
                    break;
                }
        }
        }
        }
    });

    $("#edit-btn").click(function() {
        isEditing = !isEditing; //toggles


        var editButton = document.getElementById("edit-btn");


        if (isEditing) {
            editButton.className="btn btn-success";
            editButton.textContent="Editing";

        }
        else {
            editButton.className = "btn btn-primary";
            editButton.textContent = "Edit";

        }
    });

    //press enter to add a new topic
    document.getElementById('newTopic').onkeydown = function(e){
      if(e.keyCode == 13){

      //console.log("enter");
        addTopic();
      }
    };
});



var displayAllTopics = function() {
    for (var i = 0; i < topics.length; i++) {
        // create a div for each topic
        var topic = topics[i];
        var topic_div = document.createElement('div');
        topic_div.classList.add("col-md-5");
        topic_div.classList.add("topic-container");
        topic_div.classList.add("panel");
        topic_div.classList.add("panel-primary");

        var topic_header = document.createElement('div');
        topic_header.classList.add("panel-heading");
        topic_header.classList.add("materials-panel-heading");
        topic_header.id = "header_" + topic.id;

        $(topic_header).append('<h4 id="topic_h4_' + topic.id + '">' + topic.name + '<span class="glyphicon glyphicon-remove folder" aria-hidden="true" style="color:red; float:right" id="minusTopic"></span></h4>');
        $(topic_div).append(topic_header)

        // add materials for that topic
        var topic_body = document.createElement('div');
        topic_body.className = "panel-body";

        var topic_materials = document.createElement('div');
        topic_materials.classList.add('topic-material');

        var handouts = topic.handouts;
        for (var j = 0; j < handouts.length; j++) {
            //console.log(handouts[j]);
           // if ($.inArray(handouts[j], topic.handouts)) {
            var current_date = new Date(localStorage.getItem("selectedDay"));
            curr_date_str = current_date.toISOString().substring(0, 10);
            
            console.log(current_date);
            console.log('current date: ' + curr_date_str);
            console.log('handout ' + handouts[j].relevant_day.toISOString().substring(0, 10));
            if (handouts[j].relevant_day.toISOString().substring(0, 10) == curr_date_str) {
                
               $(topic_materials).append('<p class="doc"><a href="http://ptchanculto.binhoster.com/books/-Lit-%20Recommended%20Reading/Japanese%20Literature/Murakami,%20Haruki/Murakami,%20Haruki%20-%20The%20Elephant%20Vanishes.pdf">'+ handouts[j].title+ '</a> <span class="glyphicon glyphicon-remove handout" aria-hidden="true" style="color:red; float:right; display:none" ></span> </p>'); 
            };
          
          //  };

        };

        // add button add more materials
        var add_materials_btn = document.createElement('button');
        add_materials_btn.id = "id_btn_" + topic.name;
        add_materials_btn.classList.add("btn");
        add_materials_btn.classList.add("btn-default");
        add_materials_btn.classList.add("btn-add-materials");

       // add_materials_btn.onclick = function(event) {
        //    addMaterials(event);
       // }
        $(add_materials_btn).append('<span class="glyphicon glyphicon-plus" aria-hidden="true"</span>');


        $(topic_materials).append(add_materials_btn);
        $(topic_body).append(topic_materials);
        $(topic_div).append(topic_body);

        // add invisible input element for file upload
        var input = document.createElement('input');
        input.type = "file";
        input.className = "materials-input";
        input.id = "id_input_" + topic.name;
        $(topic_div).append(input);

        $('#topics').append(topic_div);

    };
};


// adds the "new topic" square
var displayAddNewTopic = function() {
    var add_topic_div = document.createElement('div');
    add_topic_div.classList.add('col-md-5');
    add_topic_div.classList.add('topic-container');
    add_topic_div.classList.add('topic-add');
    add_topic_div.classList.add('panel');
    $(add_topic_div).append('<input type="text" class="form-control" placeholder="Add a topic..." id="newTopic">');

    var add_topic_btn = document.createElement('button');
    add_topic_btn.classList.add('btn');
    add_topic_btn.classList.add('btn-default');
    add_topic_btn.classList.add('btn-add-topic');
    $(add_topic_btn).append("Add");
    add_topic_btn.onclick = addTopic;
    $(add_topic_div).append(add_topic_btn);

    $('#topics').append(add_topic_div);
};


// grab the files and set them to our variable
var prepareUpload = function(event) {
  console.log('preparing upload');
  console.log(event.target);
  var topic_name = event.target.id.split("_")[2];

  var button_id = "id_btn_" + topic_name;

  files = event.target.files;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    console.log(file);
    new_file_name = file.name;
    console.log(new_file_name, "file name");

    var new_assignment = '<p class="doc"> <a href="http://ptchanculto.binhoster.com/books/-Lit-%20Recommended%20Reading/Japanese%20Literature/Murakami,%20Haruki/Murakami,%20Haruki%20-%20The%20Elephant%20Vanishes.pdf">' + new_file_name+ '</a> <span class="glyphicon glyphicon-remove handout" aria-hidden="true" style="color:red; float:right; display:none"></span> </p>';

    // create the file to be added the collections array:
    var date = new Date(localStorage.getItem("selectedDay"));

    var newHandoutArray = {
        title: new_file_name,
        topic: topic_name,
        file: 'N/A',
        text: 'Some description',
        relevant_day: date
    };

      //actually adds it to the collections array:
    for (var j = 0; j < topics.length; j++) {
      if (topics[j].name == topic_name) {
         topics[j].handouts.push(newHandoutArray);
       }
     };

    $(new_assignment).insertBefore($('#'+button_id));
    // return file.name;
    // TODO: add new material assignment here and add to topic
  };
};



var addTopic = function() {
    console.log('adding topic');
    var new_topic_name = $("#newTopic").val();

    // if no typed name, don't add
    if (new_topic_name == "") {
        return;
    }

    // add new topic to list
    var new_topic_obj = {
        name: new_topic_name,
        handouts: [],
        id: topics.length + 1
    };

    topics.push(new_topic_obj);


    // recreate divs to place new topic div in correct place
    $('#topics').empty();
    displayAllTopics();
    displayAddNewTopic();
    

    // displayAssignments();

    // add new topic
    // var new_topic_div = document.createElement('div');
    // new_topic_div.classList.add('col-md-5');
    // new_topic_div.classList.add('topic-container');
    // $(new_topic_div).append('<h4> <span class="glyphicon glyphicon-minus folder" aria-hidden="true" style="color:red; display: none;"></span>' + new_topic_name + "</h4>");
    // $(new_topic_div).append(add_materials_btn);
    // $('#topics').append(new_topic_div);

    displayAddNewTopic();
};


var addMaterials = function(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log($(this).closest('p'));

    //var btn_id = e.target.parentNode.id;
    // console.log(btn_id);
    //var topic_name = btn_id.split("_")[2];
    // console.log(btn_id.split("_")[1]);
    //console.log("id_input_" + topic_name)
    //var upload = document.getElementById("id_input_" + topic_name);
    //$(upload).click();
};

// acts on user topic name change
var change_topic_name = function(event) {

    editing_topic_name = true;

    var target = event.target;
    var old_topic = target.textContent;

    // create input element
    var input = document.createElement('input');
    input.type = "text";
    input.className = "materials-topic-name-input";
    input.value = old_topic;


    var current_panel_heading;
    var current_topic_h4;
    // if selected h4 element inside panel-heading
    if (target.tagName == "H4") {
        current_panel_heading = target.parentNode;
        current_topic_h4 = target;
    }
    // or if selected panel-heading
    else {
        current_panel_heading = target;
        current_topic_h4 = target.getElementsByTagName("H4")[0];
    };

    current_topic_h4_id = current_topic_h4.id;
    current_panel_heading_id = current_panel_heading.id;

    current_topic_h4.style.display = "none";
    $(current_panel_heading).append(input);
    input.focus();
};

var closeTopicNameInput = function(topic_id) {
  // do nothing if no topic name currently being edited
  if (!editing_topic_name) {
    return;
  }

  var new_topic_name = $('.materials-topic-name-input').val();

  // change visual look
  var parent = $('#' + current_topic_h4_id).parentNode;
  var topic_h4 = document.getElementById(current_topic_h4_id);

  // insert html for new h4 tag with the same id but new topic name
  var new_html = '<h4 id="' + current_topic_h4_id +'"">' + new_topic_name + '<span class="glyphicon glyphicon-remove folder" aria-hidden="true" style="color:red; float:right" id="minusTopic"></span></h4>';
  $(topic_h4.parentNode).html(new_html);

  // change topic name in json data structure as well
  for (i = 0; i++; i < topics.length) {
      var topic = topics[i];
      if (topic.id == topic_id) {
          topic.name = new_topic_name;
      };
  };

  // enable clicking new topic names to edit again
  editing_topic_name = false;
};



