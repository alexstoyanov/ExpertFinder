import React, {Component} from "react";
import {FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import ListItem from "./TimelineItem";

import {navigateTimelineItemDetail, selectTimelineItem} from "../../actions/index";
import {globalStyles} from "../../utils/Styles";
import * as Strings from "../../utils/Strings";
import {
    navigateCreateRssItem,
} from "../../actions/index";
import Icon from "react-native-vector-icons/Ionicons";

class RssFeedScreen extends Component {
    constructor(props) {
        super(props);
        props.navigation.setParams({
            showAddBtn: props.token.includes("Admin"),
            navigateAddRssItem: this.navigateAddRssItem,
        });
    }

    navigateAddRssItem() {
        navigateCreateRssItem();
    }

    onTimelineItemPress(feedItem){
        navigateTimelineItemDetail(feedItem.title);
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

RssFeedScreen.navigationOptions = ({navigation}) => ({
    headerBackTitle: null,
    headerStyle: globalStyles.headerStyle,
    headerTitle:
        <View style={globalStyles.headerTitleContainerStyle}>
            <Text style={globalStyles.headerTitleStyle}>{Strings.HOME}</Text>
        </View>,
    headerRight:
        navigation.getParam('showAddBtn') ?
            <TouchableOpacity style={{paddingLeft: 16, paddingRight: 16}}
                              onPress={() => navigation.getParam("navigateAddRssItem")()}>
                <Icon style={globalStyles.headerIconStyle} name="ios-add" color='#FFFFFF' size={30}/>
            </TouchableOpacity> :
            <View/>,
});

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
    },
});

const mapStateToProps = state => ({
    channels: state.rss.channels,
    token: state.auth.token
});

export default connect(mapStateToProps,{selectTimelineItem})(RssFeedScreen);