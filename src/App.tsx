// import React from "react"
import { Features } from "./components/Features.tsx";
import { Header } from "./components/Header.tsx";
import { Pricing } from "./components/Pricing.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Pricing />
      <Features />
    </div>
  );
}

export default App;
