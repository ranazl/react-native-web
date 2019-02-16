import React, { Component } from 'react';
import {chats} from '../chat/chats'
import { View, Text, StyleSheet, TextInput, Image,TouchableOpacity,Animated,Easing,FlatList} from 'react-native-web';

class Main extends Component {

    constructor(props){
        super(props)
        this.animatedValue3 = new Animated.Value(0)
    }

    componentDidMount () {
        this.animate()
      }
      animate () {
        this.animatedValue3.setValue(0)
        const createAnimation = function (value, duration, easing, delay = 0) {
          return Animated.timing(
            value,
            {
              toValue: 1,
              duration,
              easing,
              delay
            }
          )
        }
        Animated.parallel([
          createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)        
        ]).start()
      }

    render() {
        const introButton1 = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [-400, 10]
          })

        //   const introButton2 = this.animatedValue3.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [-230, 15]
        //   })

        //   const introButton3 = this.animatedValue3.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [-250, 30]
        //   })

        return (
            <View style={styles.container}>
            
            <View style={styles.header}>

                <View style={{flex:1,flexDirection:'row',alignItems: 'center'}}>
                    <Text style={{marginLeft:20}}>Marie Evans</Text>
                    <Image
                         source={require("../photos/circle.png")}
                         style={styles.circle}
                    />
                </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <Image
                                 source={require("../photos/folder.png")}
                              style={styles.imagIcon}
                            />
                        </TouchableOpacity>
                    
                        <TouchableOpacity>
                            <Image
                                source={require("../photos/phone.png")}
                                 style={{ width: 15, height: 15,marginLeft: 20, marginRight:32 }}
                             />
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <Image
                                source={require("../photos/videoo.png")}
                                style={{ width: 20, height: 20, marginRight: 20 }}
                             />
                        </TouchableOpacity>
                    </View>
                    </View>

<View style={{flex:8}}>
                    <FlatList
          data={chats}
          keyExtractor={item => item.email}
          renderItem={({ item }) => (

            <View style={{marginTop:60}}>

            <Animated.View style={item.sender === 'first' 
             ? {justifyContent: 'flex-end',flexDirection:'row',transform:([{ translateY: introButton1 }]) } 
            : {flexDirection:'row',justifyContent: 'flex-start',transform:([{ translateY: introButton1 }]) } } >
            <View style={{justifyContent: 'flex-end',flexDirection: 'row',alignItems: 'center',}}>
                     <Image
                        source={item.image}
                        style={styles.chatProfile}
                     /> 
                     <Text style={[styles.iconChat,{backgroundColor: item.sender === 'first' ? 'royalblue' : 'skyblue'}]}>
                     {item.title}</Text>
                     </View>
            </Animated.View>

            </View>
            )}
          />
            {/* <Animated.View style={{justifyContent:'flex-end',flexDirection: 'row',marginVertical:40,marginRight: 25,}}>
                     <Text style={[styles.iconChat,{marginRight:15,backgroundColor:'#65a8ea'}]}>{item.title}</Text>
                     <Image
                        source={item.image}
                        style={styles.chatProfile}
                     /> 
                     
            </Animated.View>
            <Animated.View style={{flexDirection:'row',marginLeft: 25,}}>

                     <Image
                        source={item.image}
                        style={styles.chatProfile}
                     /> 
                     <Text style={[styles.iconChat,{width:280,}]}>{item.title}</Text>
            </Animated.View> */}


       
        </View>


                <View style={styles.search}>
                <TextInput
                        style={{fontSize:10 ,paddingLeft:20,flex:1 }}
                        placeholder={"Type somthing to search..."}
                        // onChangeText={this.searchFilterFunction.bind(this)}
                    />
                <TouchableOpacity>
                        <Image
                    source={require("../photos/arrow-up.png")}
                    style={styles.imagIcon}
                    />
                    </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                    source={require("../photos/attachment.png")}
                    style={[styles.imagIcon,{marginHorizontal:10,}]}
                    />
                        </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                    source={require("../photos/smile.png")}
                    style={[styles.imagIcon,{marginHorizontal:10,}]}
                     />
                </TouchableOpacity>
                </View> 
                </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 6,
    },
    search: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: "#dce2e8",
        alignItems: "center",
        marginTop: 30,
      },
      header: { 
          flex:1,
          flexDirection: 'row',
          backgroundColor: "white",
          alignItems: "center",
      },
      imagIcon:{
        width: 15, 
        height: 15, 
        marginRight: 10
      },
      circle:{
        width: 7, 
        height: 7, 
        marginLeft:5,
        marginTop:4
      },
      chatProfile:{
        width: 30,
        height: 30, 
        borderRadius: 50,
        marginRight: 10 
      },
      iconChat:{
        width:190,
        minHeight:25,
        backgroundColor:'#ecf6ff',
        paddingLeft: 10,
        borderRadius:5,
        paddingTop: 7,
        justifyContent: 'center',
        padding: 20,
      }
});

export default Main;
