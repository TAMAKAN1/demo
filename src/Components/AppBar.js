import React from "react"
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet
} from "react-native"
import logo_pec from "../../assets/pec_logo.png"
import profile from "../../assets/profile_icon.png"
import logout from '../../assets/logout.png'


const AppBar = ({title, ...res}) => {
    return (
        <View style={StyleComponents.navBar}>
            <View style={StyleComponents.logoContainer}>
                <Image source={logo_pec} style={StyleComponents.logoContainerAppBar} />
            </View>
            <View style={StyleComponents.rightContainer}>

                <View style={StyleComponents.rightIcon}>
                    <TouchableOpacity {...res}>
                        <Image source={ title == "profile"? logout  : profile} style={StyleComponents.iconStyle} />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )

}
export default AppBar;

//const {StyleSheet} = React;

const StyleComponents = StyleSheet.create({

        ///////////////////////////////Start AppBar Style//////////////////////////////////
    navBar: {
        
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 1,
        borderBottomWidth: 0.2,
    
      },

      logoContainer: {
        paddingHorizontal: 10,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems:'center',
        height: 90,
      },

      logoContainerAppBar: {
        width: 75,
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
   
});