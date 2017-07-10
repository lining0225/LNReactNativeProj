/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Icon from 'react-native-vector-icons/FontAwesome';
const myButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
    Login with Facebook
  </Icon.Button>
);

const customTextButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
  </Icon.Button>
);
//import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)
//var LNTabHome = require('./LNTabHome');
//var LNTabMine = require('./LNTabMine.js');

//export default class LNReactNativeProj extends Component

var LNReactNativeProj = React.createClass({

  getInitialState() {
    return {
      selectedTab: 'home',
    };
  },

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Icon name="home" size={24} color="#900" />}
          renderSelectedIcon={() => <Icon name="home" size={30} color="#F00" />}
          badgeText=""
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <View style={{flex:1,backgroundColor:'#C0C0C0'}}>
            {customTextButton}
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'comment'}
          title="Comment"
          renderIcon={() => <Icon name="comment" size={24} color="#900" />}
          renderSelectedIcon={() => <Icon name="comment" size={30} color="#F00" />}
          badgeText=""
          onPress={() => this.setState({ selectedTab: 'comment' })}>
          <View style={{flex:1,backgroundColor:'#C0C0C0'}}>
            {customTextButton}
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'map'}
          title="Map"
          renderIcon={() => <Icon name="map" size={24} color="#900" />}
          renderSelectedIcon={() => <Icon name="map" size={30} color="#F00" />}
          badgeText=""
          onPress={() => this.setState({ selectedTab: 'map' })}>
          <View style={{flex:1,backgroundColor:'#C0C0C0'}}>
            {customTextButton}
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'mine'}
          title="Mine"
          renderIcon={() => <Icon name="user" size={24} color="#900" />}
          renderSelectedIcon={() => <Icon name="user" size={30} color="#F00" />}
          badgeText=""
          onPress={() => this.setState({ selectedTab: 'mine' })}>
          <Text >Mine</Text>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LNReactNativeProj', () => LNReactNativeProj);
