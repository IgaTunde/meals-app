import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "../MealITem";

export default function MealList({ items }) {
  function renderMealItem({ item }) {
    return (
      <MealItem
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        affordability={item.affordability}
        complexity={item.complexity}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
