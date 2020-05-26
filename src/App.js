import React from 'react';
import styles from './App.module.css';

import Content from './components/Content/Content';
import ImageHolder from './components/ImageHolder/ImageHolder';

function App() {
  return (
    <div className={styles.mainContainer}>
      <Content style={{gridColumn: 1 / 2}} />
      <ImageHolder style={{gridColumn: 3}} />
    </div>
  );
}

export default App;
