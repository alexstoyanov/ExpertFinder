import React from 'react';
import {
    ActivityIndicator,
    Image,
    Modal,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {connect} from "react-redux";
import FaIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Strings from "../../utils/Strings";
import {Container, Content} from "native-base";
import {
    logoutUser,
    selectOfferStatusFilter,
    getOffers,
    toggleOfferStatusVisibility,
    toggleSpecialityVisibility,
    selectSpecialtyFilter,
    selectStudentFilter,
    toggleStudentsModalVisibility,
} from "../../actions/index";
import {globalStyles} from "../../utils/Styles";
import Icon from "react-native-vector-icons/Ionicons";
import {globalColors} from "../../utils/Colors";
import * as Constants from "../../utils/Constants";

class SettingsScreen extends React.Component {
    componentDidUpdate(prevProps) {
        if(prevProps.offerStatusFilter != this.props.offerStatusFilter){
            this.props.getOffers(1, this.props.offerStatusFilter);
        }
    }
    // Render any loading content that you like here
    render() {
        let offerStatusFilter = this.props.offerStatusFilter;
        let specialtyFilter = this.props.specialtyFilter;
        let studentFilter = this.props.studentFilter;
        let offerStatusFilterText = offerStatusFilter == Constants.ACTIVE ?
            Strings.ACTIVE : offerStatusFilter == Constants.ACCEPTED ?
                Strings.ACCEPTED : offerStatusFilter == Constants.DECLINED ?
                    Strings.DECLINED : offerStatusFilter == Constants.CANCELLED ?
                        Strings.CANCELED : "";
        return (
            <Container>
                <Content style={{backgroundColor: '#FFFFFF'}}>
                    <View style={styles.listContainerStyle}>
                        {this.renderSpecialityModal()}
                        {this.renderOfferStatusModal()}
                        {this.renderStudentsModal()}

                        <TouchableOpacity onPress={() => {
                            this.props.toggleSpecialityVisibility(true);
                        }}>
                            <View style={styles.listItemStyle}>
                                <Text style={globalStyles.titleTextStyle}>
                                    <FaIcon name="book" color="#000" size={14}/> {Strings.DEPARTMENT}
                                </Text>
                                <View style={{alignItems:'center', flexDirection: 'row'}}>
                                    {
                                        specialtyFilter && specialtyFilter != "" ?
                                            <Text style={globalStyles.secondaryTextStyle}>{specialtyFilter}</Text> :
                                            <View/>
                                    }
                                <MaterialIcons name="chevron-right" color='#000000' size={24}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.separatorStyle}/>
                        <TouchableOpacity onPress={() => {
                            this.props.toggleStudentsModalVisibility(true);
                        }}>
                            <View style={styles.listItemStyle}>
                                <Text style={globalStyles.titleTextStyle}>
                                    <FaIcon name="child" color="#000" size={14}/> {Strings.STUDENT}
                                </Text>
                                <View style={{alignItems:'center', flexDirection: 'row'}}>
                                    {
                                        studentFilter && studentFilter != "" ?
                                            <Text
                                                style={globalStyles.secondaryTextStyle}>{studentFilter}</Text> :
                                            <View/>
                                    }
                                    <MaterialIcons name="chevron-right" color='#000000' size={24}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.bigSeparatorStyle}/>
                        <TouchableOpacity onPress={() => {
                            this.props.toggleOfferStatusVisibility(true);
                        }}>
                            <View style={styles.listItemStyle}>
                                <Text style={globalStyles.titleTextStyle}>
                                    <FaIcon name="info-circle" color="#000" size={14}/> {Strings.OFFER_STATUS}
                                </Text>
                                <View style={{alignItems:'center', flexDirection: 'row'}}>
                                    {
                                        offerStatusFilter && offerStatusFilter != "" ?
                                            <Text
                                                style={globalStyles.secondaryTextStyle}>{offerStatusFilterText}</Text> :
                                            <View/>
                                    }
                                    <MaterialIcons name="chevron-right" color='#000000' size={24}/>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                </Content>
            </Container>
        );
    }

    renderOfferStatusModal() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.offerStatusModalVisible}
                onRequestClose={() => {
                }}>
                <SafeAreaView style={{
                    backgroundColor: globalColors.primaryColor,
                    shadowColor: 'transparent',
                    borderBottomWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => {
                        this.props.toggleOfferStatusVisibility(false);
                    }} style={globalStyles.headerButtonContainerStyle}>
                        <Icon name="ios-close" color='#FFFFFF' size={35}/>
                    </TouchableOpacity>
                    <Text style={[globalStyles.headerTitleStyle, {
                        flex: 1,
                        textAlign: 'center',
                        alignSelf: 'center'
                    }]}>Изберете статус</Text>
                    <View style={globalStyles.emptyHeaderButtonContainerStyle}/>
                </SafeAreaView>
                <View>
                    <TouchableOpacity onPress={() => {
                        this.props.selectOfferStatusFilter(Constants.ACTIVE);
                        this.props.toggleOfferStatusVisibility(false);
                    }}>
                        <View style={styles.listItemStyle}>
                            <Text style={globalStyles.titleTextStyle}>
                                {Strings.ACTIVE}
                            </Text>
                            <Icon name="md-checkmark" color='#000' size={16}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.separatorStyle}/>
                    <TouchableOpacity onPress={() => {
                        this.props.selectOfferStatusFilter(Constants.ACCEPTED);
                        this.props.toggleOfferStatusVisibility(false);
                    }}>
                        <View style={styles.listItemStyle}>
                            <Text style={globalStyles.titleTextStyle}>
                                {Strings.ACCEPTED}
                            </Text>
                            <Icon name="md-checkmark" color='#000' size={16}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.separatorStyle}/>
                    <TouchableOpacity onPress={() => {
                        this.props.selectOfferStatusFilter(Constants.DECLINED);
                        this.props.toggleOfferStatusVisibility(false);
                    }}>
                        <View style={styles.listItemStyle}>
                            <Text style={globalStyles.titleTextStyle}>
                                {Strings.DECLINED}
                            </Text>
                            <Icon name="md-checkmark" color='#000' size={16}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.separatorStyle}/>
                    <TouchableOpacity onPress={() => {
                        this.props.selectOfferStatusFilter(Constants.CANCELLED);
                        this.props.toggleOfferStatusVisibility(false);
                    }}>
                        <View style={styles.listItemStyle}>
                            <Text style={globalStyles.titleTextStyle}>
                                {Strings.CANCELED}
                            </Text>
                            <Icon name="md-checkmark" color='#000' size={16}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }

    renderSpecialityModal() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.specialityModalVisible}
                onRequestClose={() => {
                }}>
                <SafeAreaView style={{
                    backgroundColor: globalColors.primaryColor,
                    shadowColor: 'transparent',
                    borderBottomWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => {
                        this.props.toggleSpecialityVisibility(false);
                    }} style={globalStyles.headerButtonContainerStyle}>
                        <Icon name="ios-close" color='#FFFFFF' size={35}/>
                    </TouchableOpacity>
                    <Text style={[globalStyles.headerTitleStyle, {
                        flex: 1,
                        textAlign: 'center',
                        alignSelf: 'center'
                    }]}>Изберете специалност</Text>
                    <View style={globalStyles.emptyHeaderButtonContainerStyle}/>
                </SafeAreaView>
                <ScrollView style={{flexDirection: 'column'}}>
                    {
                        this.renderSpecialties()
                    }
                    <View style={styles.bigSeparatorStyle}/>
                    <TouchableOpacity key={-1} onPress={() => {
                        this.onResetSpecialtyFilter();
                    }}>
                        <View style={{padding: 16, flexDirection: 'row', justifyContent:'space-between'}}>
                            <Text style={{color: "#c51b26"}}>{Strings.RESET_FILTER}</Text>
                            <Icon name="md-close" color='#c51b26' size={16}/>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </Modal>);
    }

    renderSpecialties() {
        let i = 0;
        return this.props.offersSpecialities.map((data) => {
            i++;
            return (
                <TouchableOpacity key={i} onPress={() => {
                    this.onSpecialtyClicked(data);
                }}>
                    <View style={{padding: 16, flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text>{data}</Text>
                        <Icon name="md-checkmark" color='#000' size={16}/>
                    </View>
                    <View style={styles.separatorStyle}/>
                </TouchableOpacity>
            );
        });
    }

    onSpecialtyClicked(specialtyName) {
        this.props.selectSpecialtyFilter(specialtyName);
        this.props.toggleSpecialityVisibility(false);
    }

    renderStudentsModal() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.studentModalVisible}
                onRequestClose={() => {
                }}>
                <SafeAreaView style={{
                    backgroundColor: globalColors.primaryColor,
                    shadowColor: 'transparent',
                    borderBottomWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => {
                        this.props.toggleStudentsModalVisibility(false);
                    }} style={globalStyles.headerButtonContainerStyle}>
                        <Icon name="ios-close" color='#FFFFFF' size={35}/>
                    </TouchableOpacity>
                    <Text style={[globalStyles.headerTitleStyle, {
                        flex: 1,
                        textAlign: 'center',
                        alignSelf: 'center'
                    }]}>Изберете студент</Text>
                    <View style={globalStyles.emptyHeaderButtonContainerStyle}/>
                </SafeAreaView>
                <ScrollView style={{flexDirection: 'column'}}>
                    {
                        this.renderStudents()
                    }
                    <View style={styles.bigSeparatorStyle}/>
                    <TouchableOpacity key={-1} onPress={() => {
                        this.onResetStudentFilter();
                    }}>
                        <View style={{padding: 16, flexDirection: 'row', justifyContent:'space-between'}}>
                            <Text style={{color: "#c51b26"}}>{Strings.RESET_FILTER}</Text>
                            <Icon name="md-close" color='#c51b26' size={16}/>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </Modal>);
    }

    renderStudents() {
        let i = 0;
        return this.props.offersStudents.map((data) => {
            i++;
            return (
                <TouchableOpacity key={i} onPress={() => {
                    this.onStudentClicked(data);
                }}>
                    <View style={{padding: 16, flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text>{data}</Text>
                        <Icon name="md-checkmark" color='#000' size={16}/>
                    </View>
                    <View style={styles.separatorStyle}/>
                </TouchableOpacity>
            );
        });
    }

    onStudentClicked(studentName) {
        this.props.selectStudentFilter(studentName);
        this.props.toggleStudentsModalVisibility(false);
    }

    onResetStudentFilter() {
        this.props.selectStudentFilter("");
        this.props.toggleStudentsModalVisibility(false);
    }

    onResetSpecialtyFilter() {
        this.props.selectSpecialtyFilter("");
        this.props.toggleSpecialityVisibility(false);
    }
}


SettingsScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerTitle:
        <Text style={globalStyles.headerTitleStyle}>
            {Strings.MORE}
        </Text>,
});

const styles = StyleSheet.create({
    dateContainerStyle: {
        borderRadius: 12,
        backgroundColor: '#FFFFFF30',
        height: 40
    },
    listContainerStyle: {
        flexDirection: 'column',
    },
    listItemStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    separatorStyle: {
        backgroundColor: '#00000029',
        height: 1,
    },
    bigSeparatorStyle: {
        height: 8,
        backgroundColor: '#E5E5E5'
    },
    iconStyle: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    }
});

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    offerStatusModalVisible: state.offer.offerStatusModalVisible,
    offerStatusFilter: state.offer.offerStatusFilter,
    specialityModalVisible: state.offer.specialityModalVisible,
    offersSpecialities: state.offer.offersSpecialities,
    offersStudents: state.offer.offersStudents,
    specialtyFilter: state.offer.specialtyFilter,
    studentModalVisible: state.offer.studentModalVisible,
    studentFilter: state.offer.studentFilter,
});

export default connect(mapStateToProps, {
    logoutUser,
    toggleOfferStatusVisibility,
    toggleSpecialityVisibility,
    selectOfferStatusFilter,
    getOffers,
    selectSpecialtyFilter,
    selectStudentFilter,
    toggleStudentsModalVisibility
})(SettingsScreen);
