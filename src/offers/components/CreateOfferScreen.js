import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";
import * as Strings from "../../utils/Strings";
import {
    offerTitleChange,
    offerPriceChange,
    itemDescChange,
    postOffer
} from "../../actions/index";
import Icon from "react-native-vector-icons/Ionicons";
import Slider from '@react-native-community/slider';
import {TEACHER_ROLE_ID} from "../../utils/Constants";
import DocumentPicker from 'react-native-document-picker';
import RNFS from'react-native-fs';

class CreateOfferScreen extends Component {
    constructor(props) {
        super(props);
        props.navigation.setParams({
            onSaveOffer: this.onCreateOffer.bind(this),
        });
    }

    onCreateOffer() {
        console.log(this.props.offerPrice)
        let offer = {
            currency: "string",
            description: this.props.offerTitle,
            price: this.props.offerPrice,
            productItemRequests: [
                {
                    productDescription: this.props.itemDescription,
                    productType: TEACHER_ROLE_ID
                }
            ]
        };
        this.props.postOffer(offer, "1");
        this.props.navigation.goBack();
    }

    onOfferTitleChange(text) {
        this.props.offerTitleChange(text);
    }

    onOfferPriceChange(text) {
        this.props.offerPriceChange(text);
    }

    onDescChange(text) {
        this.props.itemDescChange(text);
    }

    uploadFile(url){

// I STRONGLY RECOMMEND ADDING A SMALL SETTIMEOUT before uploading the url you just got.
        const split = url.split('/');
        const name = split.pop();
        const inbox = split.pop();
        const realPath = `${RNFS.TemporaryDirectoryPath}${inbox}/${name}`;
        const uploadBegin = (response) => {
            const jobId = response.jobId;
            console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
        };

        const uploadProgress = (response) => {
            const percentage = Math.floor((response.totalBytesSent/response.totalBytesExpectedToSend) * 100);
            console.log('UPLOAD IS ' + percentage + '% DONE!');
        };

        RNFS.uploadFiles({
            toUrl: uploadUrl,
            files: [{
                name,
                filename:name,
                filepath: realPath,
            }],
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            begin: uploadBegin,
            beginCallback: uploadBegin, // Don't ask me, only way I made it work as of 1.5.1
            progressCallback: uploadProgress,
            progress: uploadProgress
        })
            .then((response) => {
                console.log(response,"<<< Response");
                if (response.statusCode == 200) { //You might not be getting a statusCode at all. Check
                    console.log('FILES UPLOADED!');
                } else {
                    console.log('SERVER ERROR');
                }
            })
            .catch((err) => {
                if (err.description) {
                    switch (err.description) {
                        case "cancelled":
                            console.log("Upload cancelled");
                            break;
                        case "empty":
                            console.log("Empty file");
                        default:
                        //Unknown
                    }
                } else {
                    //Weird
                }
                console.log(err);
            });
    }

    async onPickFile(){
        try {
            let readContent = new Boolean(true);
            const results = await DocumentPicker.pickMultiple({
                readContent: readContent
            });
            for (const res of results) {
                this.uploadFile(res.uri);
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.itemInputStyle}>
                    <TextInput
                        placeholder={Strings.PROMPT_TITLE}
                        onChangeText={this.onOfferTitleChange.bind(this)}
                        value={this.props.offerTitle}
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
                        blurOnSubmit={false}
                        multiline={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#000000A3"
                        style={styles.inputStyle}/>
                </View>
                <TouchableOpacity onPress={() => this.onPickFile()} style={[styles.itemInputStyle,{
                    flexDirection:'row', alignItems:'center', paddingLeft:10,
                }]}>
                    <Icon name="ios-attach" color='#000000A3' size={16}/>
                    <Text style={styles.inputStyle}>{Strings.PROMPT_ATTACH}</Text>
                    </TouchableOpacity>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.promptStyle}>{Strings.PROMPT_IMPORTANCE}</Text>
                    <Text style={styles.priceSelectedStyle}>{this.props.offerPrice}</Text>
                </View>
                <Slider
                        minimumValue={0}
                        onValueChange={value => this.onOfferPriceChange(value)}
                        value={this.props.offerPrice}
                        maximumValue={10}
                        step={1}
                        minimumTrackTintColor="#68D89B"
                        maximumTrackTintColor="#0000000E"
                    />
            </View>
        );
    }
}

CreateOfferScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTitleStyle: globalStyles.headerTitleStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerTitle:
        <View style={globalStyles.headerTitleContainerStyle}>
            <Text style={globalStyles.headerTitleStyle}>
                {Strings.CREATE_OFFER_ITEM}
            </Text>
        </View>,
    headerRight: <TouchableOpacity onPress={() => navigation.state.params.onSaveOffer()}
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
        marginBottom:16,
        borderColor: 'transparent',
    },
    promptStyle: {
        alignSelf: 'flex-start',
        fontSize: 14,
        marginTop: 10,
        padding: 4,
        color: '#000000A3'
    },
    priceSelectedStyle: {
        fontSize: 14,
        marginTop: 10,
        padding: 4,
        color: '#000000'
    },
});

const mapStateToProps = state => ({
    offerTitle: state.offer.offerTitle,
    itemDescription: state.offer.itemDescription,
    offerPrice: state.offer.offerPrice
});

export default connect(mapStateToProps, {offerTitleChange, offerPriceChange, itemDescChange, postOffer})(CreateOfferScreen);