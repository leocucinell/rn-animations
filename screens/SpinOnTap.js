import {StyleSheet, View, TouchableOpacity} from "react-native"
import { useRef } from "react";

const SpinOnTap = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
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