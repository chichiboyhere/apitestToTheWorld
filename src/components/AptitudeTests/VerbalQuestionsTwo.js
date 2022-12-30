const questions = [
  
          {
            id: "Q1",
            text: `impeccable`,
            options: [
              { id: 0, text: "faulty", isCorrect: false },
              { id: 1, text: "unreliable", isCorrect: false },
              { id: 2, text: "flawless", isCorrect: true },
              { id: 3, text: "prudent", isCorrect: false },
            ],
            answer: "flawless",
          },
          {
            id: "Q2",
            text: `Which of the following is an antonym of the word 'excited'?`,
            options: [
              { id: 0, text: "elated", isCorrect: false },
              { id: 1, text: "ecstatic", isCorrect: false },
              { id: 2, text: "exhilarated", isCorrect: false },
              { id: 3, text: "apathetic", isCorrect: true },
            ],
            answer: "apathetic",
          },
          {
            id: "Q3",
            text: `Elena's brilliant performance is in sharp contrast ....her sister's.`,
            options: [
              { id: 0, text: "for", isCorrect: false },
              { id: 1, text: "from", isCorrect: false },
              { id: 2, text: "to", isCorrect: true },
              { id: 3, text: "on", isCorrect: false },
            ],
            answer: "to",
          },
          {
            id: "Q4",
            text: `No woman .... a poor man .... a rich man.`,
            options: [
              { id: 0, text: "prefer/to", isCorrect: false },
              { id: 1, text: "prefer/than", isCorrect: false },
              { id: 2, text: "prefers/than", isCorrect: false },
              { id: 3, text: "prefers/to", isCorrect: true },
            ],
            answer: "prefers/to",
          },
          {
            id: "Q5",
            text: `What is the plural form of 'man servant'?`,
            options: [
              { id: 0, text: "men servants", isCorrect: true },
              { id: 1, text: "men servant", isCorrect: false },
              { id: 2, text: "man servants", isCorrect: false },
              { id: 3, text: "man servant", isCorrect: false },
            ],
            answer: "men servants",
          },
          {
            id: "Q6",
            text: `This t-shirt is a bit .... around the neck.`,
            options: [
              { id: 0, text: "loose", isCorrect: true },
              { id: 1, text: "lose", isCorrect: false },
              { id: 2, text: "loss", isCorrect: false },
              { id: 3, text: "lost", isCorrect: false },
            ],
            answer: "loose",
          },
          {
            id: "Q7",
            text: `The rickety bus went slower and slower until it stopped .....`,
            options: [
              { id: 0, text: "al together", isCorrect: false },
              { id: 1, text: "alltogether", isCorrect: false },
              { id: 2, text: "altogether", isCorrect: true },
              { id: 3, text: "all together", isCorrect: false },
            ],
            answer: "altogether",
          },
          {
            id: "Q8",
            text: `The goal could not have come at a more .... moment.`,
            options: [
              { id: 0, text: "opportune", isCorrect: true },
              { id: 1, text: "oppotuned", isCorrect: false },
              { id: 2, text: "opportunity", isCorrect: false },
              { id: 3, text: "oppone", isCorrect: false },
            ],
            answer: "opportune",
          },
          {
            id: "Q9",
            text: `The .... of Covid-19 brought more economic crises than it did, ill-health.`,
            options: [
              { id: 0, text: "outset", isCorrect: false },
              { id: 1, text: "on set", isCorrect: false },
              { id: 2, text: "onset", isCorrect: true },
              { id: 3, text: "out set",  isCorrect: false },
            ],
            answer: "onset",
          },
          {
            id: "Q10",
            text: `Her ..... endears her to many a student.`,
            options: [
              { id: 0, text: "childishness", isCorrect: false },
              { id: 1, text: "childlikeness", isCorrect: true },
              { id: 2, text: "childlike", isCorrect: false },
              { id: 3, text: "childish", isCorrect: false },
            ],
            answer: "childlikeness",
          },
          {
            id: "Q11",
            text: `The ............... is indeed a very humorous person.`,
            options: [
              { id: 0, text: "master of ceremonies", isCorrect: true },
              { id: 1, text: "masters of ceremonies", isCorrect: false },
              { id: 2, text: "master of ceremony", isCorrect: false },
              { id: 3, text: "masters of ceremony", isCorrect: false },
            ],
            answer: "master of ceremonies",
          },
          {
            id: "Q12",
            text: `Barcelona was an ..... team during the Messi era.`,
            options: [
              { id: 0, text: "invincible", isCorrect: true },
              { id: 1, text: "invisible", isCorrect: false },
              { id: 2, text: "invicible", isCorrect: false },
              { id: 3, text: "invinsible", isCorrect: false },
            ],
            answer: "invincible",
          },
          {
            id: "Q13",
            text: `Despite his rude manners, she accepted his assistance, afterall ...`,
            options: [
              { id: 0, text: "beggars have no choice", isCorrect: false },
              { id: 1, text: "beggars are choiceless", isCorrect: false },
              { id: 2, text: "beggars can't be choosers", isCorrect: true },
              { id: 3, text: "beggars can't make choices", isCorrect: false },
            ],
            answer: "beggars can't be choosers",
          },
          {
            id: "Q14",
            text: `She finds it .... being summoned by a younger person.`,
            options: [
              { id: 0, text: "quite insultive", isCorrect: false },
              { id: 1, text: "quit insulting", isCorrect: false },
              { id: 2, text: "quit insultive", isCorrect: false },
              { id: 3, text: "quite insulting", isCorrect: true },
            ],
            answer: "quite insulting",
          },
          {
            id: "Q15",
            text: `She claims she was..... his proposal.`,
            options: [
              { id: 0, text: "coaxed into accepting", isCorrect: false },
              { id: 1, text: "coerced into accepting", isCorrect: true },
              { id: 2, text: "coersed into accepting", isCorrect: false },
              { id: 3, text: "coerced to accept", isCorrect: false },
            ],
            answer: "coerced into accepting",
          },
          {
            id: "Q16",
            text: `She's pretty good at driving.`,
            options: [
              { id: 0, text: "she's fairly good at driving", isCorrect: false },
              { id: 1, text: "she's very good at driving", isCorrect: true },
              { id: 2, text: "she's not good at driving at all", isCorrect: false },
              { id: 3, text: "she's an excellent driver", isCorrect: false },
            ],
            answer: "she's very good at driving",
          },
          {
            id: "Q17",
            text: `She was ..... Ogunlana bus stop.`,
            options: [
              { id: 0, text: "dropped off at", isCorrect: true },
              { id: 1, text: "dropped of at", isCorrect: false },
              { id: 2, text: "dropped at", isCorrect: false },
              { id: 3, text: "dropped off of", isCorrect: false },
            ],
            answer: "dropped off at",
          },
          {
            id: "Q18",
            text: `You are not your usual cheerful self today.`,
            options: [
              { id: 0, text: "You are as happy as you used to be", isCorrect: false },
              { id: 1, text: "You are as sad as you used to be", isCorrect: false },
              { id: 2, text: "You are not as sad as you used to be", isCorrect: false },
              { id: 3, text: "You are not as happy as you used to be", isCorrect: true },
            ],
            answer: "You are not as happy as you used to be",
          },
          {
            id: "Q19",
            text: `By next June, he ....... four novels.[UME]`,
            options: [
              { id: 0, text: "will write", isCorrect: false },
              { id: 1, text: "is writing", isCorrect: false },
              { id: 2, text: "will have written", isCorrect: true },
              { id: 3, text: "had written", isCorrect: false },
            ],
            answer: "will have written",
          },
          {
            id: "Q20",
            text: `By the end of the football match today, we ..... the best player.[UME]`,
            options: [
              { id: 0, text: "could have known", isCorrect: false },
              { id: 1, text: "might have known", isCorrect: false },
              { id: 2, text: "will have known", isCorrect: true },
              { id: 3, text: "would have known", isCorrect: false },
            ],
            answer: "will have known",
          },
    
  ];
  export default questions;