import "./App.css";

import Label from "./object/Label";
import Header from "./components/header";
import Hashtag from "./components/Hashtag";
import Input from "./object/Input";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Input value="show" />
    <Label content="Show events" />
  </main>
);

export default App;
