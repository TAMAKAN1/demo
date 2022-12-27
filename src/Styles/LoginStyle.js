import colors from "./colors";

const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({

  mainBackground: {
    backgroundColor: colors.bgOffWhite,
    height: 600,
  },

  flexLayaout: {
    flex: 1
  },

  marginLogo: {
    marginTop: -680,
  },

  logocontainer: {
    flex: 1,
    backgroundColor: colors.bgWhite,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },

  container: {
    marginTop: 80,
    marginLeft: 50,
  },

  loginstyle: {
    color: colors.bgDarkGray,
    fontSize: 35,
    marginBottom: 10,
  },

  loginstyleAndroid: {
    color: colors.bgDarkGray,
    fontSize: 28,
    marginBottom: 10,
  },

  inputTextAnderLine: {
    marginTop: 20,
    textTransform: "lowercase"
  },
  inputTextAnderLineAndroid: {
    marginTop: 20,
    textTransform: "lowercase"
  },

  errorText: {
    fontSize: 10,
    color: "red"
  },

  btncontainer: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },

  buttoncontainer: {
    backgroundColor: colors.bgWhite,
    borderRadius: 30,
    width: 150,
    height: 35,
    justifyContent: 'center',
    alignItems: "center",
    shadowColor: colors.bgDarkGray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
    marginTop: 20
  },
  buttoncontainerAndroid: {
    backgroundColor: colors.bgWhite,
    borderRadius: 30,
    width: 150,
    height: 35,
    justifyContent: 'center',
    alignItems: "center",
    shadowColor: colors.bgDarkGray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
    marginTop: 15
  },

  loginText:{
    color: colors.bgDarkGray
  },

  policyStyle: {
    color: colors.bgDarkGray,
    marginTop: 20,
    fontSize: 10
  },
  policyStyleAndroid: {
    color: colors.bgDarkGray,
    marginTop: 10,
    fontSize: 10
  },

  separatorunderLine: {
    borderBottomColor: colors.bgDarkGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 300,
    marginBottom: 15,
    marginTop: 15,
  },

  separatorunderLineAndroid: {
    borderBottomColor: colors.bgDarkGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 280,
    marginBottom: 15,
    marginTop: 10,
  },

  separatorBold: {
    borderBottomColor: colors.bgDarkGray,
    borderBottomWidth: 7,
    width: 40,
    marginBottom: 20,

  },

 
});


export default styles;