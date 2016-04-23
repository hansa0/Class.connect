// var add_materials_btn = '<button class="btn btn-default btn-add-materials" onclick="addMaterials(event)"></button>';

var add_assignments_btn = '<button id="add-assignment-btn" class="btn btn-default btn-add-materials" onclick="addMaterials()"><span class="glyphicon glyphicon-plus" aria-hidden="true"</span></button>';
var new_file_name;

$(document).ready(function() {
    


    var day_to_display = "April 20th";

    // var add_materials_btn = document.createElement('button');
    // add_materials_btn.classList = ['btn', 'btn-default', 'btn-add-materials'];
    // $(add_materials_btn).append('<span class="glyphicon glyphicon-plus" aria-hidden="true"</span>');
    // = '<button class="btn btn-default btn-add-materials" type="button"></button>';

    $("#selected-day").html(day_to_display);

    // display topics with materials
    displayAllTopics();

    // display assignments
    displayAssignments();

    // display add topic box
    displayAddNewTopic();


    // fetches file on file upload selection
    // --> source: http://abandon.ie/notebook/simple-file-uploads-using-jquery-ajax
    $('input[type=file]').on('change', prepareUpload);

    // opens file upload window on clicking file upload
    // $(".btn-add-materials").click(function() {
    //     //console.log('clicked add materials');
    //     var upload = document.getElementById("upload");
    //     upload.click();
    // });


    $(".folder").on("click", function() {
        console.log("deleting topic");
        $(this).closest('.col-md-5').remove();
        $.notify("Successfully deleted topic", "success");
    });

    $("#minusAssignmentTopic").on("click", function() {
        console.log("deleting assignment square");
        $(this).closest('.col-md-5').remove();
        $.notify("Successfully deleted topic", "success");
    });

    $(".singleAssignment").on("click", function() {
        console.log("individual assignment deleting");
        $(this).closest('p').remove();
        $.notify("Successfully removed file", "success");
    });

    $(".handout").on("click", function() {
        console.log("handout deleting");
        $(this).closest('p').remove();
        $.notify("Successfully removed file", "success");
    });

    var isEditing = false;
    $("#edit-btn").click(function() {
        isEditing = !isEditing; //toggles


        var editButton = document.getElementById("edit-btn");
        var minuses = document.getElementsByClassName("glyphicon glyphicon-minus");

        if (isEditing) {
            editButton.className="btn btn-success";
            editButton.textContent="Editing";
            for (i = 0; i < minuses.length; i++){
                //console.log(minuses[i]);
                minuses[i].style.display = "inline";
            }
        }
        else {
            editButton.className = "btn btn-primary";
            editButton.textContent = "Edit";
            for (i = 0; i < minuses.length; i++){
                //console.log(minuses[i]);
                minuses[i].style.display = "none";
            }
        }
    });
    
    //press enter to add a new topic
    document.getElementById('newTopic').onkeydown = function(e){
   if(e.keyCode == 13){
       
     console.log("enter");
       addTopic();
   }
};
});



var displayAllTopics = function() {
    console.log(topics);
    console.log(topics.length);
    for (var i = 0; i < topics.length; i++) {
        // create a div for each topic
        var topic = topics[i];
        var topic_div = document.createElement('div');
        topic_div.classList.add("col-md-5");
        topic_div.classList.add("topic-container");
        topic_div.classList.add("panel");
        topic_div.classList.add("panel-primary");

        var topic_header = document.createElement('div');
        topic_header.className = "panel-heading";
        $(topic_header).append('<h4> <span class="glyphicon glyphicon-minus folder" aria-hidden="true" style="color:red" id="minusTopic"></span>' + topic.name + '</h4>');
        $(topic_div).append(topic_header)
        
        // add materials for that topic
        var topic_body = document.createElement('div');
        topic_body.className = "panel-body";

        var topic_materials = document.createElement('div');
        topic_materials.classList.add('topic-material');

        var handouts = topic.handouts;
        for (var j = 0; j < handouts.length; j++) {
            if ($.inArray(handouts[i], topic.handouts)) {
                $(topic_materials).append('<p><span class="glyphicon glyphicon-minus handout" aria-hidden="true" style="color:red" id="minusHandout"></span> <a href="http://ptchanculto.binhoster.com/books/-Lit-%20Recommended%20Reading/Japanese%20Literature/Murakami,%20Haruki/Murakami,%20Haruki%20-%20The%20Elephant%20Vanishes.pdf">'+ handouts[i].title+' </a> </p>');
            };
        };

        var add_materials_btn = document.createElement('button');
        add_materials_btn.id = "id_btn_" + topic.name;
        add_materials_btn.classList.add("btn");
        add_materials_btn.classList.add("btn-default");
        add_materials_btn.classList.add("btn-add-materials");

        add_materials_btn.onclick = function(event) {
            addMaterials(event);
        }
        $(add_materials_btn).append('<span class="glyphicon glyphicon-plus" aria-hidden="true"</span>');


        $(topic_materials).append(add_materials_btn);
        $(topic_body).append(topic_materials);
        $(topic_div).append(topic_body);
        
        var input = document.createElement('input');
        input.type = "file";
        input.className = "materials-input";
        input.id = "id_input_" + topic.name;

        $(topic_div).append(input);
        // <input type="file" style="display:none" id="upload" name="upload" style="visibility: hidden; width: 1px; height: 1px" 
        $('#topics').append(topic_div);

    };
};

var displayAssignments = function() {
    var assignment_div = document.createElement('div');
    assignment_div.classList.add("col-md-5");
    assignment_div.classList.add("topic-container");
    assignment_div.classList.add("assignments-container");
    assignment_div.classList.add("panel");
    assignment_div.classList.add("panel-primary");

    var assignment_header = document.createElement('div');
    assignment_header.className = "panel-heading";
    $(assignment_header).append('<h4> <span class="glyphicon glyphicon-minus" aria-hidden="true" style="color:red" id="minusAssignmentTopic"></span> Assignments</h4');

    $(assignment_div).append(assignment_header);

    var assignment_body = document.createElement('div');
    assignment_body.className = "panel-body";

    var assignment_materials = document.createElement('div');
    for (var i = 0; i < assignments.length; i++){
        $(assignment_materials).append('<p><span class="glyphicon glyphicon-minus singleAssignment" aria-hidden="true" style="color:red" id="minusAssignment"></span> <a href="http://ptchanculto.binhoster.com/books/-Lit-%20Recommended%20Reading/Japanese%20Literature/Murakami,%20Haruki/Murakami,%20Haruki%20-%20The%20Elephant%20Vanishes.pdf">' + assignments[i].assignment_name+'</a> </p>');
    };

    $(assignment_materials).append(add_assignments_btn);
    $(assignment_body).append(assignment_materials);

    $(assignment_div).append(assignment_body);
    $('#topics').append(assignment_div);
};


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
  console.log(event.target);
  var topic_name = event.target.id.split("_")[2];

  console.log(topic_name);
  var button_id = "id_btn_" + topic_name;

  console.log(button_id);

  files = event.target.files;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    
    console.log(file);
    new_file_name = file.name;
    console.log(new_file_name);
    
    var new_assignment = '<p><span class="glyphicon glyphicon-minus singleAssignment" aria-hidden="true" style="color:red" id="minusAssignment"></span> <a href="http://ptchanculto.binhoster.com/books/-Lit-%20Recommended%20Reading/Japanese%20Literature/Murakami,%20Haruki/Murakami,%20Haruki%20-%20The%20Elephant%20Vanishes.pdf">new file</a> </p>';

    // TODO: always assign

    $(new_assignment).insertBefore($('#'+button_id));
    $.notify("Added new file", "success");    
    // return file.name;
    // TODO: add new material assignment here and add to topic
  };
};



var addTopic = function() {
    console.log('adding topic');
    var new_topic_name = $("#newTopic").val();
    $.notify("Topic \"" + new_topic_name + "\" added", "success");

    // if no typed name, don't add
    if (new_topic_name == "") {
        return;
    }

    // add new topic to list
    var new_topic_obj = {
        name: new_topic_name,
        handouts: []
    };
    // console.log(new_topic_obj);
    topics.push(new_topic_obj);
    // console.log(topics);

    // recreate divs to place new topic div in correct place
    $('#topics').empty();
    displayAllTopics();
    displayAssignments();

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
    var btn_id = e.target.parentNode.id;
    // console.log(btn_id);
    var topic_name = btn_id.split("_")[2];
    // console.log(btn_id.split("_")[1]);
    console.log("id_input_" + topic_name)
    var upload = document.getElementById("id_input_" + topic_name);
    $(upload).click();
    
    // var new_assignment = '<p><span class="glyphicon glyphicon-minus singleAssignment" aria-hidden="true" style="color:red" id="minusAssignment"></span> <a href="http://ptchanculto.binhoster.com/books/-Lit-%20Recommended%20Reading/Japanese%20Literature/Murakami,%20Haruki/Murakami,%20Haruki%20-%20The%20Elephant%20Vanishes.pdf">new file</a> </p>';

    // $(new_assignment).insertBefore(btn_id);
    // $.notify("Added new file", "success");
};

