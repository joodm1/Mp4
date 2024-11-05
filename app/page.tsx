"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledButton = styled(Link)`
    margin-top:4%;
    align-items: center;
    background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    color: #FFFFFF;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 20px;
    justify-content: center;
    line-height: 1em;
    min-width: 140px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;

    &:active,
    &:hover {
        outline: 0;
    }

    & > span {
        background-color: rgb(5, 6, 45);
        padding: 16px 24px;
        border-radius: 6px;
        width: 100%;
        height: 100%;
        transition: 300ms;
    }

    &:hover span {
        background: none;
    }

    @media (min-width: 768px) {
        font-size: 24px;
        min-width: 196px;
    }
`;

export default function Home() {
    const [city, setCity] = useState("");

    return (
        <StyledDiv>
            <h1>Find the Weather in any city!</h1>
            <p>Enter a city name below to get the current weather</p>

            <input
                type="text"
                value={city}
                placeholder="City name"
                onChange={(e) => setCity(e.target.value)}
            />

            <StyledButton href={`/${city}`} role="button">
                <span>Get Weather</span>
            </StyledButton>
        </StyledDiv>
    );
}
