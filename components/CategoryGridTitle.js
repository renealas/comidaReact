import React from 'react';
import { TouchableNativeFeedback,  View, Text, StyleSheet} from 'react-native';

const CategoryGridTile = props => {
    return(
        <View style={styles.gridItem}>
        <TouchableNativeFeedback 
        onPress={props.onSelect}            
        >
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
        </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem:{
        flex: 1, 
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        overflow: 'hidden',
    },
    container:{
        flex:1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10, 
        elevation: 3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 18, 
        textAlign: 'center',
    }
});

export default CategoryGridTile;