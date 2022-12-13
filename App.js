// import Indexpage from './Index page';
// import Homepage from './Home page';
import './App.css';
import './Home page.css';
import { BrowserRouter as Router, Route, Link, NavLink,Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Link exact activeClassName="active" to="/">Homepage</Link>
        <NavLink exact activeClassName="active" to="/">Indexpage</NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={Indexpage} />
      </Switch>
    </Router>
  );
}

export default App;
