const questions = [
    {
        id: "Q1",
        text: `I saw ___ MD whom ___ European acknowledged.`,
        options: [
          { id: 0, text: "an/an", isCorrect: false },
          { id: 1, text: "an/a", isCorrect: true },
          { id: 2, text: "an/an", isCorrect: false },
          { id: 3, text: "a/an", isCorrect: false },
        ],
        answer: "an/a",
        explanation:`A preceding vowel sound in a word begun with a consonant letter is begin with 'an', and vice versa ('a').`

      },
      {
        id: "Q2",
        text: `When you are in ___ public, you see many stars in ___ space.`,
        options: [
          { id: 0, text: "-/-", isCorrect: true },
          { id: 1, text: "the/the", isCorrect: false },
          { id: 2, text: "-/the", isCorrect: false },
          { id: 3, text: "the/-", isCorrect: false },
        ],
        answer: "-/-",
        explanation:`The word 'public' in the context of the environment ('in the open') is not preceded by 'the', as is 'space' in the context of 'the universe. Hence choosing the blank options is appropriate, here.`
      },
      {
        id: "Q3",
        text: `Billaminu sent the expensive present to one Miss Sanda of the United Africa Organisation and not to
        ___ of the Central Bank of Nigeria`,
        options: [
          { id: 0, text: "the Miss Sanda", isCorrect: true },
          { id: 1, text: "Miss Sanda", isCorrect: false },
          { id: 2, text: "A Miss Sanda", isCorrect: false },
          { id: 3, text: "One Miss Sanda", isCorrect: false },
        ],
        answer: "the Miss Sanda",
        explanation:`In the context of a person known by both the speaker and the listener, unlike that known by either of them.`
      },
      {
        id: "Q4",
        text: `Let us give him ___ benefit of ___ doubt.`,
        options: [
          { id: 0, text: "the/-", isCorrect: false },
          { id: 1, text: "-/the", isCorrect: false },
          { id: 2, text: "the/the", isCorrect: true },
          { id: 3, text: "-/-", isCorrect: false },
        ],
        answer: "the/the",
        explanation:`A question of convention. Hence, it is fixated.`
      },
      {
        id: "Q5",
        text: `We left __ USA and crossed __ Atlantic Ocean to __ Europe.`,
        options: [
          { id: 0, text: "the/the/-", isCorrect: true },
          { id: 1, text: "-/-/-", isCorrect: false },
          { id: 2, text: "-/-/the", isCorrect: false },
          { id: 3, text: "the/-/a", isCorrect: false },
        ],
        answer: "the/the/-",
        explanation:`Some specific countries having a plural noun in them are preceded by 'the', with 'the Gambia' and the Hague' as exceptions.`
      },
      {
        id: "Q6",
        text: `____ car can be seen.`,
        options: [
          { id: 0, text: "Mine and your ", isCorrect: false },
          { id: 1, text: "Alice's and my ", isCorrect: true },
          { id: 2, text: "Yours and my ", isCorrect: false },
          { id: 3, text: "Your car and my", isCorrect: false },
        ],
        answer: "Alice's and my car",
        explanation:`In the context of the word order of personal pronouns and the nature of 'possessives' as pre-modifiers before nouns. `
      },
      {
        id: "Q7",
        text: `Do you want ___ milk in your tea`,
        options: [
          { id: 0, text: "some", isCorrect: true },
          { id: 1, text: "any", isCorrect: false },
          { id: 2, text: "much", isCorrect: false },
          { id: 3, text: "plenty", isCorrect: false },
        ],
        answer: "some",
        explanation:`The quantifier 'some' is used in the context of making an offer of something.`
      },
      {
        id: "Q8",
        text: `No ___ than fifty persons who chose the __ of the two evils know that 6 is the ___ of both numbers.`,
        options: [
          { id: 0, text: "lesser/lesser/lesser", isCorrect: false },
          { id: 1, text: "less/less/less", isCorrect: false },
          { id: 2, text: "less/lesser/less", isCorrect: false },
          { id: 3, text: "None of the above", isCorrect: true },
        ],
        answer: "None of the above",
        explanation:`In the context of Standard English, 'fewer ' is used with a plural noun, 'lesser' is used as a preceding adjective before a count noun or number.`
      },
      {
        id: "Q9",
        text: `I have ___ oranges. So, I gave him ___`,
        options: [
          { id: 0, text: "some/some", isCorrect: false },
          { id: 1, text: "plenty/some", isCorrect: false },
          { id: 2, text: "a few/some", isCorrect: true },
          { id: 3, text: "few/some", isCorrect: false },
        ],
        answer: "a few/some",
        explanation:`The underlying positive context is that of 'enough' oranges (plural), and 'some' given out.`
      },
      {
        id: "Q10",
        text: `Both of them emerged second. They were the ___ runners-up.`,
        options: [
          { id: 0, text: "first two", isCorrect: false },
          { id: 1, text: "two first", isCorrect: true },
          { id: 2, text: "first two first", isCorrect: false },
          { id: 3, text: "two first two", isCorrect: false },
        ],
        answer: "two first",
        explanation:`The phrase 'two first' is appropriate, as against 'first two runners-up' implying second and third position (place).`
      },
];
export default questions;