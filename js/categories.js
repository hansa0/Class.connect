
var add_materials_btn = '<button class="btn btn-default btn-add-materials" type="button"><span class="glyphicon glyphicon-plus" aria-hidden="true"</span></button>';

$(document).ready(function() {

    var day_to_display = "April 20th";
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
    $(".btn-add-materials").click(function() {
        console.log('clicked add materials');
        var upload = document.getElementById("upload");
        upload.click();
    });

    // adds new topic
    $(".btn-add-topic").on("click", function() {
        console.log('clicked add new topic');

        var new_topic_name = $("#newTopic").val();
        
        // if no typed name, don't add
        if (new_topic_name == "") {
            return;
        }

        // recreate divs to place new topic div in correct place
        $('#topics').empty();
        displayAllTopics();
        displayAssignments();

        // add new topic
        var new_topic_div = document.createElement('div');
        new_topic_div.classList.add('col-md-5');
        new_topic_div.classList.add('topic-container');
        $(new_topic_div).append("<h4>" + new_topic_name + "</h4>");
        $(new_topic_div).append(add_materials_btn);
        $('#topics').append(new_topic_div);

        displayAddNewTopic();
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
                console.log(minuses[i]);
                minuses[i].style.display = "inline";
            }
        }
        else {
            editButton.className = "btn btn-primary";
            editButton.textContent = "Edit";
            for (i = 0; i < minuses.length; i++){
                console.log(minuses[i]);
                minuses[i].style.display = "none";
            }
        }
    });
});

var displayAllTopics = function() {
    for (var i = 0; i < topics.length; i++) {
        // create a div for each topic    
        var topic = topics[i];
        var topic_div = document.createElement('div');
        topic_div.classList.add("col-md-5");
        topic_div.classList.add("topic-container");
        $(topic_div).append('<h4> <span class="glyphicon glyphicon-minus" aria-hidden="true" style="color:red" id="minus"></span>' + topic.name + '</h4>');
        
        // add materials for that topic
        var topic_materials = document.createElement('div');
        topic_materials.classList.add('topic-material');
        
        for (var i = 0; i < handouts.length; i++) {
            if ($.inArray(handouts[i], topic.handouts)) {
                $(topic_materials).append('<p><span class="glyphicon glyphicon-minus" aria-hidden="true" style="color:red" id="minus"></span> <a href="http://ptchanculto.binhoster.com/books/-Lit-%20Recommended%20Reading/Japanese%20Literature/Murakami,%20Haruki/Murakami,%20Haruki%20-%20The%20Elephant%20Vanishes.pdf">'+ handouts[i].title+' </a> </p>');
            };
        };
        $(topic_materials).append(add_materials_btn);

        $(topic_div).append(topic_materials);
        $('#topics').append(topic_div);
    };
};

var displayAssignments = function() {
    var assignment_div = document.createElement('div');
    assignment_div.classList.add("col-md-5");
    assignment_div.classList.add("topic-container");
    $(assignment_div).append('<h4> <span class="glyphicon glyphicon-minus" aria-hidden="true" style="color:red" id="minus"></span> Assignments</h4');    

    var assignment_materials = document.createElement('div');
    for (var i = 0; i < assignments.length; i++){
        $(assignment_materials).append('<p><span class="glyphicon glyphicon-minus" aria-hidden="true" style="color:red" id="minus"></span> <a href="http://ptchanculto.binhoster.com/books/-Lit-%20Recommended%20Reading/Japanese%20Literature/Murakami,%20Haruki/Murakami,%20Haruki%20-%20The%20Elephant%20Vanishes.pdf">' + assignments[i].assignment_name+'</a> </p>');
    };

    $(assignment_materials).append(add_materials_btn);
    $(assignment_div).append(assignment_materials);
    $('#topics').append(assignment_div);
};


var displayAddNewTopic = function() {
    var add_topic_div = document.createElement('div');
    add_topic_div.classList.add('col-md-5');
    add_topic_div.classList.add('topic-container');
    add_topic_div.classList.add('topic-add');
    $(add_topic_div).append('<input type="text" class="form-control" placeholder="Add a topic..." id="newTopic">');
    $(add_topic_div).append('<button class="btn btn-default btn-add-topic" type="button">Add</button>');

    $('#topics').append(add_topic_div);    
};


// grab the files and set them to our variable
function prepareUpload(event) {
  files = event.target.files;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    console.log(file);  
    // TODO: add new material assignment here and add to topic
  };
};


