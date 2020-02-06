import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import FaIcon from "react-native-vector-icons/FontAwesome";
import {globalStyles} from "../../utils/Styles";
import * as Strings from "../../utils/Strings";

class OfferItem extends Component {
    render() {
        let offer = this.props.offer;
        return (
            <TouchableOpacity key={String.valueOf(offer.id)} style={styles.itemStyle} onPress={() => this.props.onOfferItemClick(offer)}>
                <View style={styles.dataStyle}>
                    <Text style={styles.offerInfoStyle}>
                        {
                            offer.description
                        }
                    </Text>
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
        justifyContent:'center',
    },
    offerInfoStyle:{
        fontSize: 16,
        color: '#000000DE'
    },
    studentLabelStyle: {
        fontSize: 14,
        lineHeight:25,
        color: '#0000008A'
    },
});

export default OfferItem