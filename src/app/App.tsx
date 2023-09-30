import React from "react";
import Sidebar from "./components/ui/Sidebar";
import Works from "./components/ui/Works";

const App: React.FC = () => {
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
};

export default App;
