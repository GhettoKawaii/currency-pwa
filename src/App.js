import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Preloader from "./components//Preloader";
// import HomePage from "./pages/HomePage";
const HomePage = React.lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <Route path="/" exact component={HomePage} />
      </Router>
    </Suspense>
  );
}

export default App;
