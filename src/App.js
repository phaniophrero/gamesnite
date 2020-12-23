import React from "react";
// Components & Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
// Styles
import GlobalSyles from "./components/GlobalStyles";
// Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalSyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
