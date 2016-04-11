

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

  $('#calendar').fullCalendar({
      // put your options and callbacks here
      // weekends: false,
      events: all_materials
  })
});



$(function() {
  $("#add").click(function(){
    console.log("new");
    var newDiv = document.createElement('div');
    newDiv.style.border = "solid";
    newDiv.style.height="80px";
    newDiv.style.width="80px";
    newDiv.style.margin="20px";
    newDiv.style.position="absolute";
    newDiv.style.top="130px";
    newDiv.style.left="120px";
    document.getElementById("left").appendChild(newDiv);
    
    $(newDiv).attr('id', 'Nouns');
    $(newDiv).text("Nouns");
  });
});