import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {Button} from "native-base";
import * as Strings from "../../utils/Strings";
import {globalColors} from "../../utils/Colors";
import {
    acceptStudentOffer,
    declineStudentOffer
} from "../../actions/index";
import * as Constants from "../../utils/Constants";

class StudentOfferDetailsScreen extends Component {
    render() {
        let offer = this.props.studentOffers.find((x) => x && x.offerId == this.props.selectedOfferId);
        console.log(offer);
        let offerStatusText = "";
        let offerStatusColor = "#000000";
        if (offer.status == Constants.ACTIVE) {
            offerStatusText = Strings.ACTIVE_OFFER;
        } else if (offer.status == Constants.ACCEPTED) {
            offerStatusText = Strings.ACCEPTED_OFFER;
            offerStatusColor = "#6EEB83";
        } else if (offer.status == Constants.DECLINED) {
            offerStatusText = Strings.DECLINED_OFFER;
            offerStatusColor = "#FF5714";
        } else if (offer.status == Constants.CANCELLED) {
            offerStatusText = Strings.CANCELED_OFFER;
        }
        return (
            <View style={styles.containerStyle}>
                <View style={{flexDirection: "row", alignItems: 'center'}}>
                    <MaterialIcon style={{marginRight: 8}} name="subject" color="#000" size={14}/>
                    <Text style={styles.offerInfoStyle}>
                        {
                            offer.description
                        }
                    </Text>
                </View>
                <View style={{flexDirection: "row", alignItems: 'center'}}>
                    {
                        offer.status == Constants.ACCEPTED || offer.status == Constants.DECLINED ?
                            <Text style={{color: offerStatusColor}}>{offerStatusText}</Text> :
                            offer.status == Constants.ACTIVE ?
                                <View style={{flexDirection: "row", flex: 1, justifyContent: 'center'}}>
                                    <Button rounded success onPress={() => {
                                        this.props.acceptStudentOffer(2, offer.offerId);
                                    }}
                                            style={{width: 130, marginRight: 8, marginTop: 32}} block>
                                        <IonIcon name="ios-checkmark-circle-outline" color='#FFFFFF' size={30}/>
                                        <Text style={{fontSize: 17, color: '#FFFFFF', marginLeft: 8}}>
                                            {Strings.ACCEPT}
                                        </Text>
                                    </Button>
                                    < Button rounded danger onPress={() => {
                                        this.props.declineStudentOffer(2, offer.offerId);
                                    }}
                                             style={{width: 130, marginLeft: 8, marginTop: 32}} block>
                                        <IonIcon name="ios-close-circle-outline" color='#FFFFFF' size={30}/>
                                        <Text style={{fontSize: 17, color: '#FFFFFF', marginLeft: 8}}>
                                            {Strings.DECLINE}
                                        </Text>
                                    </Button>
                                </View>
                                : <View/>
                    }
                </View>
            </View>
        );
    }
}

StudentOfferDetailsScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTintColor: "#FFF",
    headerTitle:
        <Text style={globalStyles.headerTitleStyle}>
            {Strings.OFFERS}
        </Text>,
});


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin: 16,
        flexDirection: 'column',
    },
    offerInfoStyle: {
        fontSize: 16,
        color: '#000000DE'
    },
    studentLabelStyle: {
        fontSize: 14,
        lineHeight: 25,
        color: '#0000008A'
    },
});

const mapStateToProps = state => ({
    selectedOfferId: state.offer.selectedOfferId,
    studentOffers: state.offer.studentOffers
});

export default connect(mapStateToProps, {
    acceptStudentOffer,
    declineStudentOffer
})(StudentOfferDetailsScreen);