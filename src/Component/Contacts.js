import React, { Component } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from "react-native-web";

class ContactDetail extends Component {
  render() {
    const { firstName, lastName, avatarUrl } = this.props;

    return (
      <TouchableHighlight underlayColor="rgba(0,0,0,.3)" onPress={() => {}}>
        <View style={styles.list}>
          <Image source={{ uri: avatarUrl }} style={styles.flatImage} />
          <Text style={styles.flatText}>{firstName}</Text>
          <Text style={styles.flatText}>{lastName}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
      filteredData: [],
      lastData: [],
      loading: false
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

  searchFilterFunction = text => {
    // debugger;
    let result = this.state.lastData.filter(contact =>
      `${contact.name.first.toUpperCase()} ${contact.name.last.toUpperCase()}`.includes(
        text.toUpperCase()
      )
    );
    this.setState({
      filteredData: result
    });
  };

  search = () => {
    return (
      <View style={styles.hedaerFlatList}>
        <View style={styles.main}>
          <Image
            source={require("../photos/search.png")}
            style={{ width: 13, height: 13, marginRight: 10 }}
          />
          <TextInput
            placeholder={"Search"}
            style={{ fontSize: 12, color: "#98999a" }}
            onChangeText={this.searchFilterFunction.bind(this)}
          />
        </View>
      </View>
    );
  };

  getContacts = () => {
    return this.state.filteredData.length > 0
      ? this.state.filteredData
      : this.state.filter;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.getContacts()}
          ListHeaderComponent={this.search}
          keyExtractor={item => item.email}
          renderItem={({ item }) => (
            <ContactDetail
              firstName={item.name.first}
              lastName={item.name.last}
              avatarUrl={item.picture.large}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ecf6ff",
    // height:300
  },
  list: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "white"
    paddingHorizontal: 30
  },
  flatImage: {
    width: 30,
    height: 35,
    borderRadius: 50
  },
  flatText: {
    color: "black",
    paddingTop: 5,
    paddingLeft: 5
  },
  search: {
    backgroundColor: "#dce2e8"
  },
  hedaerFlatList: {
    backgroundColor: "#dce2e8",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 30,
    padding: 10,
    marginVertical: 30,
    height: 30
  },
  main: {
    marginLeft: 50,
    flexDirection: "row"
  }
});

export default Contacts;
