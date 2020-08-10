import React from 'react';
import Quiz from './quiz/index.js';
import { BrowserRouter as Router ,Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <p>PokeKana</p>
        <nav>
          <ul>
            <li><Link to="/">ほーむ</Link></li>
            <li><Link to="/quiz">くいず</Link></li>
          </ul>
        </nav>
      </header>
      <hr />
      <div id="main">
      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/">
          <p>TOP page!</p>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
