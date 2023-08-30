import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "../../Home/homecss";

import { FontAwesome } from "@expo/vector-icons";

function Card({ title, location, date, price, id, navigation, eventImage }) {
  const goToDetailPage = () => {
    navigation.navigate("EventsDetail", { id: id, title: title });
  };
  return (
    <View style={styles.homeCard}>
      <View
        style={{
          height: 100,
        }}
      >
        <Image
          source={{
            uri: `${eventImage}`,
          }}
          style={{
            borderRadius: 10,
            width: "100%",
            height: "100%",
            maxHeight: "100%",
            resizeMode: "stretch",
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          gap: 10,
        }}
      >
        <View style={styles.cardDetailText}>
          <FontAwesome name="map-marker" size={15} color="black" />
          <Text>{location}</Text>
        </View>
        <View style={styles.cardDetailText}>
          <FontAwesome name="calendar" size={15} color="black" />
          <Text>{date.split("-").reverse().join(" ")}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.cardDetailsButton}
        onPress={goToDetailPage}
      >
        <Text style={{ color: "white" }}>Detay</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Card;
