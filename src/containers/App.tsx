import * as React from 'react';
import './App.css';
import { Age, Test } from '../components/index';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Age />
        <Test/>
      </div>
    );
  }
}

export default App;
