import { DiceUIProps } from "./dice.types";
import * as S from "./dice.styles";

export default function DiceUI(props: DiceUIProps) {
    
    return (
        <>
            <S.Wrapper id = {props.wrapperName}>
                <S.RollButton onClick={props.rollDice} disabled={props.isButtonDisabled}>Roll Dice</S.RollButton>
                <S.DiceValueWrapper>
                    {props.diceValues.map((value, index) => (
                        <S.DiceValue key={index} diceValue={value}>{value}</S.DiceValue>
                    ))}
                </S.DiceValueWrapper>
            </S.Wrapper>
        </>
    );
}