import {StyleSheet, View, TouchableOpacity, Animated} from "react-native"
import { useRef } from "react";
import { transform } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ShakeOnTap = () => {

    const position = useRef(new Animated.Value(0)).current

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    Animated.spring(position, {})
                }}
            >
                <Animated.View style={styles.square} ></Animated.View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(0, 250, 100, 0.8)'
    }
});

export default ShakeOnTap;