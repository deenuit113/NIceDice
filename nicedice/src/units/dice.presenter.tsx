import { DiceUIProps } from "./dice.types";
import * as S from "./dice.styles";

export default function DiceUI (props: DiceUIProps) {
    return (
        <>
            <S.Wrapper>
                <S.RollButton onClick={props.rollDice} disabled={props.isButtonDisabled}>Roll Dice</S.RollButton>
                <S.DiceValue>{props.diceValue}</S.DiceValue>
            </S.Wrapper>
        </>
    )
}