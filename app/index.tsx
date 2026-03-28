import { ScrollView, StyleSheet, Text, View } from "react-native";
import TripCard from "../components/TripCard";
import { trips } from "../data/trips";

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>TravelSnap</Text>
                <Text style={styles.subtitle}>Twój dziennik podróży</Text>
                <Text style={styles.author}>Kajetan Kisielewski</Text>
            </View>

            {trips.map((trip) => (
                <TripCard
                    key={trip.id}
                    title={trip.title}
                    destination={trip.destination}
                    date={trip.date}
                    rating={trip.rating}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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