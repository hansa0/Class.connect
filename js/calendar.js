

$(document).ready(function() {

  var old_event_color;

  // create events for assignments in calendar
  // assignments is initialized in js/collections.js
  all_materials = []

  
  // add events for handouts in calendar
  // handouts is initialized in js/collections.js
  for (var j = 0; j < topics.length; j ++) {
    var topic = topics[j];
    for (var i = 0; i < topic.handouts.length; i++) {
      var handout = topic.handouts[i];
      var material_event = {
        title: handout.title,
        start: handout.relevant_day,
      };

      if (topic.name == "Assignments") {
        material_event.color = '#3399ff';
      }
      else {
        material_event.color = '#6600ff';
      };
      all_materials.push(material_event);      
    };    
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

      if ( current_url.indexOf('index') == -1 ) {
        location.href = current_url + "/daily.html";
      } else {
        location.href = current_url.replace("index", "daily");
      };
    },

    // opens the assignment/handout for the selected file
    eventClick: function(calEvent, jsEvent, view) {
      window.location.href='http://ptchanculto.binhoster.com/books/-Lit-%20Recommended%20Reading/Japanese%20Literature/Murakami,%20Haruki/Murakami,%20Haruki%20-%20The%20Elephant%20Vanishes.pdf';
      console.log('clicked event');
      console.log(calEvent);
    },

  });
});


