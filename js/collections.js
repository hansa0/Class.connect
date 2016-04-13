
/*
* Stores data structures as global variables
* 
* 
* 
*/

// always formatted 'yyyy-mm-dd'
// for example '2016-04-20'
var selected_day 

var default_day = '2016-04-20';

var assignments = [
  {
    assignment_name: 'Assignment 1',
    topic: 'Verbs',
    file: 'N/A',
    text: 'Write ten sentences in present tense about your day.',
    duedate: '2016-04-17'
  },
  {
    assignment_name: 'Assignment 2',
    topic: 'Nouns',
    file: 'N/A',
    text: 'Complete the homework sheet.',
    duedate: '2016-04-20'
  }
];

var handouts = [
  {
    title: 'ER Verbs',
    topic: 'Verbs',
    file: 'N/A',
    text: 'Some description',
    relevant_day: '2016-04-20'
  },
  {
    title: 'IR Verbs',
    topic: 'Verbs',
    file: 'N/A',
    text: 'Some description',
    relevant_day: '2016-04-18'
  }
];


var questions = [
    {
      author: "Danielle",
      question: "How do I conjugate llevar?",
      date: default_day,
      hasReply: false,
      reply : null
    },
    {
      author: "Van",
      question: "How do I say hello in spanish?",
      date: default_day,
      hasReply: false,
      reply: null
    },
    {
      author: "Katrine",
      question: "What is the best spanish book to read?",
      date: default_day,
      hasReply: false,
      reply: null
    }
];

var topics = [
  {
    name: 'Verbs',
    handouts: ['ER Verbs', 'IR Verbs']
  },
  {
    name: 'Assignments',
    handouts: ['ER Verbs', 'IR Verbs']
  }
];



