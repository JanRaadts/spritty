import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InputForm from "../components/InputForm/InputForm";
import GlobalStyles from "../GlobalStyles";
import Results from "../components/Results/Results";
import Head from "next/head";

export default function HomePage() {
  const [resultOrCalc, setResultOrCalc] = useState(false);

  // const [calcResults, setCalcResults] = useState([]);
  const [calcResults, setCalcResults] = useLocalStorageState("results", {
    defaultValue: [],
  });

  function handleData(data) {
    setCalcResults([...calcResults, data]);
  }

  async function handleDelete(id) {
    console.log(id);
    setCalcResults(calcResults.filter((result) => result.id !== id));
  }

  return (
    <>
      <Head>
        <title>Spritty</title>
      </Head>
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
            id={result.id}
            onDelete={handleDelete}
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
