import { useHPCharactersAPI } from "./useHPCharactersAPI";

function Characters2(): JSX.Element {
  const [fetchAndStoreHPData, characters, serverError] = useHPCharactersAPI();
  return (
    <>
      <button onClick={fetchAndStoreHPData}>Get HP Data</button>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <div>{character.id}</div>
            <h3>{character.name}</h3>
          </div>
        );
      })}
      {serverError && <div>Server Error, try again later</div>}
    </>
  );
}

export default Characters2;
