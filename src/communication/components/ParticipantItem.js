import React, {Component} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";

class ParticipantItem extends Component {
    render() {
        let participant = this.props.participant;
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.infoStyle}>
                    {
                        participant.user_name + ", " + participant.roles
                    }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    infoStyle: {
        color: '#000000DE',
        fontSize: 16,
    },
});


const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ParticipantItem);