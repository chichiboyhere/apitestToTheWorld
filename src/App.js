import { Route, HashRouter} from "react-router-dom";
import Api from "./Api";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/UI/Layout";
import GrammarTest from "./components/VerbalTests/GrammarTest";
import NumberNumerationTest from "./components/AptitudeTests/NumberNumerationTest";
import NumberBasesAdditionSubtration from "./components/QuantitativeQuizzes/NumberBasesAdditionSubtration";
import NumberBasesMultiplicationDivision from "./components/QuantitativeQuizzes/NumberBasesMultiplicationDivision";
import NumberBasesConversion from "./components/QuantitativeQuizzes/NumberBasesConversion";
import NumberBasesFractions from "./components/QuantitativeQuizzes/NumberBasesFractions";
import NumberBasesSummation from "./components/QuantitativeQuizzes/NumberBasesSummation";
import Fractions from "./components/QuantitativeQuizzes/Fractions";
import DecimalsAndApprox from "./components/QuantitativeQuizzes/DecimalsAndApprox";
import Indices from "./components/QuantitativeQuizzes/Indices";
import IndicialEquations from "./components/QuantitativeQuizzes/IndicialEquations";
import Logarithm from "./components/QuantitativeQuizzes/Logarithm";
import PercentageError from "./components/QuantitativeQuizzes/PercentageError";
import ProfitAndLoss from "./components/QuantitativeQuizzes/ProfitAndLoss";
import PercentagesMisc from "./components/QuantitativeQuizzes/PercentagesMisc";
import Ratio from "./components/QuantitativeQuizzes/Ratio"
import Rate from "./components/QuantitativeQuizzes/Rate";
import Proportion from "./components/QuantitativeQuizzes/Proportion"; 
import Surd from "./components/QuantitativeQuizzes/Surd";
import Sets from "./components/QuantitativeQuizzes/Sets";
import VerbalQuizOne  from "./components/AptitudeTests/VerbalQuizOne";
import VerbalQuizTwo from "./components/AptitudeTests/VerbalQuizTwo";
import VerbalQuizThree from "./components/AptitudeTests/VerbalQuizThree";
import MathMenu from "./pages/MathMenu";
import EnglishMenu from "./pages/EnglishMenu";
import AboutUs from "./pages/AboutUs";
import NumberBasesAdditionNotes from "./components/MathLessonNotes/NumberBasesAdditionNotes";

// https://cra.link/deployment for production
// //learning how to deploy my react app: https://www.copycat.dev/blog/reactjs-build-production/ 
// https://app.netlify.com/sites/dainty-begonia-44a668

function App() {
  return (
    <HashRouter>
    <Layout>
        <Route path='/' component={HomePage} exact/>
        <Route path='/my-app' component={Api} />  
        <Route path='/verbalQuizOne' component={VerbalQuizOne} />
        <Route path='/verbalQuizTwo' component={VerbalQuizTwo} />
        <Route path='/verbalQuizThree' component={VerbalQuizThree} />
        <Route path='/quantitativeTestOne' component={NumberBasesAdditionSubtration} />
        <Route path='/quantitativeTestTwo' component={NumberBasesMultiplicationDivision} />
        <Route path='/quantitativeTestThree' component={NumberBasesConversion} />
        <Route path='/quantitativeTestFour' component={NumberBasesFractions} />
        <Route path='/quantitativeTestFive' component={NumberBasesSummation} />
        <Route path='/quantitativeTestSix' component={Fractions} />
        <Route path='/quantitativeTestSeven' component={DecimalsAndApprox} />
        <Route path='/quantitativeTestEight' component={PercentageError} />
        <Route path='/quantitativeTestNine' component={ProfitAndLoss} />
        <Route path='/quantitativeTestTen' component={PercentagesMisc} />
        <Route path='/quantitativeTestEleven' component={Ratio} />
        <Route path='/quantitativeTestTwelve' component={Rate} />
        <Route path='/quantitativeTestThirteen' component={Proportion} />
        <Route path='/quantitativeTestFourteen' component={Indices} />
        <Route path='/quantitativeTestFifteen' component={IndicialEquations} />
        <Route path='/quantitativeTestSixteen' component={Logarithm} />
        <Route path='/quantitativeTestSeventeen' component={Surd} />
        <Route path='/quantitativeTestEighteen' component={Sets} />
        <Route path='/numerationTest' component={NumberNumerationTest} />
        <Route path='/grammarTest' component={GrammarTest} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/mathmenu' component={MathMenu} />
        <Route path='/englishmenu' component={EnglishMenu} />
        <Route path='/numberBasesAdditionNotes' component={NumberBasesAdditionNotes} />
    </Layout>
    </HashRouter>
  );
}

export default App;