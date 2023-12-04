import React from "react";
import { Alert, Button, Linking, Platform, StyleSheet, Text, View } from "react-native";


const LinkingPage = () => {

    const url1 = "https://www.payfast.co.za/eng/process/payment/be78a6fa-76f6-4618-90c6-b81b52a5e012";

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this url: ${url}`);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, margin: 10}}> Make Payment </Text>
            {/* <Text style={{ fontSize: 16, margin: 10}}> Product Description: UNI TONE</Text> */}
            {/* <Text style={{ fontSize: 16, margin: 10}}> Total Amount: 1 Items</Text> */}

            <View style={styles.buttonContainer}>
                <Button title="Complete Payment" onPress={() => {
                    openUrl(url1)
                }}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    buttonContainer: {
        margin: 10,
        height: 60,
        width: 300,
        backgroundColor: '#FF5733', 
        borderRadius: 30, 
        justifyContent: 'center', 
        alignItems: 'center'

    }
});

export default LinkingPage