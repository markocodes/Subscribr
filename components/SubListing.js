import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

function SubListing() {
  return (
    <TouchableHighlight
      underlayColor="red"
      onPress={() => console.log("Pressed")}
    >
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require("../assets/tiny_logo.png")}
          />
          <View>
            <Text style={styles.name}>Netflix</Text>
            <Text>This is a netflix sub</Text>
          </View>
        </View>
        <View style={styles.price}>
          <View>
            <Text style={styles.priceText}>$5.99</Text>
            <Text>Today</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "yellow",
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
  },
  logoView: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  name: {
    fontSize: 20,
  },
  price: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20,
  },
  priceText: {
    fontSize: 17,
  },
});

export default SubListing;
