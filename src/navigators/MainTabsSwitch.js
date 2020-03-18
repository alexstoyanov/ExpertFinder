import React, {Component} from "react";
import {createSwitchNavigator} from "react-navigation";
import {StyleSheet,View} from "react-native";
import MainTabNavigator from "./StudentMainTabNavigator";
import TeacherMainTabNavigator from "./TeacherMainTabNavigator";
import MainTabSwitcher from "../components/MainTabSwitcher";
import AdminMainTabNavigator from "./AdminMainTabNavigator";

//Switch used for main tabs visibility differences(teacher has MyHour and admin/parent/student/etc. not)
const MainSwitch = createSwitchNavigator({
    MainTabSwitcher: MainTabSwitcher,
    AdminHome: {
        screen: AdminMainTabNavigator,
    },
    StudentHome: {
        screen: MainTabNavigator,
    },
    TeacherHome: {
        screen: TeacherMainTabNavigator,
    },
});


export class MainTabsSwitch extends Component {
    static router = MainSwitch.router;

    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, backgroundColor:"white"}} forceInset={{top: "never", bottom: 'always'}}>
                <MainSwitch navigation={navigation}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        backgroundColor: '#1186C9',
    },
});

export default MainTabsSwitch;