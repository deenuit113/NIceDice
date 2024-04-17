import { DiceUIProps } from "./dice.types";
import * as S from "./dice.styles";
import ScoreBoard from "../scoreboard/ScoreBoard.container";

export default function DiceUI(props: DiceUIProps) {
    
    return (
        <>
            <S.Wrapper id = {props.wrapperName}>
                <S.PlayerWrapper>
                    <S.RollButton onClick={props.rollDice} disabled={props.isButtonDisabled}>{props.player} Roll Dice</S.RollButton>
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