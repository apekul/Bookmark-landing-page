import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./Components/Footer";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Homepage />
      <Footer />
    </main>
  );
}

export default App;
