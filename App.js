import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { ScrollView } from 'react-native-gesture-handler';



import {CustomHeader,CustomDrawerContent} from './src';
import {HomeScreen, HomeScreenDetails,SettingsScreen,SettingsScreenDetails} from './src/tab';
import {NotificationsScreen} from './src/drawer';
import {RegisterScreen,LoginScreen} from  './src/auth'


const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown:false,

}) 

const StackHome = createStackNavigator();
function HomeStack(){
  return(
    <StackHome.Navigator initialRouteName='Home'>
     <StackHome.Screen name='Home' component={HomeScreen} options={navOptionHandler}/>
     <StackHome.Screen name='HomeDetails' component={HomeScreenDetails} options={navOptionHandler}/>
    </StackHome.Navigator>
  );
}

const StackSetting = createStackNavigator();
function SettingStack(){
  return(
    <StackSetting.Navigator initialRouteName='Setting'>
     <StackSetting.Screen name='Settings' component={SettingsScreen} options={navOptionHandler}/>
     <StackSetting.Screen name='SettingsDetails' component={SettingsScreenDetails} options={navOptionHandler}/>
    </StackSetting.Navigator>
  );
}


function TabNavigator(){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? require('./assets/home.png')
            : require('./assets/home-black.png');
        } else if (route.name === 'Settings') {
          iconName = focused 
          ? require('./assets/settings.png')
          : require('./assets/settings-black.png');
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={{width:20, height:20}}
         resizeMode='contain'/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'black',
    }}
    >
      <Tab.Screen name="Home" component={ HomeStack } />
      <Tab.Screen name="Settings" component={ SettingStack } />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}){
  return(
    <Drawer.Navigator initialRouteName="MenuTab" 
    drawerContent={() => <CustomDrawerContent navigation={navigation}/>}>
    <Drawer.Screen name="MenuTab" component={TabNavigator} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
const StackApp = createStackNavigator();
export default function App ()
{
  return (
    <NavigationContainer>
        <StackApp.Navigator initialRouteName='Login'>
          <StackApp.Screen name='HomeApp' component={DrawerNavigator} options={navOptionHandler}/>
          <StackApp.Screen name='Login' component={LoginScreen} options={navOptionHandler}/>
          <StackApp.Screen name='Register' component={RegisterScreen} options={navOptionHandler}/>
        </StackApp.Navigator>
    </NavigationContainer>
  );
}