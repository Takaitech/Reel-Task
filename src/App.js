import React from 'react';
import ReelList from './containers/ReelList'
import Search from './components/Search'
import FilterPanel from './components/FilterPanel'
import styles from './style/style.module.css'

function App() {
  return (
    <div className={styles.app}>
      <header>
        <FilterPanel />
        <Search />
      </header>
      <main>
        <ReelList />
      </main>
    </div>
  );
}

export default App;
