import React, {Component} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {Text} from 'native-base';
import {globalStyles} from "../../utils/Styles";
import Icon from "react-native-vector-icons/MaterialIcons";

class ChooseParticipantItem extends Component {
    render() {
        let participantItem = this.props.participant;
        let itemIcon = participantItem.roles_name && participantItem.roles_slug ? "person" : "group";
        return (
            <TouchableOpacity onPress={() => this.props.onPress(participantItem)}>
                <View style={styles.dataContainerStyle}>
                    <View style={styles.participantInfoStyle}>
                        <View style={{
                            borderRadius: 30, backgroundColor: '#0000008A', height: 42, width: 42, alignItems: 'center',
                            paddingLeft: 8, paddingRight: 8, justifyContent: 'center', marginRight:8
                        }}>
                            <Icon name={itemIcon} color='#FFFFFF' size={24}/>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{
                                color: '#000000DE',
                                fontSize: 16
                            }}>{participantItem.firstName + " " + participantItem.lastName}</Text>

                            <Text style={{
                                color:'#0000008A',
                                fontSize: 12
                            }}>{participantItem.specialty}</Text>
                        </View>
                    </View>
                </View>
                <View style={globalStyles.separatorStyle}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 38,
        width: 38,
        marginRight: 18,
    },
    dataContainerStyle: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    participantItemStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    participantSubInfoStyle: {
        flexDirection: 'row'
    },
    participantInfoStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ChooseParticipantItem);