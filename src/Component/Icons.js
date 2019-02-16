import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native-web';

class Icons extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                   <Image source={require('../photos/1.jpg')} style={styles.profile}/> 
                </View>
                <View style={{marginTop:30,}}>
               <TouchableOpacity><Image source={require('../photos/comment.png')} style={styles.icon}/></TouchableOpacity>  
               <TouchableOpacity><Image source={require('../photos/like.png')} style={styles.icon}/></TouchableOpacity>  
                <TouchableOpacity><Image source={require('../photos/video.png')} style={styles.icon}/></TouchableOpacity>  
                <TouchableOpacity><Image source={require('../photos/email.png')} style={styles.icon}/></TouchableOpacity>  
                <TouchableOpacity><Image source={require('../photos/setting.png')} style={styles.icon}/></TouchableOpacity>  
                </View>
                <View style={{marginTop:190,}}>
                <TouchableOpacity><Image source={require('../photos/note.png')} style={styles.icon}/></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#030132',
    },
    profile: {
        marginTop:35,
        width:30,
        height:30,
        borderRadius:50,
        borderWidth: 1.5,
        borderColor: 'white',
    },
    icon: {
        marginTop:40,
        width:15,
        height:15,
        // borderRadius:50,
    },
});

export default Icons;
