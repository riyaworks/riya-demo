import {configureStore} from '@reduxjs/toolkit';
const store = configureStore(
    {reducer: {

    }
});

type RootState = ReturnType <typeof store.getState>
type dispatch = typeof store.dispatch;