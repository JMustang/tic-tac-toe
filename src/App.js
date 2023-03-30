import "./App.css";

import Input from "./object/Input";
import Header from "./components/header";
import Hashtag from "./components/Hashtag";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Input id="show" value="show" content="Shows event" />
  </main>
);

export default App;
