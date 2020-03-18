import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import * as Strings from "../utils/Strings";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SimIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FaIcon from "react-native-vector-icons/FontAwesome";

export default class TabBar extends Component {
    render() {
        const navigation = this.props.navigation;
        const {routes, index} = navigation.state;
        return (
            <View style={styles.tabContainer}>
                {routes.map((route, idx) => {
                    let tabIcon = "";
                    let tabText = "";
                    let selected = index === idx;
                    const color = selected ? '#1186C9' : '#8F8F8F';
                    switch (route.key) {
                        case "Timeline" :
                            tabIcon= <MaterialIcons name="timeline" size={25} color={color}/>;
                            tabText = Strings.HOME;
                            break;
                        case "Offers" :
                            tabIcon= <SimIcons name="clock" size={20} color={color}/>;
                            tabText = Strings.OFFERS;
                            break;
                        case "More" :
                            tabIcon= <MaterialIcons name="more-horiz" size={25} color={color}/>;
                            tabText = Strings.MORE;
                            break;
                        case "Professors" :
                            tabIcon= <FontAwesome5 name="chalkboard-teacher" size={25} color={color}/>;
                            tabText = Strings.PROFESSORS;
                            break;
                        case "Students" :
                            tabIcon= <FaIcon name="group" size={25} color={color}/>;
                            tabText = Strings.STUDENTS;
                            break;
                        case "Communication" :
                            tabIcon= <Ionicons name="md-chatboxes" size={25} color={color}/>;
                            tabText = Strings.MESSAGES;
                            break;
                    }
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                if (index !== idx) {
                                    navigation.navigate(route.routeName);
                                }
                            }}
                            style={styles.tabStyle}
                            key={route.routeName}
                        >
                            {tabIcon}
                            <View style={styles.tabIconStyle}>
                                <Text style={{color: color, fontSize: 12}} numberOfLines={1}>{tabText}</Text>

                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabContainer: {
        borderTopWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        // height: 51,
        borderColor:'#00000024',
    },
    tabStyle: {
        flex: 1,
        width: 64,
        paddingTop:8,
        paddingBottom:8,
        alignItems:'center'
    },
    tabIconStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});