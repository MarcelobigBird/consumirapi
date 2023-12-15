import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMIRAPI',
      storage,
      whiteList: ['auth'],
    },
    reducers,
  );

  return persistedReducers;
};
