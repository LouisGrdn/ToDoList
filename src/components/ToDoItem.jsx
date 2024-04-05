import React, { useState } from "react";
import { Button, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types"
import CheckBox from 'react-native-check-box'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function ToDoItem({id = -1, name = "", onDelete = null}) {
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onDelete(id)}>
                <FontAwesomeIcon icon={faTrash} />
            </TouchableOpacity>
            <Text>{name}</Text>
            <CheckBox onClick={() => {setChecked(!checked)}} isChecked={checked} name="check"/>
        </View>
    )
}

ToDoItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    onDelete: PropTypes.func,
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 20,
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 50,
        marginVertical: 10,
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
})