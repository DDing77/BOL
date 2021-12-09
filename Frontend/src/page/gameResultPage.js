import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function GameResultPage() {
    const { gameId } = useParams();
    const userState = useSelector((store) => store.user);
    const gameState = useSelector((store) => store.game);
    console.log(gameState)
    return (
        <div>
            <h1>결과화면</h1>
        </div>
    )
}