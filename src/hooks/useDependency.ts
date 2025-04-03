import { DependencyMap } from '../dependencies';

type Dependency = keyof typeof DependencyMap;

type Dependencies<D extends Array<Dependency> = []> = {
    [Key in D[number]]: typeof DependencyMap[Key]
}

export const useDependency = <D extends Array<Dependency>>(...deps: D): Dependencies<D> => {
    if (!deps.length) {
        throw new SyntaxError('Minimum one dependency is required');
    }

    return deps.reduce<Dependencies<D>>((acc, current) => {
        return {
            ...acc,
            [current]: DependencyMap[current]
        }
    }, {} as Dependencies<D>);
}