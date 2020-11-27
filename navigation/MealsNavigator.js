import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';


//Como las Opciones de los dos Stack se repiten se extrae a una constante
const defaultStackNavOptions = {
    
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor,        
        },
        headerTitleStyle:{
            fontFamily: 'open-sans-bold',
        },
        headerBackTitleStyle:{
            fontFamily: 'open-sans-bold',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
    }
};

//Stack Navigator de Meals. (Lado Izquierdo del Bottom Tab)
const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,    
    MealDetail: MealDetailScreen,
},
defaultStackNavOptions,
);

//Stack Navigator de Favorites. (Lado Derecho del Bottom Tab)
const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
},
defaultStackNavOptions,
);

//Stack Navigator de Favorites. (Addicional y Vacio solo para el Drawer)
const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen,
},
defaultStackNavOptions,
);

//Opciones del Menu de Bottom Tabs, que incluye los 2 Stack como Pantallas
const tabScreenConfig = {
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarLabel: 'Comidas',
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
        },
    }},
    Favorites: {screen: FavNavigator, navigationOptions: {
        tabBarLabel: 'Favoritos',
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
        }
    }},
}

// Bottom Tab Creado. 
const MealsFavTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: Colors.accentColor,
    shifting: true,
    barStyle: {
        backgroundColor: Colors.primaryColor,
    },
    labelStyle:{
        fontFamily: 'open-sans',
    }
});

//Drawer Creado.
const MainNavigator = createDrawerNavigator({
    MealsFavs: {screen: MealsFavTabNavigator, navigationOptions:{
        drawerLabel: 'Comidas'
    }},
    Filters: {screen: FiltersNavigator, navigationOptions:{
        drawerLabel: 'Filtros'
    }},
}, {
    contentOptions:{
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily:'open-sans-bold'
        }
    }
});


export default createAppContainer(MainNavigator);