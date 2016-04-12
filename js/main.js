

$(document).ready(function() {
  // page is now ready

  // initialize the calendar
  // assignments is initialized in js/collections.js
  all_materials = []
  for (var i = 0; i < assignments.length; i++) {
    assignment = assignments[i];
    assignment_event = {
      title: assignment.assignment_name,
      start: assignment.duedate
    }
    all_materials.push(assignment_event);
  };
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
    
  $('#calendar').fullCalendar({
      // put your options and callbacks here
      // weekends: false,
      events: all_materials
  })
});



