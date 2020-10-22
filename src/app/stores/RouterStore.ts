import { History } from 'history';
import {
  RouterStore as BaseRouterStore,
  syncHistoryWithStore
} from 'mobx-react-router';
import { RootStore } from 'app/stores';

export class RouterStore extends BaseRouterStore {
  constructor(rootStore: RootStore, history?: History) {
    super();
    if (history) {
      this.history = syncHistoryWithStore(history, this);
    }
  }
}

export default RouterStore;
