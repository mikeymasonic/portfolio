import React from 'react';
import styles from './App.css';

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.rainbowText}>mikey's cool dev site</h1>
      <img src="https://vernsworld.neocities.org/under_construction_graphic.gif" />
      <br></br>
      <a
        href="http://github.com/mikeymasonic"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        github
      </a>
      <br></br>
      <a
        href="https://www.linkedin.com/in/michaelromay/"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        linked-in
      </a>
      <br></br>
      <a href="mailto:hi@michaelromay.dev">hi@michaelromay.dev</a>
      <br></br>
    </div>
  );
}

export default App;
