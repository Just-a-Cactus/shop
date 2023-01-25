import React from "react";
import { privateRoutes, publicRoutes } from "../routes";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  const user = true;
  return user ? (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
