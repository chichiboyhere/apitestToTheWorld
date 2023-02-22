const questions = [
    {
        id: "Q1",
        text: `There are more ___ than ___ in your answers.`,
        options: [
          { id: 0, text: "yeses/noes.", isCorrect: true },
          { id: 1, text: "yes/no", isCorrect: false },
          { id: 2, text: "yes/noes", isCorrect: false },
          { id: 3, text: "years/no", isCorrect: false },
        ],
        answer: "yeses/noes.",
        explanation:`The word 'yes' ends in 's', and the word 'no' ends in 'o' preceded by a consonant sound.`
      },

      {
        id: "Q2",
        text: `Lawyer: We have summoned ___ and ___ with ____`,
        options: [
          { id: 0, text: "the Bushes/the Jerrys/summonses", isCorrect: true },
          { id: 1, text: "Bushes/Jerrys/summonses", isCorrect: false },
          { id: 2, text: "The Bushes/Jerrys/summons", isCorrect: false },
          { id: 3, text: "Bushes/the Jerrys/summons", isCorrect: false },
        ],
        answer: "the Bushes/the Jerrys/summonses",
        explanation:`The plural forms of persons' names and the plural form of '(a writ of) summons'. And the 's' is retained in 'summons' ('summonsed) as an element of law register.`
      },
      {
        id: "Q3",
        text: `All those ___ in those ____ were seized by the man.`,
        options: [
          { id: 0, text: "contraband/aircraft", isCorrect: true },
          { id: 1, text: "contrabands/aircrafts", isCorrect: false },
          { id: 2, text: "contraband/aircrafts", isCorrect: false },
          { id: 3, text: "contraband/aircraft", isCorrect: false },
        ],
        answer: "contraband/aircraft",
        explanation:`The former as a plural collective noun does not end in 's', while the latter has its singular form as  as Its plural form.`
      },
      {
        id: "Q4",
        text: ` The man who uses a lot of
        _____ likes listening to the ____ of the music of ____.`,
        options: [
          { id: 0, text: "slang and jargon/wording/yesteryear", isCorrect: true },
          { id: 1, text: "slangs and jargons/wordings/yeateryear", isCorrect: false },
          { id: 2, text: "slangs and jargon/wording/yesteryears", isCorrect: false },
          { id: 3, text: "slang and jargon/wordings/yesteryears", isCorrect: false },
        ],
        answer: "slang and jargon/wording/yesteryear",
        explanation:`All those are none-count nouns. Hence, they are not marked by a plural marker 's' or any other plural marker.`
      },

      {
        id: "Q5",
        text: `The reverred cleric had a large ____ as the Christian ___ .`,
        options: [
          { id: 0, text: "following/faithful", isCorrect: true },
          { id: 1, text: "followership/faithful", isCorrect: false },
          { id: 2, text: "following/faithfuls", isCorrect: false },
          { id: 3, text: "followership/faithfuls", isCorrect: false },
        ],
        answer: "following/faithful",
        explanation:`The first refers to followers or members of a group; whereas, 'faithful' is an adjective and should be preceded by 'the".`
      },
      {
        id: "Q6",
        text: `If blade is to grass and ____ is to wood, galaxy is to stars, ___is to policemen and ____ is to boys.`,
        options: [
          { id: 0, text: "log/platoon/colony", isCorrect: false },
          { id: 1, text: "splinter/horde/bevy", isCorrect: false },
          { id: 2, text: "stroke/posse/blush", isCorrect: false },
          { id: 3, text: "splinter/posse/blush", isCorrect: true },
        ],
        answer: "splinter/posse/blush",
        explanation:`So is the 'partitive' for the non- count noun, and the collective nouns for the last two. `
      },
      {
        id: "Q7",
        text: `_____have destroyed the crops of the man who has five _____ and three ____ poultry.`,
        options: [
          { id: 0, text: "Vermins/herds of cattle/dozen", isCorrect: false },
          { id: 1, text: "Vermin/head of cattles/dozen", isCorrect: false },
          { id: 2, text: "Vermin/heads of cattle/dozen", isCorrect: false },
          { id: 3, text: "Vermin/head of cattle/dozen", isCorrect: true },
        ],
        answer: "Vermin/head of cattle/dozen",
        explanation:`The first is integrally plural (collective plural) and requires no plural marker, while the last two hint at null pluralisatiion because of the number before them as a set number.`
      },
      {
        id: "Q8",
        text: `The books comprising many ___ for a successful marriage have ____ and ____.`,
        options: [
          { id: 0, text: "formulas/indexes/appendices", isCorrect: true },
          { id: 1, text: "formulae/indices/appendixes", isCorrect: false },
          { id: 2, text: "formulas/indices/appendices", isCorrect: false },
          { id: 3, text: "formulae/indexes/appendixes", isCorrect: false },
        ],
        answer: "formulas/indexes/appendices",
        explanation:`These are a question of foreign plural nouns contextually used.`
      },
      {
        id: "Q9",
        text: `Of the milk, we need two ____ for the two ____`,
        options: [
          { id: 0, text: "cupfuls/runners-up", isCorrect: true },
          { id: 1, text: "cupsful/runners-ups", isCorrect: false },
          { id: 2, text: "cupfuls/runners-up", isCorrect: false },
          { id: 3, text: "cups full/runners-ups", isCorrect: false },
        ],
        answer: "cupfuls/runners-up",
        explanation:`The plural marker 's' is used, unlike 'cups full', and the main noun of a compound noun of irrelevant preposition should be pluralused.`
      },
      {
        id: "Q10",
        text: `As a(n)____ ate his food and a(n) ____ hers in a ____, I heard leaves ____ and coins _____ as I smelt
        the ____ of wine.`,
        options: [
          { id: 0, text: "drake/pullet/nest /rustle/clatter/aroma", isCorrect: false },
          { id: 1, text: "mare/jackass/pen/crinkle/chime/aroma", isCorrect: false },
          { id: 2, text: "fox/mare/stable/rustle/clatter/bouquet", isCorrect: true },
          { id: 3, text: "gander/doe/kennel /rustle/clatter/bouquet", isCorrect: false },
        ],
        answer: "fox/mare/stable/rustle/clatter/bouquet",
        explanation:`All these are predicated on contexts - and basic information.`
      },
];
export default questions;