import "./App.css";

import Checkbox from "./object/Checkbox";
import Header from "./components/header";
import Hashtag from "./components/Hashtag";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" type="checkbox" content="Shows event" />
  </main>
);

export default App;
