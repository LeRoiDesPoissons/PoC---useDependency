import { FC } from "react";
import createDependencies from "./createDependencies.factory";
import { 
    ApiDependency, 
    StorageDependency, 
    UtilsDependency,
} from "./dependencies";

enum Keys {
    STORAGE = 'store'
}

const useApiDependency = createDependencies({
    api: {
        instance: ApiDependency
    }
});

const useStorageDependency = createDependencies({
    [Keys.STORAGE]: {
        instance: StorageDependency
    }
});

const useUtilDependency = createDependencies({
    utils: {
        instance: UtilsDependency
    }
});

const App: FC = () => {
    const { api } = useApiDependency(['api']);
    const { store } = useStorageDependency([Keys.STORAGE]);
    const { utils } = useUtilDependency(['utils']);

    const result = api.get();
    const normalized = utils.normalize('   Normalization util in\n action     ');
    const saved = store.save('dependency', 'saveString');

    return (
        <div>
            <h3>Api</h3>
            <p>
                {
                    JSON.stringify(result)
                }
            </p>
            <hr />
            <h3>Utils</h3>
            <p>
                {
                    normalized
                }
            </p>
            <hr />
            <h3>Storage</h3>
            <p>
                {
                    saved
                }
            </p>
        </div>
    );
};

export default App;