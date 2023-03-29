import "./App.css";

import Label from "./object/Label";
import Header from "./components/header";
import Hashtag from "./components/Hashtag";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Label content="Show events" />
  </main>
);

export default App;
