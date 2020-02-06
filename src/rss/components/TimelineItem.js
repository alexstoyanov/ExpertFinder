import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import FaIcon from "react-native-vector-icons/FontAwesome";
import {globalStyles} from "../../utils/Styles";

class TimelineItem extends Component {
    render() {
        let feedItem = this.props.feedItem;
        return (
            <TouchableOpacity key={String.valueOf(feedItem.id)} style={styles.itemStyle} onPress={() => this.props.onTimelineItemClick(feedItem)}>
                <View style={styles.dataStyle}>
                    <Text style={styles.feedItemInfoStyle}>
                        {
                            feedItem.description
                        }
                    </Text>
                </View>
                <View style={globalStyles.separatorStyle}/>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    dataStyle: {
        padding: 16,
        justifyContent:'center',
    },
    offerInfoStyle:{
        fontSize: 16,
        color: '#000000DE'
    },
    studentLabelStyle: {
        fontSize: 14,
        lineHeight:25,
        color: '#0000008A'
    },
});

export default TimelineItem