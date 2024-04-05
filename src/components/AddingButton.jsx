import React from "react";
import PropTypes from "prop-types"
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddingButton({onPress = null}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <FontAwesomeIcon icon={faPlus} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'flex-end',
    },

    button: {
        borderWidth: 2,
        borderRadius: 5,
        marginRight: 5,
        backgroundColor: '#fff'
    }
})

AddingButton.propTypes = {
    onPress: PropTypes.func
}