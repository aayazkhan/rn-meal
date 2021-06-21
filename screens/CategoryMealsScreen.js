import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = props => {

    const renderMealItem = (itemData) => {
        return (
           <MealItem 
           title={itemData.item.title} 
           duration={itemData.item.duration}
           complexity={itemData.item.complexity}
           affordability={itemData.item.affordability}
           uri={itemData.item.imageUrl}
           onSelectMeal={() => {}} />
        );
    };

    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.categoryId.indexOf(catId) >= 0
    );

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width:'100%'}}
            />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CategoryMealsScreen;