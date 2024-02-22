import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import App from "../App";
import PrivateRoute from "./PrivateRoute";
import { translate } from "react-i18next";

class Router extends React.Component {
  state = {
    loading: false,
    authenticated: true,
    currentUser: null
  };

  componentWillMount() {
    // firebaseApp.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.setState({
    //       authenticated: true,
    //       currentUser: user.uid,
    //       loading: false
    //     });
    //   } else {
    //     this.setState({
    //       authenticated: false,
    //       currentUser: null,
    //       loading: false
    //     });
    //   }
    // });
  }

  loggingOut = () => {
    this.setState({ authenticated: false });
  };

  render() {
    const { authenticated, loading } = this.state;
    if (loading) {
      return (
        <div id="loading">
          <p>
            <i className="fas fa-spinner" />
            Loading...
          </p>
        </div>
      );
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <PrivateRoute
            path="/user/:userId"
            authenticated={authenticated}
            component={App}
            loggingOut={this.loggingOut}
            user={this.state.currentUser}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default translate("common")(Router);
