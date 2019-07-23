import React from 'react';
import BaseItemsPage from './components/BaseItemsPage/BaseItemsPage';

import { recipes } from './utils/ItemUtils/ItemUtils.js';
import { icons } from './utils/ImagesUtils/ImagesUtils.js';


function App() {
  return (
    <div className="App">
      <BaseItemsPage recipes={recipes} icons={icons}/>
    </div>
  );
}

export default App;
