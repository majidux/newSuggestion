import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Body extends Component {
    render() {
        return (
            <View style={styles.body}>
                <Text>Sidebar</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        flex: .77,
        backgroundColor:'blue'
    }
});