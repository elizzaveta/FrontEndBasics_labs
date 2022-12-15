import './App.css';
import GoodsList from "./components/task2/GoodsList";
import React from "react";
import {
    Route,
    BrowserRouter,
    Routes
} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Header from "./components/Header";
import Content from "./components/task1(lab4)/Content/Content";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigation/>}/>
                <Route path="/task1" element={<Content/>}/>
                <Route path="/task2" element={<GoodsList/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
