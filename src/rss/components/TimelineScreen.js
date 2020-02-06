import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import ListItem from "./TimelineItem";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-community/async-storage';

import {
    navigateTimelineItemDetail,
    getChannels,
    selectTimelineItem
} from "../../actions/index";
import {globalStyles} from "../../utils/Styles";
import * as MockDataUtils from "../../utils/MockDataUtils";

class RssFeedScreen extends Component {
    constructor(props){
        super(props);
        let rssChannels = props.getChannels();
    }

    onTimelineItemPress(feedItem){
        navigateTimelineItemDetail();
        this.props.selectTimelineItem(feedItem.id);
    }

    render(props) {
        return (
            <View style={styles.containerStyle}>
                <FlatList
                    removeClippedSubviews={false}
                    keyExtractor={this.keyExtractor}
                    data={this.props.channels}
                    renderItem={({item}) => <ListItem
                        onTimelineItemClick={this.onTimelineItemPress.bind(this)}
                        feedItem={item}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
    },
});

const mapStateToProps = state => ({
    channels: state.rss.channels
});

export default connect(mapStateToProps,{getChannels, selectTimelineItem})(RssFeedScreen);