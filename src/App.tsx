import { useState } from "react";
import Characters from "./components/Characters";
import Characters2 from "./components/Characters2";

function App(): JSX.Element {
  const [showCharacters, setShowCharacters] = useState<boolean>(false);
  function toggleCharacters() {
    setShowCharacters((prev) => !prev);
  }
  return (
    <>
      <button onClick={toggleCharacters}>Show Characters</button>
      {showCharacters && (
        <>
          <Characters />
          <Characters2 />
        </>
      )}
    </>
  );
}

export default App;
