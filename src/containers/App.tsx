import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Test from '../components/Test';

class App extends React.Component {

  public render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/about" component={Test} />
            <Route path="/about/:name" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
