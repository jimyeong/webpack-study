import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/base/style.less";
import { MainPage } from "./pages";

class App extends React.Component<any, any> {
  public home = "/";
  public signUp = "/sign-up";
  public makeGroup = "/add-group";
  public render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path={this.home} render={() => <MainPage />} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
