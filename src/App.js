// import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  state = {};

  // apikey = process.env.REACT_APP_API_KEY;

  apikey = "ababd676b6fd4689a4e4a275d850403b";

  render() {
    const pageSize = 19;
    return (
      <>
        <BrowserRouter>
          <Navbar />

          <h2>Lec No 30 Done</h2>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  api={this.apikey}
                  pageSize={this.pageSize}
                  key="general"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  api={this.apikey}
                  pageSize={this.pageSize}
                  key="business"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  api={this.apikey}
                  pageSize={this.pageSize}
                  category="entertainment"
                  key="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  api={this.apikey}
                  pageSize={this.pageSize}
                  category="sports"
                  key="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  api={this.apikey}
                  pageSize={this.pageSize}
                  category="health"
                  key="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  api={this.apikey}
                  pageSize={this.pageSize}
                  category="science"
                  key="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  api={this.apikey}
                  pageSize={this.pageSize}
                  category="technology"
                  key="technology"
                />
              }
            ></Route>
            <Route
              exact
              path="/"
              element={
                <News
                  api={this.apikey}
                  pageSize={this.pageSize}
                  category="sports"
                  key="sports"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
        {/* <News api={this.apikey} pageSize={this.pageSize} category="sports" /> */}
      </>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
