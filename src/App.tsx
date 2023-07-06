import { useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <main className="w-full max-w-screen-xl flex flex-col px-6 max-lg:max-w-screen-md max-md:max-w-screen-sm max-md:p-0 max-sm:px-2">
      <Nav />
      <Home />
      <footer className="w-full py-6">
        <p className="text-second">Copyright © 2023 All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
