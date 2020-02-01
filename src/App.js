import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Brands from "./Pages/Brands";
import Favourites from "./Pages/Favourites";
import WhyNassar from "./Pages/WhyNassar";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import PageWrapper from "./components/PageWrapper";
import Foter from "./components/footer";

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <PageWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Brands" component={Brands} />
          <Route exact path="/Favourites" component={Favourites} />
          <Route exact path="/WhyNassar" component={WhyNassar} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/ContactUs" component={ContactUs} />
        </Switch>
      </PageWrapper>

      <Foter />
    </BrowserRouter>
  );
}

export default App;
