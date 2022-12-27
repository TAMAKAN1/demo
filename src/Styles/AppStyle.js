import colors from "./colors";

const React = require("react-native");

const { StyleSheet } = React;


const styles = StyleSheet.create({

  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },

  /* AppBar Style */

  navBar: {
    height: 100,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
    borderBottomWidth: 0.2,

  },

  logoContainer: {
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  PEClogo: {
    width: 85,
    height: 50
  },

  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightIcon: {
    paddingHorizontal: 5,
  },

  iconStyle: {
    width: 30,
    height: 30,
    marginRight: 20
  },

  dateStyleIcon: {
    width: 25,
    height: 25,
  },

  /* End AppBar Style */


  flexStyle: {
    flex: 1,
    backgroundColor: colors.bgWhite
  },

  colorMain: {
    backgroundColor: '#F4F2F2'
  },

  backStyle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.bgDarkGray
  },

  mainTitle: {
    fontSize: 20,
    color: '#807F7F',
    fontWeight: '800'
  },

  secondryTitle: {
    fontSize: 16,
    marginTop: 20,
    color: '#807F7F'
  },
  textInputStyle: {
    marginTop: 5,
    borderRadius: 5,
    padding: 5,
    height: 35,
    
  },

  descriptionInputStyle: {
    height: 90,
    backgroundColor: colors.bgWhite
  },

  directionBtnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginTop: 30,
    marginRight: 70,
  },

  widthAndHeight: {
    height: "100%",
    width: "100%"
  },


  rowFlexTimeDate: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },

  rowFlexTimeSelect: {
    height: 30,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  widthTimeStyle: {
    width: 120,
    height: 30,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: colors.bgDarkGray
  },

  widthTimeStyleDate: {
    width: 100,
    height:45,
    backgroundColor: colors.bgWhite,
    marginTop: 10,
    borderRadius:5,
  },

  widthTimeStyleDateIos: {
    width: 140,
    height: 45,
    backgroundColor: colors.bgWhite,
    marginTop: 10,
    borderRadius:5,
    
  },

  selectStyle: {
    width: 150,
    marginTop: 10
  },
  
  dropDownTextStyles: {
    with: "100%",
    color: "#000",
    fontSize: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    marginLeft: -15,
    textAlign: 'center',

  },
  boxStyle: {
    borderRadius: 5,
    backgroundColor: colors.bgWhite,
    height: 45,
    borderColor: colors.bgWhite
  },

  dropdownStyle: {
    height: 80
  },

  fontStyle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: -15,
    marginLeft: -20,
    paddingHorizontal: 10,
    paddingVertical: 10
  },


  touchablestyle: {
    width: 130,
    height: 30,
    borderWidth: 1,
    borderColor: colors.bgDarkGray,
    borderRadius: 5,
    alignContent: "center",
  },

  cardStyle: {
    width: 350,
    height: 110,
    borderRadius: 10,
    backgroundColor: '#F4F2F2',
    marginLeft: 50,
  },

  cardStyleAndroid: {
    width: 280,
    height: 110,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#F4F2F2',
    justifyContent: 'center',
    marginLeft: 15
  },

  cardRow: {
    padding: 15,
    flexDirection: "row",
  },

  paddingLeft10: {
    paddingLeft: 15,
  },

  viewAdd: {
    marginLeft: 30,
  },

  viewColumn: {
    flexDirection: 'column',
    marginTop: 15,
  },

  container:{
    justifyContent:'center',
    alignItems:'center',
  },
  alignCenter:{
    alignItems:'center',
  },

  containerInput: {
    margin: 15,
    marginHorizontal: 90,
    marginTop: 50,
  },

  viewContainer:{
    flexDirection: 'row',
  },

  buttonStyle: {
    backgroundColor: "#D3CFCF",
    width: 100,
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonStyle2: {
    backgroundColor: "#D3CFCF",
    width: 100,
    height: 40,
    borderRadius: 10,
  
  },

  buttonStyleWhite: {
    backgroundColor: colors.bgWhite,
    width: 100,
    borderRadius: 10,
  },

  buttonsTextStyle:{
   textAlign:'center',
    color:colors.bgDarkGray,
    paddingTop: 10,
    fontWeight:"bold"
  },

  dropdownGender: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },

  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },

  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },

  flexRow: {
    flexDirection: 'row',
    marginLeft: 40,
  },
  flexRowm: {
    flexDirection: 'row',
  },

  flexRowRD:{
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignSelf:'flex-start',
  },

  dateStyle:{
    marginLeft: 15,
  },

  viewPlusBtn: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
    marginBottom: 20,
    padding: 20
  },

  plusBtn: {
    width: 70,
    height: 70
  },

  pointPositon: {
    marginLeft: -10,
    marginTop: 60
  },

  pointSize: {
    width: 20,
    height: 20
  },

  textBoldStyle: {
    fontWeight: "700",
    color: "gray",
  },

  companyNameStyleT: {
    color: "#72C9FE",
    fontWeight: "700"
  },

  companyNameStyleP: {
    color: "#F49A0C",
    fontWeight: "700"
  },

  companyNameStyleS: {
    color: "gray",
    fontWeight: "700"
  },

  roomColor1: {
    color: "#F49A0C",
    paddingRight: 10,
    fontWeight: "700",
  },

  roomColor2: {
    color: "#8B59D3",
    paddingRight: 10,
    fontWeight: "700",
  },

  roomColor3: {
    color: "#94D079",
    paddingRight: 10,
    fontWeight: "700",
  },

  separator: {
    borderBottomColor: colors.bgDarkGray,
    borderBottomWidth: 0.3,
    marginRight: 150,
    marginBottom: 50,
  },

  separatorAndroid: {
    borderBottomColor: colors.bgDarkGray,
    borderBottomWidth: 0.5,
    marginRight: 150,
    marginBottom: 50,
  },

  separatorBold: {
    borderBottomColor: colors.bgDarkGray,
    borderBottomWidth: 7,
    width: 100,
    marginTop: 10
  },

  separatorBoldSmall: {
    borderBottomColor: colors.bgDarkGray,
    borderBottomWidth: 5,
    width: 10,
    margin: 5,
  },

  verticalLine: {
    width: 0.5,
    backgroundColor: colors.bgDarkGray,
  },

  tetStyle: {
    backgroundColor: "blue",
    padding: 5,
    marginVertical: 8,
    fontSize: 5,
  },

  title: {
    fontSize: 10,
  },

  spaceBetweenTimes:{
    marginRight:10
  },

  endStartStyle:{
    color:colors.bgDarkGray
  },

  dateContainerStyle:{
    flexDirection:'row',
  },

  mainPadding:{
    textAlign:'center',
  },

  logoutIcon:{
    marginRight:15,
    padding:15,
    width: 15,
    height: 15
  },

  marginTopProfile:{
    marginTop:50,
  },

  userNameProfile:{
    fontSize: 18,
    color: colors.bgDarkGray 
  },

  editProfile:{
    width:15,
    height:15
  },

  editProfileText:{
    paddingLeft: 5,
    color: colors.bgDarkGray, 
  },

  marginBottonProfile:{
    marginBottom:40,
    borderBottomColor: colors.bgDarkGray,
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  padding15: {
    padding: 15
  },

  padding5: {
    padding: 5,
    paddingLeft: 16,
  },

  paddingRight10: {
  paddingRight: 10,
  },





});
export default styles;