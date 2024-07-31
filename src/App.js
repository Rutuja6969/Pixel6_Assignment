import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Card from "./component/Card";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Card></Card>} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
