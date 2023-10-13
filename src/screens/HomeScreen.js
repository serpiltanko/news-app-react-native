import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import Section from '../components/Section'
import Sections from '../components/Sections'



const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar />
            <View style={styles.container}>
                <Header />
                <Sections />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

    safeAreaView: {
        flex: 1,
        backgroundColor: "dodgerblue",
    },

    container: {
        flex: 1,
        backgroundColor: "white",
    }


})