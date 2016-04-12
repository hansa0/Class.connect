
$(document).ready(function() {
    var cellstoFill = ["1", "2", "3", "4", "5"]
    var nextFreeCell = 0;
 
    for (var i = 0; i < assignments.length; i++){
        var d1 = document.getElementById('Assignments');
        d1.insertAdjacentHTML('afterend', '<p><span class="glyphicon glyphicon-minus" aria-hidden="true" style="color:red" id="minus"></span> <a href="http://ptchanculto.binhoster.com/books/-Lit-%20Recommended%20Reading/Japanese%20Literature/Murakami,%20Haruki/Murakami,%20Haruki%20-%20The%20Elephant%20Vanishes.pdf">' + assignments[i].assignment_name+'</a> </p>');

    }
    
    for (var i = 0; i < handouts.length; i++){
        var d1 = document.getElementById(handouts[i].topic);
        console.log(handouts[i].topic);
        d1.insertAdjacentHTML('afterend', '<p><span class="glyphicon glyphicon-minus" aria-hidden="true" style="color:red" id="minus"></span> <a href="http://ptchanculto.binhoster.com/books/-Lit-%20Recommended%20Reading/Japanese%20Literature/Murakami,%20Haruki/Murakami,%20Haruki%20-%20The%20Elephant%20Vanishes.pdf">'+ handouts[i].title+' </a> </p>');     
    }



    $("#addVerb").click(function() {
        console.log('clicked add verb');
        var upload = document.getElementById("upload");
        upload.click();
        console.log(document.getElementById("upload").value);
    // <input type="file" id="upload" name="upload" style="visibility: hidden; width: 1px; height: 1px" multiple />
    // <a href="" onclick="document.getElementById('upload').click(); return false">Upload</a>    
    });

    // http://abandon.ie/notebook/simple-file-uploads-using-jquery-ajax
    $('input[type=file]').on('change', prepareUpload);

    // Grab the files and set them to our variable
    function prepareUpload(event) {
      files = event.target.files;
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        console.log(file);  
      };
    }

    $("#add").click(function() {
        var input = $("#newTopic").val();

        var cell= cellstoFill[nextFreeCell]
        document.getElementById(cell).innerHTML=input;
        
        document.getElementById(cell).style.border="solid";
        document.getElementById(cell).style.height="150px";
        nextFreeCell+=1;
    });
          

    var isEditing = false;
    $("#edit").click(function(){
        isEditing=!isEditing; //toggles
        
        var editButton=document.getElementById("edit");
        var minuses=document.getElementsByClassName("glyphicon glyphicon-minus");


        if (isEditing){
            editButton.className="btn btn-success";
            editButton.textContent="Editing";
            for (i=0; i<minuses.length; i++){
                console.log(minuses[i]);
                minuses[i].style.display = "inline";
            }
        }
        else {
            editButton.className="btn btn-primary";
            editButton.textContent="Edit";
            for (i=0; i<minuses.length; i++){
                console.log(minuses[i]);
                minuses[i].style.display="none";
            }
        }

    });

});
