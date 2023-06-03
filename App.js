import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TodoListScreen from './components/TodoListScreen';
import SettingScreen from './components/SettingScreen';
import MyPageScreen from './components/MypageScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TodoList"
        drawerPosition = "right"
      >
        <Drawer.Screen name="TodoList" component={TodoListScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
        <Drawer.Screen name="MyPage" component={MyPageScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
