import { Route, HashRouter} from "react-router-dom";
import Api from "./Api";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import VerbalTestOne from "./components/AptitudeTests/VerbalTestOne";
import VerbalTestTwo from "./components/AptitudeTests/VerbalTestTwo";
import VerbalTestThree from "./components/AptitudeTests/VerbalTestThree";
import Layout from "./components/UI/Layout";
import StartTest from "./components/AptitudeTests/StartTest";
import NumberBasesAdditionSubtration from "./components/QuantitativeQuizzes/NumberBasesAdditionSubtration";
import NumberBasesMultiplicationDivision from "./components/QuantitativeQuizzes/NumberBasesMultiplicationDivision";
import NumberBasesConversion from "./components/QuantitativeQuizzes/NumberBasesConversion";
import NumberBasesFractions from "./components/QuantitativeQuizzes/NumberBasesFractions";
import NumberBasesSummation from "./components/QuantitativeQuizzes/NumberBasesSummation";
import Fractions from "./components/QuantitativeQuizzes/Fractions";
import DecimalsAndApprox from "./components/QuantitativeQuizzes/DecimalsAndApprox";
import IndicialEquations from "./components/QuantitativeQuizzes/IndicialEquations";

function App() {
  return (
    <HashRouter>
    <Layout>
        <Route path='/' component={HomePage} exact/>
        <Route path='/my-app' component={Api} />  
        <Route path='/verbalTestOne' component={VerbalTestOne} />
        <Route path='/verbalTestTwo' component={VerbalTestTwo} />
        <Route path='/verbalTestThree' component={VerbalTestThree} />
        <Route path='/quantitativeTestOne' component={NumberBasesAdditionSubtration} />
        <Route path='/quantitativeTestTwo' component={NumberBasesMultiplicationDivision} />
        <Route path='/quantitativeTestThree' component={NumberBasesConversion} />
        <Route path='/quantitativeTestFour' component={NumberBasesFractions} />
        <Route path='/quantitativeTestFive' component={NumberBasesSummation} />
        <Route path='/quantitativeTestSix' component={Fractions} />
        <Route path='/quantitativeTestSeven' component={DecimalsAndApprox} />
        <Route path='/quantitativeTestEight' component={IndicialEquations} />
        <Route path='/numerationTest' component={StartTest} />
        <Route path='/contact' component={ContactPage} />
    </Layout>
    </HashRouter>
  );
}

export default App;