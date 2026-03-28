import { StyleSheet, Text, View, ScrollView } from "react-native";
import TripCard from "../components/TripCard";

export default function HomeScreen() {
  return (
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>TravelSnap</Text>
          <Text style={styles.subtitle}>Twój dziennik podróży</Text>
          <Text style={styles.author}>Kajetan Kisielewski</Text>
        </View>

        {/* Trip cards */}
        <TripCard
            title="Weekend w Rzymie"
            destination="Włochy"
            date="2024-06-15"
            rating={5}
        />
        <TripCard
            title="Wyjazd w Tatry"
            destination="Polska"
            date="2024-07-10"
            rating={4}
        />
        <TripCard
            title="City break Paryż"
            destination="Francja"
            date="2024-08-01"
            rating={3}
        />
        <TripCard
            title="Barcelona Trip"
            destination="Hiszpania"
            date="2024-09-12"
            rating={5}
        />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#e94560",
    marginBottom: 8,
  },
  author: {
    fontSize: 16,
    color: "#888",
    fontStyle: "italic",
  },
});