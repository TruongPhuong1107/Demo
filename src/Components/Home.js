import React, { Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Home extends Component{
    render(){
        return(
            <div>
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
        </div>
        );
    }
}