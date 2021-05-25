import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import db from '../config'
import {DrawerItems, createDrawerNavigator} from '@react-navigation/drawer'
import firebase from 'firebase'
import WelcomeScreen from '../screens/WelcomeScreen'

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.drawerItemsContainer}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style = {styles.logOutContainer}>
                    <TouchableOpacity style = {styles.logOutButton}
                    onPress ={() =>{
                        this.props.navigation.navigate("WelcomeScreen")
                        firebase.auth().signOut()
                    }}>
                        <Text style = {styles.logOutText}> Sign Out </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



var styles = StyleSheet.create({
    container : {
        flex : 1
    },
    drawerItemsContainer : {
        flex : 0.8,
    },
    logOutContainer : {
        flex : 0.6,
        justifyContent : 'flex-end',
        paddingBottom : 25
    },
    logOutButton : {
        height : 40,
        width : 60,
        padding : 15,
        justifyContent : 'center'
    },
    logOutText : {
        fontSize : 30,
        color : "#ffffff",
        alignText : 'center'
    }
})