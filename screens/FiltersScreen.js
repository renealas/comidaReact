import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet,  Switch} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = props => {
    return ( <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
        trackColor={{true: Colors.primaryColor}} 
        thumbColor={Colors.primaryColor}
        value={props.state} 
        onValueChange={props.onChange}
        />
    </View>  );
};

const FiltersScreen = props => {
    const {navigation} = props;

    const [isGlutenFree, setIsGluttenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            gluteFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
        }

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filtros Disponibles / Restricciones</Text>
            <FilterSwitch 
            label="Libre de Gluten" 
            state={isGlutenFree} 
            onChange={newValue => setIsGluttenFree(newValue)}
            />
            <FilterSwitch 
            label="Libre de Lactosa" 
            state={isLactoseFree} 
            onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch 
            label="Vegano" 
            state={isVegan} 
            onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch 
            label="Vegetariano" 
            state={isVegetarian} 
            onChange={newValue => setIsVegetarian(newValue)}
            />
            </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        margin: 20,
        textAlign: 'center',
    },
    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15,
    },
});

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filtros de Comidas',
        headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>),
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
            title="Save" 
            iconName="ios-save" 
            onPress={navData.navigation.getParam('save')} 
            />
        </HeaderButtons>),
    }
};

export default FiltersScreen;