import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Body extends Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.allContent}>
                    <View style={styles.commonStyle}>
                        <Text style={styles.mainTitleText}>پیشنهادها</Text>
                    </View>
                    <View style={styles.commonStyle}>
                        <Text style={styles.subTitleText}>چطور میتونیم پیام گستر را بهبود ببخشیم؟</Text>
                    </View>
                    <View style={[styles.suggTitle, styles.commonStyle]}>
                        <Text style={[styles.textInBoxes,styles.textInBox2]}>پیشنهاد خود را بنویسید ...</Text>
                        <Image
                            source={require('../image/cross.png')}
                        />
                    </View>
                    <View style={[styles.commonStyle2, styles.category]}>
                        <Text style={[styles.textInBoxes,styles.textInBox2]}>دسته بندی</Text>
                        <Image
                            source={require('../image/point.png')}
                        />
                    </View>
                    <View style={[styles.commonStyle2, styles.suggDescription]}>
                        <Text style={[styles.textInBoxes,styles.textInBox2]}>پیشنهاد خود را توضیح دهید ...</Text>
                    </View>
                    <View style={[styles.commonStyle, styles.buttons]}>
                        <View style={styles.confirmButtonView}>
                            <Text style={[styles.button,styles.confirmButton]}>ثبت</Text>
                        </View>
                        <View style={styles.declineButtonView}>
                            <Text style={[styles.button,styles.declineButton]}>انصراف</Text>
                        </View>
                    </View>
                    <View style={[styles.commonStyle,styles.noSuggView]}>
                        <Text style={styles.noSugg}>هیچ پیشنهادی یافت نشد !</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        flex: .75,
        backgroundColor: 'white',
    },
    allContent: {
        paddingRight: 35,
        paddingTop: 20,
    },
    mainTitleText: {
        color: 'black',
        fontSize: 30,
    },
    subTitleText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
        
    },
    textInBoxes: {
        fontSize: 16,
        color: 'black'
    },
    textInBox2:{
      color:'#666666'
    },
    
    suggTitle: {
        borderWidth: 1,
        borderColor: '#dddddd',
        paddingVertical: 15,
        paddingHorizontal: 12,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    commonStyle: {
        marginTop: 30,
    },
    commonStyle2: {
        marginTop: 10,
    },
    category: {
        borderWidth: 1,
        borderColor: '#dddddd',
        paddingVertical: 15,
        paddingHorizontal: 12,
        width: 300,
        alignSelf: 'flex-end',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    suggDescription: {
        paddingBottom: 80,
        paddingTop: 15,
        paddingRight: 12,
        borderWidth: 1,
        borderColor: '#dddddd',
        width: 550,
        alignSelf: 'flex-end',
        
        
    },
    buttons: {
        // backgroundColor: 'red',
        flexDirection: 'row-reverse',
        paddingHorizontal:10,
        justifyContent:'space-between',
        width:130,
        alignSelf:'flex-end'
    },
    confirmButtonView:{
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#00afb2',
        paddingHorizontal:22,
        paddingVertical:1
        
    },
    confirmButton:{
        color:'white'
    },
    declineButton:{
        color:'#00afb2'
    },
    declineButtonView:{
        justifyContent:'center',
        alignItems: 'center'
    },
    noSugg:{
        color:'#999999',
        fontSize:32,
    },
    noSuggView:{
        justifyContent:'center',
        alignItems:'center'
    }
    
    
});