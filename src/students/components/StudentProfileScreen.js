import React, {Component} from "react";
import {FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";
import {Linking} from 'react-native'
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

class StudentProfileScreen extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Image
                    style={{marginBottom:16, alignSelf:'center', width: 100, height: 100, borderRadius: 50}}
                    source={{uri: this.props.navigation.getParam("user").avatar}}
                />
                <View style={styles.studentInfoContainerStyle}>
                    <MaterialIcon style={{marginRight: 16}} name="person-outline" color='#000000' size={24}/>
                    <Text style={styles.profileItemInfoStyle}>
                        {this.props.navigation.getParam("user").name}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:1234567`)}>
                    <View style={styles.studentInfoContainerStyle}>
                        <MaterialIcon style={{marginRight: 16}} name="phone-iphone" color='#000000' size={24}/>
                        <Text style={styles.profileItemInfoStyle}>
                            1234567
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(`mailto:abc@abc.com`)}>
                    <View style={styles.studentInfoContainerStyle}>
                        <MaterialIcon style={{marginRight: 16}} name="mail-outline" color='#000000' size={24}/>
                        <Text style={styles.profileItemInfoStyle}>
                            abc@abc.com
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

StudentProfileScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTitleStyle: globalStyles.headerTitleStyle,
    headerTintColor: "#FFF",
    headerTitle:
        <Text style={globalStyles.headerTitleStyle}>
            {navigation.getParam("user").name}
        </Text>
});


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin: 16,
        flexDirection: 'column',
    },
    profileItemInfoStyle: {
        fontSize: 16,
        color: '#000000DE'
    },
    studentLabelStyle: {
        fontSize: 14,
        lineHeight: 25,
        color: '#0000008A'
    },
    studentInfoContainerStyle: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom:16,
    }
});

const mapStateToProps = state => ({
    selectedTimelineItemId: state.rss.selectedTimelineItemId,
    channels: state.rss.channels
});

export default connect(mapStateToProps)(StudentProfileScreen);