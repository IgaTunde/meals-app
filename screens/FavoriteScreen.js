import MealList from "../components/MealList/MealList";
import { StyleSheet, View, Text } from "react-native";

import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";

export default function FavoriteScreen() {
  const favoriteMealCtx = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootcontainer}>
        <Text style={styles.textr}>You have no favorite meals yet</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
