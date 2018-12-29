import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Sidebar extends Component {
    render() {
        return (
            <View style={styles.sideBar}>
                <View style={styles.noficationPanel}>
                    <View style={styles.noficationPanelWrapper}>
                        <View style={styles.noficationPanelHeader}>
                            <Text
                                style={{fontSize: 20, color: "#000", fontWeight: "600"}}
                            >
                                لورم ایپسوم متن ساختگی با
                            </Text>
                        </View>
                        <View style={styles.noficationPanelDetails}>
                            <Text
                                style={{
                                    color: "#000",
                                    fontSize: 16,
                                    fontWeight: "300",
                                    lineHeight: 30
                                }}
                            >
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است.
                            </Text>
                        </View>
                        <View style={styles.noficationPanelButton}>
                            <View style={styles.buttonWrapper}>
                                <Text style={{color: "#eee"}}>برو</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style={styles.noficationList}>
                    <View style={styles.eventText}>
                        <Text
                            style={{
                                color: "#2d3f4f",
                                fontSize: 18,
                                fontWeight: "500"
                            }}
                        >
                            دسته بندی
                        </Text>
                    </View>
                    <View style={styles.listMonth}>
                        <View style={styles.listHeader}>
                            <View>
                                <Image source={require("../image/buttonUp.png")}/>
                            </View>
                            <View>
                                <Text style={{fontWeight:'bold',fontSize:15}}>۱ پروداکت ریلیز</Text>
                            </View>
                        </View>
                        <View style={styles.listDetails}>
                            <Text style={styles.textStyle}>(۹) پیام گستر</Text>
                            <Text style={styles.textStyle}>(۴) ماژول های عمومی</Text>
                            <Text style={styles.textStyle}>(۸) ماژول های عمومی</Text>
                            <Text style={styles.textStyle}>(۲۱) همه موضوعات</Text>
                        </View>
                    </View>
                    
                    <View style={styles.listMonth}>
                        <View style={styles.listHeader}>
                            <View>
                                <Image source={require("../image/buttonUp.png")}/>
                            </View>
                            <View>
                                <Text style={{fontWeight:'bold',fontSize:15}}>۲ پروداکت ریلیز</Text>
                            </View>
                        </View>
                        <View style={styles.listDetails}>
                            <Text style={styles.textStyle}>(۹) پیام گستر</Text>
                            <Text style={styles.textStyle}>(۴) ماژول های عمومی</Text>
                            <Text style={styles.textStyle}>(۸) ماژول های عمومی</Text>
                            <Text style={styles.textStyle}>(۲۱) همه موضوعات</Text>
                        </View>
                    </View>
                    <View style={styles.listMonth}>
                        <View style={styles.listHeader}>
                            <View>
                                <Image source={require("../image/Icon-Shade.png")}/>
                            </View>
                            <View>
                                <Text style={{fontWeight:'bold',fontSize:15}}>۱ پروداکت ریلیز</Text>
                            </View>
                        </View>
                        <View style={styles.listDetails}>

                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    
    sideBar: {
        flex: 0.23,
        borderColor: "steelblue",
        backgroundColor:'white',
        // borderWidth: 13,
        padding: 25,
        paddingTop: 40
    },
    noficationPanel: {
        flex: 0.3,
        // backgroundColor: "#333",
        borderColor: "red",
        // borderWidth: 3,
        paddingVertical: 12,
        paddingHorizontal: 2
    },
    noficationPanelWrapper: {
        flex: 1,
        backgroundColor: "#eeeeee",
        paddingHorizontal: 10,

    },
    noficationPanelHeader: {
        flex: 0.25,
        borderColor: "teal",
        // borderWidth: 3,
        justifyContent: "center"
    },
    noficationPanelDetails: {
        flex: 0.5,
        borderColor: "gold",
        // borderWidth: 3
    },
    noficationPanelButton: {
        flex: 0.25,
        borderColor: "red",
        // borderWidth: 3,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    buttonWrapper: {
        height: 36,
        width: 76,
        backgroundColor: "#00afb2",
        justifyContent: "center",
        alignItems: "center"
    },
    
    eventText: {
        flex: 0.1,
        flexDirection: "row",
        borderColor: "red",
        // borderWidth: 3,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    noficationList: {
        flex: 0.7,
        borderColor: "gold",
        // borderWidth: 5
    },
    listMonth: {
        flex: 0.35,
        borderColor: "#444",
        // borderWidth: 5,
        paddingHorizontal: 10
    },
    listHeader: {
        flex: 0.15,
        backgroundColor: '#f3f6fa',
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 5
    },
    
    listDetails: {
        flex: 0.85,
        backgroundColor: "#fff",
        justifyContent: "space-evenly",
        paddingRight: 20,
    },
    textStyle:{
        fontSize: 14,
        color: '#ff795f',
    }
    
});