export interface ScoreBoardProps {
    diceValues: number[];
}

export interface ScoreBoardUIProps {
    diceValues: number[];
    aces: number;
    deuces: number;
    threes: number;
    fours: number;
    fives: number;
    sixes: number;
    subtotal: number;
    choice: number;
    fourOfAKind: number;
    fullHouse: number;
    smallStraight: number;
    largeStraight: number;
    yacht: number;
    total: number;
    onHoverAces: (diceValues: number[]) => number;
    onHoverDeuces: (diceValues: number[]) => number;
    onHoverThrees: (diceValues: number[]) => number;
    onHoverFours: (diceValues: number[]) => number;
    onHoverFives: (diceValues: number[]) => number;
    onHoverSixes: (diceValues: number[]) => number;
}