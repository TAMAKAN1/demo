import * as React from 'react';
import { I18nManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { AuthNavigator } from './src/Navigations/AuthNavigator';
import { ConfigorAxios } from './src/Api/ConfigorAxios';
import { Token_Key } from './src/Constants';
import authStore from './src/Flux/AuthStore';
import dispatcher from './src/Flux/dispatcher';
import { SET_TOKEN } from './src/Redux/Actions/Actions';


ConfigorAxios(); ///* Holding API Url *///

function App(props) {
  //const {width, height} = Dimensions.get('window');
  I18nManager.allowRTL(false);
  const [token, setToken] = React.useState(authStore.token);
  //const [user, setUser] = React.useState(null);

  const handleTokenChange = () => {
    setToken(authStore.token)
  }
  React.useEffect(() => {
    authStore.on('change', handleTokenChange)
  }, [])
//////////////////////////////////////////////////////////
  React.useEffect(() => {
    AsyncStorage.getItem(Token_Key)
      .then((val) => {
        dispatcher.dispatch({ type: SET_TOKEN, payload: { token: null } });
        axios.defaults.headers.Authorization = 'Bearer' + val;
      })
  }, []);


  return (
    token !== 'NOT_YET' &&
    <AuthNavigator
      isAuthenticated={token}
       />
  );
}
export default App;
// const mapStateToProps = state => ({token: state.auth.token});
// const mapDispatchToProps = dispatch => ({setToken: token => dispatch({type: 'SET_TOKEN', payload: {token}})});


//export default connect(mapStateToProps, mapDispatchToProps)(App);
