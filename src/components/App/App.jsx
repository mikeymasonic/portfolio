import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Bio from '../Bio/Bio';
import Apps from '../Apps/Apps';
import Hardware from '../Hardware/Hardware';
import Installations from '../Installations/Installations';
import Projects from '../Projects/Projects';
import Media from '../Media/Media';
import Contact from '../Contact/Contact';
import Learn from '../Learn/Learn';

function App() {
  return (
    <Router>
      <Route component={Header} />
      <Route component={Sidebar} />
      {/* <Header />
      <Sidebar /> */}
      <Switch>
        <Route path="/" exact component={Bio} />
        <Route path="/apps" exact component={Apps} />
        <Route path="/hardware" exact component={Hardware} />
        <Route path="/installations" exact component={Installations} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/media" exact component={Media} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/learn" exact component={Learn} />
      </Switch>
    </Router>
  );
}

export default App;
