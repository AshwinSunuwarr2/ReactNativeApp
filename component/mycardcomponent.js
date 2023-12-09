import { Text, View, Image, StyleSheet, FlatList, ActivityIndicator } from "react-native"
import React, { useEffect, useState } from "react"
import { TouchableOpacity } from "react-native";
// import { StatusBar } from "expo-status-bar"

export default function MyCard() {
    const [currentuserdata, setuserdata] = useState([]);
    const [currentloadstatus, setloadstatus] = useState(true)

    const userdata = async () => {
        try {
            const response = await fetch("https://raw.githubusercontent.com/AshwinSunuwarr2/userdata/main/userdata.json")
            const responseData = await response.json();
            // console.log("Raw Response:", responseData);

            // const userData = JSON.parse(responseData)
            setuserdata(responseData)
            setloadstatus(false)
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        userdata();
    }, []);

    if (currentloadstatus) {
        return (
            <ActivityIndicator size={'large'} color={"black"} />
        )
    }

    return (
        <FlatList
            data={currentuserdata}
            renderItem={({ item }) => {
                return (
                    <View style={styles.mainContainer}>
                        <View style={styles.userDP}>
                            <Image source={{ uri: item.userprofilepic }} style={styles.userDPImage} />
                            <Text style={styles.userDPName}>{item.username}</Text>
                        </View>
                        <TouchableOpacity>
                            <Image style={styles.userPost} source={{ uri: item.userpost }} />
                        </TouchableOpacity>

                        <View style={{ width: '100%', height: 55, backgroundColor: 'white', flex: 0, flexDirection: 'row', alignItems: "center", padding: 10 }}>
                            <Image source={require("../assets/image/heart.png")} style={styles.heartIcon} />
                            <Image source={require("../assets/image/comment.png")} style={styles.comIcon} />
                        </View>
                        <Text style={{ marginLeft: 2, fontSize: 16, paddingHorizontal: 10 }}>
                            <Text style={styles.userDPName}>{item.username}</Text>
                            <Text>  </Text>
                            <Text>{item.userpostdescription}</Text>
                        </Text>
                    </View>
                );

            }} />
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "auto",
        borderWidth: 1,
        borderRadius: 20,
        height: 550,
        margin: 10,
        marginTop: 35,
        borderColor: "#d6d5d2"
    },
    userDP: {
        height: 60,
        backgroundColor: "#d6d5d2",
        flex: 0,
        flexDirection: "row",
        padding: 10,
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    userDPImage: {
        width: 35,
        aspectRatio: 1,
        borderRadius: 35,
    },
    userDPName: {
        paddingLeft: 10,
        fontWeight: "500",
        fontSize: 18,
        // letterSpacing: 0.25
    },
    userPost: {
        width: "100%",
        aspectRatio: 1
    },
    heartIcon: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    comIcon: {
        width: 37,
        height: 30
    }

})