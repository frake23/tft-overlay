import React from 'react';
import BaseItemsPage from './components/BaseItemsPage/BaseItemsPage';

import { baseItems } from './utils/ItemUtils/ItemUtils.js';

function App() {
  return (
    <div className="App">
      <BaseItemsPage items={baseItems}/>
    </div>
  );
}

export default App;
