import { useEffect, useState } from "react";
import ScoreBoardUI from "./ScoreBoard.presenter";
import { ScoreBoardProps } from "./ScoreBoard.types";
import { DiceValue } from "../dice/dice.styles";

export default function ScoreBoard (props: ScoreBoardProps): JSX.Element {
    const [aces, setAces] = useState<number>(0);
    const [deuces, setDeuces] = useState<number>(0);
    const [threes, setThrees] = useState<number>(0);
    const [fours, setFours] = useState<number>(0);
    const [fives, setFives] = useState<number>(0);
    const [sixes, setSixes] = useState<number>(0);
    const [subtotal, setSubtotal] = useState<number>(0);
    const [choice, setChoice] = useState<number>(0);
    const [fourOfAKind, setFourOfAKind] = useState<number>(0);
    const [fullHouse, setFullHouse] = useState<number>(0);
    const [smallStraight, setSmallStraight] = useState<number>(0);
    const [largeStraight, setLargeStraight] = useState<number>(0);
    const [yacht, setYacht] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    useEffect(()=>{
        calculateSubTotal();
        calculateTotal();
    },[props.diceValues]);

    const countOccurrences = (diceValues: number[],value: number): number => {
        return diceValues.filter((diceValue) => diceValue === value).length;
    };

    const onHoverAces = (diceValues: number[]) => {
        return countOccurrences(diceValues, 1) * 1;
    };

    const onHoverDeuces = (diceValues: number[]) => {
        return countOccurrences(diceValues, 2) * 2
    };

    const onHoverThrees = (diceValues: number[]) => {
        return countOccurrences(diceValues, 3) * 3
    };

    const onHoverFours = (diceValues: number[]) => {
        return countOccurrences(diceValues, 4) * 4
    };

    const onHoverFives = (diceValues: number[]) => {
        return countOccurrences(diceValues, 5) * 5
    };

    const onHoverSixes = (diceValues: number[]) => {
        return countOccurrences(diceValues, 6) * 6
    };

    const calculateSubTotal = (): void => {
        let subTotalSum = aces + deuces + threes + fours + fives + sixes;
        setSubtotal((subTotalSum) >= 63 ? subTotalSum + 35 : subTotalSum);
    };

    const onHoverChoice = (diceValues: number[]) => {
        const sum = diceValues.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
          }, 0);
    };

    const onHoverFourOfAKind = (diceValues: number[]) => {
        diceValues.some((value) => countOccurrences(diceValues,value) >= 4)
            ? diceValues.reduce((acc, cur) => acc + cur, 0)
            : 0
    };

    const onHoverFullHouse = (diceValues: number[]) => {
        (diceValues.some((value) => countOccurrences(diceValues, value) === 3) &&
                diceValues.some((value) => countOccurrences(diceValues, value) === 2))
                ? 25
                : 0
    };

    const onHoverSmallStraight = (diceValues: number[]) => {
        (diceValues.includes(1) && diceValues.includes(2) && diceValues.includes(3) && diceValues.includes(4)) ||
            (diceValues.includes(2) && diceValues.includes(3) && diceValues.includes(4) && diceValues.includes(5)) ||
            (diceValues.includes(3) && diceValues.includes(4) && diceValues.includes(5) && diceValues.includes(6))
                ? 30
                : 0
    };

    const onHoverLargeStraight = (diceValues: number[]) => {
        (diceValues.includes(1) && diceValues.includes(2) && diceValues.includes(3) &&
                diceValues.includes(4) && diceValues.includes(5)) ||
        (diceValues.includes(2) && diceValues.includes(3) && diceValues.includes(4) &&
                diceValues.includes(5) && diceValues.includes(6))
                ? 40
                : 0
    };

    const onHoverYacht = (diceValues: number[]) => {
        diceValues.every((value) => value === diceValues[0]) ? 50 : 0
    };

    const calculateTotal = () => {
        return setTotal(subtotal + choice + fourOfAKind + fullHouse + smallStraight + largeStraight + yacht);
    };

    return (
        <>
            <ScoreBoardUI
                diceValues={props.diceValues}
                aces = {aces}
                deuces = {deuces}
                threes = {threes}
                fours = {fours}
                fives = {fives}
                sixes = {sixes}
                subtotal = {subtotal}
                choice = {choice}
                fourOfAKind = {fourOfAKind}
                fullHouse = {fullHouse}
                smallStraight = {smallStraight}
                largeStraight = {largeStraight}
                yacht = {yacht}
                total = {total}
                onHoverAces = {onHoverAces}
                onHoverDeuces = {onHoverDeuces}
                onHoverThrees = {onHoverThrees}
                onHoverFours = {onHoverFours}
                onHoverFives = {onHoverFives}
                onHoverSixes = {onHoverSixes}
            />
        </>
    );
}