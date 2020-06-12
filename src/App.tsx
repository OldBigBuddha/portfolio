import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import IndexNavbar from "./components/IndexNavbar.component";
import Profile from "./components/Profile.component";
import Works from "./components/Works.component";
import Activities from "./components/Activities.component";
import Contact from "./components/Contact.component";

const App: React.FC = () => {
  const Index: React.FC = () => {
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
