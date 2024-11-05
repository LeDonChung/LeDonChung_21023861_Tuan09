import { StyleSheet, Text, View } from 'react-native';
import { AppNavigation } from './src/navigations/AppNavigation';
import { AuthProvider } from './src/hook/useAuth';
import { Provider } from 'react-redux';
import Store from './src/redux/saga/store';
// import store from './src/redux-tool-kit/store';
export default function App() {
  return (
    <>
      <AuthProvider>
        <Provider store={Store}>
          <AppNavigation /> 
        </Provider>

        {/* Redux Toolkit */}
        {/* <Provider store={store}> 
        <AppNavigation />
      </Provider>  */}

      </AuthProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
