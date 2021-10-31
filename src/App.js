import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Headers/Header";
import Home from "./components/Home/Home";
import Detail from "./components/PlanDetail/Detail";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MyPlan from "./components/MyPlan/MyPlan";
import AddPlan from "./components/AddPlan/AddPlan";
import AllPlan from "./components/AllPlan/AllPlan";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/plans/:id">
              <Detail></Detail>
            </PrivateRoute>
            <Route path="/myplan">
              <MyPlan></MyPlan>
            </Route>
            <Route path="/addplan">
              <AddPlan></AddPlan>
            </Route>
            <Route path="/allplan">
              <AllPlan></AllPlan>
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
