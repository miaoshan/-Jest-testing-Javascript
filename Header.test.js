import React from 'react';
import{render, cleanup} from 'react-testing-library';
import "jest-dom/extend-expect";
import Header from './Header';

it("renders", () =>{
    const {asFragment} = render(<Header text= "hello!" />);
    expect(asFragment()).toMatchSnapshot();
});