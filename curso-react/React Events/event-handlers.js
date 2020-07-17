import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class FootBall extends React.Component{
    shoot () {
        alert("Great Shot!");
    }
    render(){
        return(
            <button onClick={this.shoot}>Take the shot!</button>
        )
    }
}

ReactDOM.render(
  <FootBall/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
