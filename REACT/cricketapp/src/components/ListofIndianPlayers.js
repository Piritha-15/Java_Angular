import React from "react";

const T20Players = [
    "First Player",
    "Second Player",
    "Third Player"
];

const RanjiPlayers = [
    "Fourth Player",
    "Fifth Player",
    "Sixth Player"
];

export const IndianPlayers = [
    ...T20Players,
    ...RanjiPlayers
];

function ListofIndianPlayers(props) {

    return (
        <div>
            {props.IndianPlayers.map((player, index) => (
                <li key={index}>Mr. {player}</li>
            ))}
        </div>
    );
}

export default ListofIndianPlayers;