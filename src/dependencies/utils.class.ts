export class UtilsDependency {
    normalize(input: string): string {
        return input
                .trim()
                .toLowerCase()
                .replace(/|n/, '');
    }
}