import useFetchApi from "./services/useFetchApi";
import Card from "./components/card";

const App = () => {
  const simpsons_api = "https://thesimpsonsquoteapi.glitch.me/quotes";
  const simpsonsInfo = useFetchApi(simpsons_api);

  const displayCard = () => {
    return simpsonsInfo.map((infos, index) => (
      <Card
        key={index}
        character={infos.character}
        quote={infos.quote}
        image={infos.image}
      />
    ));
  };

  const loadingMessage = () => {
    return (
      <div>
        <p>Chargement en cours....</p>
      </div>
    );
  };

  return (
    <>
      <h1>Les simpsons</h1>
      {simpsonsInfo.length === 0 ? loadingMessage() : displayCard()}
    </>
  );
};

export default App;
