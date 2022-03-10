import { StyleSheet, View, Text } from "react-native";
import { map, capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";
import React from "react";

export default function Type(props) {
  const { types } = props;

  return (
    <View style={styles.content}>
      <Text>
        {map(types, (item, index) => (
          <View
            key={index}
            style={{
              ...styles.pill,
              backgroundColor: getColorByPokemonType(item.type.name),
            }}
          >
            <Text style={styles.name}>{capitalize(item.type.name)}</Text>
          </View>
        ))}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 25,
  },
  name: {
    fontSize: 18,
  },
});
