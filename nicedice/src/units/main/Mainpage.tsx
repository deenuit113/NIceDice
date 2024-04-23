import DicePlayer from "@/units/dice/dice.container";
import * as S from "./Mainpage.styles";
import { useRecoilState } from "recoil";
import { turnState, turnCount1p, turnCount2p, winState } from "@/commons/state/atoms";
import { useEffect } from "react";

export default function MainPage(): JSX.Element{
    const playerOne = "1p";
    const playerTwo = "2p";
    const [turn, setTurn] = useRecoilState(turnState);
    const [leftTurn1p, setLeftTurn1p] = useRecoilState(turnCount1p);
    const [leftTurn2p, setLeftTurn2p] = useRecoilState(turnCount2p);
    const [win, setWin] = useRecoilState(winState);
    
    useEffect(()=> {
        setLeftTurn1p(2);
        setTurn(playerOne)
    },[])

    useEffect(() => {
        if (leftTurn1p === -1) {
            setTurn(playerTwo);
            setLeftTurn1p(2);
            console.log("turn 2")
        } else if (leftTurn2p === -1){
            setTurn(playerOne);
            setLeftTurn2p(2);
            console.log("turn 1")
        }
    }, [leftTurn1p, leftTurn2p, turn]);

    console.log(turn);

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