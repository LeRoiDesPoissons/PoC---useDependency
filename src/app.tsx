import { FC } from "react";
import { useDependency } from "./hooks";
import { Keys } from './dependencies';

const App: FC = () => {
    const { Api, UtilsForWeb, store } = useDependency('Api', 'UtilsForWeb', Keys.Storage);

    const result = Api.get();
    const normalized = UtilsForWeb.normalize('   Normalization util in\n aciton     ');
    const saved = store.save('dependency', 'saveString');

    return (
        <div>
            <span>
                Api
            </span>
            <p>
                {
                    JSON.stringify(result)
                }
            </p>
            <hr />
            <span>
                UtilsForWeb
            </span>
            <p>
                {
                    normalized
                }
            </p>
            <hr />
            <span>
                Storage
            </span>
            <p>
                {
                    saved
                }
            </p>
            <hr />
        </div>
    );
};

export default App;