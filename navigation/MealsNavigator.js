import React from "react";
import { Text, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

import CategoriesScreen, { CategoriesScreenOptions } from '../screens/CategoriesScreen';
import CategoryMealsScreen, { CategoryMealsScreenOptions } from '../screens/CategoryMealsScreen';
import MealDetailScreen, { MealDetailScreenOptions } from '../screens/MealDetailScreen';
import FavoriteScreen, { FavoriteScreenOptions } from "../screens/FavoriteScreen";
import FilterScreen, { FilterScreenOptions } from "../screens/FilterScreen";

const MealsStackNavigator = createStackNavigator();

const defaultStackNavigatorOptions = nav => {
    return {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
};

const MealsStackNavigatorContainer = () => {
    return (
        <MealsStackNavigator.Navigator screenOptions={defaultStackNavigatorOptions} >
            <MealsStackNavigator.Screen
                name="Categories"
                component={CategoriesScreen}
                options={CategoriesScreenOptions}
            />
            <MealsStackNavigator.Screen
                name="CategoryMeals"
                component={CategoryMealsScreen}
                options={CategoryMealsScreenOptions}
            />
            <MealsStackNavigator.Screen
                name="MealDetail"
                component={MealDetailScreen}
                options={MealDetailScreenOptions}
            />
        </MealsStackNavigator.Navigator>
    );
};

const FavoriteStackNavigator = createStackNavigator();

const FavoriteStackNavigatorContainer = () => {
    return (
        <FavoriteStackNavigator.Navigator screenOptions={defaultStackNavigatorOptions} >
            <FavoriteStackNavigator.Screen
                name="FavoriteMeals"
                component={FavoriteScreen}
                options={FavoriteScreenOptions}
            />
            <FavoriteStackNavigator.Screen
                name="MealDetail"
                component={MealDetailScreen}
                options={MealDetailScreenOptions}
            />
        </FavoriteStackNavigator.Navigator>

    );
};

const FilterStackNavigator = createStackNavigator();

const FilterNavigatorCotainer = () => {
    return (
        <FilterStackNavigator.Navigator screenOptions={defaultStackNavigatorOptions}>
            <FilterStackNavigator.Screen
                name="Filter"
                component={FilterScreen}
                options={FilterScreenOptions}
            />

        </FilterStackNavigator.Navigator>
    );
};

const TabNavigator = createBottomTabNavigator();

const TabNavigatorCotainer = () => {
    return (
        <TabNavigator.Navigator
            tabBarOptions={{
                labelStyle:  {fontFamily:'open-sans-bold'},
                activeTintColor: 'white',
                inactiveTintColor: 'grey',
                activeBackgroundColor: Colors.primaryColor,
                inactiveBackgroundColor: Colors.primaryColor
            }}>
            <TabNavigator.Screen
                name="Meals"
                component={MealsStackNavigatorContainer}
                options={{
                    tabBarLabel: 'Meals',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-restaurant' size={size} color={color} />
                    ),
                }}
            />
            <TabNavigator.Screen
                name="Favorites"
                component={FavoriteStackNavigatorContainer}
                options={{
                    tabBarLabel: 'Favorites',
                    allowFontScaling: true,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-star' size={size} color={color} />
                    ),
                }}
            />
        </TabNavigator.Navigator>
    );
};

const DrawerNavigator = createDrawerNavigator();

const MealsNavigator = props => {
    return (
        <NavigationContainer>
            <DrawerNavigator.Navigator initialRouteName="Home">
                <DrawerNavigator.Screen name="Home" component={TabNavigatorCotainer} />
                <DrawerNavigator.Screen name="Favorite Meals" component={FavoriteStackNavigatorContainer} />
                <DrawerNavigator.Screen name="Filter" component={FilterNavigatorCotainer} />
            </DrawerNavigator.Navigator>
        </NavigationContainer>
    );
};

export default MealsNavigator;