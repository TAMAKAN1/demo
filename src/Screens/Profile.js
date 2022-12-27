import {
    Text,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    I18nManager,
    ScrollView,
    TextInput
  } from 'react-native'
  import React from 'react'
  import styles from '../Styles/AppStyle'
  import down_arrow from '../../assets/down_arrow.png'
  import edit from '../../assets/edit.png'
  import AsyncStorage from '@react-native-async-storage/async-storage'
  import authStore from '../Flux/AuthStore'
  import { Token_Key } from '../Constants'
  import AppBar from '../Components/AppBar'
  import colors from '../Styles/colors'
  
  
  
  const Profile = ({ navigation }) => {
    I18nManager.allowRTL(false);
  
    function logout_fun() {
      authStore.setToken(null);
      AsyncStorage.removeItem(Token_Key);
    }
  
  
    return (
      <View style={styles.flexStyle}>
        <SafeAreaView style={styles.droidSafeArea}>
  
          <AppBar
            title={"profile"}
            onPress={() => logout_fun()} />
        
  
          <ScrollView>
            <View style={styles.cardRow} >
              <Image source={down_arrow} />
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={[styles.backStyle, colors.bgDarkGray]}>Back</Text>
              </TouchableOpacity>
            </View>
  
            <View style={styles.marginTopProfile} >
  
              <View style={styles.container}>
                <Text style={styles.userNameProfile}>{authStore.user.name}</Text>
  
                <View style={styles.cardRow} >
                  <Image source={edit} style={styles.editProfile} />
                  <TouchableOpacity>
                    <Text style={styles.editProfileText}>Edit</Text>
                  </TouchableOpacity>
                </View>
  
              </View>
  
  
              <View style={styles.containerInput}>
           
                <TextInput
                  placeholder={authStore.user.email}
                  style={styles.marginBottonProfile} />

                <TextInput
                  placeholder="Password"
                  style={styles.marginBottonProfile} />
            
              </View>
  
              <View style={styles.container}>
                <View style={styles.buttonStyle2}>
                  <TouchableOpacity
                    onPress={() => fechData()}
                    disabled={true} >
                    <Text style={styles.buttonsTextStyle}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
  
  
  
            </View>
  
          </ScrollView>
        </SafeAreaView>
  
      </View>
    )
  
  };
  
  export default Profile;