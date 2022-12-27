import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MeetingsHome from "../Screens/MeetingsHome";
import Profile from "../Screens/Profile";
import AddMeetings from "../Screens/AddMeetings";
import Save_Cancel from "../Components/SaveAndCancel";
import BackButton from "../Components/BackButton";


const Stack = createStackNavigator();

export function LoginStack() {
   
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='MeetingsHome'>

            <Stack.Screen
                name="MeetingsHome"
                component={MeetingsHome}
                />

            <Stack.Screen
                name="Profile"
                component={Profile}
                />

            <Stack.Screen
                name="AddMeetings"
                component={AddMeetings}
                />

            <Stack.Screen
            name="Save_Cancel"
            component={Save_Cancel}/>

            <Stack.Screen
            name="BackButton"
            component={BackButton}/>

        </Stack.Navigator>
    );
}