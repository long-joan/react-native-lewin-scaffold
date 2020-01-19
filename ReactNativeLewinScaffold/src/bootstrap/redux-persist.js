import { AsyncStorage } from 'react-native'
import { persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import persistConfig from '../configs/persist'

export const persisteReducerEnhancer = function (reducer) {
    return persistReducer(
        {
            key: persistConfig.key,
            storage: AsyncStorage,
            stateReconciler: autoMergeLevel2,
            whitelist: persistConfig.whitelist,
            debug: false,
            transforms: [],
        }
    )
}