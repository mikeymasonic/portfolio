import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Bio} />
        <Route exact path="/apps" component={Apps} />
        <Route exact path="/hardware" component={Hardware} />
        <Route exact path="/installations" component={Installations} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/media" component={Media} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/learn" component={Learn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
