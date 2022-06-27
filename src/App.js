// import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News pageSize={6} key="general" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News pageSize={6} key="business" category="business" />}
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pageSize={6}
                  category="entertainment"
                  key="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={<News pageSize={6} category="sports" key="sports" />}
            ></Route>
            <Route
              exact
              path="/health"
              element={<News pageSize={6} category="health" key="health" />}
            ></Route>
            <Route
              exact
              path="/science"
              element={<News pageSize={6} category="science" key="science" />}
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News pageSize={6} category="technology" key="technology" />
              }
            ></Route>
            <Route
              exact
              path="/"
              element={<News pageSize={6} category="sports" key="sports" />}
            ></Route>
          </Routes>
        </BrowserRouter>
        {/* <News pageSize={6} category="sports" /> */}
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
