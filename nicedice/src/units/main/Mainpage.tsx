import DicePlayer from "@/units/dice/dice.container";
import * as S from "./Mainpage.styles";

export default function MainPage(): JSX.Element{
    const playerOne = "1p";
    const playerTwo = "2p";

    return(
        <S.PageWrapper>
            <S.DicePlayerWrapper>
                <DicePlayer player={playerOne}/>
            </S.DicePlayerWrapper>
            <S.DicePlayerWrapper>
                <DicePlayer player={playerTwo}/>
            </S.DicePlayerWrapper>
        </S.PageWrapper>
    );
}