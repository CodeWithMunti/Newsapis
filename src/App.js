import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends Component {
  pageSize = "6";
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  pageSize={this.pageSize}
                  key="general"
                  category="general"
                  country="us"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  pageSize={this.pageSize}
                  key="business"
                  category="business"
                  country="us"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pageSize={this.pageSize}
                  key="entertainment"
                  category="entertainment"
                  country="us"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  pageSize={this.pageSize}
                  key="general"
                  category="general"
                  country="us"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  pageSize={this.pageSize}
                  key="health"
                  category="health"
                  country="us"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  pageSize={this.pageSize}
                  key="science"
                  category="science"
                  country="us"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  pageSize={this.pageSize}
                  key="sports"
                  category="sports"
                  country="us"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  pageSize={this.pageSize}
                  key="technology"
                  category="technology"
                  country="us"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
