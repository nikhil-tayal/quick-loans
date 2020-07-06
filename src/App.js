import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AgentInput from "./Components/AgentInput/AgentInput";
import Login from "./Components/Login/Login";
import LoanApplication from "./Components/LoanApplicationPreview/LoanApplication";
import fire from "./Configs/firebase.config";
import Dashboard from "./Components/Dashboard/Dashboard";
import { createBrowserHistory } from "history";
export const hist = createBrowserHistory();
function App(props) {
  const [isLogin, setIsLogin] = useState(false);
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
        hist.push("/dashboard");
      } else {
        hist.push("/");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  return (
    <div>
      <Router history={hist}>
        <Switch>
          {isLogin ? (
            <>
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/loan-details" exact component={AgentInput} />
              <Route path="/preview-application" exact component={LoanApplication} />
            </>
          ) : (
            <Route path="/" exact render={(props) => <Login {...props} />} />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
