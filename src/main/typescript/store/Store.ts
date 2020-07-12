export class Store {
    private static instance: Store;

    private registry: Map<string, Array<(value: any) => void>> = new Map();

    private constructor() { }

    /**
     * @param observer object that wants to receive events dispatcher for the given key
     * @param key to watch for
     * @param fieldToUpdate
     */
    public register(observer: object, key: string) {
        let updateCalls = this.registry.get(key);

        if (!updateCalls) {
            updateCalls = [];
            this.registry.set(key, updateCalls);
        }

        // updateCalls.push((value: any) => observer[fieldToUpdate] = value);
    }

    public dispatch(key: string, id?: string, value?: any) {
        const updateCalls = this.registry.get(key);

        if (updateCalls) {
            updateCalls.forEach((updateCall) => {
                updateCall(value);
            });
        }
    }

    public static getInstance(): Store {
        if (!Store.instance) {
            Store.instance = new Store();
        }

        return Store.instance;
    }

}
