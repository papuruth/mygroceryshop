import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../styles';
import AvailableInFullVersion from '../availableInFullVersion/AvailableInFullVersionViewContainer';
import RegisterScreen from '../register/RegisterViewContainer';
import TabNavigator from './MainTabNavigator';
import LoginView from '../login/LoginViewContainer';

const headerLeftComponent = props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={{
      paddingLeft: 10,
    }}
  >
    <Image
      source={require('../../../assets/images/icons/arrow-back.png')}
      resizeMode="contain"
      style={{
        height: 20,
      }}
    />
  </TouchableOpacity>
);

const headerBackground = require('../../../assets/images/topBarBg.png');

const StackNavigationData = [
  {
    name: 'Real Estate',
    path: 'home',
    component: TabNavigator,
    headerLeft: null,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Architecture',
    path: 'arch',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Civil',
    path: 'civil',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Mason (with Labour)',
    path: 'mason',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Carpenter',
    path: 'carpenter',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Electrician',
    path: 'electrician',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Plumber',
    path: 'plumber',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Painter',
    path: 'painter',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Welder',
    path: 'welder',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Tiles / Stones / Flooring',
    path: 'tiles',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Home Decoration',
    path: 'home-decor',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Profile',
    path: 'profile',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Search',
    path: 'search',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Notifications',
    path: 'notification',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Cart Items',
    path: 'cart',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Settings',
    path: 'setting',
    component: AvailableInFullVersion,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Login',
    path: 'login',
    component: LoginView,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Register',
    path: 'register',
    component: RegisterScreen,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
];

export default StackNavigationData;
