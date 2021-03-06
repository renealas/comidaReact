import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import {CATEGORIES} from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTitle';


const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return <CategoryGridTile 
        title = {itemData.item.title} 
        color={itemData.item.color}
        onSelect={() => {
            props.navigation.navigate(
                'CategoryMeals', {
                categoryId: itemData.item.id,                    
            });
        }} />
    }

    return(
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2} 
        />
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {headerTitle: 'Categorias de Comidas',    
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>}
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },         
});

export default CategoriesScreen;