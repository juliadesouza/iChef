import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home'
import Profile from './screens/Profile'
import Category from './screens/Category';
import AddRecipe from './screens/AddRecipe';
import Search from './screens/Search';
Icon.loadFont()

const Tab = createBottomTabNavigator()

export default Navigator = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'home-outline'
                        } else if (route.name === 'Category') {
                            iconName = 'restaurant-outline'
                        } else if (route.name === 'AddRecipe') {
                            iconName = 'add-circle'
                            color = '#ffc539'
                            size = 50
                        } else if (route.name === 'Search') {
                            iconName = 'search-outline'
                        } else if (route.name === 'Profile') {
                            iconName = 'person-outline'
                        }
                        return <Icon name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: '#ffc539',
                    tabBarInactiveTintColor: '#c3c5c6',
                    tabBarShowLabel: false,
                })}
            >
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Category' component={Category} />
                <Tab.Screen name='AddRecipe' component={AddRecipe} />
                <Tab.Screen name='Search' component={Search} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

