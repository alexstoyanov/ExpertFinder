import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList} from "react-native";
import {connect} from "react-redux";
import SafeAreaView from 'react-native-safe-area-view';
import ListItem from "./OfferItem";
import {globalStyles} from "../utils/Styles";

class TimelineScreen extends Component {
    constructor(){
        super();
    }
    render() {
        console.log(this.props);
        return (
            <SafeAreaView style={styles.containerStyle}>
                <Text>
                    {
                        this.props.navigation.getParam("title")
                    }
                </Text>
                <Text>
                    {
                        this.props.navigation.getParam("description")
                    }
                </Text>
            </SafeAreaView>
        );
    }
}

TimelineScreen.navigationOptions = ({navigation}) => ({
    header:
        <SafeAreaView style={globalStyles.headerStyle}>
            <Text style={{fontSize: 32, color: "#FFFFFF"}}>
                ТЕСТ
            </Text>
        </SafeAreaView>
});


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin:16,
        flexDirection: 'column',
    },
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(TimelineScreen);