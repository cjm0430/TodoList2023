import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoListScreen from './components/TodoListScreen';
import CompletedTasksScreen from './components/CompletedTasksScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Todo" component={TodoListScreen} />
        <Tab.Screen name="Completed" component={CompletedTasksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
