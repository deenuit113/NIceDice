export interface ScoreBoardProps {
    diceValues: number[];
}

export interface ScoreBoardUIProps {
    diceValues: number[];
    fixScore: boolean[];
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
    onHoverAces: () => void;
    onHoverDeuces: () => void;
    onHoverThrees: () => void;
    onHoverFours: () => void;
    onHoverFives: () => void;
    onHoverSixes: () => void;
    onHoverChoice: () => void;
    onHoverFourOfAKind: () => void;
    onHoverFullHouse: () => void;
    onHoverSmallStraight: () => void;
    onHoverLargeStraight: () => void;
    onHoverYacht: () => void;
    onLeaveAces: () => void;
    onLeaveDeuces: () => void;
    onLeaveThrees: () => void;
    onLeaveFours: () => void;
    onLeaveFives: () => void;
    onLeaveSixes: () => void;
    onLeaveChoice: () => void;
    onLeaveFourOfAKind: () => void;
    onLeaveFullHouse: () => void;
    onLeaveSmallStraight: () => void;
    onLeaveLargeStraight: () => void;
    onLeaveYacht: () => void;
    onClickAces: () => void;
    onClickDeuces: () => void;
    onClickThrees: () => void;
    onClickFours: () => void;
    onClickFives: () => void;
    onClickSixes: () => void;
    onClickChoice: () => void;
    onClickFourOfAKind: () => void;
    onClickFullHouse: () => void;
    onClickSmallStraight: () => void;
    onClickLargeStraight: () => void;
    onClickYacht: () => void;
}