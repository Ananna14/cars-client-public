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
import AddService from '../AddService/AddService';
import Manage from '../AddService/Manage/Manage';
import Admin from '../AddService/Admin/Admin';
import Product from '../AddService/Product/Product';
import useAuth from '../Context/AuthProvider/useAuth';
import AdminRoute from '../Pages/Banner/Login/AdminRoute/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {admin} = useAuth();
    return (
        <div >
            <div className="dashboard-added">
            <Link className="design" to={`${url}`}>Pay</Link>
            <Link className="design" to={`${url}/orders`}>My Orders</Link>
            <Link className="design" to={`${url}/review`}>Review</Link>
            {admin && <>
                <Link className="design" to={`${url}/manage`}>Manage All Orders</Link>
            <Link className="design" to={`${url}/service`}>Add A Product</Link>
            <Link className="design" to={`${url}/admin`}>Make Admin</Link>
            <Link className="design" to={`${url}/product`}>Manage Products</Link>
            <Link className="design" to={`${url}/login`}>login</Link>
                </>}
            </div>
            <Switch>
            <Route exact path={path}>
            <Pay></Pay>
            </Route>
            <Route path={`${path}/orders`}>
            <Orders></Orders>
            </Route>
            {/* <Route path={`${path}/orders/:servicesId`}>
            <Orders></Orders>
            </Route> */}
            <Route path={`${path}/review`}>
            <Review></Review>
            </Route>
            <AdminRoute path={`${path}/manage`}>
            <Manage></Manage>
            </AdminRoute>
            <AdminRoute path={`${path}/service`}>
            <AddService></AddService>
            </AdminRoute>
            <AdminRoute path={`${path}/admin`}>
            <Admin></Admin>
            </AdminRoute>
            <AdminRoute path={`${path}/product`}>
            <Product></Product>
            </AdminRoute>
            <AdminRoute path={`${path}/login`}>
            <Login></Login>
            </AdminRoute>
            </Switch>
        </div>
    )
}

export default Dashboard
