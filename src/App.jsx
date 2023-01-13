import React from "react";
import Sidebar from "./ui/Sidebar";
import Works from "./ui/Works";

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
