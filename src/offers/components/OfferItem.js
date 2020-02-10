import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {globalStyles} from "../../utils/Styles";
import * as Strings from "../../utils/Strings";
import * as Constants from "../../utils/Constants";

class OfferItem extends Component {
    render() {
        let offer = this.props.offer;
        let offerStatusText = offer.status == Constants.ACTIVE ? Strings.ACTIVE_OFFER :
            offer.status == Constants.ACCEPTED ? Strings.ACCEPTED_OFFER :
                offer.status == Constants.DECLINED ? Strings.DECLINED_OFFER :
                    offer.status == Constants.CANCELLED ? Strings.CANCELED_OFFER : "";

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
                        <MaterialIcon name="info-outline" color="#000" size={14}/>
                        <Text style={globalStyles.textStyle}>
                            {" " + offerStatusText}
                        </Text>
                    </View>
                    {
                        offer.studentResponse && offer.studentResponse.firstName ?

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