import { FontAwesome } from "@expo/vector-icons";
import React, { useCallback, useRef, useState } from "react";
import { Text, StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from "./ProductItem";
import { addPosition } from '../../action/positionHotProduct';
export interface Props {
    products: any;
}

const HotView = (props: Props) => {
    const { products } = props;
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [setBg, setSetBg] = useState('');
    const handleEditClick = () => {
        edit ? setEdit(false) : setEdit(true);
    };
    const dropZoneValues = useRef(null);
    const setDropZoneValues = useCallback(
        (event) => {
            dropZoneValues.current = event.nativeEvent.layout;
        }, []
    );
    const action = addPosition(dropZoneValues);
    dispatch(action);
    const bg = useSelector(state => state.changeBackgroundReducer.bg);
    const r = useSelector(state => state.moveProductToHot.products);


    if (!r.length) {
        return (
            <View onLayout={setDropZoneValues} style={[styles.hotView, { backgroundColor: bg }]}>
                <View style={styles.title}>
                    <Text style={styles.titleText}> Top nổi bật (0/3)</Text>
                </View>
                <Text style={styles.notProduct}>{bg === 'red' ? 'Kéo vào đây' : 'Bạn chưa có sản phẩm nổi bật nào'} </Text>
            </View>
        );
    }
    return (
        <View onLayout={setDropZoneValues} style={styles.hotView}>
            <View style={styles.title}>
                <Text style={styles.titleText}> Top nổi bật (4/4)</Text>
                <Button
                    buttonStyle={styles.buttonEdit}
                    icon={<FontAwesome name="edit" size={18} color="#5D5D5D" />}
                    onPress={handleEditClick}
                />
            </View>
            <View style={styles.lisItem}>
                {r.map((product: any) => (
                    <View style={styles.item}>
                        <ProductItem key={product.key} product={product} edit={edit} />
                    </View>
                ))}
            </View>

            {/* <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem product={item} edit={edit} />}
                numColumns={2}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    hotView: {
        flex: 1,
        flexDirection: "column",
        borderRadius: 4
    },
    title: {
        fontSize: 16,
        marginVertical: 16,
        flex: 1,
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
    },
    titleText: {
        color: "#5E5E5E",
    },
    notProduct: {
        alignItems: "center",
        textAlign: "center",
        marginVertical: 50
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

export default HotView;
