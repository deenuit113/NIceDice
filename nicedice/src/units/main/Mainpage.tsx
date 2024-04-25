import DicePlayer from "@/units/dice/dice.container";
import * as S from "./Mainpage.styles";
import { useRecoilState } from "recoil";
import { turnState, turnCount1p, turnCount2p, winState, selectScore1p, selectScore2p, totalScore1p, totalScore2p, isGameEnd } from "@/commons/state/atoms";
import { useEffect } from "react";

export default function MainPage(): JSX.Element{
    const playerOne = "1p";
    const playerTwo = "2p";
    const [turn, setTurn] = useRecoilState(turnState);
    const [leftTurn1p, setLeftTurn1p] = useRecoilState(turnCount1p);
    const [leftTurn2p, setLeftTurn2p] = useRecoilState(turnCount2p);
    const [select1p, isSelectScore1p] = useRecoilState(selectScore1p);
    const [select2p, isSelectScore2p] = useRecoilState(selectScore2p);
    const [total1p, setTotal1p] = useRecoilState(totalScore1p);
    const [total2p, setTotal2p] = useRecoilState(totalScore2p);
    const [isEnd, setIsEnd] = useRecoilState<boolean>(isGameEnd);
    const [win, setWin] = useRecoilState(winState);
    
    
    useEffect(()=> {
        if(isEnd === true){
            if(total1p > total2p) {
                setWin(playerOne);
                alert("1p win!")
            } 
            else if(total1p < total2p) {
                setWin(playerTwo);
                alert("2p win!")
            }
            else if(total1p === total2p) {
                setWin("draw");
                alert("draw")
            }
        };
    },[isEnd]);

    useEffect(()=> {
        setLeftTurn1p(3);
        setLeftTurn2p(3);
        setTurn(playerOne)
    },[])

    useEffect(() => {
        if (leftTurn1p === -1 || select1p === true) {
            setTurn(playerTwo);
            setLeftTurn1p(3);
            setLeftTurn2p(3);
            isSelectScore1p(false);
            console.log("turn 2")
        } else if (leftTurn2p === -1 || select2p === true){
            setTurn(playerOne);
            setLeftTurn2p(3);
            setLeftTurn1p(3);
            isSelectScore2p(false);
            console.log("turn 1")
        }
    }, [leftTurn1p, leftTurn2p, turn, select1p, select2p]);

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