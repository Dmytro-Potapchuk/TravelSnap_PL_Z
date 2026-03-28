import { StyleSheet, Text, View } from "react-native";
import RatingStars from "./RatingStars";

interface TripCardProps {
    title: string;
    destination: string;
    date: string;
    rating: number;
}

function TripCard({ title, destination, date, rating }: TripCardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.destination}>{destination}</Text>
            <Text style={styles.date}>{date}</Text>
            <RatingStars rating={rating} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 16,
        marginBottom: 12,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    destination: {
        fontSize: 14,
        color: "#333",
        marginBottom: 2,
    },
    date: {
        fontSize: 14,
        color: "#666",
        marginBottom: 8,
    },
});

export default TripCard;