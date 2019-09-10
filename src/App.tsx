import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { DndProvider } from 'react-dnd';

import Stores from './stores/export';
import HomeScreen from './screens/HomeScreen';
import StoreScreen from './screens/StoreScreen';
import PluginDetailScreen from './screens/PluginDetailScreen';
import PluginUploadScreen from './screens/PluginUploadScreen';


function App() {
  return (
    <div>
      <Provider {...Stores}>
        {/* <Route exact path="/" component={HomeScreen} /> */}
        <Route exact path="/" component={PluginUploadScreen} />
        <Switch>
          <Route path="/store/:id" component={PluginDetailScreen} />
          <Route path="/store" component={StoreScreen} />
        </Switch>        

      </Provider>
    </div>
  );
}

export default App;
