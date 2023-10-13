import { StyleSheet, Text, View, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const Section = ({
    image,
    text = "Title",
    footerLeft = "icon1",
    footerLeftText = "subtitle1",
    footerRight = "icon2",
    footerRightText = "subtitle2",
}) => {
    return (
        <View>
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.image}
                        source={image}
                    />
                </View>
                <View>
                    <Text style={styles.text}>{text} </Text>
                    <View style={styles.footerContainer}>
                        <View style={styles.footerLeft}>
                            <FontAwesome name={footerLeft} size={15} color="black" />
                            <View>
                                <Text style={styles.footerLeftText}>{footerLeftText}</Text>
                            </View>
                        </View>
                        <View style={styles.footerRight}>
                            <FontAwesome name={footerRight} size={15} color="black" />
                            <View>
                                <Text style={styles.footerRightText}>{footerRightText}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottomBorder} ></View>
        </View>
    );
}

export default Section

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        padding: 10,
        width: 210,
        height: 130,
    },

    image: {
        width: 120,
        height: 110,
        resizeMode: "cover",
    },

    text: {
        textAlign: "justify",
        paddingLeft: 10,
        fontSize: 13,

    },


    footerContainer:{
        paddingLeft:7,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flex: 1,
    },
    
    footerLeftText: {
        fontSize: 12,
        marginLeft: 7,
    },
    footerRightText: {
        fontSize: 12,
        marginLeft: 7,
    },


    footerLeft: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    footerRight: {
        marginLeft: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(128, 128, 128, 0.1)'
    },

})