import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList} from "react-native";
import {connect} from "react-redux";
import SafeAreaView from 'react-native-safe-area-view';
import ListItem from "./OfferItem";

import {
    navigateOfferDetail,
} from "../actions/index";
import {globalStyles} from "../utils/Styles";

class TimelineScreen extends Component {
    constructor(){
        super();
        this.offers = [
            {
                id:"1",
                title:"Търся експерт за МАТ",
                description:"Имам проблем с бла бла"
            },
            {
                id:"2",
                title:"Търся експерт за Inf",
                description:"Имам проблем с бла бла"
            },
            {
                id:"3",
                title:"Търся експерт за ИИ",
                description:"Имам проблем с бла бла"
            },
            {
                id:"4",
                title:"Търся експерт за ТЕСТ",
                description:"Имам проблем с бла бла"
            },

        ];
    }

    onOfferItemPress(offer){
        navigateOfferDetail(offer);
    }

    render(props) {
        return (
            <SafeAreaView style={styles.containerStyle}>
                <FlatList
                    removeClippedSubviews={false}
                    keyExtractor={this.keyExtractor}
                    data={this.offers}
                    renderItem={({item}) => <ListItem
                        onOfferItemClick={this.onOfferItemPress.bind(this)}
                        offer={item}/>}
                />
            </SafeAreaView>
        );
    }
}

TimelineScreen.navigationOptions = ({navigation}) => ({
    header:
        <SafeAreaView style={globalStyles.headerStyle}>
                <Text style={{fontSize: 32, color: "#FFFFFF"}}>
                    ТЕСТ
                </Text>
        </SafeAreaView>
});

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
    },
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(TimelineScreen);