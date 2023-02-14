const questions = [
    {
        id: "Q1",
        text: `I saw ___ MD whom ___ European acknowledged.`,
        options: [
          { id: 0, text: "an/an", isCorrect: false },
          { id: 1, text: "a/a", isCorrect: true },
          { id: 2, text: "an/a", isCorrect: false },
          { id: 3, text: "a/an", isCorrect: false },
        ],
        answer: "a/a",
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
      },
      {
        id: "Q6",
        text: `____ can be seen.`,
        options: [
          { id: 0, text: "Mine and your car", isCorrect: false },
          { id: 1, text: "Alice's and my car", isCorrect: true },
          { id: 2, text: "Yours and my car", isCorrect: false },
          { id: 3, text: "Your car and my", isCorrect: false },
        ],
        answer: "Alice's and my car",
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
      },
      {
        id: "Q8",
        text: `No ___ than fifty persons who chose the __ of the two evils know that 6 is the ___ of both numbers.`,
        options: [
          { id: 0, text: "lesser/lesser/lesser", isCorrect: false },
          { id: 1, text: "less/less/less", isCorrect: false },
          { id: 2, text: "lesser/less/less", isCorrect: false },
          { id: 3, text: "less/lesser/less", isCorrect: true },
        ],
        answer: "#",
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
      },
      {
        id: "Q10",
        text: `Both of them emerged second. They are the ___ runners-up.`,
        options: [
          { id: 0, text: "first two", isCorrect: false },
          { id: 1, text: "two first", isCorrect: true },
          { id: 2, text: "first two first", isCorrect: false },
          { id: 3, text: "two first two", isCorrect: false },
        ],
        answer: "two first",
      },
];
export default questions;