const questions = [
    {
      id: "Q1",
      text: `We met the dog....... on the floor when we got there.`,
      options: [
        { id: 0, text: "laying", isCorrect: false },
        { id: 1, text: "lay", isCorrect: false },
        { id: 2, text: "lying", isCorrect: true },
        { id: 3, text: "lied", isCorrect: false },
      ],
      answer: "lying",
    },
    {
      id: "Q2",
      text: `She always .... until her children get home.`,
      options: [
        { id: 0, text: "waits on", isCorrect: false },
        { id: 1, text: "waits at", isCorrect: false },
        { id: 2, text: "waits in", isCorrect: false },
        { id: 3, text: "waits up", isCorrect: true },
      ],
      answer: "waits up",
    },
    {
      id: "Q3",
      text: `I bought a dozen eggs and every single one of them .... bad.`,
      options: [
        { id: 0, text: "is", isCorrect: false },
        { id: 1, text: "was", isCorrect: true },
        { id: 2, text: "were", isCorrect: false },
        { id: 3, text: "are", isCorrect: false },
      ],
      answer: "was",
    },
    {
      id: "Q4",
      text: `The panel of judges .... ready.`,
      options: [
        { id: 0, text: "they", isCorrect: false },
        { id: 1, text: "are", isCorrect: false },
        { id: 2, text: "is", isCorrect: true },
        { id: 3, text: "were", isCorrect: false },
      ],
      answer: "is",
    },
    {
      id: "Q5",
      text: `I'm waiting .... all day because I'm expecting a special vistor.`,
      options: [
        { id: 0, text: "up", isCorrect: false },
        { id: 1, text: "on", isCorrect: false },
        { id: 2, text: "at", isCorrect: false },
        { id: 3, text: "in", isCorrect: true },
      ],
      answer: "in",
    },
    {
      id: "Q6",
      text: `She connived ..... her friend to dupe the stranger.`,
      options: [
        { id: 0, text: `in`, isCorrect: false},
        { id: 1, text: `at`, isCorrect: false},
        { id: 2, text: `with`, isCorrect: true},
        { id: 3, text: `on`,isCorrect: false},
      ],
      answer: `with`,
    },
    {
      id: "Q7",
      text: `He confided ..... him.`,
      options: [
        { id: 0, text: "with", isCorrect: false },
        { id: 1, text: "on", isCorrect: false },
        { id: 2, text: "in", isCorrect: true },
        { id: 3, text: "at", isCorrect: false },
      ],
      answer: "in",
    },
    {
      id: "Q8",
      text: `The corrupt politician was relieved .... his position.`,
      options: [
        { id: 0, text: "from", isCorrect: false },
        { id: 1, text: "for", isCorrect: false },
        { id: 2, text: "to", isCorrect: false },
        { id: 3, text: "of", isCorrect: true },
      ],
      answer: "of",
    },
    {
      id: "Q9",
      text: `No one .... where he comes from`,
      options: [
        { id: 0, text: "knew", isCorrect: false },
        { id: 1, text: "knows", isCorrect: true },
        { id: 2, text: "know", isCorrect: false },
        { id: 3, text: "known", isCorrect: false },
      ],
      answer: "knows",
    },
    {
      id: "Q10",
      text: `This match is .... to lose.`,
      options: [
        { id: 0, text: "theirs", isCorrect: true },
        { id: 1, text: "their's", isCorrect: false },
        { id: 2, text: "there", isCorrect: false },
        { id: 3, text: "them", isCorrect: false },
      ],
      answer: "theirs",
    }, 
    {
      id: "Q11",
      text: `He got himself a ..... car.`,
      options: [
        { id: 0, text: "brand new red German sports", isCorrect: true },
        { id: 1, text: "brand new German red sport", isCorrect: false },
        { id: 2, text: "new brand blue sports German", isCorrect: false },
        { id: 3, text: "new brand German red sports", isCorrect: false },
      ],
      answer: "brand new red German sports",
    },
    {
      id: "Q12",
      text: `A ..... panel has been set up to look into the matter.`,
      options: [
        { id: 0, text: "five-men", isCorrect: false },
        { id: 1, text: "five-men's", isCorrect: false },
        { id: 2, text: "five-man", isCorrect: true },
        { id: 3, text: "five-man's", isCorrect: false },
      ],
      answer: "five-man",
    },
    {
      id: "Q13",
      text: `The lecture begins in two .... time.`,
      options: [
        { id: 0, text: "hour's", isCorrect: false },
        { id: 1, text: "hours'", isCorrect: true },
        { id: 2, text: "hour", isCorrect: false },
        { id: 3, text: "hours", isCorrect: false },
      ],
      answer: "hours'",
    },
    {
      id: "Q14",
      text: `This is .......... handiwork.`,
      options: [
        { id: 0, text: "Mike and Jim", isCorrect: false },
        { id: 1, text: "Mike's and Jim's", isCorrect: false },
        { id: 2, text: "Mike and Jim's", isCorrect: true },
        { id: 3, text: "Mike's and Jim", isCorrect: false },
      ],
      answer: "Mike and Jim's",
    },
    {
      id: "Q15",
      text: `The cow is breast-feeding .... calf.`,
      options: [
        { id: 0, text: "it's", isCorrect: false },
        { id: 1, text: "it", isCorrect: false },
        { id: 2, text: "it is", isCorrect: false },
        { id: 3, text: "its", isCorrect: true },
      ],
      answer: "its",
    },
    {
      id: "Q16",
      text: `Ada doesn't mind .... the needy.`,
      options: [
        { id: 0, text: "to help", isCorrect: false },
        { id: 1, text: "helping", isCorrect: true },
        { id: 2, text: "help", isCorrect: false },
        { id: 3, text: "helped", isCorrect: false },
      ],
      answer: "helping",
    },
    {
      id: "Q17",
      text: `He found out, much to his dismay, that he had nobody worth .... friends.`,
      options: [
        { id: 0, text: "calling", isCorrect: true },
        { id: 1, text: "call", isCorrect: false },
        { id: 2, text: "to call", isCorrect: false },
        { id: 3, text: "called", isCorrect: false },
      ],
      answer: "calling",
    },
    {
      id: "Q18",
      text: `He fed his face on ...... wealth.`,
      options: [
        { id: 0, text: "ill-got", isCorrect: false },
        { id: 1, text: "ill-get", isCorrect: false },
        { id: 2, text: "ill gotten", isCorrect: false },
        { id: 3, text: "ill-gotten", isCorrect: true },
      ],
      answer: "ill-gotten",
    },
    {
      id: "Q19",
      text: `...... apart, our team was beaten six goals to nothing by the opponents.`,
      options: [
        { id: 0, text: "Jokes", isCorrect: false },
        { id: 1, text: "Joke", isCorrect: false },
        { id: 2, text: "Joking", isCorrect: true },
        { id: 3, text: "Joked", isCorrect: false },
      ],
      answer: "Joking",
    },
    {
      id: "Q20",
      text: `Every cloud has a silver lining.`,
      options: [
        { id: 0, text: "The cloud is a source of silver", isCorrect: false },
        { id: 1, text: "No matter how cloudy it gets, there's always a silver lining somewhere", isCorrect: false },
        { id: 2, text: "Every dark thing has some shiny parts to it", isCorrect: false },
        { id: 3, text: "Every difficult situation has a positive side", isCorrect: true },
      ],
      answer: "Every difficult situation has a positive side",
    },
    
  ];
  export default questions;