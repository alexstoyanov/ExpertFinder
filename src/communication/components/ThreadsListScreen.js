import React, {Component} from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image
} from "react-native";
import {connect} from "react-redux";
import ListItem from "./ThreadItem";
import {globalStyles} from "../../utils/Styles";
import {globalColors} from "../../utils/Colors";
import {Container, Content, View, Item, Input, Button} from 'native-base';
import {queryThreads, navigateNewThread, navigateMessagesList} from "../../actions/index";
import * as Strings from "../../utils/Strings";
import Icon from "react-native-vector-icons/Ionicons";
import SimIcons from "react-native-vector-icons/SimpleLineIcons";

class ThreadsListScreen extends Component {
    constructor(props) {
        super(props);
        this.pageNum = 1;
        this.onThreadItemPressed = this.threadPress.bind(this);
        props.navigation.setParams({
            navigateCreateThread: navigateNewThread.bind(this),
        });
    }

    threadPress(thread) {
        console.log(thread);
        navigateMessagesList(thread.id, thread.subject);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View searchBar style={{flexDirection: 'row', padding: 10, backgroundColor: "#0000000F"}}>
                    <Item rounded style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        height: 30,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                        <Icon size={20} name="ios-search"/>
                        <Input onChangeText={(text) => this.onFilterThreadsTextChanged(text)}
                               placeholder="Търсене в дискусии"/>
                    </Item>
                </View>
                {this.renderLayout()}
            </View>
        );
    }

    keyExtractor = (item, index) => index.toString();

    renderLayout() {
        let threads = this.onFilterThreads(this.props.threadsQuery, this.props.messageThreads);
        if (threads && threads.length > 0) {
            return (
                <FlatList
                    removeClippedSubviews={false}
                    keyExtractor={this.keyExtractor}
                    data={threads}
                    onEndReachedThreshold={0.5}
                    onEndReached={
                        this.handleLoadMore.bind(this)
                    }
                    renderItem={({item}) => <ListItem
                        onPress={this.onThreadItemPressed}
                        thread={item}/>}
                />
            );
        } else {
            return (
                <Text style={{color: '#000000DE', alignSelf: 'center', textAlign: 'center', flex: 1, margin: 16}}>
                    {
                        Strings.EMPTY_MESSAGES_LIST
                    }
                </Text>
            );
        }
    }


    handleLoadMore() {
        if (this.props.fetchMoreThreads) {
        }
    }

    onFilterThreadsTextChanged(text) {
        this.props.queryThreads(text);
    }

    onFilterThreads(query, threads) {
        //RegExp(pattern[, flags]). First trim the query and add 'i' flag which means ignore case
        query = query.trim();
        console.log(threads);
        if (threads != null) {
            return threads.filter(thread =>
                thread.subject && thread.subject.toLowerCase().includes(query.toLowerCase())
            );
        } else {
            return [];
        }
    }
}

ThreadsListScreen.navigationOptions = ({navigation}) => {
    return ({
        headerStyle: globalStyles.headerStyle,
        headerTitle:
            <View style={globalStyles.headerTitleContainerStyle}>
                <SimIcons style={globalStyles.headerIconStyle} name="bubbles" color="white" size={20}/>
                <Text style={globalStyles.headerTitleStyle}>{Strings.MESSAGES}</Text>
            </View>,
        headerRight:
            <TouchableOpacity style={{paddingLeft: 16, paddingRight: 16}}
                              onPress={() => navigation.getParam("navigateCreateThread")()}>
                <Icon style={globalStyles.headerIconStyle} name="ios-add" color='#FFFFFF' size={30}/>
            </TouchableOpacity>,
    })
};


const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',
        flex: 1
    },
    studentInfoStyle: {
        flexDirection: 'column',
    }
});

const mapStateToProps = state => ({
    messageThreads: state.communication.messageThreads,
    threadsQuery: state.communication.threadsQuery,
    fetchMoreThreads: state.communication.fetchMoreThreads,
});

export default connect(mapStateToProps, {queryThreads})(ThreadsListScreen);