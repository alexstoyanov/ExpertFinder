import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";
import * as Strings from "../../utils/Strings";
import {
    itemDescriptionChange,
    itemTitleChange,
    postRssItem
} from "../../actions/index";
import Icon from "react-native-vector-icons/Ionicons";
import update from 'immutability-helper';


class CreateItemScreen extends Component {
    constructor(props) {
        super(props);
        props.navigation.setParams({
            onSaveItem: this.onCreateItem.bind(this),
        });
    }

    onCreateItem() {
        let newRssItem = {
            id: new Date().getTime(),
            title: this.props.itemTitle,
            description: this.props.itemDescription
        };
        let newChannels = update(this.props.channels, {$push: [newRssItem]});
        console.log(newChannels);
        this.props.postRssItem(newChannels);
        this.props.navigation.goBack();
    }

    onTitleChange(text) {
        this.props.itemTitleChange(text);
    }

    onDescChange(text) {
        this.props.itemDescriptionChange(text);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.itemInputStyle}>
                    <TextInput
                        placeholder={Strings.PROMPT_TITLE}
                        onChangeText={this.onTitleChange.bind(this)}
                        value={this.props.itemTitle}
                        blurOnSubmit={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#000000A3"
                        style={styles.inputStyle}/>
                </View>
                <View style={styles.itemInputStyle}>
                    <TextInput
                        placeholder={Strings.PROMPT_DESCRIPTION}
                        onChangeText={this.onDescChange.bind(this)}
                        value={this.props.itemDescription}
                        blurOnSubmit={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#000000A3"
                        style={styles.inputStyle}/>
                </View>
            </View>
        );
    }
}

CreateItemScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTitleStyle: globalStyles.headerTitleStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerTitle:
        <View style={globalStyles.headerTitleContainerStyle}>
            <Text style={globalStyles.headerTitleStyle}>
                {Strings.CREATE_RSS_ITEM}
            </Text>
        </View>,
    headerRight: <TouchableOpacity onPress={() => navigation.state.params.onSaveItem()}
                                   style={globalStyles.headerButtonContainerStyle}>
        <Icon name="ios-checkmark" color='#FFFFFF' size={40}/>
    </TouchableOpacity>
});


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin: 16,
        flexDirection: 'column',
    },
    inputStyle: {
        fontSize: 15,
        color: '#000000A3',
        padding: 6,
        flex: 1,
    },
    itemInputStyle: {
        backgroundColor: '#9B9B9B29',
        borderRadius: 12,
        borderWidth: 0,
        minHeight: 40,
        marginBottom: 16,
        borderColor: 'transparent',
    },
});

const mapStateToProps = state => ({
    channels: state.rss.channels,
    itemDescription: state.rss.itemDescription,
    itemTitle: state.rss.itemTitle,
});

export default connect(mapStateToProps, {itemDescriptionChange, itemTitleChange, postRssItem})(CreateItemScreen);