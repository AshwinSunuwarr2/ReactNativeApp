import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function ViewPhoto() {
    return (
        <View style={styles.photoStyle}>
            <Image source={{ uri: "https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg" }} style={{ width: "100%", aspectRatio: 1, objectFit: 'contain' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    photoStyle: {
        backgroundColor: 'grey'
    }
})