import { useMemo } from "react";

type Class<T extends new (...args: unknown[]) => unknown> = {
    new(...parameters: ConstructorParameters<T>): InstanceType<T>,
};

type ClassConfig<T extends new (...args: unknown[]) => unknown = new (...args: unknown[]) => unknown> =
    {
        instance: Class<T>
        multi?: boolean
    };

type CreationArgument = {
    [Key: string]: ClassConfig
}

type Dependencies<T extends CreationArgument, Keys extends (keyof T)[]> = {
    [Key in Keys[number]]: InstanceType<T[Key]['instance']>
}

function createDependencies<
    T extends CreationArgument,
    Dependency extends keyof T = keyof T
>(init: T) {
    const dependencies = Object.entries(init).reduce((acc, [key, { instance }]) => {
        // @ts-expect-error: Must be a mapped type, and have to assign
        acc[key] = new instance();

        return acc;
    }, {} as {
        [Key in keyof typeof init]: InstanceType<typeof init[Key]['instance']>
    });

    const useDependency = (deps: [Dependency, ...Dependency[]]): Dependencies<T, typeof deps> => {
        if (!deps.length) {
            throw new SyntaxError('No dependency specified');
        }

        // Ensure proper reference and filter out duplicates
        const requestesDependencies = useMemo(() => {
            return structuredClone(deps)
                .sort()
                .filter((current, index) => deps.indexOf(current) === index)
                .reduce((acc, current) => {
                    return {
                        ...acc,
                        [current as string]: dependencies[current as Dependency]
                    }
                }, {} as Dependencies<T, typeof deps>)
        }, [deps]);

        return requestesDependencies;
    }

    return useDependency;
}

export default createDependencies;