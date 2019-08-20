import React from 'react';
import ReelList from './containers/ReelList'
import Search from './components/Search'
import Sort from './containers/Sort'
import styles from './style/style.module.css'

function App() {
  return (
    <div className={styles.app}>
        <Search />
        <ReelList />
        <Sort />
    </div>
  );
}

export default App;
