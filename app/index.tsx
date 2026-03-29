import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    Pressable,
    View,
} from "react-native";
import TripCard from "../components/TripCard";
import type { Trip } from "@/types/trip";


export default function HomeScreen() {
    const [title, setTitle] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [rating, setRating] = useState("");
    const [trips, setTrips] = useState<Trip[]>([]);

    const handleAddTrip = () => {
        const trimmedTitle = title.trim();
        const trimmedDestination = destination.trim();
        const trimmedDate = date.trim();
        const trimmedRating = rating.trim();
        const parsedRating = Number(trimmedRating);

        const isDateValid = /^\d{4}-\d{2}$/.test(trimmedDate);
        const isRatingValid =
            Number.isInteger(parsedRating) && parsedRating >= 1 && parsedRating <= 5;

        if (
            !trimmedTitle ||
            !trimmedDestination ||
            !trimmedDate ||
            !trimmedRating ||
            !isDateValid ||
            !isRatingValid
        ) {
            return;
        }

        const newTrip: Trip = {
            id: Date.now().toString(),
            title: trimmedTitle,
            destination: trimmedDestination,
            date: trimmedDate,
            rating: parsedRating,
        };

        setTrips((prev) => [...prev, newTrip]);
        setTitle("");
        setDestination("");
        setDate("");
        setRating("");
    };

    const handleRemoveTrip = (id: string) => {
        setTrips((prev) => prev.filter((trip) => trip.id !== id));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>TravelSnap</Text>
                <Text style={styles.subtitle}>Twój dziennik podróży</Text>
                <Text style={styles.author}>Kajetan Kisielewski</Text>
            </View>

            <Text style={styles.sectionTitle}>Dodaj podróż</Text>

            <TextInput
                style={styles.input}
                placeholder="Tytuł podróży..."
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Destynacja..."
                value={destination}
                onChangeText={setDestination}
            />
            <TextInput
                style={styles.input}
                placeholder="Data (YYYY-MM)..."
                value={date}
                onChangeText={setDate}
            />
            <TextInput
                style={styles.input}
                placeholder="Ocena (1-5)..."
                value={rating}
                onChangeText={setRating}
                keyboardType="numeric"
            />

            <Pressable style={styles.addButton} onPress={handleAddTrip}>
                <Text style={styles.addButtonText}>Dodaj</Text>
            </Pressable>

            <Text style={styles.counter}>Liczba podróży: {trips.length}</Text>

            {trips.map((trip) => (
                <TripCard
                    key={trip.id}
                    title={trip.title}
                    destination={trip.destination}
                    date={trip.date}
                    rating={trip.rating}
                    onUsun={() => handleRemoveTrip(trip.id)}
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
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 12,
        color: "#1a1a2e",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ced4da",
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: "#fff",
        marginBottom: 8,
    },
    addButton: {
        backgroundColor: "#e94560",
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 4,
        marginBottom: 16,
    },
    addButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    counter: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 12,
        color: "#1a1a2e",
    },
});