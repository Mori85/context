import React from 'react';
import { Store } from "./context/Store";
import './App.css';
import Simple from "./component/sample";
function App() {

  return (
    <Store >
      <Simple />
    </Store>
  );
}

export default App;
