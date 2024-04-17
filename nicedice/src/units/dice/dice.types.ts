export interface DicePlayerProps {
    player: string;
}

export interface DiceUIProps {
    rollDice: () => void;
    isButtonDisabled: boolean;
    diceValues: number[];
    wrapperName: string;
    player: string;
    isDiceFixed: boolean[];
    onClickFixDice: (index: number) => void;
}