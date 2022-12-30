const Quiz_Set = [
    {
        id:"que_1",
        que : `\\text{1. Solve for x in: } \\\\ x_7 - 13_7 = 10_{10}`,
        options : [{que_options: `\\text{A.} 13_7` , selected: false},{que_options:`\\text{B.} 10_7`, selected: false},{que_options:`\\text{C.} 26_7`, selected: false},{que_options:`\\text{D.} 23_7`, selected: false}],
        ans : `\\text{C.} 26_7`,
        working: `x_7 - 13_7 = 10_{10}\\\\  x_7 - 13_7 = 13_7 \\\\  x_7 = 13_7 + 13_7 \\\\  x_7 = 26_7`
    },
    {
        id:"que_2",
        que : `\\text{2. Evaluate } log_24 + log_216 - log_232`,
        options : [{que_options: "A. 0" , selected: false},{que_options:"B. 2", selected: false},{que_options:"C. 4", selected: false}, {que_options:"D. 1", selected: false}],
        ans : "D. 1",
        working: `log_2\\bigl(\\frac{4 \\times 16}{32}\\bigr)\\\\ =log_22\\\\ =1 \\text{ (recall } log_aa = 1 \\text{ )}`
    },
    {
        id:"que_3",
        que : `\\text{3. In a youth club with 100 } \\\\ \\text{members, 60 like modern music and } \\\\ \\text{ 50 like traditional music. The number } \\\\ \\text{of members who like both traditional } \\\\ \\text{and modern music is three times } \\\\ \\text{those who do not like any type of music.} \\\\ \\text{ How many members dislike music?}`,
        options : [{que_options: "A. 8" , selected: false},{que_options:"B. 24", selected: false},{que_options:"C. 62", selected: false}, {que_options: "D. 5" , selected: false}],
        ans : "D. 5",
        working: `\\text{Represent the number of members } \\\\ \\text{who do not like music as x, } \\\\ \\text{so those who like both music genres are 3x.}\\\\ \\text{Hence those who like Modern music alone }\\\\ \\text{becomes } 60 -3x\\\\ \\text{ while those who like traditional music alone }\\\\ \\text{becomes }50-3x \\\\ \\therefore 60 - 3x + 50 - 3x + 3x + x = 100\\\\ 110 - 2x = 100\\\\ 2x = 10\\\\x=5.\\\\ \\text{Note: A Venn diagram will come in handy } \\\\ \\text{in solving this problem.}`
    },
    {
        id:"que_4",
        que : `\\text{4. Simplify} \\frac{\\sqrt{12} - \\sqrt{3}}{\\sqrt{12} + \\sqrt{3}}`,
        options : [{que_options: `A. zero` , selected: false},{que_options:`\\text{B.} \\frac{1}{3}`, selected: false},{que_options:`\\text{C.} \\frac{3}{5}`, selected: false}, {que_options: `D. 1` , selected: false}],
        ans : `\\text{B.} \\frac{1}{3}`,
        working: `\\frac{\\sqrt{12} - \\sqrt{3}}{\\sqrt{12} + \\sqrt{3}} \\\\= \\frac{\\sqrt{4 \\times 3} - \\sqrt{3}}{\\sqrt{4 \\times 3} + \\sqrt{3}}\\\\= \\frac{2\\sqrt{3} - \\sqrt{3}}{2\\sqrt{3} + \\sqrt{3}}\\\\= \\frac{\\sqrt{3}}{3\\sqrt{3}}\\\\= \\frac{1}{3}`
    },
    {
        id:"que_5",
        que : `\\text{5. Evaluate } \\frac{\\frac{3}{8} \\div \\frac{1}{2} + \\frac{1}{2}}{\\frac{1}{8} \\times \\frac{2}{3} + \\frac{1}{3}}`,
        options : [{que_options: `\\text{A.} \\frac{1}{4}` , selected: false},{que_options:`\\text{B.} \\frac{1}{3}`, selected: false},{que_options:`\\text{C.} \\frac{1}{2}`, selected: false}, {que_options: `D. 3` , selected: false}],
        ans : `D. 3`,
        working: `\\frac{\\frac{3}{8} \\div \\frac{1}{2} + \\frac{1}{2}}{\\frac{1}{8} \\times \\frac{2}{3} + \\frac{1}{3}}\\\\=\\frac{\\frac{3}{8} \\times \\frac{2}{1} + \\frac{1}{2}}{\\frac{1}{8} \\times \\frac{2}{3} + \\frac{1}{3}}\\\\=\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{1}{12} + \\frac{1}{3}}\\\\=\\frac{5}{4} \\times \\frac{12}{5}\\\\=3`
    },
    {
        id:"que_6",
        que : `\\text{6. Evaluate} \\frac{81^{\\frac{3}{4}} - 27^{\\frac{1}{3}}}{ 3 \\times 2^3}`,
        options : [{que_options: `A. 3` , selected: false},{que_options:`B. 1`, selected: false},{que_options:`C. \\frac{1}{3}`, selected: false}, {que_options:`D. \\frac{1}{8}`, selected: false}],
        ans : `B. 1`,
        working: `\\frac{\\bigl(81^{\\frac{1}{4}}\\bigr)^3 - 27^{\\frac{1}{3}}}{ 3 \\times 2^3} \\\\= \\frac{3^3 - 3}{ 3 \\times 8} \\\\ = 1 `
    },
    {
        id:"que_7",
        que : `\\text{7. A meter rule is supposed to be 100 cm } \\\\ \\text{long. Determine a possible length of } \\\\ \\text{a faulty meter rule if its percentage} \\\\ \\text{ error is 2%}`,
        options : [{que_options: `\\text{A. 98 cm}` , selected: false},{que_options:`\\text{B. 104 cm}`, selected: false},{que_options:`\\text{C. 106 cm}`, selected: false}, {que_options:`\\text{D. NOA}`, selected: false}],
        ans : `\\text{A. 98 cm}`,
        working: `\\text{% error } = \\frac{\\text{error}}{\\text{true measurement}} \\times 100 \\\\ \\text{2% }= \\frac{\\text{error}}{100} \\times 100 \\\\ \\therefore \\text{error} = 2 cm \\\\ \\therefore \\text{false measurement} = 98cm \\text{ or } 102 cm.\\\\ \\text{Ans: 98cm (102cm would've also been right)}  `
    },              
    {
        id:"que_8",
        que : `\\text{8. Given that } 400_x - 1210_4 = 0, \\\\ \\text{ find the value of x.}`,
        options : [{que_options: `A. 5` , selected: false},{que_options:`B. 6`, selected: false},{que_options:`C. 7`, selected: false}, {que_options:`D. 8`, selected: false}],
        ans : `A. 5`,
        working: `400_x - 1210_4 = 0 \\\\ 400_x = 1210_4  \\\\ \\text{ Converting both numbers to base 10:}\\\\ 4x^2 = 1\\times 4^3 + 2\\times4^2 + 1\\times 4^1 \\\\ = 64 + 32 + 4 \\\\=100 \\\\ \\therefore x^2 = 25 \\\\ \\therefore x = \\sqrt{25}=5`
    }, 
    {
        id:"que_9",
        que : `\\text{9. Evaluate } \\frac{21}{9} \\text{to 3 significant figures.}`,
        options : [{que_options: `A. 2.30` , selected: false},{que_options:`B. 2.31`, selected: false},{que_options:`C. 2.32`, selected: false}, {que_options:`D. 2.33`, selected: false}],
        ans : `D. 2.33`,
        working: `\\text{Simplify divide 21 by 9 and round to 3sf}`
    },
    {
        id:"que_10",
        que : `\\text{10. N80,000 is invested at 5% simple } \\\\ \\text{interest. After how many years has } \\\\ \\text{it reached N92,000?}`,
        options : [{que_options: `\\text{ A. 2 years}` , selected: false},{que_options:`\\text{ B. 4 years}`, selected: false},{que_options:`\\text{ C. 3 years}`, selected: false}, {que_options:`\\text{ D. 1 year}`, selected: false}],
        ans : `\\text{ C. 3 years}`,
        working: `\\text{Using I} = \\frac{PRT}{100} \\\\ 92000 - 80000 = \\frac{80000 \\times 5 \\times T}{100} \\\\ \\therefore T=\\frac{12000 \\times 100}{5 \\times 80000} = 3 \\text{years}`
    },
    {
        id:"que_11",
        que : `\\text{11. Evaluate } \\bigl(\\frac{1}{0.03} \\div \\frac{1}{0.024}\\bigr)^{-1} \\\\ \\text{correct to 2 decimal places.}`,
        options : [{que_options: `A. 3.76` , selected: false},{que_options:`B. 1.25`, selected: false},{que_options:`C. 0.94`, selected: false}, {que_options:`D. 0.75`, selected: false}],
        ans : `B. 1.25`,
        working: `\\bigl(\\frac{1}{0.03} \\div \\frac{1}{0.024}\\bigr)^{-1} \\\\ =\\bigl(\\frac{1}{\\frac{3}{100}} \\div \\frac{1}{\\frac{24}{1000}}\\bigr)^{-1} \\\\ = \\bigl(\\frac{100}{3} \\div \\frac{1000}{24}\\bigr)^{-1} \\\\ = \\bigl(\\frac{100}{3} \\times \\frac{24}{1000}\\bigr)^{-1} \\\\ = \\bigl(\\frac{4}{5}\\bigr)^{-1} \\\\ = \\bigl(\\frac{5}{4}\\bigr) \\\\ = 1.25`
    },
    {
        id:"que_12",
        que : `\\text{12. If } 1011_2 + x_{10} = 11001_2,\\\\ \\text{solve for x.}`,
        options : [{que_options: `A. 20` , selected: false},{que_options:`B. 14`, selected: false},{que_options:`C. 15`, selected: false}, {que_options:`D. 24`, selected: false}],
        ans : `B. 14`,
        working: `1011_2 + x_{10} = 11001_2,\\\\  x_{10} = 11001_2 - 1011_2 \\\\ x_{10} = 1110_2 \\\\ x_{10} = 1 \\times 2^3 + 1 \\times 2^2 + 1 \\times 2^1 \\text{(converting }\\\\ \\text{to base 10)} \\\\ x_{10} = 8 + 4 + 2 \\\\ x_{10} = 14_{10} \\\\ \\therefore x = 14`
    },
    {
        id:"que_13",
        que : `\\text{13. A trader bought goats for N4, 000 } \\\\ \\text{each. He sold them for N180, 000 at } \\\\ \\text{a loss of 25%. How many }\\\\ \\text{goats did he buy? }`,
        options : [{que_options: `A. 60` , selected: false},{que_options:`B. 50`, selected: false},{que_options:`C. 45`, selected: false}, {que_options:`D. 36`, selected: false}],
        ans : `A. 60`,
        working: `\\text{Let's assume the trader bought n goats. So } \\\\ \\text{his Cost Price(CP) on all the goats is 4000n } \\\\ \\text{Also his % selling price(SP) is 75% }\\\\ \\text{(that's 100% - 25%, owing to the 25% loss)} \\\\ \\therefore \\text{C.P: 100%} \\rightarrow 4000n \\\\ \\text{S.P: 75%} \\rightarrow  180, 000 \\\\ \\text{So cross-multplying,  } \\\\ 4000n \\times 75 = 180000 \\times 100 \\\\ \\therefore n = \\frac{180 000 \\times 100}{4 000 \\times 75} \\\\ n = 60. \\\\ \\text{So he bought 60 goats.}`
    },
    {
        id:"que_14",
        que : `\\text{14. Bola and Tinu share oranges in the } \\\\ \\text{ratio 2:3 respectively. If Bola gives } \\\\ \\text{Tinu 5 of her oranges, }\\\\ \\text{the new ratio of Bola's oranges to }\\\\ \\text{Tinu's becomes 1:4. How many }\\\\ \\text{oranges does Bola have initially?}`,
        options : [{que_options: `A. 50` , selected: false},{que_options:`B. 15`, selected: false},{que_options:`C. 10`, selected: false}, {que_options:`D. 20`, selected: false}],
        ans : `C. 10`,
        working: `\\text{Let x be the common factor lost as }\\\\ \\text{a result of dividing their respective shares.} \\\\ \\text{So their initial ratio is }\\\\ \\frac{\\text{Bola's share}}{\\text{Tinu's share}} = \\frac{2x}{3x} \\\\ \\text{ And their final ratio is} \\\\ \\frac{\\text{Bola's share}}{\\text{Tinu's share}} = \\frac{2x - 5}{3x + 5} = \\frac{1}{4} \\\\ \\therefore 4\\bigl(2x -5\\bigr) = 3x + 5 \\\\ \\therefore 8x - 20 = 3x + 5 \\\\ \\therefore x = 5 \\\\ \\therefore \\text{Bola's initial share } = 2x= 2 \\times 5 =10`
    },
    {
        id:"que_15",
        que : `\\text{15. It takes Kunle, who works twice } \\\\ \\text{as fast as Sade, 6 days to} \\\\ \\text{accomplish a task. }\\\\ \\text{Working together, how long will it }\\\\ \\text{take both of them to do }\\\\ \\text{the work?}`,
        options : [{que_options: `\\text{ A. 18 days}` , selected: false},{que_options:`\\text{ B. 2 days}`, selected: false},{que_options:`\\text{ C. 4 days}`, selected: false}, {que_options:`\\text{ D. 1 day}`, selected: false}],
        ans : `\\text{ C. 4 days}`,
        working: `\\text{ Kunle's work rate } = \\frac{1}{6} \\text{ per day} \\\\ \\therefore \\text{ Sade's work rate } = \\frac{1}{12}\\text{ per day} \\\\ \\text{(Since Kunle's work rate is twice Sade's rate) }  \\\\ \\therefore \\text{Their collective work rate: } \\frac{1}{6} + \\frac{1}{12} \\\\ = \\frac{1}{4} \\text{ per day} \\\\ \\therefore \\text{ They'll spend 4 days working together. }`
    },
    {
        id:"que_16",
        que : `\\text{16. Out of 30 candidates applying for } \\\\ \\text{a post, 17 have degrees, 15 } \\\\ \\text{diplomas and 4 neither degree }\\\\ \\text{nor diploma. How many  }\\\\ \\text{of them have both? }`,
        options : [{que_options: `A. 2` , selected: false},{que_options:`B. 4`, selected: false},{que_options:`C. 6`, selected: false}, {que_options:`D. 8`, selected: false}],
        ans : `C. 6`,
        working: `\\text{If we assume that the number of applicants } \\\\ \\text{with both degree and diploma is x } \\\\ \\text{Then, } 17 - x + 15 - x + x + 4 = 30 \\\\ \\therefore x = 6`
    },
    {
        id:"que_17",
        que : `\\text{17. Every one of a group of 12 market  } \\\\ \\text{women sells at least one of the following } \\\\ \\text{food items: tomatoes. beans and yam. }\\\\ \\text{Five(5) women sell }\\\\ \\text{tomatoes, 6 sell beans, 6 sell yam and }\\\\ \\text{2 sell tomatoes and beans but none sell }\\\\ \\text{tomatoes and yam. How many women }\\\\ \\text{sell beans and yam? }`,
        options : [{que_options: `A. 3` , selected: false},{que_options:`B. 4`, selected: false},{que_options:`C. 5`, selected: false}, {que_options:`D. 6`, selected: false}],
        ans : `A. 3`,
        working: `\\text{We solve this with the aid of a Venn } \\\\ \\text{diagram with three horizontal rings such } \\\\ \\text{that the outer rings represent tomato and }\\\\ \\text{yam sellers while the middle ring } \\\\ \\text{represents beans sellers.Also, representing } \\\\ \\text{beans and yam sellers as x, we have}\\\\  3 + 2 + 4 -x + x + 6 - x = 12 \\\\ \\therefore 15 - x = 12 \\\\ \\therefore x = 3`
    },
    {
        id:"que_18",
        que : `\\text{18. Given that } log 2 = 0.3010 \\text{ and } \\\\log 7 = 0.8451, \\text{evaluate, } log_732.`,
        options : [{que_options: `A. 1.78` , selected: false},{que_options:`B. 1.51`, selected: false},{que_options:`C. 0.889`, selected: false}, {que_options:`D. 4.04`, selected: false}],
        ans : `A. 1.78`,
        working: `log_732 \\\\ = \\frac{log 32}{log 7} \\\\ = \\frac{log 2^5}{log 7} \\\\ = \\frac{5log 2}{log 7} \\\\ = \\frac{5 \\times 0.3010}{0.8451} \\\\ = 1.78`
    },
    {
        id:"que_19",
        que : `\\text{19. Simplify } \\frac{1}{2}\\sqrt{32}-\\sqrt{18} +\\sqrt{2}`,
        options : [{que_options: `A. 2\\sqrt{2}` , selected: false},{que_options:`B. 3\\sqrt{2}`, selected: false},{que_options:`C. 1`, selected: false}, {que_options:`D. 0`, selected: false}],
        ans : `D. 0`,
        working: `\\frac{1}{2}\\sqrt{32}-\\sqrt{18} +\\sqrt{2} \\\\= \\frac{1}{2}\\sqrt{16 \\times 2}-\\sqrt{9 \\times 2} +\\sqrt{2} \\\\= \\frac{1}{2} \\times 4 \\sqrt{2}-3\\sqrt{2} +\\sqrt{2} \\\\ =2 \\sqrt{2}-3\\sqrt{2} +\\sqrt{2} \\\\= 0`
    },
    {
        id:"que_20",
        que : `\\text{20. Express the product of 0.21 and } \\\\ \\text{0.34 in standard form, correct to the } \\\\ \\text{nearest whole number.}`,
        options : [{que_options: `A. 7\\times 10^{-3}` , selected: false},{que_options:`B. 7\\times 10^{-2}`, selected: false},{que_options:`C. 7\\times 10^{-1}`, selected: false}, {que_options:`D. 7\\times 10^{-4}`, selected: false}],
        ans : `B. 7\\times 10^{-2}`,
        working: ` 0.21  \\times 0.34 = 0.0714 = 7\\times 10^{-2} \\text{(correct } \\\\ \\text{to the nearest whole number)}`,   
    },
]

export default Quiz_Set
