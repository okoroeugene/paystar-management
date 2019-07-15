import React from 'react'
import ReactDOM from 'react-dom';
import App from '../src/routeConfig'
import {
    Provider
} from 'react-redux';
import configureStore from '../src/stores';
import { PersistGate } from 'redux-persist/integration/react';
import { NotificationContainer } from 'react-notifications';

const store = configureStore();
const Loading = () => (
    <div id="loader2">
        Loading...
    </div>
);

ReactDOM.render(<Provider store={store.store}>
    <PersistGate loading={<Loading />} persistor={store.persistor}>
        <App />
        <NotificationContainer />
    </PersistGate>
</Provider>, document.getElementById('root'));