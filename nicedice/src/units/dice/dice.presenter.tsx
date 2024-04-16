import { DiceUIProps } from "./dice.types";
import * as S from "./dice.styles";
import ScoreBoard from "../scoreboard/ScoreBoard.container";

export default function DiceUI(props: DiceUIProps) {
    
    return (
        <>
            <S.Wrapper id = {props.wrapperName}>
                <S.PlayerWrapper>
                    <S.RollButton onClick={props.rollDice} disabled={props.isButtonDisabled}>Roll Dice</S.RollButton>
                    <S.DiceValueWrapper>
                        {props.diceValues.map((value, index) => (
                            <S.DiceValue key={index} diceValue={value}>{value}</S.DiceValue>
                        ))}
                    </S.DiceValueWrapper>
                    <S.PlayerBoardWrapper>
                        <ScoreBoard/>
                    </S.PlayerBoardWrapper>
                </S.PlayerWrapper>
            </S.Wrapper>
        </>
    );
}