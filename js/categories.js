
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
        d1.insertAdjacentHTML('afterend', '<p><span class="glyphicon glyphicon-minus" aria-hidden="true" style="color:red" id="minus"></span>'+ handouts[i].title+'</p>');     
    }
   
$("#addVerb").click(function() {
    document.getElementById("upload").style.display="inline";
});
    

  
$("#add").click(function() {
    var input = $("#newTopic").val();
    console.log(input);
<<<<<<< HEAD
    var cell= cellstoFill[nextFreeCell]
    document.getElementById(cell).innerHTML=input;
    document.getElementById(cell).style.border="solid";
    nextFreeCell+=1;
    

  });

    var isEditing=false;
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
    else{
        editButton.className="btn btn-primary";
        editButton.textContent="Edit";
        for (i=0; i<minuses.length; i++){
        console.log(minuses[i]);
        minuses[i].style.display="none";
    }
    }
    
    
    

  });

});


