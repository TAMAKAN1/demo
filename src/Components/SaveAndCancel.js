import React from "react"
import {
    View,
    TouchableOpacity,
    Text,
StyleSheet} from "react-native"
import colors from "../Styles/colors";

const Save_Cancel = ({title, ...res}) => {

    return (
        <View style={[StyleComponents.buttonStyle, colors.bgWhiteRed]}>
            <TouchableOpacity {...res} style={[StyleComponents.buttonStyle, {backgroundColor: colors.bgOrange}]}>
                <Text style={StyleComponents.buttonsTextStyle}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Save_Cancel;

const StyleComponents = StyleSheet.create({
  buttonStyle: {
    width: 100,
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
  },

  buttonsTextStyle:{
    textAlign:'center',
     paddingTop: 10,
     fontWeight:"bold",
     color: colors.bgWhite
   },


});