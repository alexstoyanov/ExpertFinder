import React, {Component} from "react";
import {FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";

class TimelineItemDetailsScreen extends Component {
    render() {
        let timelineItem = this.props.channels.find((x) => x && x.id == this.props.selectedTimelineItemId);
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
    headerTitle:
        <Text style={{fontSize: 24, color: "#FFFFFF"}}>
            {navigation.getParam("itemTitle")}
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