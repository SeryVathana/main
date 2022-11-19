import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/Header";
import Content from "./Components/Content";
import HomePage from "./Components/HomePage";

import SinglePost from "./Components/SinglePost";

import "./App.css";
import data from "./data";
import featuresData from "./featuresData";
import Feature from "./Components/Feature";
import Contact from "./Components/Contact";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: data,
      features: featuresData,
    };
  }

  handleWindow() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Main">
        <Router>
          <div className="App">
            {/* <Route path="*" render={(props) => <Header {...props} />} /> */}
            <Route path="/" exact render={(props) => <HomePage {...props} />} />
            <div className="blog_page">
              <Route
                exact
                path="/blog"
                render={() => (
                  <div>
                    <h1>Feature Blogs</h1>
                    <Feature posts={this.state.features} />
                    <h1>Blogs</h1>
                    <Content posts={this.state.posts} />
                  </div>
                )}
              />
              <Route
                exact
                path="/post/:id"
                render={(props) => (
                  <SinglePost {...props} posts={this.state.posts} />
                )}
              />
            </div>
            <Route
              path="/contact"
              exact
              render={(props) => <Contact {...props} />}
            />
            {/* <Footer /> */}
          </div>
        </Router>
      </div>
    );
  }
}
