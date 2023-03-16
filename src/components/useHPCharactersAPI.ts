import axios from "axios";
import { useEffect, useState } from "react";

interface CharData {
  id: string;
  name: string;
}

export function useHPCharactersAPI(): [() => Promise<void>, CharData[], boolean] {
  const [characters, setCharacters] = useState<CharData[]>([]);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    fetchAndStoreHPData();
  }, []);

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
  return [fetchAndStoreHPData, characters, serverError];
}
