import Header from "../components/Header/Header";
import InputForm from "../components/InputForm/InputForm";
import GlobalStyles from "../GlobalStyles";

export default function HomePage() {
  function handleData(event) {
    console.log(event);
  }

  function handleResults() {}

  return (
    <>
      <GlobalStyles />
      <Header></Header>
      <InputForm onData={handleData} onResult={handleResults} />
    </>
  );
}
