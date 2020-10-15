import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";

import ProductItem from "./ProductItem";
import { useSelector } from 'react-redux';
export interface Props {
    products: any;
}
const ListProduct = (props: Props) => {
    const { products } = props;
    const [edit, setEdit] = useState(false)
    const handleEditClick = () => {
        edit ? setEdit(false) : setEdit(true);
    };
    const productlist = useSelector((state) => state.defaultProduct.productList);

    console.log(productlist,'preoducts');


    if (!productlist.length) {
        return (
            <View style={styles.listProduct}>
                <Text style={styles.title}>Danh sách sản phẩm</Text>
                <Text>Bạn chưa có sản phẩm nổi bật nào</Text>
            </View>
        );
    }
    return (
        <View style={styles.listProduct}>
            <View style={styles.title}>
                <Text>Danh sách sản phẩm ({productlist.length}/10)</Text>
                <Button
                    buttonStyle={styles.buttonEdit}
                    icon={<FontAwesome name="edit" size={18} color="#5D5D5D" />}
                    type="outline"
                    onPress={handleEditClick}
                />
            </View>
            <View style={styles.lisItem}>
                {productlist.map((product: any) => (

                    <View style={styles.item}>
                        <ProductItem key={product.key} product={product} edit={edit} />
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listProduct: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    title: {
        fontSize: 16,
        marginVertical: 16,
        flex: 1,
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
    },
    lisItem: {
        flexWrap: 'wrap',
        flexDirection: "row",
        flex: 6,
    },
    item: {
        width: "50%"
    },
    buttonEdit: {
        backgroundColor: "#E5E5E5",
        color: "#E5E5E5",
        borderColor: "#E5E5E5",
        borderRadius: 0,
    },
});

export default ListProduct;
