import React, {Component} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";

class MessageItem extends Component {
    render() {
        let message = this.props.message;

        return (
            <TouchableOpacity onPress={this.onItemPress.bind(this)}>
                <View style={styles.containerStyle}>
                    <View style={styles.imageContainerStyle}>
                        <Image source={require('../../img/person.png')}
                               style={styles.imageStyle}/>
                    </View>
                    <View style={styles.dataStyle}>
                        <Text style={styles.subjectStyle}>
                            {
                                message.subject
                            }
                        </Text>
                        <Text style={styles.infoStyle}>
                            {
                                message.participant_names
                            }
                        </Text>
                    </View>
                </View>
                <View style={globalStyles.separatorStyle}/>
            </TouchableOpacity>
        );
    }

    onItemPress() {
        this.props.onPress(this.props.message);
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems:'center',
        padding: 16,
    },
    dataStyle: {
        justifyContent: 'center',
    },
    subjectStyle: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    infoStyle: {
        color: '#000000DE',
        fontSize: 16,
    },
    imageContainerStyle: {
        height: 38,
        width: 38,
        borderRadius: 19,
        backgroundColor: '#00000024',
        alignItems: 'center',
        marginRight: 16,
        justifyContent: 'center'
    },
    imageStyle: {
        height: 16,
        width: 16,
    }
});


const mapStateToProps = state => ({});

export default connect(mapStateToProps)(MessageItem);