import React from "react";
import "./App.css";
import {LyingCatComponent} from "./components/cat/LyingCatComponent";
import {Sparkles} from "./components";

function App() {

    return (
        <div className="App">
            <Sparkles>
                <div
                    style={{
                        width: "700px",
                        height: "300px",
                        background: "black",
                        color: "white",
                        flexDirection: "column",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <p> This is just a test :) </p>
                </div>
            </Sparkles>
            <LyingCatComponent/>
        </div>
    );
}

export default App;
