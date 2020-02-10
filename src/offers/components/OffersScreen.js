import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
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

class OffersScreen extends Component {

    navigateAddOffer() {
        navigateCreateOffer();
    }

    constructor(props) {
        super(props);
        props.navigation.setParams({
            showAddBtn: props.token.includes("Professor"),
            navigateAddOffer: this.navigateAddOffer,
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
        navigation.getParam('showAddBtn') ?
            <TouchableOpacity style={{paddingLeft: 16, paddingRight: 16}}
                              onPress={() => navigation.getParam("navigateAddOffer")()}>
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
    offers: state.offer.offers,
    filteredOffers: state.offer.filteredOffers,
    offerStatusFilter: state.offer.offerStatusFilter,
    token: state.auth.token
});

export default connect(mapStateToProps, {getOffers, selectOffer})(OffersScreen);