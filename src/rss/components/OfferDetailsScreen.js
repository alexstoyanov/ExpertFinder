import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {Button} from "native-base";
import * as Strings from "../../utils/Strings";
import {globalColors} from "../../utils/Colors";
import {
    navigateAllStudents,
} from "../../actions/index";

class OfferDetailsScreen extends Component {
    constructor() {
        super();
    }

    render() {
        let offer = this.props.offers.find((x) => x && x.offerId == this.props.selectedOfferId);
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.offerInfoStyle}>
                    {
                        offer.description
                    }
                </Text>
                {
                    offer.studentResponse
                    && offer.studentResponse.firstName ?

                        <Text style={styles.studentLabelStyle}>
                            {
                                Strings.SEND_TO + " "
                                + offer.studentResponse.firstName + " "
                                + offer.studentResponse.lastName
                            }
                        </Text> : <View/>
                }
                <Button rounded success onPress={() => {
                    navigateAllStudents(this.props.navigation.getParam("offerId"))
                }}
                        style={{marginTop: 32}} block>
                    <MaterialIcon name="person-pin" color='#FFFFFF' size={30}/>
                    <Text style={{fontSize: 17, color: '#FFFFFF', marginLeft: 8}}>
                        {Strings.ASSIGN_TO_STUDENT}
                    </Text>
                </Button>
            </View>
        );
    }
}

OfferDetailsScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTitleStyle: globalStyles.headerTitleStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerTitle:
        <Text style={{fontSize: 24, color: "#FFFFFF"}}>
            ТЕСТ
        </Text>
});


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin: 16,
        flexDirection: 'column',
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
});

const mapStateToProps = state => ({
    selectedOfferId: state.offer.selectedOfferId,
    offers: state.offer.offers
});

export default connect(mapStateToProps)(OfferDetailsScreen);