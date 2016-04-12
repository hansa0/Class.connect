$(document).ready(function() {
   var cellstoFill=["1", "2", "3", "4", "5"]
var nextFreeCell=0;
$("#addVerb").click(function(){
    
    document.getElementById("upload").style.display="inline";
    

  });
  
$("#add").click(function(){
    console.log("newwww");

    var cell= cellstoFill[nextFreeCell]
    document.getElementById(cell).innerHTML="Nouns";
    document.getElementById(cell).style.border="solid";
    nextFreeCell+=1;
    

  });
    
$("#edit").click(function(){

    var minuses=document.getElementsByClassName("glyphicon glyphicon-minus");
    console.log(minuses);
    for (i in )

  });

});


