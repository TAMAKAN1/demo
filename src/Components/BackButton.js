import React from "react"
import { View,
Image,
TouchableOpacity,
Text,
StyleSheet} from "react-native"
import down_arrow from "../../assets/down_arrow.png"
import colors from "../Styles/colors"


const BackButton = ({...res}) => {
    return (
        <View style={StyleComponents.cardRow} >
            <Image source={down_arrow} />
            <TouchableOpacity {...res}>
                <Text style={StyleComponents.backStyle}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default BackButton;

const StyleComponents = StyleSheet.create({

  cardRow: {
    padding: 15,
    flexDirection: "row",
  },

  backStyle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.bgDarkGray
  },

});