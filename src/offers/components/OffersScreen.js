import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList, TouchableOpacity, Share} from "react-native";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import ListItem from "./OfferItem";

import {
    navigateOfferDetail,
    getOffers,
    navigateCreateOffer,
    navigateFilterOffers,
    selectOffer,
} from "../../actions/index";
import {globalStyles} from "../../utils/Styles";
import * as MockDataUtils from "../../utils/MockDataUtils";
import * as Strings from "../../utils/Strings";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import ActionButton from 'react-native-action-button';

class OffersScreen extends Component {

    navigateAddOffer() {
        navigateCreateOffer();
    }

    onShare = async () => {
        console.log(JSON.stringify(this.props.filteredOffers));
        try {
            const result = await Share.share({
                message: JSON.stringify(this.props.filteredOffers)
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    constructor(props) {
        super(props);
        props.navigation.setParams({
            showAddBtn: props.token.includes("Professor"),
            navigateAddOffer: this.navigateAddOffer,
            navigateExportOffers: this.onShare.bind(this),
            navigateFilterOffers: navigateFilterOffers,
        });
    }

    componentDidMount() {
        this.props.getOffers(1, this.props.offerStatusFilter);
    }

    onOfferItemPress(offer) {
        navigateOfferDetail(offer);
        this.props.selectOffer(offer.offerId);
    }

    keyExtractor = (item, index) => index.toString();

    render(props) {
        return (
            <View style={styles.containerStyle}>
                <FlatList
                    removeClippedSubviews={false}
                    keyExtractor={this.keyExtractor}
                    data={this.props.filteredOffers}
                    renderItem={({item}) => <ListItem
                        onOfferItemClick={this.onOfferItemPress.bind(this)}
                        offer={item}/>}
                />
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title={Strings.NEW_OFFER} onPress={() => navigateCreateOffer()}>
                        <Icon name="md-create" color='#FFFFFF' size={24}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title={Strings.EXPORT} onPress={() => this.onShare()}>
                        <AntDesignIcon name="export" color='#FFFFFF' size={24}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}

OffersScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerLeft:
        <TouchableOpacity style={{paddingLeft: 16, paddingRight: 16}}
                          onPress={() => navigation.getParam("navigateFilterOffers")()}>
            <FeatherIcon name="filter" size={20} color="white"/>
        </TouchableOpacity>,
    headerTitle:
        <Text style={globalStyles.headerTitleStyle}>
            {Strings.OFFERS}
        </Text>,
    headerRight:
        <View style={{alignItems:'center', flexDirection: 'row'}}>
            <TouchableOpacity style={{paddingLeft: 16, paddingRight: 16}}
                              onPress={() => navigation.getParam("navigateExportOffers")()}>
                <AntDesignIcon name="export" color='#FFFFFF' size={24}/>
            </TouchableOpacity>
            {
                navigation.getParam('showAddBtn') ?
                    <TouchableOpacity style={{paddingLeft: 16, paddingRight: 16}}
                                      onPress={() => navigation.getParam("navigateAddOffer")()}>
                        <Icon style={globalStyles.headerIconStyle} name="ios-add" color='#FFFFFF' size={30}/>
                    </TouchableOpacity> :
                    <View/>
            }

        </View>
    ,
});

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
    },
});

const mapStateToProps = state => ({
    offers: state.offer.offers,
    filteredOffers: state.offer.filteredOffers,
    offerStatusFilter: state.offer.offerStatusFilter,
    token: state.auth.token
});

export default connect(mapStateToProps, {getOffers, selectOffer})(OffersScreen);