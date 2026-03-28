import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RatingStars from "./RatingStars";

interface TripCardProps {
    title: string;
    destination: string;
    date: string;
    rating: number;
}

const TripCard = ({ title, destination, date, rating }: TripCardProps) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text>{destination}</Text>
            <Text>{date}</Text>
            <RatingStars rating={rating} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 16,
        marginBottom: 12,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default TripCard;