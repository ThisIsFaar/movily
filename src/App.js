import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/NavBar";
import Customer from "./components/customer";
import Rentals from "./components/rentals";
import NotFound from "./components/common/notFound";
import MoviesForm from "./components/moviesForm";
import LoginForm from "./components/loginForm";
import "./App.css";

function App() {
  return (
    <main className="container">
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/customer" component={Customer} />
          <Route path="/login" component={LoginForm} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route
            path="/movies/:id"
            render={(props) => <MoviesForm sortBy="newest" {...props} />}
          />
          <Route path="/movies" component={Movies} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </main>
  );
}

export default App;
