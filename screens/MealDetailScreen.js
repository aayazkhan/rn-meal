import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const MealDetailScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Meal Detail Screen</Text>
            <Button title='Go Back!' onPress={() => {
                props.navigation.goBack();
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MealDetailScreen;