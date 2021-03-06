import React, { useEffect, useCallback } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import { toggleFavorite } from "../store/actions/meals";

import DefaultText from "../components/DefaultText";
import HeaderButton from '../components/HeaderButton'

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};

const MealDetailScreen = props => {

    const mealId = props.route.params.mealId;

    const availableMeals = useSelector(state => state.meals.meals);

    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({ toggleFavorite: toggleFavoriteHandler });
    }, [toggleFavoriteHandler])

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
    const mealTitle = navigationData.route.params.mealTitle;
    const toggleFavorite = navigationData.route.params.toggleFavorite;
    const isFavorite = navigationData.route.params.isFavorite;

    return {
        headerTitle: mealTitle,
        headerRight: (props) => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
                    onPress={() => {
                        toggleFavorite();
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