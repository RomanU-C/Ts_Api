import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import One from '../screens/ScreenOne';
import Two from '../screens/ScreenTwo';

const Root = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={One} />
                <Tab.Screen name="Settings" component={Two} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};


export default Root;