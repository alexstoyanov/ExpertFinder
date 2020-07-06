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
    navigateOfferMessagesList,
} from "../../actions/index";

class OfferDetailsScreen extends Component {
    renderProductItemResponsesView(productItemResponses) {
        let itemResView = productItemResponses.map(productItem => {
            console.log(productItem);
            return (<Text>{productItem.productDescription}</Text>)
        });
        return itemResView;
    }

    render() {
        let offer = this.props.offers.find((x) => x && x.offerId == this.props.selectedOfferId);
        let productItemsViews = [];
        if (offer && offer.productItemResponses) {
            productItemsViews = this.renderProductItemResponsesView(offer.productItemResponses);
        }
        if(offer){

            return (
                <View style={styles.containerStyle}>

                    <View style={{flexDirection: "row", alignItems: 'center'}}>
                        <MaterialIcon name="subject" color="#000" size={14}/>
                        <Text style={globalStyles.titleTextStyle}>
                            {" " + offer.description}
                        </Text>
                    </View>
                    {productItemsViews}
                    {
                        offer.price ?  <View style={{flexDirection:"row"}}>
                            <Text style={styles.promptStyle}>{Strings.PROMPT_IMPORTANCE + ": " + offer.price}</Text>
                        </View> :<View/>
                    }

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
                    {
                        offer.studentResponse
                        && offer.studentResponse.firstName ?

                            <View/> : <Button rounded success onPress={() => {
                                navigateAllStudents(this.props.navigation.getParam("offerId"))
                            }}
                                              style={{marginTop: 32}} block>
                                <MaterialIcon name="person-pin" color='#FFFFFF' size={24}/>
                                <Text style={{fontSize: 17, color: '#FFFFFF', marginLeft: 8}}>
                                    {Strings.ASSIGN_TO_STUDENT}
                                </Text>
                            </Button>
                    }
                    <Button rounded info
                            onPress={() => navigateOfferMessagesList(offer)}
                            style={{marginTop: 32}} block>
                        <MaterialIcon name="comment" color='#FFFFFF' size={24}/>
                        <Text style={{fontSize: 17, color: '#FFFFFF', marginLeft: 8}}>
                            {Strings.COMMENTS}
                        </Text>
                    </Button>
                </View>
            );
        }else{
            return(<View/>);
        }
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