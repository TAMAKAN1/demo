import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    I18nManager
} from "react-native";
import { Platform } from 'react-native-web';

import styles from "../Styles/AppStyle"
import day_icon from "../../assets/day_icon.png"
import axios from "axios";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import authStore from "../Flux/AuthStore"
import AppBar from "../Components/AppBar"
import BackButton from "../Components/BackButton"
import SaveAndCancel from "../Components/SaveAndCancel"
import AlertModal from "../Components/AlertModal"


const AddMeeting = ({ navigation, route }) => {
    I18nManager.allowRTL(false);

    const [pickerMode, setPickerMode] = useState('date');
    const [showPicker, setShowPicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
    const [selectedStartTime, setSelectedStartTime] = useState(moment(new Date()).format('hh:mm'));
    const [selectedEndTime, setSelectedEndTime] = useState(moment(new Date()).format('hh:mm'));

    const [idDate, setIdDate] = useState("");

    const changeData = route.params.changeData;
    const setChangeData = route.params.setChangeData;

    const [clientname, setClientName] = useState(null);
    const [description, setDescription] = useState(null);

    const [roomId, setRoomID] = useState([]);
    const [selected, setSelected] = useState(null);


    const [modalVisible, setModalVisible] = useState(false);

    const [success, setSuccess] = useState(false);
    const [faild, setFaild] = useState(false);
    const [wrongTime, setWrongTime] = useState(false);
    /////////////////////////////////////////////////////////////////////////////////

    //* Function which open date or time mode  *//
    function onChangeShowPicker(id) {

        if (id == 0) {
            setShowPicker(true);
            setPickerMode('date');
            setIdDate(id)
        }
        else if (id == 1) {
            setShowPicker(true);
            setPickerMode('time');
            setIdDate(id)
        }
        else {
            setShowPicker(true);
            setPickerMode('time');
            setIdDate(id)
        }

    }

    //* Function which change Date and Time *//
    function onChangeDate(date) {

        if (idDate == 0) {
            setSelectedDate(moment(date).format('YYYY-MM-DD'));
        }

        else if (idDate == 1) {
            setSelectedStartTime(moment(date).format('hh:mm'));

        }

        else if (idDate == 2) {
            setSelectedEndTime(moment(date).format('hh:mm'));
        }

        else {
            console.log("........else")
        }

    }

    const [companyList, setCompanyList] = useState("")
    const CompanyData = [
        { key: 'PEC', value: 'PEC' },
        { key: 'Tamakan', value: 'Tamakan' },
        { key: 'Sahwah', value: 'Sahwah' },
    ]

    //* First function will run when this page opned, it will get the rooms info from API database *//
    useEffect(() => {
        axios.get('/rooms')
            .then((response) => {
                let newArray = response.data.data.map((item) => {
                    return { key: item.id, value: item.room_name }
                })
                setRoomID(newArray)
            })
    }, []);



    //* Function which sends the data to the server *//
    const SendData = () => {

        //let currentTime = moment(new Date()).format('hh:mm');

        if (clientname == null || companyList == null || selectedStartTime == null || selectedEndTime == null || selected == null || description == null || selectedDate == null) {
            return (
                setModalVisible(true)
            );
        }



        else {
            axios.post(`/store-meetings?client_name=${clientname}&company_name=${companyList}&date=${selectedDate}&start_time=${selectedStartTime}&end_time=${selectedEndTime}&description=${description}&room_id=${selected}&user_id=${authStore.user.id}`,
            )
                .then((response) => {

                    if (response.data.message == "meeting added") {
                        setChangeData(!changeData);
                        setModalVisible(true);
                        setSuccess(true)
                    }

                    else if (response.data.message == "Room not available. Try Again later!") {
                        setModalVisible(true)
                        setFaild(true)
                       
                    }
                })


        }

    };

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.flexStyle}>
            <AlertModal
                btnTitle={"Ok"}
                onPress={() => { setModalVisible(!modalVisible), success == true ? navigation.navigate('MeetingsHome') : null }}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                text={
                    clientname == null || companyList == null || selectedStartTime == null || selectedEndTime == null || selected == null || description == null || selectedDate == null
                        ? "All Fields Must Be Entered\nTry Again Please.."
                        : faild == true ?
                            "Room Not Available At This Time\nTry Again With Another Time!"
                            : success == true ?
                                "Your Meeting Has Been Added\nWe wish you a successful meeting"
                                : wrongTime == true ?
                                    "You Have Some Wrong Entered!\nCheck Please..."
                                    : null
                }
                success={success}
                setSuccess={setSuccess}
                faild={faild}
                setFaild={setFaild}
                wrongTime={wrongTime}
                setWrongTime={setWrongTime} />

            <View style={styles.flexStyle}>

                <SafeAreaView style={[styles.flexStyle, styles.droidSafeArea]}>

                    <AppBar
                        onPress={() => navigation.navigate('Profile')} />

                    <ScrollView style={styles.colorMain}>

                        <BackButton
                            onPress={() => navigation.goBack()} />

                        <View style={styles.viewAdd}>
                            <Text style={styles.mainTitle}>Book An Appoinment</Text>
                            <SeparatorBold />

                            <View style={styles.viewColumn}>

                                <Text style={styles.secondryTitle} key='client_name'>Client Name</Text>
                                <TextInput style={styles.textInputStyle}
                                    width='80%'
                                    placeholder='Client Name'
                                    backgroundColor='#fff'
                                    onChangeText={(clientname) => setClientName(clientname)} />

                                <Text style={styles.secondryTitle} key='company'>Company</Text>
                                <View style={styles.selectStyle}>
                                    <SelectList
                                        setSelected={setCompanyList}
                                        data={CompanyData}
                                        defaultOption={{ value: 'PEC' }}
                                        onSelect={() => {
                                            setCompanyList(companyList)
                                        }}
                                        search={false}
                                        boxStyles={styles.boxStyle} />
                                </View>


                                <View style={styles.flexRowRD}>
                                    <View>
                                        <Text style={styles.secondryTitle} key='room_id'>Room Number</Text>


                                        <View style={styles.selectStyle}>
                                            <SelectList
                                                setSelected={setSelected}
                                                data={roomId}
                                                defaultOption={{ value: 'Room 1' }}
                                                onSelect={() => {
                                                    setSelected(selected)
                                                }}
                                                search={false}
                                                boxStyles={styles.boxStyle} />
                                        </View>
                                    </View>


                                    <View style={styles.dateStyle}>
                                        <Text style={styles.secondryTitle}>Date</Text>

                                        <View style={styles.rowFlexTimeDate}>
                                            <View style={styles.dateContainerStyle}>
                                                <TouchableOpacity
                                                    style={
                                                        [Platform.OS == 'ios' ? styles.widthTimeStyleDateIos
                                                            : styles.widthTimeStyleDate, styles.dateContainerStyle, styles.alignCenter]}
                                                    onPress={() => onChangeShowPicker(0)}>

                                                    <Text style={styles.padding15}>{selectedDate}</Text>
                                                    <Image source={day_icon} style={styles.dateStyleIcon} />

                                                </TouchableOpacity>

                                                <DateTimePickerModal
                                                    isVisible={showPicker}
                                                    mode={pickerMode}

                                                    locale="en_GB"
                                                    onConfirm={(date) => {
                                                        onChangeDate(date);
                                                        setShowPicker(false)
                                                    }}
                                                    onCancel={() => setShowPicker(false)}
                                                />

                                            </View>

                                        </View>
                                    </View>

                                </View>



                                <Text style={styles.secondryTitle}>Time</Text>

                                <View style={[styles.rowFlexTimeSelect]}>
                                    <View style={styles.spaceBetweenTimes}>
                                        <TouchableOpacity style={styles.widthTimeStyle} onPress={() => onChangeShowPicker(1)}>
                                            <Text style={styles.padding5}><Text style={styles.endStartStyle}>Start:</Text> {selectedStartTime}</Text>
                                        </TouchableOpacity>
                                        <DateTimePickerModal
                                            isVisible={showPicker}
                                            mode={pickerMode}
                                            is24Hour={true}
                                            locale="en_GB"
                                            onConfirm={(time1) => {
                                                onChangeDate(time1);
                                                setShowPicker(false)
                                            }}
                                            onCancel={() => setShowPicker(false)}
                                        />
                                    </View>

                                    <View>
                                        <TouchableOpacity style={styles.widthTimeStyle} onPress={() => onChangeShowPicker(2)}>
                                            <Text style={styles.padding5}><Text style={styles.endStartStyle}>End:</Text> {selectedEndTime}</Text>
                                        </TouchableOpacity>
                                        <DateTimePickerModal
                                            isVisible={showPicker}
                                            mode={pickerMode}
                                            is24Hour={true}
                                            locale="en_GB"
                                            onConfirm={(time2) => {
                                                onChangeDate(time2);
                                                setShowPicker(false)
                                            }}
                                            onCancel={() => setShowPicker(false)}
                                        />
                                    </View>

                                </View>

                                <Text style={styles.secondryTitle} key='description'>Description</Text>
                                <TextInput style={[styles.textInputStyle, styles.descriptionInputStyle]}
                                    placeholder='Here Description'
                                    width='80%'
                                    onChangeText={(description) => setDescription(description)} />

                                <View style={styles.directionBtnStyle}>
                                    <SaveAndCancel
                                        title={"Cancel"}
                                        onPress={() => navigation.goBack()} />
                                    <SaveAndCancel
                                        title={"Book"}
                                        onPress={() => SendData()} />
                                </View>

                            </View>

                        </View>

                    </ScrollView>
                </SafeAreaView>
            </View>
        </KeyboardAvoidingView>

    )
}
const SeparatorBold = () => (
    <View style={styles.separatorBold} />
);
export default AddMeeting;