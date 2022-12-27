import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    I18nManager, 
  } from 'react-native';
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { Card } from 'react-native-paper';
  import DateTimePickerModal from "react-native-modal-datetime-picker";
  import moment from 'moment';
  import { Platform } from 'react-native-web';


  import styles from '../Styles/AppStyle';
  import logo_pec from '../../assets/pec_logo.png';
  import profile from '../../assets/profile_icon.png';
  import Add from '../../assets/add_icon.png';
  import point from '../../assets/point.png';
  import authStore from '../Flux/AuthStore';
  
  
  
  const MeetingsHome = ({ navigation }) => {
    I18nManager.allowRTL(false);
  
    const [pickerMode, setPickerMode] = useState(false);
    const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  
  
    const [changeData, setChangeData] = useState(false);
  
    const [meetings, setMetings] = useState([]);
  
  
  
  
    /////////////////////////////////////////////////////////////////////////////////
  
    //* Function to get all meeting data from API database *//
    const getAllData = () => {
  
      axios.get("/meetings")
        .then((response) => {
          setMetings(response.data.data)
        });
    };
  
  
    //* First Function will opend , and the getAllData() it depend on changeData state *//
    useEffect(() => {
      getAllData();
    }, [changeData]);
  
  
    //* Form Style for add meeting *//
    return (
      <View style={styles.flexStyle}>
  
  
        <SafeAreaView style={styles.droidSafeArea}>
          {/* AppBar side */}
          <View style={styles.navBar}>
            <View style={styles.logoContainer}>
              <Image source={logo_pec} style={styles.PEClogo} />
            </View>
  
            <View style={styles.rightContainer}>
              <View style={[styles.rightIcon, styles.paddingRight10]}>
                <TouchableOpacity style={styles.widthTimeStyle} onPress={() => setPickerMode(true)}>
                  <Text style={styles.padding5}>{selectedDate}</Text>
                </TouchableOpacity>
  
                <DateTimePickerModal
                  isVisible={pickerMode}
                  mode="date"
                  locale="en_GB"
                  onConfirm={(date) => {
                    setSelectedDate(moment(date).format('YYYY-MM-DD'));
                    setPickerMode(false);
                  }}
                  onCancel={() => setPickerMode(false)}
                />
  
              </View>
  
              <View style={styles.rightIcon}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                  <Image source={profile} style={styles.iconStyle} />
                </TouchableOpacity>
  
              </View>
            </View>
          </View>
          {/* End AppBar side */}
  
          <ScrollView>
            <View style={styles.flexRow}>
              <SeparatorVirtical />
  
  
              {/* map is an array of object, here we used it to display the meeting info */}
              <View>
                {meetings.map((item, index) => {
                  if (item.user_id == authStore.user.id && item.date == selectedDate) {
                    return (
  
                      <View key={index}>
  
                        <View>
                          <View style={styles.viewContainer}>
  
                            <View style={styles.pointPositon}>
                              <Image source={point} style={styles.pointSize} />
                            </View>
  
                            <View style={styles.dateStyle}>
                              <Card style={Platform.OS == 'ios' ? styles.cardStyle : styles.cardStyleAndroid} >
  
                                <View style={styles.cardRow} >
                                  <Text style={styles.textBoldStyle}>{authStore.user.name}</Text>
                                  <SeparatorSmall />
                                  {
                                    (item.company_name == "Tamakan") ?
                                      <Text style={styles.companyNameStyleT}>{item.company_name}</Text> :
  
                                      (item.company_name == "PEC") ?
                                        <Text style={styles.companyNameStyleP}>{item.company_name}</Text> :
  
                                        (item.company_name == "Sahwah") ?
                                          <Text style={styles.companyNameStyleS}>{item.company_name}</Text> :
                                          <Text style={styles.textBoldStyle}>{item.company_name}</Text>
                                  }
  
                                  <View style={styles.rightContainer}>
  
                                    {
                                      (item.room_id == 1) ?
                                        <Text style={styles.roomColor1}>Room  {item.room_id}</Text> :
                                        (item.room_id == 2) ?
                                          <Text style={styles.roomColor2}>Room  {item.room_id}</Text> :
                                          (item.room_id == 5) ?
                                            <Text style={styles.roomColor3}>Room  {item.room_id}</Text> :
                                            <Text style={styles.roomColor1}>Room  {item.room_id}</Text>
                                    }
                                  </View>
                                </View>
  
                                <Text style={styles.paddingLeft10}>Client Name: {item.client_name}</Text>
                                <View style={styles.cardRow}>
                                  <Text>{item.description}</Text>
                                  <View style={styles.rightContainer}>
                                    <Text style={{ paddingRight: 10, }}>{item.start_time}</Text>
                                  </View>
                                </View>
  
                              </Card>
                            </View>
  
                          </View>
                        </View>
                      </View>
                    )
                  }
                })}
              </View>
  
            </View>
  
  
  
          </ScrollView>
  
          <View style={styles.viewPlusBtn}>
            <TouchableOpacity onPress={() => navigation.navigate('AddMeetings',
              {
                setChangeData: setChangeData,
                changeData: changeData,
              })}>
              <Image source={Add} style={styles.plusBtn} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    )
  };
  
  const SeparatorSmall = () => (
    <View style={styles.separatorBoldSmall} />
  );
  
  const SeparatorVirtical = () => (
    <View style={styles.verticalLine} />
  );
  
  export default MeetingsHome;