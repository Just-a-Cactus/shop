import React from "react";
import { auth } from "./Login";

const ExitButton = () => (
  <button onClick={() => auth.signOut()}>Click to exit</button>
);
export default ExitButton;
