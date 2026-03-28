import React from "react";
import { render } from "@testing-library/react-native";
import RatingStars from "../components/RatingStars";

describe("RatingStars", () => {
    it("renders 5 stars for rating 5", () => {
        const { getByText } = render(<RatingStars rating={5} />);

        getByText("★★★★★");
    });

    it("renders mixed stars for rating 3", () => {
        const { getByText } = render(<RatingStars rating={3} />);

        getByText("★★★☆☆");
    });

    it("clamps rating above 5 to 5", () => {
        const { getByText } = render(<RatingStars rating={10} />);

        getByText("★★★★★");
    });

    it("clamps rating below 0 to 0", () => {
        const { getByText } = render(<RatingStars rating={-2} />);

        getByText("☆☆☆☆☆");
    });
});