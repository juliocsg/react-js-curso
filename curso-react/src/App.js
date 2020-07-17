import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function shoot () {
  alert("Great Shot!");
}
const myelement = (
  <button onClick={shoot}>Take the shot!</button>
);

function App() {
  
  return (
    <button onclick={shoot}>Take the shot!</button>
  );
}

export default myelement;
