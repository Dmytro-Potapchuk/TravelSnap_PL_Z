import React from "react";
import { Text } from "react-native";

interface RatingStarsProps {
    rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

    return <Text>{stars}</Text>;
};

export default RatingStars;