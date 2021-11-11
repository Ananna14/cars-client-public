import logo from './logo.svg';
import './App.css';
import Banner from './Pages/Banner/Banner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Banner/Home/Home';
import Explore from './Pages/Banner/Explore/Explore';
import Login from './Pages/Banner/Login/Login';
import Header from './Pages/Banner/Header/Header';
import Footer from './Pages/Banner/Home/Footer/Footer';
import FirstPage from './Pages/Banner/FirstPage/FirstPage';
import Extra from './Pages/Banner/Home/Footer/Extra/Extra';
import Purchase from './Pages/Banner/Home/Footer/Extra/Purchase/Purchase';
import Register from './Pages/Banner/Login/Register/Register';
import NotFound from './Pages/Banner/Home/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Banner/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
    <Header></Header>
      <Switch>
        <Route exact path="/">
             <FirstPage></FirstPage>
        </Route>
        <Route path="/home">
        <FirstPage></FirstPage>
        </Route>
        <Route path="/explore">
             <Explore></Explore>
        </Route>
        <PrivateRoute path="/purchase">
             <Purchase></Purchase>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
             <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/login">
             <Login></Login>
        </Route>
        <Route path="/register">
             <Register></Register>
        </Route>
        <Route path="*">
            <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
