import { StyleSheet, Text, View } from 'react-native'


const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Teknoloji Haberleri</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({

    container: {
        backgroundColor: "dodgerblue",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
  
    },
    text: {
        fontSize: 17,
        color: "white",
    }


})