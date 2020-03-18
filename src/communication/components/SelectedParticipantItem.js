import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import {globalStyles} from "../../utils/Styles";

class SelectedParticipantItem extends Component {
    render() {
        let user = this.props.participant;
        let userNames = user ?
            user.first_name || user.last_name ? user.first_name + ' ' + user.last_name : user.name
            : 'Няма данни за този ученик.';
        return (
            <View style={styles.containerStyle}>
                <View style={styles.dataContainerStyle}>
                    <Text style={styles.selectedParticipantStyle}>
                        {
                            userNames
                        }
                    </Text>
                    <TouchableOpacity
                        style={styles.crossPaddingStyle}
                        onPress={this.onDeleteItemPress.bind(this)}>
                        <View style={styles.crossContainerStyle}>
                        <Icon name='ios-close'
                                 size={20}
                                 color='white'/>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.separatorStyle}/>
            </View>
        );
    }

    onDeleteItemPress = () => {
        const {onDeleteItem} = this.props;
        if (onDeleteItem) {
            onDeleteItem();
        }
    }

}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column',
    },
    dataContainerStyle: {
        paddingLeft: 16,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        margin: 10,
        height: 50,
        width: 50,
        borderRadius: 10
    },
    selectedParticipantStyle: {
        color: '#000000DE',
        fontSize: 16,
    },
    crossContainerStyle: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    crossPaddingStyle:{
        padding:16,
    }
});


const mapStateToProps = state => ({});

export default connect(mapStateToProps)(SelectedParticipantItem);