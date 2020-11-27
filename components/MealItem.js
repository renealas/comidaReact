import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground } from 'react-native';

import Colors from '../constants/Colors';
import DefaultText from '../components/DefaultText';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableNativeFeedback onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <DefaultText style={styles.bodyText}>{props.duration} Minutos</DefaultText>
                        <DefaultText style={styles.bodyText}>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText style={styles.bodyText}>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },
    mealItem: {
        height: 200,
        width: '95%',
        backgroundColor: Colors.primaryColor,
        borderRadius: 15,
        overflow:'hidden',
        marginTop: 10,
        marginLeft: 10,
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between', 
        alignItems: 'center',
        height: '15%',        
    },
    bgImage:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',        
        textAlign: 'center',
    }, 
    bodyText:{
        color: 'white',
        fontSize: 16,
    },
});

export default MealItem;