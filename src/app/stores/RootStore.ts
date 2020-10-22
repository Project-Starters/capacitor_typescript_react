import { GlobalStateStore, RouterStore } from "app/stores";
import { ROUTER_STORE, GLOBAL_STATE } from 'app/constants';
import { createBrowserHistory } from 'history';


export class RootStore {


    public globalStateStore: GlobalStateStore
    public routerStore: RouterStore
    constructor(history) {
        this.routerStore = new RouterStore(this, history);
        this.globalStateStore = new GlobalStateStore(this);
    }

    get stores() {
        return {
            [ROUTER_STORE]: this.routerStore,
            [GLOBAL_STATE]: this.globalStateStore
        };
    }

}

export const history = createBrowserHistory();

export const rootStore = new RootStore(history) 