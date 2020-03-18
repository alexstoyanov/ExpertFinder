import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import SimIcon from "react-native-vector-icons/SimpleLineIcons";
import {globalStyles} from "../../utils/Styles";
import * as Strings from "../../utils/Strings";
import * as Constants from "../../utils/Constants";

class OfferItem extends Component {
    render() {
        let offer = this.props.offer;
        let offerStatusText = "";
        let offerStatusColor = "#000000";
        let expiryColor = "#ff6363";
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
            <TouchableOpacity key={String.valueOf(offer.id)} style={styles.itemStyle}
                              onPress={() => this.props.onOfferItemClick(offer)}>
                <View style={styles.dataStyle}>
                    <View style={styles.dataLineStyle}>
                        <MaterialIcon name="subject" color="#000" size={14}/>
                        <Text style={globalStyles.titleTextStyle}>
                            {" " + offer.description}
                        </Text>
                    </View>
                    <View style={styles.dataLineStyle}>
                        <MaterialIcon name="info-outline" color={offerStatusColor} size={14}/>
                        <Text style={[globalStyles.textStyle, {color: offerStatusColor}]}>
                            {" " + offerStatusText}
                        </Text>
                    </View>
                    {
                        offer.studentResponse && offer.studentResponse.firstName
                        && offer.status != Constants.ACCEPTED && offer.status != Constants.DECLINED
                        && offer.status != Constants.CANCELLED ?
                            <View style={styles.dataLineStyle}>
                                <SimIcon name="clock" color={expiryColor} size={12}/>
                                <Text style={[globalStyles.textStyle, {color: expiryColor}]}>
                                    {" " + "Изтича на:" + offer.expireDate}
                                </Text>
                            </View> : <View/>
                    }
                    {
                        offer.studentResponse && offer.studentResponse.firstName
                        && offer.status != Constants.ACCEPTED && offer.status != Constants.DECLINED
                        && offer.status != Constants.CANCELLED ?
                            <Text style={styles.studentLabelStyle}>
                                {
                                    Strings.SEND_TO + " " + offer.studentResponse.firstName + " " + offer.studentResponse.lastName
                                }
                            </Text> : <View/>
                    }
                </View>
                <View style={globalStyles.separatorStyle}/>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    dataStyle: {
        padding: 16,
        justifyContent: 'center',
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
    dataLineStyle: {flexDirection: 'row', alignItems: 'center'}
});

export default OfferItem