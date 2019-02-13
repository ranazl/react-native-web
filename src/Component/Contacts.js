import React, { Component } from 'react';
import { FlatList,View, Text, StyleSheet, Image, TextInput, TouchableHighlight,TouchableOpacity} from 'react-native-web';

class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: [],
      lastData: [],
      loading: false,
      
    };
  }
    componentDidMount() {
        this.fetchData();
      }
    
      fetchData = () => {
        let lastData = this.state.lastData;
        fetch("https://randomuser.me/api/?results=20")
          .then(response => response.json())
          .then(data => {
            this.setState(
              { lastData: [...lastData, ...data.results], loading: true },
              () => this.setState({ filter: this.state.lastData })
            );
          });
      };
      
    render() {
        return (
            <View style={styles.container}>
            <FlatList
                  data={this.state.filter}
                  keyExtractor={item => item.email}
                  renderItem={({ item }) => (
                    <TouchableOpacity>
                    <View style={styles.list}>
                      <Image
                        source={{ uri: item.picture.large }}
                        style={styles.flatImage}
                      />
                      <Text style={styles.flatText}>{item.name.first}</Text>
                      <Text style={styles.flatText}>{item.name.last}</Text>
                    </View>
                    </TouchableOpacity>
                  )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ecf6ff',
    },
    list: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 15,
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: "white"
        paddingHorizontal: 50,
      },
    flatImage:{
        width:35, 
        height:35, 
        borderRadius:50,

    },
    flatText:{
    
        color: "black",
        paddingTop: 5,
        paddingLeft: 5
    }  
});

export default Contacts;
