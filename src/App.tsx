import React from "react";
import "./App.css";
import SolidButton from "./components/UI/atoms/buttons/ColoredButton";

import TransparentButton from "./components/UI/atoms/buttons/WhiteButton";
import IconButton from "./components/UI/atoms/buttons/IconButton";
import IconTextButton from "./components/UI/atoms/buttons/IconTextButton";
import Input from "./components/UI/atoms/formElements/Input";
import Label from "./components/UI/atoms/formElements/Label";
import AppRouter from "./components/AppRouter";
import ExitButton from "./components/ExitButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./components/Login";
import Loader from "./components/Loader";

function App() {
  const [user, loading] = useAuthState(auth as any);

  if (loading) return <Loader />;

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
      <AppRouter />
      {user ? <ExitButton /> : null}
    </div>
  );
}

export default App;
