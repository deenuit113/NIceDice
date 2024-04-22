import DicePlayer from "@/units/dice/dice.container";
import * as S from "./Mainpage.styles";
import { useRecoilState } from "recoil";
import { turnState } from "@/commons/state/atoms";
import { useEffect } from "react";

export default function MainPage(): JSX.Element{
    const playerOne = "1p";
    const playerTwo = "2p";
    const [turn, setTurn] = useRecoilState(turnState);
    
    useEffect(() =>{
        setTurn(playerOne)
    }, [])

    return(
        <S.PageWrapper>
            <S.DicePlayerWrapper>
                <DicePlayer player={playerOne}/>
            </S.DicePlayerWrapper>
            <S.DicePlayerWrapper>
                <DicePlayer player={playerTwo}/>
            </S.DicePlayerWrapper>
        </S.PageWrapper>
    );
}