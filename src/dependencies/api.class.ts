class ApiDependency {
    get (): Record<string, unknown> {
        return {
            value: 'yay'
        }
    }
}

export const Api = new ApiDependency();