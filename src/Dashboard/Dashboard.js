import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Login from '../Pages/Banner/Login/Login';
import Orders from './Pay/Orders/Orders';
import Pay from './Pay/Pay';
import Review from './Pay/Review/Review';
import './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div >
            <div className="dashboard-added">
            <Link className="design" to={`${url}`}>Pay</Link>
            <Link className="design" to={`${url}/orders`}>My Orders</Link>
            <Link className="design" to={`${url}/review`}>Review</Link>
            <Link className="design" to={`${url}/login`}>login</Link>
            </div>
            <Switch>
            <Route exact path={path}>
            <Pay></Pay>
            </Route>
            <Route path={`${path}/orders`}>
            <Orders></Orders>
            </Route>
            <Route path={`${path}/review`}>
            <Review></Review>
            </Route>
            <Route path={`${path}/login`}>
            <Login></Login>
            </Route>
            </Switch>
        </div>
    )
}

export default Dashboard
