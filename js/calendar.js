


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
  console.log(all_materials);

  
  $('#calendar').fullCalendar({
    // put your options and callbacks here
    // weekends: false,
    
    fixedWeekCount: false,

    // includes all materials as events
    events: all_materials, 

    // goes to daily view for selected day
    dayClick: function(date, jsEvent, view) {
      selected_day = date.format();
      var current_url = location.href;
      location.href = current_url.replace("index", "daily");
    }

  });
});
