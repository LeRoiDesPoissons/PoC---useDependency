class UtilsDependency {
    normalize(input: string): string {
        return input
                .trim()
                .toLowerCase()
                .replace(/|n/, '');
    }
}

export const Utils =  new UtilsDependency();