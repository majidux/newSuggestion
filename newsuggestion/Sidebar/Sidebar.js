import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Sidebar extends Component {
    render() {
        return (
            <View style={styles.sideBar}>
                <Text>Body</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sideBar:{
        backgroundColor:'red',
        flex: .29,
    }
});