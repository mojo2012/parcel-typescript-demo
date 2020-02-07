export class Store {
    private static instance: Store;

    private registry: Map<string, Array<(value: any) => void>>;

    private constructor() { }

    public register(observer: object, key: string, fieldToUpdate: string) {
        let updateCalls = this.registry.get(key);

        if (!updateCalls) {
            updateCalls = [];
            this.registry.set(key, updateCalls);
        }

        updateCalls.push((value: any) => observer[fieldToUpdate] = value);
    }

    public update(key: string, value: any) {
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
