import Header from "./components/header";
import Card from "./object/Card";
import Player from "./object/Player";

function App() {
  return (
    <>
      <Header />
      <Card>
        <Player player="o" />
        <Player player="x" />
      </Card>
    </>
  );
}

export default App;
