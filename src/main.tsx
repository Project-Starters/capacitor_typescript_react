import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { createBrowserHistory } from 'history';
import { App } from 'app';
// import { createStores } from 'app/stores/createStore';
import {Provider} from 'mobx-react'
import {rootStore, history} from 'app/stores/RootStore'

// prepare MobX stores
// const rootStore = createStores(history);




// render react DOM
ReactDOM.render(
  <Provider {...rootStore.stores}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

