class StorageDependency {
    save(key: string, value: string): string {
        localStorage.setItem(key, value);

        return `Save ${value} to localstorage!`;
    }
}

export const Storage = new StorageDependency();