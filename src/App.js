import React, {Component} from 'react';
import './App.css';
import {utilFunction} from "my-react-lib/src/util";
import {Button} from "my-react-lib/src/components/Button";

class App extends Component {
    render() {
        return (
            <div>
                <p>{utilFunction()}</p>
                <Button text='teste'/>
            </div>
        );
    }
}

export default App;
