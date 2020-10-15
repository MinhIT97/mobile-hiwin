import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";


export interface Props {
    edit: boolean;
}
const IconEdit = (props: Props) => {
    const { edit } = props;
    if (edit) {
        return (
            <Button buttonStyle={styles.buttonEdit} icon={<AntDesign name="minuscircle" size={24} color="red" />} />
        );
    }
    return (
        <Text></Text>
    );

};

const styles = StyleSheet.create({
    buttonEdit: {
        backgroundColor: "#fff",
        color: "#E5E5E5",
        borderColor: "#E5E5E5",
        borderRadius: 0,
    },
});

export default IconEdit;
