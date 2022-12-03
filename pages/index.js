import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InputForm from "../components/InputForm/InputForm";
import GlobalStyles from "../GlobalStyles";
import Results from "../components/Results/Results";

export default function HomePage() {
  const [resultOrCalc, setResultOrCalc] = useState(false);

  const [calcResults, setCalcResults] = useState([]);
  console.log(calcResults);

  function handleData(data) {
    setCalcResults([...calcResults, data]);
  }

  return (
    <>
      <GlobalStyles />
      <Header></Header>
      {resultOrCalc ? (
        calcResults.map((result) => (
          <Results
            aPers={result.anzPers}
            aKm={result.anzKm}
            pLiter={result.preis}
            verbrauch={result.verbrauch}
            name={result.name}
            teilstrecke={result.teilstrecke}
            key={result.id}
          />
        ))
      ) : (
        <InputForm onData={handleData} onResult={setResultOrCalc} />
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer onResult={setResultOrCalc} />
    </>
  );
}
