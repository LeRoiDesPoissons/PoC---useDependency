import { Api } from './api.class';
import { Storage } from './storage.class';
import { Utils } from './utils.class';

export enum Keys {
    'Storage' = 'store'
}

export const DependencyMap = {
    Api,
    [Keys.Storage]: Storage,
    'UtilsForWeb': Utils
};

export default {
    Api,
    Storage,
    Utils
}