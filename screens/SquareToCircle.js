import { StyleSheet, View, Animated } from "react-native";
import {useRef, useEffect} from 'react';

const SquareToCircle = () => {

    const progress = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        //beginning opacity
        Animated.sequence([
            Animated.timing(progress, {
                toValue: 1,
                useNativeDriver: true
            }),
            Animated.timing(progress, {
                toValue: 0.5,
                useNativeDriver: true
            })
        ]).start();
        
        
        //scale
        Animated.spring(scale, {
            toValue: 2,
            useNativeDriver: true
        }).start();
    }, [])

    return(
        <View style={styles.container}>
            <Animated.View style={[
                styles.square, 
                {opacity: progress, 
                transform: [{scale}, {rotate: progress.interpolate({
                    inputRange: [0.5, 1],
                    outputRange: [Math.PI, 2*Math.PI]
                })}],
                borderRadius: progress.interpolate({
                    inputRange: [0.5, 1],
                    outputRange: [SIZE / 4, SIZE / 2]
                })
                }
            ]} />
        </View>
    );
}

const SIZE = 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    square: {
        width: SIZE,
        height: SIZE,
        borderRadius: 0,
        backgroundColor: 'rgba(0, 0, 255, 0.5)'
    }
});

export default SquareToCircle;