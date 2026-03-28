import React from "react";
import { render } from "@testing-library/react-native";
import TripCard from "../components/TripCard";

jest.mock("../components/RatingStars", () => {
    const { Text } = require("react-native");
    return function MockRatingStars({ rating }: { rating: number }) {
        return <Text>{rating}</Text>;
    };
});

describe("TripCard", () => {
    it("renders trip information", () => {
        const { getByText } = render(
            <TripCard
                title="Weekend w Rzymie"
                destination="Włochy"
                date="2024-06-15"
                rating={5}
            />
        );

        getByText("Weekend w Rzymie");
        getByText("Włochy");
        getByText("2024-06-15");
    });

    it("passes rating to RatingStars", () => {
        const { getByText } = render(
            <TripCard
                title="City break Paryż"
                destination="Francja"
                date="2024-08-01"
                rating={4}
            />
        );

        getByText("4");
    });
});
