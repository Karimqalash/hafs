import './App.scss';
import Routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store';
import { PersistGate } from 'redux-persist/integration/react'

// Configure redux store
const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Routes />
        </PersistGate>
    </Provider>
    
  );
}

export default App;
