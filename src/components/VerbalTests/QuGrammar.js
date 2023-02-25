const Quiz_Set = [
    {
        id:"que_1",
        que : `I remember ___ day ___ doctor asked me to take ___ capsule.`,
        options : [{que_options: `A. one/a/one` , selected: false},{que_options:`B. the/a/one`, selected: false},{que_options:`C. one/one/one`, selected: false},{que_options:`D. a/one/a`, selected: false}],
        ans : `A. the/a/one`,
        explanation: `In the context of a particular day and a doctor unknown to the listener; though he is known to the
        speaker, and the specificness typical of the dosage (of medicine).`
    },
    {
        id:"que_2",
        que : `The man who puts me to ___ test is now in ___ soup.`,
        options : [{que_options: "A. the/the" , selected: false},{que_options:"B. -/-", selected: false},{que_options:"C. the/-", selected: false}, {que_options:"D. -/the", selected: false}],
        ans : "A. the/the",
        explanation: `Fixated: a question of convention rather than of grammatical rules.`
    },
    {
        id:"que_3",
        que : `A rare class of prodigies and other personalities ____ here for ___ conference.`,
        options : [{que_options: "A. is/its" , selected: false},{que_options:"B. are/their", selected: false},{que_options:"C. are/its", selected: false}, {que_options: "D. is/their" , selected: false}],
        ans : "A. is/its",
        explanation: `Notional oncord applies [here]. The word 'class', in relation to the situation in the sentence, refers to a body rather than individual members.`
    },
    {
        id:"que_4",
        que : `One of the students who ____ 'Mr Bromer ____ one of the students who ____ independently.'`,
        options : [{que_options: `A. study says/is/studies` , selected: false},{que_options:`B. studies says/is/study `, selected: false},{que_options:`C. study says/is/study`, selected: false}, {que_options: `D. studies say/is/studies` , selected: false}],
        ans : `B or C`,
        explanation: `The word order of the sentence warrants either a singular or plural verb (unlike 'Of the students who
            study, one says), depending on who the speaker intends to qualify, while the second and third part
            mandate the use of a singular verb in relation to 'Mr Bromer'.`
    },
    {
        id:"que_5",
        que : `Mr Bromer who ____ one of the students who ____ independently ____ here.`,
        options : [{que_options: `A. is/studies/come` , selected: false},{que_options:`B. is/studies/come`, selected: false},{que_options:`C. is/study/comes`, selected: false}, {que_options: `D. is/studies/comes` , selected: false}],
        ans : `C. is/study/comes`,
        explanation: `'Mr Bromer' as a singular antecedent of 'who' should be followed by a singular verb, while 'students' as
        a plural antecedent should be followed by a plural verb. And finally 'comes' is used in agreement with
        'Mr Bromer'.`
    },
    {
        id:"que_6",
        que : `Mr Bromer, who ___ one of the students who ____ independently and who ____ here, ____you.`,
        options : [{que_options: `A. is/study/comes/knows` , selected: false},{que_options:`B. is/studies/come/know`, selected: false},{que_options:`C. is/studies/come/know`, selected: false}, {que_options:`D. is/study/come/knows`, selected: false}],
        ans : `D. is/study/come/knows`,
        explanation: `The commas, with regard to where they begin and end in the sentence, is a guiding light enough for the
        veracity of option D.`
    },
    {
        id:"que_7",
        que : `None of the boys ____, 'As each of the girls was advised, none of them ____ what is
        unexpected of ____'`,
        options : [{que_options: `A. say/does/her` , selected: false},{que_options:`B. says/do/them`, selected: false},{que_options:`C. says/does/her`, selected: false}, {que_options:`D. say/do/them`, selected: false}],
        ans : `A. say/does/her`,
        explanation: `'None (of)' of as a distributive pronoun, when used with a plural noun, can take either a singular or
        plural verb, as context signals a word ('each') or group of words emphatic of singularity or plurality. `
    },              
    {
        id:"que_8",
        que : `Here ____ a number of cars which ___ not so good as the number of cars which ___ there
        ___.`,
        options : [{que_options: `A. arrives/are/arrives/are` , selected: false},{que_options:`B. arrive/are/arrive/is`, selected: false},{que_options:`C. arrives/is/arrives/is`, selected: false}, {que_options:`D. arrive/is/arrive/are`, selected: false}],
        ans : `B. arrive/are/arrive/is`,
        explanation: `Although the sentence is in an inverted order, the order does not obscure the subject of the sentence,
        which requires a plural verb. The antecedent ('cars') of 'which' in both cases requires a plural verb.`
    }, 
    {
        id:"que_9",
        que : `Three-quarters of the students ____ here, as sixty per cent of the floor _____ to be washed before
        ice-cream and beef-roll ____ served.`,
        options : [{que_options: `A. is/has/is` , selected: false},{que_options:`B. are/have/are`, selected: false},{que_options:`C. is/have/are`, selected: false}, {que_options:`D. are/has/is`, selected: false}],
        ans : `D. are/has/is`,
        explanation: `A rule of concord has it that a fraction or percentage used with plural nouns require a plural verb, while
        a singular verb is used in the case of non-count nouns. The last hints at a singular verb for a.subject in
        the form of two complementary items.`
    },
    {
        id:"que_10",
        que : `The government ____ not deliberated on ____ views, as the committee _____ tomorrow to set ____
        agenda and the jury ____ divided over the verdict ___ would give.`,
        options : [{que_options: `A. have/their/meet/its/is/it` , selected: false},{que_options:`B. has/their/meets/their/is/they`, selected: false},{que_options:`C. have/its/meet/its/is/it`, selected: false}, {que_options:`D. has/its/meets/its/are/they`, selected: false}],
        ans : `A. have/their/meet/its/is/it`,
        explanation: `The principle of notional concord also applies to the question.`
    },
    {
        id:"que_11",
        que : `Of the duo, John is _____, as Jerry is ____ of the trio. However, the latter is not ____ clever___ as
        the former.`,
        options : [{que_options: `A. the abler/the brightest/so/as` , selected: false},{que_options:`B. the abler/the brightest/as/as`, selected: false},{que_options:`C. the ablest/the brighter/so/as`, selected: false}, {que_options:`D. the abler/the brightest/as/as`, selected: false}],
        ans : `A. the abler/the brightest/so/as`,
        explanation: `The comparative degree is used in relation to 'two', and the superlative in relation to 'three or more'.
        Adjectives of two syllables, ending in &#39;le&#39;, form their comparative and suoerlative degree by adding 'r/er'
        and 'st/est', respectively. Then, gradable adjectives in a negative context ('not') require 'so...as'.`
    },
    {
        id:"que_12",
        que : `Joan is ____ perfect than Jenny, but Amanda is not ___ perfect ___ Sandra.`,
        options : [{que_options: `A. more/so/as` , selected: false},{que_options:`B. more nearly/as/as`, selected: false},{que_options:`C. more/as/as`, selected: false}, {que_options:`D. more nearly/so/as`, selected: false}],
        ans : `B. more nearly/as/as`,
        explanation: `Non-gradable adjectives are not preceded by such gradable markers as 'more' or 'most', nor by
        intensifiers such as 'very', 'so', etc., as is the case when they are used in a negative context ('as...as').
        Nevertheless, gradable markers can used before them when they are of a 'state less than', or when
        practical realities demand affecting a difference between two things or persons of topmost situation
        ('Mr John is the more superior both Ph.D holders').`
    },
    {
        id:"que_13",
        que : `When the plane flew ___, John ____ sent home.`,
        options : [{que_options: `A. fast to London at 4 p.m. yesterday/had probably not been` , selected: false},{que_options:`B. to London fast yesterday at 4p.m/had not probably been`, selected: false},{que_options:`C. fast at 4 p.m yesterday to London/had probably been not`, selected: false}, {que_options:`D. to London fast at 4 p.m.yestetday/had probably not been`, selected: false}],
        ans : `D. to London fast at 4 p.m.yestetday/had probably not been`,
        explanation: `The order of adverbs in a sentence involving a verb of movement is PMT (Place, Manner, Time), and a
        verb phrase has an adverb positioned between the auxiliary verb, or the first auxiliary verb, and the
        main verb immediately preded by 'not' ( or preceded by other auxiliary verbs).`
    },
    {
        id:"que_14",
        que : `The boy guessed _____, but he performed the task ____.`,
        options : [{que_options: `A. wrong/single-handed` , selected: false},{que_options:`B. wrongly/single-handedly`, selected: false},{que_options:`C. wrong/single-handedly`, selected: false}, {que_options:`D. wrongly/single`, selected: false}],
        ans : `A. wrong/single-handed`,
        explanation: `Some adverbs in adjunct position do not end in '-ly' unless they pre-modify verbs ('The job was single-handedly done').`
    },
    {
        id:"que_15",
        que : `____ I said, let me speak to you ___ a father. ____, you have to make the final decision.`,
        options : [{que_options: `A. As/as/However` , selected: false},{que_options:`B. Like/as/However}`, selected: false},{que_options:`C. As/as/Nevertheless`, selected: false}, {que_options:`D. Like/as/Nevertheless`, selected: false}],
        ans : `A. As/as/However`,
        explanation: `'As', not 'like', is followed by a clause. However, it is followed by a phrase when it is used in the context
        of 'in the capacity of'. Although 'however' and 'nevertheless' are used to indicate contrast, the former is
        used when the preceding clause or sentence is in positive - and 'nevertheless' when that which precedes
        is negative.`
    },
    {
        id:"que_16",
        que : `Although John was not allowed to speak, ____ he asked me ____ he could come back.`,
        options : [{que_options: `A. yet/whether` , selected: false},{que_options:`B. but/whether`, selected: false},{que_options:`C. yet/if`, selected: false}, {que_options:`D. but/if`, selected: false}],
        ans : `A. yet/whether`,
        explanation: `As a corelative conjunction, &#39;although&#39; pairs up with &#39;yet&#39; or nothing else. On the other hand, 'whether' and not 'if' reflects formal English even if it does not pair up with 'or'.`
    },
    {
        id:"que_17",
        que : `The man who saw me ____ Christmas said, 'What you say goes in ___ one ear and comes out ___
        the other ear.'`,
        options : [{que_options: `A. at/at/at` , selected: false},{que_options:`B. on/through/through`, selected: false},{que_options:`C. at/through/at`, selected: false}, {que_options:`D. on/through/through`, selected: false}],
        ans : `A. at/at/at`,
        explanation: `It is fixated, in British English, that 'at' is used with festivities, but 'on' when 'day' is used after festivities. However, this delineation is not characteristic of American English, which votes for only 'on'. The second
        and third are 'somewhat fixated' against the backdrop that 'at' indicates a particular point (place).`
    },
    {
        id:"que_18",
        que : `What she said ____ my hearing was that she confided ___ you that she would travel abroad next
        year. `,
        options : [{que_options: `A. in/to` , selected: false},{que_options:` B. to/to`, selected: false},{que_options:`C. in/in`, selected: false}, {que_options:`D. to/in`, selected: false}],
        ans : `A. in/to`,
        explanation: `It is believed that 'in' is appropriate in view of the ear drum as an internal organ. Then, 'confide in' a
        person is as much a question of idiomaticness of preposition as 'confide (something to a person), which
        the second part is all about in a tricky way ('She confided that she would travel to me').`
    },
    {
        id:"que_19",
        que : `The man ___ the job ___.`,
        options : [{que_options: `A. had begun/when Job arrived` , selected: false},{que_options:`B. began/when Job arrived`, selected: false},{que_options:`C. had begun/before Job arrived`, selected: false}, {que_options:`D. began/ after Job arrived`, selected: false}],
        ans : `A. had begun/when Job arrived`,
        explanation: `Tense and Aspect enacts the elements of the past perfect tense thus, while the past tense is used when
        'before' is used in the sentence ('The man began the job before Job arrived').`
    },
    {
        id:"que_20",
        que : `____ his diligence, the errors _____ his carelessness were corrected by the manager who infringed
        ____ his rights.`,
        options : [{que_options: `A.Owing to/owing to/in -` , selected: false},{que_options:`B. Due to/due to/on`, selected: false},{que_options:`C. Owing to/due to/-`, selected: false}, {que_options:`D. Due to/owing to/-}`, selected: false}],
        ans : `C. Owing to/due to/-`,
        explanation: `'Owing to' (= because of/on account of/as a result of) is used with an action verb, while 'due to' (= caused by) is used after a noun or the verb 'be'(is, was).`,   
    },
]
export default Quiz_Set
