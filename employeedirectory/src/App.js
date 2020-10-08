import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

import Search from "./pages/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search}/>
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}



export default App;
