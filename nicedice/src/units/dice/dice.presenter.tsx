import { DiceUIProps } from "./dice.types";
import * as S from "./dice.styles";
import ScoreBoard from "../scoreboard/ScoreBoard.container";
import { useRecoilState } from "recoil";
import { turnCount1p, turnCount2p, turnState } from "@/commons/state/atoms";

export default function DiceUI(props: DiceUIProps) {
    const [leftTurn1p, setLeftTurn1p] = useRecoilState(turnCount1p);
    const [leftTurn2p, setLeftTurn2p] = useRecoilState(turnCount2p);

    return (
        <>
            <S.Wrapper id = {props.wrapperName}>
                <S.PlayerWrapper>
                    <S.RollButton onClick={props.rollDice} disabled={props.isButtonDisabled}>
                        {props.player === '1p' ? (
                            <span>
                                <span>{props.player} Roll Dice </span>
                                <S.LeftTurn>{leftTurn1p}</S.LeftTurn>
                            </span>
                        ) : (
                            <span>
                                <span>{props.player} Roll Dice </span>
                                <S.LeftTurn>{leftTurn2p}</S.LeftTurn>
                            </span>
                        )}
                    </S.RollButton>
                    <S.DiceValueWrapper>
                        {props.diceValues.map((value, index) => {
                            return (
                                <S.DiceValue 
                                    key={index} 
                                    diceValue={value} 
                                    isFixed={props.isDiceFixed[index]}
                                    onClick={()=>props.onClickFixDice(index)}>
                                    {value}
                                </S.DiceValue>
                            );
                        })}
                    </S.DiceValueWrapper>
                    <S.PlayerBoardWrapper>
                        <ScoreBoard
                            diceValues = {props.diceValues}
                        />
                    </S.PlayerBoardWrapper>
                </S.PlayerWrapper>
            </S.Wrapper>
        </>
    );
}