import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Alpha from './alpha'
import Bravo from './bravo'
import Charlie from './Charlie'
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello SAAS</h1>
      <Router>
      <Route exact path="/alpha" component={Alpha} />
      <Route exact path="/bravo" component={Bravo} />
      <Route exact path="/charlie" component={Charlie} />
      </Router>
    </div>
  );
}
