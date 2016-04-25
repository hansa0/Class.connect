
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
      question_description: "Please help.",
      date: default_day,
      hasReply: false,
      reply : null
    },
    {
      author: "Van",
      question: "How do I say hello in spanish?",
      question_description: "Lorem ipsum dolor sit amet, zril melius epicuri mel an, impedit commune cum cu, falli delenit liberavisse pri at. Ad menandri rationibus comprehensam quo, eam no nulla dolore mnesarchum. Ea tibique torquatos est, case consul cu sed. Vidit sonet efficiantur eu usu, ex mei brute aperiam, ea has propriae mediocritatem. Pri ea stet meis. Dolores antiopam ea ius, qui ei novum iudicabit, his eu propriae dissentias. Mei ei graeci singulis.",
      date: default_day,
      hasReply: false,
      reply: null

    },
    {
      author: "Katrine",
      question: "What is the best spanish book to read?",
      question_description: "Please help.",
      date: default_day,
      hasReply: false,
      reply: null
    },
    {
      author: "Hansa",
      question: "Confusion over verb conjugations for 'if' statements",
      question_description: "Si clauses indicate possibilities, which may or may not become reality. They refer to the present, past, and future. These conditional sentences have two parts: the condition, or si clause, and the main or result clause which indicates what will happen if the condition of the si clause is met.",
      date: default_day,
      hasReply: false,
      reply: null
    },
    {
      author: "Roberto",
      question: "Como te llamas",
      question_description: "Lorem ipsum dolor sit amet, zril melius epicuri mel an.",
      date: default_day,
      hasReply: false,
      reply: null
    }
];

var topics = [
  {
    name: 'Verbs',
    handouts: ['ER Verbs', 'IR Verbs'],
    id: 1
  },
  {
    name: 'Nouns',
    handouts: ['nouns 1', 'nouns 2'],
    id: 2
  }
];



