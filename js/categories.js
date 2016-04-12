
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
    document.getElementById("upload").style.display="inline";
});
    

  
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


