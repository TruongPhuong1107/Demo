import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// App.js

import Create from './Components/Create';
import Edit from './Components/Edit';
import Index from './Components/indexcomponent';

function App() {
  return (
    <div className="App">
      <Router>
        <table>
          <thead>
            <tr>
            <th>
              Tên mặt hàng
            </th>
            <th>Loại hàng</th>
            <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><Link to={'/Edit'} className="nav-link"><button className="btn btn-primary">Edit</button></Link></td>
              <td><Link to={'/Delete'} className="nav-link"><button className="btn btn-danger">Delete</button></Link></td>
            </tr>
            

          </tbody>
        </table>
        <td><Link to={'/create'} className="nav-link"><button className="btn btn-danger">Thêm</button></Link></td>
          
      {/* <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
         
    
    </div> */}
     <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
          </Switch>
    </Router>
    </div>
  );
}

export default App;
