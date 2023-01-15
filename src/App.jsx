import React from "react";
import Sidebar from "./components/ui/Sidebar";
import Works from "./components/ui/Works";

function App() {
  return (
    <>
      <Sidebar />

      <main className="main">
        <div className="container">
          <Works />
        </div>
      </main>
    </>
  );
}

export default App;
