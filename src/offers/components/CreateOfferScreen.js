import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import SafeAreaView from 'react-native-safe-area-view';
import {globalStyles} from "../../utils/Styles";
import * as Strings from "../../utils/Strings";
import {
    descriptionChange,
    postOffer
} from "../../actions/index";
import Icon from "react-native-vector-icons/Ionicons";


class OfferDetailsScreen extends Component {
    constructor(props){
        super(props);
        props.navigation.setParams({
            onSaveOffer: this.onCreateOffer.bind(this),
        });
    }

    onCreateOffer(){
        this.props.postOffer(this.props.description, "1");
        this.props.navigation.goBack();
    }

    onDescChange(text) {
        this.props.descriptionChange(text);
    }

    render() {
        return (
            <SafeAreaView style={styles.containerStyle}>
                <View style={styles.itemInputStyle}>
                <TextInput
                placeholder={Strings.PROMPT_DESCRIPTION}
                onChangeText={this.onDescChange.bind(this)}
                value={this.props.description}
                blurOnSubmit={true}
                underlineColorAndroid='transparent'
                placeholderTextColor="#000000A3"
                style={styles.inputStyle}/>
                </View>
            </SafeAreaView>
        );
    }
}

OfferDetailsScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTitleStyle: globalStyles.headerTitleStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerTitle:
        <Text style={{fontSize: 24, color: "#FFFFFF"}}>
            ТЕСТ
        </Text>,
    headerRight: <TouchableOpacity onPress={() => navigation.state.params.onSaveOffer()}
                                   style={globalStyles.headerButtonContainerStyle}>
        <Icon name="ios-checkmark" color='#FFFFFF' size={40}/>
    </TouchableOpacity>
});


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin:16,
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
        minHeight:40,
        borderColor: 'transparent',
    },
});

const mapStateToProps = state => ({
    description: state.offer.description,
});

export default connect(mapStateToProps, {descriptionChange, postOffer})(OfferDetailsScreen);