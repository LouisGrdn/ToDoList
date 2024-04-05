import { React, useState } from "react";
import PropTypes from "prop-types";
import AddingButton from "./AddingButton";
import { View, StyleSheet, TextInput } from "react-native";

export default function AddingArea({ text = "", onChangeText = null, onPress = null }) {

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder="Nom de la tâche"/>
            <AddingButton onPress={onPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 50, 
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        flex: 1,
        marginRight: 20,
        borderRadius: 10,
        backgroundColor: '#fff'
    }
})

AddingArea.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    onChangeInput: PropTypes.func,
}