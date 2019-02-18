import React, { Component } from 'react';
import {chats} from '../chat/chats';
import { connect } from "react-redux";
import {setDelete , setItems , setID , setContact } from '../service/action';

import { View, Text, StyleSheet, TextInput, Image,TouchableOpacity,Animated,Easing,FlatList,TouchableHighlight} from 'react-native-web';

class Main extends Component {

    constructor(props){
        super(props)
        this.animatedValue3 = new Animated.Value(0)
        this.state={
          text : '',
          blinker:true
      }
    }

    pressButton=() =>{
      this.props.setID()
      console.log(this.state);
      if(this.state.text.length > 0 ){
      this.props.setItems(this.state.text)
      this.setState({
        text: ''
    })
    }
  }

    onTextChangeHandler =(input) =>{
      this.setState({
        text:input
      })
    }

    Remover = (index) => {

      this.props.setDelete(index)
   
    }    

    componentDidMount () {
        // this.animate(),
        setInterval(
          () => this.blinking(),
          900
        );
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

        blinking =() => {this.setState(prev=>({blinker:!prev.blinker}))}
 
    render() {
        const introButton1 = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [-400, 10]
          })

        return (
            <View style={styles.container}>
            
            <View style={styles.header}>

                <View style={{flex:1,flexDirection:'row',alignItems: 'center'}}>
                
                    <Text style={{marginLeft:20}}>{this.props.contactName}</Text>
                   { this.state.blinker && <Image
                         source={require("../photos/circle.png")}
                         style={styles.circle}
                    />}
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
          data={this.props.rana}
          keyExtractor={item => item.id}
          renderItem={({ item , index }) => <TouchableHighlight onPress={this.Remover.bind(this, index)}> 
            <Text style={styles.iconChat} onPress={this.props.setContact()}>{item.text}</Text> 
            </TouchableHighlight>
            }
        />

        </View>


                <View style={styles.search}>
                <TextInput
                        style={{fontSize:10 ,paddingLeft:20,flex:1 }}
                        placeholder={"Type somthing to search..."}
                        value={this.state.text}
                        onSubmitEditing={this.pressButton.bind(this)}
                        onChangeText={this.onTextChangeHandler.bind(this)}
                    />
                <TouchableOpacity onPress={this.pressButton.bind(this)} >
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
        marginLeft:15,
        marginRight:10, 
      },
      iconChat:{
        width:190,
        minHeight:25,
        backgroundColor:'skyblue',
        marginLeft: 10,
        borderRadius:5,
        marginTop: 20,
        justifyContent: 'center',
        padding:10,
       flex:1
      }
});

const mapStateToProps = state => {
  return {
    rana: state.items,
    contactName:state.name
    // datas : state
  };
};

export default connect(mapStateToProps,{setDelete,setItems,setID,setContact})(Main);
