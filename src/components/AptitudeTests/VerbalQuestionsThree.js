const questions = [
       
    {
      id: "Q1",
      text: `You had better .... the rain before you catch a cold.`,
      options: [
        { id: 0, text: "leave", isCorrect: true },
        { id: 1, text: "left", isCorrect: false },
        { id: 2, text: "live", isCorrect: false },
        { id: 3, text: "lived", isCorrect: false },
      ],
      answer: "leave",
    },
    {
      id: "Q2",
      text: `Adenike is taller than ....`,
      options: [
        { id: 0, text: "me", isCorrect: false },
        { id: 1, text: "us", isCorrect: false },
        { id: 2, text: "them", isCorrect: false},
        { id: 3, text: "I", isCorrect: true },
      ],
      answer: "I",
    },
    {
      id: "Q3",
      text: `Every one of the stolen cars .... been recovered.`,
      options: [
        { id: 0, text: "had", isCorrect: false },
        { id: 1, text: "have", isCorrect: false },
        { id: 2, text: "has", isCorrect: true },
        { id: 3, text: "having", isCorrect: false },
      ],
      answer: "has",
    },
    {
      id: "Q4",
      text: `Four hours .... been spent on the laundry.`,
      options: [
        { id: 0, text: "have", isCorrect: false },
        { id: 1, text: "is", isCorrect: false },
        { id: 2, text: "had", isCorrect: false },
        { id: 3, text: "has", isCorrect: true },
      ],
      answer: "has",
    },
    {
      id: "Q5",
      text: `The woman, along with hundreds of others, ..... been without a job since The Lockdown.`,
      options: [
        { id: 0, text: "will", isCorrect: false },
        { id: 1, text: "was", isCorrect: false },
        { id: 2, text: "have", isCorrect: false },
        { id: 3, text: "has", isCorrect: true },
      ],
      answer: "has",
    },
    {
      id: "Q6",
      text: `...... ignored the beggar's plea for mercy.`,
      options: [
        { id: 0, text: "Passers-by", isCorrect: true },
        { id: 1, text: "Passer-by", isCorrect: false },
        { id: 2, text: "Passer-bys", isCorrect: false },
        { id: 3, text: "Passers-bys", isCorrect: false },
      ],
      answer: "Passers-by",
    },
    {
      id: "Q7",
      text: `One of the kidnappers who .... arrested a fortnight ago ....committed suicide.`,
      options: [
        { id: 0, text: "was / has ", isCorrect: false },
        { id: 1, text: "were/ have", isCorrect: false },
        { id: 2, text: "was / have", isCorrect: false },
        { id: 3, text: "were/ has", isCorrect: true },
      ],
      answer: "were/ has",
    },
    {
      id: "Q8",
      text: `This is the woman .... husband was shot.`,
      options: [
        { id: 0, text: "which", isCorrect: false },
        { id: 1, text: "whom", isCorrect: false },
        { id: 2, text: "whose", isCorrect: true },
        { id: 3, text: "who", isCorrect: false },
      ],
      answer: "whose",
    },
    {
      id: "Q9",
      text: `I have the right to appoint ...... I wish.`,
      options: [
        { id: 0, text: "whomsover", isCorrect: true },
        { id: 1, text: "whosoever", isCorrect: false },
        { id: 2, text: "who", isCorrect: false },
        { id: 3, text: "whose", isCorrect: false },
      ],
      answer: "whomsover",
    },
    {
      id: "Q10",
      text: `He charges an arm and a leg for his services.`,
      options: [
        { id: 0, text: "He is a money ritualist", isCorrect: false },
        { id: 1, text: "His services attract very little cost", isCorrect: false },
        { id: 2, text: "He offers very expensive services", isCorrect: true },
        { id: 3, text: "You will have to exchange your arm and leg for his services", isCorrect: false },
      ],
      answer: "He offers very expensive services",
    },
    {
      id: "Q11",
      text: `He  ...... a fragrance hash enough to make everyone's eyes teary.`,
      options: [
        { id: 0, text: "sprayed", isCorrect: false },
        { id: 1, text: "sprays", isCorrect: false },
        { id: 2, text: "wears", isCorrect: false },
        { id: 3, text: "wore", isCorrect: true },
      ],
      answer: "wore",
    },
    {
      id: "Q12",
      text: `Miss Sade claims she only dates ..... men.`,
      options: [
        { id: 0, text: "matured", isCorrect: false },
        { id: 1, text: "mature", isCorrect: true },
        { id: 2, text: "maturely", isCorrect: false },
        { id: 3, text: "maturing", isCorrect: false },
      ],
      answer: "mature",
    },
    {
      id: "Q13",
      text:`Chief Ade refused getting paid his royalty .......`,
      options: [
        { id: 0, text: "in instalment", isCorrect: false },
        { id: 1, text: "in instalments", isCorrect: true },
        { id: 2, text: "instalmentally", isCorrect: false },
        { id: 3, text: "in installments", isCorrect: false },
      ],
      answer: "in instalments",
    },
    {
      id: "Q14",
      text:`Lara's family members have contributed money for her to ..... her education.`,
      options: [
        { id: 0, text: "go further in", isCorrect: true },
        { id: 1, text: "go farther in", isCorrect: false },
        { id: 2, text: "further", isCorrect: false },
        { id: 3, text: "farther", isCorrect: false },
      ],
      answer: "go further in",
    },
    {
      id: "Q15",
      text:`We appeal to you, our Governor, to help fix our poor power supply through your ....`,
      options: [
        { id: 0, text: "good office", isCorrect: false },
        { id: 1, text: "better office", isCorrect: false },
        { id: 2, text: "good offices", isCorrect: true },
        { id: 3, text: "best office", isCorrect: false },
      ],
      answer: "good offices",
    },
    {
      id: "Q16",
      text:`He is nothing but a  ....`,
      options: [
        { id: 0, text: "snake in the grass", isCorrect: true },
        { id: 1, text: "green snake under the green grass", isCorrect: false },
        { id: 2, text: "green snake under grass", isCorrect: false },
        { id: 3, text: "snake upon the grace", isCorrect: false },
      ],
      answer: "snake in the grass",
    },
    {
      id: "Q17",
      text:`Mr President could not grace the ceremony because ......`,
      options: [
        { id: 0, text: "he had no time", isCorrect: true },
        { id: 1, text: "he was not chanced", isCorrect: false },
        { id: 2, text: "he had no chance", isCorrect: false },
        { id: 3, text: "he is not chanced", isCorrect: false },
      ],
      answer: "he had no time",
    },
    {
      id: "Q18",
      text:`His ..... helps him swindle many of their hard-earned money.`,
      options: [
        { id: 0, text: "sweet mouth", isCorrect: false },
        { id: 1, text: "sweet tongue", isCorrect: false },
        { id: 2, text: "sugar coated tongue", isCorrect: true },
        { id: 3, text: "sugary tongue", isCorrect: false },
      ],
      answer: "sugar coated tongue",
    },
    {
      id: "Q19",
      text:`Pick a correct option.`,
      options: [
        { id: 0, text: "Give your sister my regards.", isCorrect: true },
        { id: 1, text: "Say me well to your sister.", isCorrect: false },
        { id: 2, text: "Greet your sister for me.", isCorrect: false },
        { id: 3, text: "Help me and greet your sister.", isCorrect: false },
      ],
      answer: "Give your sister my regards.",
    },
    {
      id: "Q20",
      text:`No sooner had she left than the thieves burst in.`,
      options: [
        { id: 0, text: "The thieves burst in just before she left.", isCorrect: false },
        { id: 1, text: "The thieves burst in long after she left", isCorrect: false },
        { id: 2, text: "The thieves burst in immediately she left", isCorrect: true },
        { id: 3, text: "The thieves met her at the door as she exited.", isCorrect: false },
      ],
      answer: "The thieves burst in immediately she left",
    },
  ];
  export default questions;