import React, {Component} from "react";
import {FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import ListItem from "./OfferItem";

import {getOffersForStudent, navigateStudentOfferDetail, selectOffer,} from "../../actions/index";
import {globalStyles} from "../../utils/Styles";
import * as Strings from "../../utils/Strings";
import SimIcons from "react-native-vector-icons/SimpleLineIcons";

class StudentOffersScreen extends Component {

    componentDidMount() {
        this.props.getOffersForStudent(2);
    }

    onOfferItemPress(offer) {
        console.log(offer);
        navigateStudentOfferDetail(offer);
        this.props.selectOffer(offer.offerId);
    }

    keyExtractor = (item, index) => index.toString();

    render(props) {
        return (
            <View style={styles.containerStyle}>
                <FlatList
                    removeClippedSubviews={false}
                    keyExtractor={this.keyExtractor}
                    data={this.props.studentOffers}
                    renderItem={({item}) => <ListItem
                        onOfferItemClick={this.onOfferItemPress.bind(this)}
                        offer={item}/>}
                />
            </View>
        );
    }
}

StudentOffersScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerTitle:
        <View style={globalStyles.headerTitleContainerStyle}>
            <SimIcons style={globalStyles.headerIconStyle} name="clock" size={20} color="white"/>
            <Text style={globalStyles.headerTitleStyle}>
                {Strings.OFFERS}
            </Text>
        </View>,
});

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
    },
});

const mapStateToProps = state => ({
    studentOffers: state.offer.studentOffers,
    token: state.auth.token
});

export default connect(mapStateToProps, {getOffersForStudent, selectOffer})(StudentOffersScreen);