import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import ListItem from "../../rss/components/OfferItem";

import {
    navigateOfferDetail,
    getOffers,
    navigateCreateOffer,
    selectOffer,
} from "../../actions/index";
import {globalStyles} from "../../utils/Styles";
import * as MockDataUtils from "../../utils/MockDataUtils";

class OffersScreen extends Component {

    navigateAddOffer(){
        navigateCreateOffer();
    }

    constructor(props) {
        super(props);
        props.navigation.setParams({
            showAddBtn: props.token.includes("Professor"),
            navigateAddOffer: this.navigateAddOffer,
        });
    }

    componentDidMount() {
        this.props.getOffers(1);
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
                    data={this.props.offers}
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
    headerTitleStyle: globalStyles.headerTitleStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerTitle:
        <Text style={{fontSize: 24, color: "#FFFFFF"}}>
            ТЕСТ
        </Text>
});

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
    },
});

const mapStateToProps = state => ({
    offers: state.offer.offers,
    token: state.auth.token
});

export default connect(mapStateToProps, {getOffers, selectOffer})(OffersScreen);