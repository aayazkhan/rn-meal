import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import DefaultText from "../components/DefaultText";
import MealList from "../components/MealList";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {


    const catId = props.route.params.categoryId;

    const availableMeals = useSelector(state => state.meals.fiterMeals);

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryId.indexOf(catId) >= 0
    );

    if (displayedMeals.length === 0 || !displayedMeals) {
        return (
            <View style={styles.content}>
                <DefaultText>No meals found, maybe check your filters?</DefaultText>
            </View>
        );
    }

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};

export const CategoryMealsScreenOptions = navigationData => {
    const catId = navigationData.route.params.categoryId;
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,
    }
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen;