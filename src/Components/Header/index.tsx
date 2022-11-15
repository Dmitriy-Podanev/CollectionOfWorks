import React from "react";
import logo from "../../Image/logo.svg"


interface props {

}

export const Header : React.FC = ()=>{

    return (<>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    </>)
}