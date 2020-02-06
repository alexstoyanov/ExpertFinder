import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {Button} from "native-base";
import * as Strings from "../../utils/Strings";
import {globalColors} from "../../utils/Colors";
import {
    navigateAllStudents,
} from "../../actions/index";

class TimelineItemDetailsScreen extends Component {
    constructor() {
        super();
    }

    render() {
        let timelineItem = this.props.channels.find((x) => x && x.id == this.props.selectedTimelineItemId);
        console.log(this.props.channels);
        console.log(this.props.selectedTimelineItemId);
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.timelineItemInfoStyle}>
                    {
                        timelineItem.description
                    }
                </Text>
            </View>
        );
    }
}

TimelineItemDetailsScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTitleStyle: globalStyles.headerTitleStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerTitle:
        <Text style={{fontSize: 24, color: "#FFFFFF"}}>
            ТЕСТ
        </Text>
});


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin: 16,
        flexDirection: 'column',
    },
    timelineItemInfoStyle: {
        fontSize: 16,
        color: '#000000DE'
    },
    studentLabelStyle: {
        fontSize: 14,
        lineHeight: 25,
        color: '#0000008A'
    },
});

const mapStateToProps = state => ({
    selectedTimelineItemId: state.rss.selectedTimelineItemId,
    channels: state.rss.channels
});

export default connect(mapStateToProps)(TimelineItemDetailsScreen);