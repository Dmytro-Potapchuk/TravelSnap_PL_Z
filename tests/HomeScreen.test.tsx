import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "../app/index";

describe("HomeScreen", () => {
    it("renders header content", () => {
        const { getByText } = render(<HomeScreen />);

        getByText("TravelSnap");
        getByText("Twój dziennik podróży");
        getByText("Kajetan Kisielewski");
    });

    it("shows zero trips initially", () => {
        const { getByText } = render(<HomeScreen />);
        getByText("Liczba podróży: 0");
    });

    it("does not add a trip when the form is empty", () => {
        const { getByText } = render(<HomeScreen />);
        fireEvent.press(getByText("Dodaj"));
        getByText("Liczba podróży: 0");
    });

    it("does not add a trip when rating is outside 1-5", () => {
        const { getByText, getByPlaceholderText } = render(<HomeScreen />);
        fireEvent.changeText(
            getByPlaceholderText("Tytuł podróży..."),
            "Tytuł",
        );
        fireEvent.changeText(
            getByPlaceholderText("Destynacja..."),
            "Miasto",
        );
        fireEvent.changeText(
            getByPlaceholderText("Data (YYYY-MM)..."),
            "2024-06",
        );
        fireEvent.changeText(getByPlaceholderText("Ocena (1-5)..."), "6");
        fireEvent.press(getByText("Dodaj"));
        getByText("Liczba podróży: 0");
    });

    it("adds a trip and clears inputs when data is valid", () => {
        const { getByText, getByPlaceholderText, queryByDisplayValue } =
            render(<HomeScreen />);

        fireEvent.changeText(
            getByPlaceholderText("Tytuł podróży..."),
            "Góry",
        );
        fireEvent.changeText(
            getByPlaceholderText("Destynacja..."),
            "Zakopane",
        );
        fireEvent.changeText(
            getByPlaceholderText("Data (YYYY-MM)..."),
            "2024-07",
        );
        fireEvent.changeText(getByPlaceholderText("Ocena (1-5)..."), "4");
        fireEvent.press(getByText("Dodaj"));

        getByText("Góry");
        getByText("Zakopane");
        getByText("2024-07");
        getByText("Liczba podróży: 1");
        expect(queryByDisplayValue("Góry")).toBeNull();
    });

    it("removes a trip when Usuń is pressed", () => {
        const { getByText, getByPlaceholderText, queryByText } = render(
            <HomeScreen />,
        );

        fireEvent.changeText(
            getByPlaceholderText("Tytuł podróży..."),
            "Na usuwanie",
        );
        fireEvent.changeText(
            getByPlaceholderText("Destynacja..."),
            "Gdańsk",
        );
        fireEvent.changeText(
            getByPlaceholderText("Data (YYYY-MM)..."),
            "2024-03",
        );
        fireEvent.changeText(getByPlaceholderText("Ocena (1-5)..."), "2");
        fireEvent.press(getByText("Dodaj"));

        getByText("Na usuwanie");
        fireEvent.press(getByText("Usuń"));

        expect(queryByText("Na usuwanie")).toBeNull();
        getByText("Liczba podróży: 0");
    });
});
