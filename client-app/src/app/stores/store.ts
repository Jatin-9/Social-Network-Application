import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import UserStore from "./userStore";
import CommonStore from "./commonStore";

interface Store {
    activityStore : ActivityStore;
    commonStore : CommonStore;
    userStore : UserStore;
}

export const store : Store = {
    activityStore : new ActivityStore(),
    commonStore : new CommonStore(),
    userStore : new UserStore()
}
export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}