import React from "react";
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from "react-native";

const MealItem = props => {

    let TouchableCmp = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.mealItem}>
            <TouchableCmp activeOpacity={0.26} onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.uri }} style={styles.bgImage} >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        width: '100%',
        height: 200,
        backgroundColor: '#ccc',
    },
    mealRow: {
        flexDirection: 'row',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    mealHeader: {
        height: '90%',
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
});

export default MealItem;