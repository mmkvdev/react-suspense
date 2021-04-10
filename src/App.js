import * as React from 'react';
import { globalStyles } from './styles/global.styles.js';
import { Global } from '@emotion/react'
import ToggleWrapper from './components/ToggleWrapper';

function App() {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <div className="App">
        <ToggleWrapper />
      </div>
    </React.Fragment>
  );
}

export default App;
