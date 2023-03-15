import axios from "axios";
import { useState } from "react";

interface CharData {
  id: string;
  name: string;
}

function Characters(): JSX.Element {
  const [characters, setCharacters] = useState<CharData[]>([]);
  const [serverError, setServerError] = useState(false);
  async function fetchAndStoreHPData() {
    try {
      const HPCharData = await axios.get(
        "https://hp-api.onrender.com/api/characters"
      );
      setCharacters(HPCharData.data);
      setServerError(false);
    } catch (error) {
      console.error("Unable to fetch data");
      setServerError(true);
    }
  }
  return (
    <>
      <button onClick={fetchAndStoreHPData}>Get HP Data</button>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <div>{character.id}</div>
            <div>{character.name}</div>
          </div>
        );
      })}
      {serverError && <div>Server Error, try again later</div>}
    </>
  );
}

export default Characters;
