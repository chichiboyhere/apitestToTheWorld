const questions = [
{
    id: "Q1",
    text: `The building ____ at N3million ____ me N7million..`,
    options: [
      { id: 0, text: "cost/cost", isCorrect: false },
      { id: 1, text: "costed/costed", isCorrect: false },
      { id: 2, text: "cost/costed", isCorrect: false },
      { id: 3, text: "costed/cost", isCorrect: true },
    ],
    answer: "costed/cost",
    explanation:`The past tense and past participle of 'cost' in the context of estimate are 'costed', while they are 'cost' in the context of price.`
  },
  {
    id: "Q2",
    text: `The head of the criminal had been ____ when his clothes were ____`,
    options: [
      { id: 0, text: "hung/hung", isCorrect: true },
      { id: 1, text: "hanged/hanged", isCorrect: false },
      { id: 2, text: "hung/hanged", isCorrect: false },
      { id: 3, text: "hanged/hung", isCorrect: false },
    ],
    answer: "hung/hung",
    explanation:`The past tense and past participle of 'hang' in any other context (bag, leg, clothes, head)  than that of killing by hanging ('The head of the criminals was hanged') are 'hung'.`
  },
  {
    id: "Q3",
    text: `The man had ___ down when
    the hen ____ some eggs before she ____ on the floor`,
    options: [
      { id: 0, text: "lain/layed/lay", isCorrect: false },
      { id: 1, text: "laid/laid/laid", isCorrect: false },
      { id: 2, text: "laid/lay/laid", isCorrect: false },
      { id: 3, text: "lain/laid/lay", isCorrect: true },
    ],
    answer: "lain/laid/lay",
    explanation:`The past tense and past participle of 'lie' (intr. vb) meaning 'rest' are 'lay' and 'lain', respectively. But they are 'laid' in the context of 'lay' (tr. vb) meaning 'spread' or 'put down'.`
  },
  {
    id: "Q4",
    text: `The class which ____ ten persons ____ studious learners.`,
    options: [
      { id: 0, text: "comprises of/is comprised of", isCorrect: false },
      { id: 1, text: "comprises/is composed of", isCorrect: true },
      { id: 2, text: "comprises of/is composed of", isCorrect: false },
      { id: 3, text: "comprises/is comprised of", isCorrect: false },
    ],
    answer: "comprises/is composed of",
    explanation:`The verb 'comprise (tr. vb) in the active voice is not followed by a preposition. Its passive voice equivalent includes 'composed' followed by the preposition 'of'.`
  },

  {
    id: "Q5",
    text: `You ___ rest assured that John will travel to London in order that he ____ see his parents`,
    options: [
      { id: 0, text: "may/may", isCorrect: true },
      { id: 1, text: "can/can", isCorrect: false },
      { id: 2, text: "may/will", isCorrect: false },
      { id: 3, text: "can/will", isCorrect: false },
    ],
    answer: "may/may",
    explanation:`The expressions are thus fixated, and are more of the force of 'grammatical' collocations than of grammatical rules. The elements are '...can/may rest assured' and '...in order that+ may/might'.`
  },
  {
    id: "Q6",
    text: `He does not come here every day. He ______ here`,
    options: [
      { id: 0, text: "is used to not coming.", isCorrect: false },
      { id: 1, text: "is not used to coming", isCorrect: true },
      { id: 2, text: "is not used to come", isCorrect: false },
      { id: 3, text: "is used to not come", isCorrect: false },
    ],
    answer: "is not used to coming",
    explanation:`The first answer choice implies coming which is not habitual, while the second answer choice connotes the avoidance of coming.`
  },
  {
    id: "Q7",
    text: `As you and I can see, the men who _____ this assignment _____ do that assignment.`,
    options: [
      { id: 0, text: "do do/ used not to", isCorrect: true },
      { id: 1, text: "do do/ didn't use to", isCorrect: false },
      { id: 2, text: "do/didn't use not to", isCorrect: false },
      { id: 3, text: "do/used not to", isCorrect: false },
    ],
    answer: "do do/ used not to",
    explanation:`The emphatic 'do' (do go, did see, does do) before a main verb is used on the premise of the evidence of an action. `
  },
  {
    id: "Q8",
    text: `You ____ him the money. He now lives an extravagant life.`,
    options: [
      { id: 0, text: "need not give", isCorrect: false },
      { id: 1, text: "needs not give", isCorrect: false },
      { id: 2, text: "need not have given", isCorrect: true },
      { id: 3, text: "needs not have given", isCorrect: false },
    ],
    answer: "need not have given",
    explanation:`Between the first and third answer choice, the first focuses on an action not yet taken and not necessary. The latter, on the other hand, underscores an action already taken, even though it is not necessary. Like 'dare', 'need' does not inflect for the third person singular when it is used in the negative form.`
  },
  {
    id: "Q9",
    text: `If I were the offender, I ____ apologise to Ralph`,
    options: [
      { id: 0, text: "can", isCorrect: false },
      { id: 1, text: "will", isCorrect: false },
      { id: 2, text: "should", isCorrect: false },
      { id: 3, text: "might", isCorrect: true },
    ],
    answer: "might",
    explanation:`The first part of the sentence, with the plural verb 'be' in the past signals the subjunctive mood, thus warranting the use of the modal 'would' in the main clause.`
  },
  {
    id: "Q10",
    text: `As the bell _____, the candidate _____ after finishing the examination.`,
    options: [
      { id: 0, text: "sounded loud/ looked angry", isCorrect: true },
      { id: 1, text: "sounded loudly/looked angrily", isCorrect: false },
      { id: 2, text: "sounded loud/looked angrily", isCorrect: false },
      { id: 3, text: "sounded loudly/looked angry", isCorrect: false },
    ],
    answer: "sounded loud/ looked angry",
    explanation:`A linking verb (feel, seem, sound, remain) is generally followed by an adjective. However, when it is used as an action verb, it is followed (modified) by an adverb.`
  },

];
export default questions;