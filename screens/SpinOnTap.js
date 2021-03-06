import {StyleSheet, View, TouchableOpacity, Animated} from "react-native"
import { useRef } from "react";

const SpinOnTap = () => {

    const twirlAnim = useRef(new Animated.Value(0)).current

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    Animated.sequence([
                        //Spin the square forward
                        Animated.spring(twirlAnim, {
                            toValue: 360,
                            useNativeDriver: true
                        })
                        //Spin the square back
                    ]).start();
                }}
            >
                <View style={styles.square} ></View>
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

export default SpinOnTap;