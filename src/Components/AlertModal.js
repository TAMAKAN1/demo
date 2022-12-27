import React from 'react';
import { Image, Modal, StyleSheet, Text, View, Pressable } from 'react-native';
import cross from '../../assets/cross.png';
import checked from '../../assets/checked.png'
import colors from '../Styles/colors';

const AlertModal = ({ text, btnTitle, modalVisible, setModalVisible, onPress, success, setSuccess, faild, setFaild, wrongTime, setWrongTime }) => {

    return (
        <View >
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    setSuccess(success == true ? !success : false);
                    setFaild(faild == true ? !faild : false);
                    setWrongTime(wrongTime == true ? !wrongTime : false);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image source={ success == true ? checked : cross} style={styles.imageStyle}/>
                        <Text style={styles.modalText}>{text}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={onPress}>
                            <Text style={styles.textStyle}>{btnTitle}</Text>
                        </Pressable>
                    </View>
                </View>

            </Modal>
        </View>


    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "#000000aa"
    },
    modalView: {
        margin: 20,
        backgroundColor: colors.bgWhite,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },

    buttonClose: {
        backgroundColor: colors.bgOrange,
        width: 100,
    },
    textStyle: {
        color: colors.bgWhite,
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    imageStyle:{
        width: 50,
        height: 50,
        marginBottom: 25,
    }
});

export default AlertModal;