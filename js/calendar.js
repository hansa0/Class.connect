

$(document).ready(function() {

  var old_event_color;

  // create events for assignments in calendar
  // assignments is initialized in js/collections.js
  all_materials = []
  for (var i = 0; i < assignments.length; i++) {

    assignment = assignments[i];
    assignment_event = {
      title: assignment.assignment_name,
      start: assignment.duedate,
      color: '#3399ff'

    }
    all_materials.push(assignment_event);
  };
  
  // add events for handouts in calendar
  // handouts is initialized in js/collections.js
  for (var i = 0; i < handouts.length; i++) {
    handout = handouts[i];
    handout_event = {
      title: handout.title,
      start: handout.relevant_day,
      color: '#6600ff'
    };
    all_materials.push(handout_event);
  };

  
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
    },

    // opens the assignment/handout for the selected file
    eventClick: function(calEvent, jsEvent, view) {
      window.location.href='http://ptchanculto.binhoster.com/books/-Lit-%20Recommended%20Reading/Japanese%20Literature/Murakami,%20Haruki/Murakami,%20Haruki%20-%20The%20Elephant%20Vanishes.pdf';
      console.log('clicked event');
      console.log(calEvent);
    },

  });
});


