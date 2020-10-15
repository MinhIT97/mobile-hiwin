import React, { useState } from "react";
import {
    Image, ScrollView, StyleSheet, View
} from "react-native";
import { Button, colors } from "react-native-elements";
import HotView from "../component/shopView/HotView";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import ListProduct from "../component/shopView/ListProduct";
import { defaultProduct } from "../action/defautProduct";
import { useDispatch, useSelector } from 'react-redux';

export interface Props { }
const ShopViewScreen: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const onPress = () => setEdit(false);

    const products = [
        {
            key: 1,
            title: "Title 1",
            text: "Homestay view  núi",
            image:
                "https://cdn.shopify.com/s/files/1/0007/1791/4148/products/76443-171-0e79e4134d202f6384a26da843eb96102cb886ab_1024x1024.jpg?v=1576186512",
            backgroundColor: "#59b2ab",
        },
        {
            key: 2,
            title: "Title 2",
            text: "Homestay view  núi",
            image:
                "https://cdn.shopify.com/s/files/1/0007/1791/4148/products/76199-001-0e79e4134d202f6384a26da843eb96102cb886ab_1024x1024.jpg?v=1581406386",
            backgroundColor: "#febe29",
        },
        {
            key: 3,
            title: "Rocket guy",
            text: "Homestay view  núi",
            image:
                "https://cdn.shopify.com/s/files/1/0007/1791/4148/products/72992-010-0e79e4134d202f6384a26da843eb96102cb886ab_63194dd5-5118-4238-be45-9b0f54617b30_1024x1024.jpg?v=1576105131",
            backgroundColor: "#22bcb5",
        },
        {
            key: 4,
            title: "Rocket guy",
            text: "Homestay view  núi",
            image:
                "https://cdn.shopify.com/s/files/1/0007/1791/4148/products/76194-008-0e79e4134d202f6384a26da843eb96102cb886ab_1024x1024.jpg?v=1576186499",
            backgroundColor: "#22bcb5",
        },
        {
            key: 5,
            title: "Rocket guy",
            text: "Homestay view  núi",
            image:
                "https://cdn.shopify.com/s/files/1/0007/1791/4148/products/76194-008-0e79e4134d202f6384a26da843eb96102cb886ab_1024x1024.jpg?v=1576186499",
            backgroundColor: "#22bcb5",
        },
    ];
    const defaultProducts = defaultProduct(products);
    dispatch(defaultProducts);

   

    return (
        <ScrollView>
            <View style={styles.shopViewScreen}>
                <Image source={require("../assets/image/banner.jpg")} />
                <Button
                    icon={<AntDesign name="pluscircle" size={24} color="#022E5F" />}
                    title="Thêm sản phẩm"
                    buttonStyle={styles.button}
                />
                <View style={styles.hotView}>
                    <HotView products={""} />
                </View>
                <View style={styles.listProduct}>
                    <ListProduct  />
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    shopViewScreen: {
        flex: 1,
        backgroundColor: "#E5E5E5",
    },
    button: {
        backgroundColor: "#fff",
        color: "#022E5F",
    },
    hotView: {
        flex: 2,
        paddingHorizontal: 12,
    },
    listProduct: {
        flex: 2,
    },
});

export default ShopViewScreen;