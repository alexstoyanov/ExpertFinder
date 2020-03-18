import React, {Component} from "react";
import {FlatList, Image, Platform, StyleSheet, TouchableOpacity, View,Text} from "react-native";
import {connect} from "react-redux";
import ListItem from './SelectedParticipantItem';
import {deleteSelectedParticipant,} from "../../actions/index";
import {globalStyles} from "../../utils/Styles";
import * as Strings from "../../utils/Strings";
import Icon from "react-native-vector-icons/Ionicons";

class SelectedParticipantsScreen extends Component {

    keyExtractor = (item, index) => item.id.toString();

    render() {
        let selectedParticipants = this.props.selectedParticipants;
        return (
            <View style={styles.containerStyle}>
            <FlatList
                removeClippedSubviews={false}
                keyExtractor={item => item.id.toString()}
                data={selectedParticipants}
                renderItem={({item, index}) => <ListItem
                    key={index}
                    onDeleteItem={() => this.handleDeleteItem(index)}
                    participant={item}/>}
            />
            </View>
        );
    }

    handleDeleteItem = (index) => {
        let selectedParticipants = this.props.selectedParticipants;

        selectedParticipants.splice(index, 1);

        this.props.deleteSelectedParticipant(selectedParticipants);
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: "#CED0CE",
                }}
            />
        );
    };

}

SelectedParticipantsScreen.navigationOptions = ({navigation}) => ({
    header:
        <View style={globalStyles.headerStyle}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                height: Platform.OS === 'ios' ? 44 : 56
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }} style={{
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flex: 1,
                    paddingLeft: 16,
                    paddingRight: 16
                }}>
                    <Icon name="ios-close" color='#FFFFFF' size={35}/>
                </TouchableOpacity>
                <Text style={{fontSize: 17, color: "#FFFFFF"}}>
                    {Strings.SELECTED_PARTICIPANTS}
                </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}
                                  style={{
                                      justifyContent: 'center',
                                      alignItems: 'flex-end',
                                      flex: 1,
                                      paddingLeft: 16,
                                      paddingRight: 16
                                  }}>
                    <Icon name="ios-checkmark" color='#FFFFFF' size={35}/>
                </TouchableOpacity>
            </View>
        </View>
});

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
});

const mapStateToProps = state => ({
    selectedParticipants: state.communication.selectedParticipants,
    loading: state.classBook.loading
});

export default connect(mapStateToProps, {deleteSelectedParticipant})(SelectedParticipantsScreen);