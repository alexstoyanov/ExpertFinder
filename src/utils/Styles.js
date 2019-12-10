import {StyleSheet, Platform} from "react-native";
import {globalColors} from "./Colors";

export const globalStyles = StyleSheet.create({
    center: {
        alignItems:'center',
        justifyContent: 'center'
    },
    containerStyle: {
        flex: 1,
        backgroundColor:'#fff'
    },
    labelStyle: {
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 16,
        paddingLeft: 20,
        color: '#f7f6f6',
    },
    itemContainerStyle: {
        flex: 1,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    itemInfoStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        flexDirection: 'column',
    },
    titleTextStyle: {
        fontSize: 16,
        fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'montserrat_bold',
        color: 'black',
    },
    textStyle: {
        color: 'black',
        fontSize: 16,
        fontFamily: Platform.OS === 'ios' ? 'Montserrat-Regular' : 'montserrat_regular',
    },
    secondaryTextStyle: {
        fontSize: 14,
        fontFamily: Platform.OS === 'ios' ? 'OpenSansCondensed-Light' : 'opensanscondensed_light',
        color: 'black',
    },
    paddingStyle: {
        padding: 16,
    },
    horizontalPaddingStyle: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    verticalPaddingStyle: {
        paddingBottom: 16,
        paddingTop: 16,
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: '#f9aeae'
    },
    spinnerContainerStyle: {
        flex: 1,
        margin: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerStyle: {
        paddingLeft:16,
        paddingRight: 16,
        height: Platform.OS === 'ios' ? 64 : 56,
        backgroundColor: globalColors.primaryColor,
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
    },
    headerContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 44 : 56,
    },
    headerTitleContainerStyle:{
        flex: 1,
        backgroundColor: globalColors.primaryColor,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    headerTitleStyle: {
        color: '#FFFFFFFF',
        fontSize: 17,
        textAlign: 'center',
        alignSelf: 'center',
    },
    headerSubTitleStyle: {
        color: '#FFFFFF',
        fontSize: 12,
        textAlign: 'center',
        alignSelf: 'center',
    },
    headerIconStyle: {
        marginRight: 10,
    },
    headerButtonContainerStyle: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
    },
    emptyHeaderButtonContainerStyle: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
        width: 17,
        height: 17,
    },
    separatorStyle: {
        height: 1,
        backgroundColor: '#00000024'
    },
    verticalSeparatorStyle: {
        width: 1,
        backgroundColor: '#00000024'
    },
});