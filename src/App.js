import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// App.js

import Create from './Components/Create';
import Edit from './Components/Edit';
import Home from './Components/Home';
//import Index from './Components/indexcomponent';

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
           <Route exact path='/' component={ Home } />
           <Route exact path='/Home' component={ Home } />
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              {/* <Route path='/index' component={ Index } /> */}
          </Switch>
    </Router>
    </div>
  );
}

export default App;
