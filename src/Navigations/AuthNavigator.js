import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LoginStack } from "./LoginStack";
import Login from "../Screens/Login";


export function AuthNavigator(props) {
    const {isAuthenticated} = props

    return (

        <NavigationContainer>
            { isAuthenticated ? <LoginStack /> : <Login/> }
        </NavigationContainer>

    );
};
