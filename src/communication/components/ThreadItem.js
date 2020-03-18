import React, {Component} from "react";
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";
import FaIcon from "react-native-vector-icons/FontAwesome";

class ThreadItem extends Component {
    render() {
        const deviceWidth = Dimensions.get("window").width;
        let thread = this.props.thread;
        let fontWeight = 'normal';
        let unread = false;
        if (thread.is_unread && thread.is_unread == 1) {
            fontWeight = 'bold';
            unread = true;
        }
        return (
            <TouchableOpacity onPress={this.onItemPress.bind(this)}>
                <View style={styles.containerStyle}>
                    <View style={styles.imageContainerStyle}>
                        <View style={styles.profileImageContainerStyle}>
                            <FaIcon size={20} color="#fff" name="user-circle"/>
                        </View>
                    </View>
                    <View style={styles.dataStyle}>
                        <Text ellipsizeMode='tail'
                              numberOfLines={1}
                              style={{
                                  color: '#000000',
                                  fontSize: 17,
                                  fontWeight: fontWeight,
                                  width: deviceWidth - 86,
                              }}>
                            {
                                thread.subject
                            }
                        </Text>
                        <Text ellipsizeMode='tail'
                              numberOfLines={1}
                              style={{
                                  fontSize: 14,
                                  lineHeight: 25,
                                  color: '#0000008A'
                              }}>
                            {
                                thread.messages[0].text
                            }
                        </Text>
                    </View>
                </View>
                <View style={globalStyles.separatorStyle}/>
            </TouchableOpacity>
        );
    }

    onItemPress() {
        this.props.onPress(this.props.thread);
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    dataStyle: {
        justifyContent: 'center',
    },
    infoStyle: {
        color: '#000000DE',
        fontSize: 14,
    },
    imageContainerStyle:{
        marginRight: 16,
    },
    profileImageContainerStyle: {
        height: 38,
        width: 38,
        borderRadius: 19,
        backgroundColor: '#00000024',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        height: 16,
        width: 16,
    },
    emailImageStyle: {
        height: 12,
        width: 12,
        alignSelf:'flex-end',
        marginTop: -12
    }
});


const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ThreadItem);