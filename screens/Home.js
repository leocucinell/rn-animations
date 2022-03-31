import { StyleSheet, View, Button, Text } from "react-native";

const Home = ({ navigation }) => {
    return(
        <View style={styles.main}>
            <Text style={styles.title}>Choose an animation</Text>
            <Button
                title="Square to Circle"
                onPress={() => {
                    navigation.navigate('Square')
                }}
            />
            <Button
                title="Shake on tap"
                onPress={() => {
                    navigation.navigate('Shake')
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        marginTop: 50
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10
    }
});

export default Home;