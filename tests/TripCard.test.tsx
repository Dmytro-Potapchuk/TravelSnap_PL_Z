import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TripCard from "../components/TripCard";

describe("TripCard", () => {
    it("renders title, destination, date and stars", () => {
        const { getByText } = render(
            <TripCard
                title="Test Trip"
                destination="Paris"
                date="2024-07"
                rating={4}
            />,
        );

        getByText("Test Trip");
        getByText("Paris");
        getByText("2024-07");
        getByText("★★★★☆");
    });

    it("renders remove control and calls onUsun when pressed", () => {
        const onUsun = jest.fn();
        const { getByText } = render(
            <TripCard
                title="T"
                destination="D"
                date="2024-01"
                rating={3}
                onUsun={onUsun}
            />,
        );

        fireEvent.press(getByText("Usuń"));
        expect(onUsun).toHaveBeenCalledTimes(1);
    });

    it("does not show remove control when onUsun is omitted", () => {
        const { queryByText } = render(
            <TripCard
                title="T"
                destination="D"
                date="2024-01"
                rating={3}
            />,
        );

        expect(queryByText("Usuń")).toBeNull();
    });
});
