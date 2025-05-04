import React from "react";
import "./layout.scss";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./routes/HomePage";

const Layout = () => {
    return (
        <div className="layout">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="content">
                <HomePage />
            </div>
        </div>
    );
};

const App = () => {
    return <Layout />;
};

export default App;

