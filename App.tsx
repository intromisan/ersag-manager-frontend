import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation';
import { setupStore } from './src/redux/store';

const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
