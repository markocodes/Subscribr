import React from "react";
import { FlatList, Text } from "react-native";
import Screen from "../components/Screen";
import SubListing from "../components/SubListing";

const subs = [
  {
    id: 1,
    title: "Netflx",
    desc: "This is first sub",
    price: "$5.99",
    nextPayment: "today",
    image: require("../assets/tiny_logo.png"),
  },
  {
    id: 2,
    title: "Prime Video",
    desc: "This is first sub",
    price: "$5.99",
    nextPayment: "tomorrow",
    image: require("../assets/tiny_logo.png"),
  },
];

function SubListScreen(props) {
  return (
    <Screen>
      <FlatList
        data={subs}
        keyExtractor={(sub) => sub.id.toString()}
        renderItem={({ item }) => (
          <SubListing
            title={item.title}
            desc={item.desc}
            price={item.price}
            nextPayment={item.nextPayment}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

export default SubListScreen;
