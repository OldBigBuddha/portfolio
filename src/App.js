import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import IndexNavbar from "./components/IndexNavbar.component.js";
import Profile from "./components/Profile.component.js";
import Works from './components/Works.component.js';
import Activities from './components/Activities.component.js';
import Contact from "./components/Contact.component.js";

const App = () => {
  const Index = () => {
    return (
      <div>
        <h2>Index page</h2>
        <IndexNavbar />
      </div>
    )
  }
  return (
    <BrowserRouter>
      <Route exact path="/" component={Index} />
      <Route path="/profile" component={Profile} />
      <Route path="/works" component={Works} />
      <Route path="/activities" component={Activities} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
}
export default App;
