import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Linking,
  Platform,
  Dimensions,
  I18nManager
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import logo_pec from "../../assets/logo_pec.png";
import styles from '../Styles/LoginStyle';
import networkimage from "../../assets/networkimage.png";
import { Token_Key } from "../Constants";
import dispatcher from "../Flux/dispatcher";
import { SET_TOKEN, SET_USER } from "../Redux/Actions/Actions";
import AlertModal from "../Components/AlertModal";




export default function Login() {

  {/* To set the App with english language */ }
  I18nManager.allowRTL(false);
  {/* To use this verabile to create condition to set responsive screen  */ }
  const { width, height } = Dimensions.get('window');

  const [isloading, setIsLoading] = useState(false);
  const [inputEmail, setEmail] = useState(null);
  const [inputPassword, setPassword] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [emailArray, setEmailArray] = useState([]);
  
  const [modalVisible, setModalVisible] = useState(false);


  /////////////////////////////////////////////////////////////////////////////

  const onChangeEmail = (val) => {
    //* To ignore the space with email address *//
    if (val.includes(" ")) {
      setEmail(val.trim());
      setErrorMessage("")
    }
    else {
      setEmail(val);
      setErrorMessage("")
    }
  }

  //* To call getEmail when opening the login page directly *//
  useEffect(() => {
    getEmail()

  }, [])

  //* Function to get all employee's Email addresses from the API *//
  const getEmail = () => {
    axios.get('/employee')
      .then((res) => {
        let allEmails = res.data.data.map((emailItem) => {
          //* To convert all array email addresses to lowercase letters
          //* to ignore any capital letter on comparing *//
          return emailItem.email.toLowerCase()
        })
        setEmailArray(allEmails)
      })
      .catch("Error")
  }

  //* Function to check if the email is found in the database or not there *//
  function checkEmail() {

    const findEmail = emailArray.includes(inputEmail.toLowerCase())
    return findEmail;

  }


  /////////////////////////////////////////////////////////////////////////////
  const loginBtn = () => {

    //* Check Email And Password *//
  
    if (inputEmail == null || inputPassword == null) {
      return (
        setModalVisible(true)
      );
    }
    else if (!inputEmail.includes("@")) {
      return (
        setModalVisible(true)  
      );
    }

    //* If Email Entered is correct *//
    else if (checkEmail() == true) {

      // start loading ActivityIndicator
      setIsLoading(true);
      // connect with axios
      axios.post('/login', {
        email: inputEmail,
        password: inputPassword,
      }).then(res => {
        if (res.status == 200 && res.data.data) {
          const userinfo = res.data.data.user;
          const token = res.data.data.access_token;
          axios.defaults.headers.Authorization = 'Bearer' + token;
          dispatcher.dispatch({ type: SET_TOKEN, payload: { token } });
          dispatcher.dispatch({ type: SET_USER, payload: { user: userinfo } });
          AsyncStorage.setItem(Token_Key, token);
        }
      })
        .catch("Error")
        .finally(() => {
          // stop loading ActivityIndicator
          setIsLoading(false);
        })
    }

    //* If entered Email is incorrect *//
    else {
      setErrorMessage("Email Or Password Is Incorrect !!  Try Again Please..")
    }
  }

  //* LogIn Form Style *//
  return (
    <ScrollView>
      {modalVisible == true
        ? <AlertModal
          text={inputEmail == null
            ? "All Fields Must Be Entered \nTry Again Please.."
            : !inputEmail.includes("@")
              ? 'You Must Enter Currect Email!!\nTry Again Please..'
              : null}
          btnTitle="Ok"
          onPress={() => setModalVisible(!modalVisible)}
        /> : null}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios"
          || Platform.OS === "android"
          || Platform.OS === "web"
          ? "padding" : "height"} style={styles.flexLayaout}>

        <View style={styles.mainBackground}>
          <View style={styles.flexLayaout}>
            <View>
              <Image source={networkimage} />
            </View>

            <SafeAreaView style={styles.flexLayaout}>
              <View style={styles.marginLogo}>

                <View style={styles.logocontainer}>
                  <Image source={logo_pec} />
                </View>

                <View style={styles.container}>
                  <SeparatorBold />

                  <Text style={Platform.OS == 'ios'
                    || Platform.OS == 'web'
                    ? styles.loginstyle
                    : styles.loginstyleAndroid}>Login</Text>

                  <TextInput
                    placeholder="Email"
                    onChangeText={(val) => onChangeEmail(val)}
                    autoCapitalize="none"
                    style={Platform.OS == 'ios'
                      || Platform.OS == 'web'
                      ? styles.inputTextAnderLine
                      : styles.inputTextAnderLineAndroid} />

                  <SeparatorUnerLine />
                  <Text style={styles.errorText}>{errorMessage}</Text>

                  <TextInput
                    placeholder="Password"
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    style={styles.inputTextAnderLine} />
                  <SeparatorUnerLine />
                  <Text style={styles.errorText}>{passwordErrorMessage}</Text>

                </View>

                <View style={styles.btncontainer}>
                  <TouchableOpacity
                    style={Platform.OS == 'ios'
                      || Platform.OS == 'web'
                      ? styles.buttoncontainer
                      : styles.buttoncontainerAndroid}

                    onPress={() => {
                      loginBtn()
                    }}>

                    <Text style={styles.loginText}>{isloading == true ? <ActivityIndicator /> : "Login"}</Text>
                  </TouchableOpacity>



                  <TouchableOpacity onPress={() => Linking.openURL('http://meeting.sahwalaws.com/privacy.pdf')}>
                    <Text style={Platform.OS == 'ios'
                      || Platform.OS == 'web'
                      ? styles.policyStyle
                      : styles.policyStyleAndroid}>Policy and Privacy</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );

};

const SeparatorUnerLine = () => (
  <View style={Platform.OS == 'ios' || Platform.OS == 'web' ? styles.separatorunderLine : styles.separatorunderLineAndroid} />
);

const SeparatorBold = () => (
  <View style={styles.separatorBold} />
)