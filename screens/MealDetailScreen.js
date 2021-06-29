import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import DefaultText from "../components/DefaultText";
import HeaderButton from '../components/HeaderButton'

import { MEALS } from "../data/dummy-data";

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};

const MealDetailScreen = props => {

    const mealId = props.route.params.mealId;

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredient.map(ingredient => {
                return (
                    <ListItem key={ingredient}>{ingredient}</ListItem>
                );
            })}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => {
                return (
                    <ListItem key={step}>{step}</ListItem>
                );
            })}
        </ScrollView>
    );
};

export const MealDetailScreenOptions = navigationData => {
    const mealId = navigationData.route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight: (props) => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName='ios-star'
                    onPress={() => {
                        console.log('mark as fav!')
                    }} />
            </HeaderButtons>
        )
    }
};


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center',
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    }
});

export default MealDetailScreen;