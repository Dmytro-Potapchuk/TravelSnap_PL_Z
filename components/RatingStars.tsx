import { Text } from "react-native";

interface RatingStarsProps {
    rating: number;
}

function clampRating(rating: number): number {
    return Math.max(0, Math.min(5, Math.floor(rating)));
}

function RatingStars({ rating }: RatingStarsProps) {
    const safeRating = clampRating(rating);
    const filledStars = "★".repeat(safeRating);
    const emptyStars = "☆".repeat(5 - safeRating);

    return <Text>{filledStars + emptyStars}</Text>;
}

export default RatingStars;