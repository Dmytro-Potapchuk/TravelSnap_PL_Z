import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "../app/index";

jest.mock("../components/TripCard", () => {
    return function MockTripCard(props: {
        title: string;
        destination: string;
        date: string;
        rating: number;
        onUsun?: () => void;
    }) {
        const { title, destination, date, rating } = props;
        return (
            <>
                {title}
                {destination}
                {date}
                {rating}
            </>
        );
    };
});

describe("HomeScreen", () => {
    it("renders header content", () => {
        const { getByText } = render(<HomeScreen />);

        getByText("TravelSnap");
        getByText("Twój dziennik podróży");
        getByText("Kajetan Kisielewski");
    });
});
