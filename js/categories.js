
$(document).ready(function() {
   var cellstoFill = ["1", "2", "3", "4", "5"]
    var nextFreeCell = 0;
 
    for (var i = 0; i < assignments.length; i++){
        var d1 = document.getElementById('Assignments');
        d1.insertAdjacentHTML('afterend', '<p><span class="glyphicon glyphicon-minus" aria-hidden="true" style="color:red" id="minus"></span>'+ assignments[i].assignment_name+'</p>');
    }
    
    for (var i = 0; i < handouts.length; i++){
        var d1 = document.getElementById(handouts[i].topic);
        console.log(handouts[i].topic);
        d1.insertAdjacentHTML('afterend', '<p><span class="glyphicon glyphicon-minus" aria-hidden="true" style="color:red" id="minus"></span>'+ handouts[i].title+'</p>');     
    }
   
$("#addVerb").click(function() {
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
    console.log(input);
    var cell = cellstoFill[nextFreeCell]
    document.getElementById(cell).innerHTML = input;
    document.getElementById(cell).style.border = "solid";
    nextFreeCell += 1;
});
    
$("#edit").click(function(){

    var minuses = document.getElementsByClassName("glyphicon glyphicon-minus");
    console.log(minuses);
    for (i=0; i < minuses.length; i++){
        console.log(minuses[i]);
        minuses[i].style.display = "inline";
    }

  });

});


