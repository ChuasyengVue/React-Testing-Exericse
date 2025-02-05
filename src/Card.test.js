import React from 'react';
import {render} from "@testing-library/react";
import Card from './Card';

// Smoke TEST
it("renders without crashing", function () {
    render(<Card />);
})

// Snapshot Test
it("matches snapshot", function () {
    const { asFragment } = render(<Card />);
    expect( asFragment() ).toMatchSnapshot();
});