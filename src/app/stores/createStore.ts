import { History } from 'history';
import { RootStore } from '.';
import rootStore from 'app/stores/RootStore'


/**
 * where stores are created, including the routerStore
 */

export function createStores(history: History) {
  // const routerStore = new RouterStore(history);
  // const globalStateStore = new GlobalStateStore();
  return rootStore.stores
}
