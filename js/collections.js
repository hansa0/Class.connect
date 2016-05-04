
/*
* Stores data structures as global variables
* 
* 
* 
*/

// always formatted 'yyyy-mm-dd'
// for example '2016-04-20'
var selected_day;

var default_day =  new Date('Tue May 3 2016 20:00:00 GMT-0400 (EDT)')//'2016-04-20';
// console.log("default_day: ")
// console.log(default_day)
// console.log(typeof(default_day))
var default_day_2 =  new Date('Thu May 05 2016 20:00:00 GMT-0400 (EDT)')//'2016-04-20';



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
    },
    {
      author: "Beyonce",
      question: "How do I write a song in spanish?",
      question_description: "Lorem ipsum como llorar selodolor alsino miso lola sit amet, zril melius epicuri mel an, impedit commune cum cu, falli delenit liberavisse pri at. Ad menandri rationibus comprehensam quo, eam no nulla dolore mnesarchum. Ea tibique torquatos est, case consul cu sed. Vidit sonet efficiantur eu usu, ex mei brute aperiam, ea has propriae mediocritatem. Pri ea stet meis. Dolores antiopam ea ius, qui ei novum iudicabit, his eu propriae dissentias. Mei ei graeci singulis.Lorem ipsum dolor sit amet, zril melius epicuri mel an, impedit commune cum cu, falli delenit liberavisse pri at. Ad menandri rationibus comprehensam quo, eam no nulla dolore mnesarchum. Ea tibique torquatos est, case consul cu sed. Vidit sonet efficiantur eu usu, ex mei brute aperiam, ea has propriae mediocritatem. Pri ea stet meis. Dolores antiopam ea ius, qui ei novum iudicabit, his eu propriae dissentias. Mei ei graeci singulis.",
      date: default_day_2,
      hasReply: false,
      reply: null
    },
    {
      author: "JayZ",
      question: "How do I conjugate the subjunctive",
      question_description: "What are the conjucations for the subjunctive? Do we only have to know the present tense of the subjunctive?",
      date: default_day_2,
      hasReply: false,
      reply: null
    },
    {
      author: "Rihanna",
      question: "No se como escribir mi composicion",
      question_description: "Lorem ipsum dolor sit amet, zril melius epicuri mel an, impedit commune cum cu, falli delenit liberavisse pri at. Ad menandri rationibus comprehensam quo, eam no nulla dolore mnesarchum. Ea tibique torquatos est, case consul cu sed. Vidit sonet efficiantur eu usu, ex mei brute aperiam, ea has propriae mediocritatem. Pri ea stet meis. Dolores antiopam ea ius, qui ei novum iudicabit, his eu propriae dissentias. Mei ei graeci singulis.",
      date: default_day_2,
      hasReply: false,
      reply: null
    }
];



var topics = [
  {
    name: 'Verbs',
    handouts: [
      {
        title: 'ER Verbs',
        topic: 'Verbs',
        file: 'N/A',
        text: 'Some description',
        relevant_day: default_day
      },
      {
        title: 'IR Verbs',
        topic: 'Verbs',
        file: 'N/A',
        text: 'Some description',
        relevant_day: default_day_2
      },
    ],
    id: 1
  },
  
  {
    name: 'Nouns',
    handouts: [
      {
        title: 'Nouns 1',
        topic: 'Nouns',
        file: 'N/A',
        text: 'Some description',
        relevant_day: default_day
      },
      {
        title: 'Nouns 2',
        topic: 'Nouns',
        file: 'N/A',
        text: 'Some description',
        relevant_day: default_day_2
      },
    ],
    id: 2
  },

  {
    name: 'Assignments',
    handouts: [
      {
        title: 'Assignment 1',
        topic: 'Assignments',
        file: 'N/A',
        text: 'Write ten sentences in present tense about your day.',
        relevant_day: default_day
      },
      {
        title: 'Assignment 2',
        topic: 'Assignments',
        file: 'N/A',
        text: 'Complete the homework sheet.',
        relevant_day: default_day_2
      }  
    ],
    id: 3
  }
];



