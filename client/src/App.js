import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Topbar from "./components/topbar/Topbar";
import { Context } from "./Context/Context";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/setting/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home/>:<Register/>}</Route>
        <Route path="/login">{user ? <Home/>:<Login/>}</Route>
        <Route path="/write">{user ? <Write/>:<Register/>}</Route>
        <Route path="/settings">{user ? <Settings/>:<Register/>}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
