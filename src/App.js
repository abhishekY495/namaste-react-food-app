import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/Navbar";
import RestaurantsContainer from "./components/RestaurantsContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <RestaurantsContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
