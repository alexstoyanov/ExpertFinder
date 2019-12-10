import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import FaIcon from "react-native-vector-icons/FontAwesome";
import {globalStyles} from "../utils/Styles";

class OfferItem extends Component {
    render() {
        let offer = this.props.offer;

        return (
            <TouchableOpacity key={String.valueOf(offer.id)} style={styles.itemStyle} onPress={() => this.props.onOfferItemClick(offer)}>
                <View style={styles.dataStyle}>
                    <Text style={styles.offerInfoStyle}>
                        {
                            offer.title
                        }
                    </Text>
                    <Text style={styles.offerInfoStyle}>
                        {
                            offer.description
                        }
                    </Text>
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
        color:'#000000DE',
        fontSize: 16,
    }
});

export default OfferItem