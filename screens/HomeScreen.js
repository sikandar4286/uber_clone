import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from "tailwind-react-native-classnames"

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-red-100`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        height: 100,
                        width: 100,
                        resizeMode: "contain"
                    }}
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'}}
                ></Image>
                {/* <Text style={[tw`bg-black`, styles.text]}>sikandar</Text> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "white",
        padding: "20px",
        // backgroundColor: "black",
    }
})
