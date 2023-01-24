import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SolidButton from "./components/UI/atoms/buttons/ColoredButton";
import ROUTES from "./routes";
import TransparentButton from "./components/UI/atoms/buttons/WhiteButton";
import IconButton from "./components/UI/atoms/buttons/IconButton";
import IconTextButton from "./components/UI/atoms/buttons/IconTextButton";
import Input from "./components/UI/atoms/formElements/Input";
import Label from "./components/UI/atoms/formElements/Label";

function App() {
  return (
    <div className="App">
      <SolidButton title="Add to card" />
      <TransparentButton title="Discover" />
      <IconButton id="fire" />
      <IconTextButton title="Bundles" id="fire" />
      <Input type="text" id="test" name="test" placeholder="Your name" />
      <Label title="test label" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
        voluptates.
      </p>
      {/*<Routes>*/}
      {/*  <Route path={ROUTES.HOME} element={<p>It's home page</p>} />*/}
      {/*  <Route path={ROUTES.NOT_FOUND} element={<p>It's not 404 page</p>} />*/}
      {/*</Routes>*/}
    </div>
  );
}

export default App;
