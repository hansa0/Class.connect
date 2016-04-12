

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



