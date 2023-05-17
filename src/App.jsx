import useFetchApi from "./services/useFetchApi";
import Card from "./components/card";

const App = () => {
  const simpsons_api = "https://thesimpsonsquoteapi.glitch.me/quotes";
  const simpsonsInfo = useFetchApi(simpsons_api);

  return (
    <div>
      {simpsonsInfo.map((infos, index) => (
        <Card
          key={index}
          character={infos.character}
          quote={infos.quote}
          image={infos.image}
        />
      ))}
    </div>
  );
};

export default App;
