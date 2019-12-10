/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
    AppRegistry
} from 'react-native';
import RootReducer from "./src/reducers";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';
import AppNavigator from "./src/navigators/AppNavigator";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
    store = createStore(RootReducer, {}, composeWithDevTools(applyMiddleware(ReduxThunk)));
    render() {
        return (
            <Provider store={this.store}>
                <AppContainer />
            </Provider>
        );
    }
}

export default App;

AppRegistry.registerComponent('ExpertFinder', () => App);
