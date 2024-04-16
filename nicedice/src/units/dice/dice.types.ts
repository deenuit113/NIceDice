export interface DicePlayerProps {
    player: string;
}

export interface DiceUIProps {
    rollDice: () => void;
    isButtonDisabled: boolean;
    diceValues: number[];
    wrapperName: string;
}