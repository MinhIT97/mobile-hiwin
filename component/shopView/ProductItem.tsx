import { AntDesign } from "@expo/vector-icons";
import React, { useCallback, useRef } from "react";
import { Text, StyleSheet, View, PanResponder, Image, Animated } from "react-native";
import { Button } from "react-native-elements";
import { useDispatch, useSelector } from 'react-redux';
import IconEdit from './IconEdit';
import { changeBackground, removeBackground } from '../../action/changeBackground';
import { addProductToHot } from '../../action/moveProductToTop';
import { removeItemDefaultProduct } from '../../action/defautProduct';
export interface Props {
    product: any;
    edit: boolean,


}
const ProductItem = (props: Props) => {
    const { product, edit, } = props;

    console.log('peodsyds',product);

    const dispatch = useDispatch();

    const pt = useSelector(state => state.positionHotProduct.pt);

    const pt2 = pt;

    const r = useSelector(state => state.moveProductToHot.products);
    const ProductDefault = useSelector(state => state.defaultProduct.productList);

    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
                pan.setValue({ x: 0, y: 0 });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y },
                ], {
                listener: (event: any, gestureState: any) => {
                    const check = gestureState.moveY > pt2.current.y && gestureState.moveY < pt2.current.y + pt2.current.height + 300;
                    if (check && r.indexOf(product) === -1) {
                        r.push(product);
                        const addProduct = addProductToHot(r);
                        dispatch(addProduct);
                        const filteredItems = ProductDefault.filter((item: any) => item !== product)
                        const removeProduct = removeItemDefaultProduct(filteredItems);
                        dispatch(removeProduct);
                    }
                    const action = changeBackground('red');
                    dispatch(action);
                },
            }
            ),
            onPanResponderRelease: () => {
                Animated.spring(
                    pan,
                    {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: true,
                    },
                ).start();
                const action = removeBackground('#E5E5E5');
                dispatch(action);
            },

        })
    ).current;

    return (
        <Animated.View style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }], zIndex: 1999, flex: 1
        }}
            {...panResponder.panHandlers}>
            <View style={styles.listProduct}>
                <View style={styles.relative}>
                    <IconEdit edit={edit} />
                </View>
                <Image style={styles.image} source={{ uri: product.image }} />
                <View style={styles.text}>
                    <Text style={styles.title}>{product.text}</Text>
                    <Text style={styles.description}>{product.text}</Text>
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    listProduct: {
        flex: 1,
        alignItems: "stretch",
        margin: 4,
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        position: "relative"
    },
    text: {
        padding: 12,
    },
    description: {
        color: "#3BB54A",
        fontSize: 12,
    },
    image: {
        height: 150,
    },
    title: {
        fontSize: 14,
    },
    relative: {
        backgroundColor: "#fff",
        position: "absolute",
        top: -10,
        right: 0,
        zIndex: 2
    },
    button: {
        backgroundColor: "#fff",
    }
});

export default ProductItem;
