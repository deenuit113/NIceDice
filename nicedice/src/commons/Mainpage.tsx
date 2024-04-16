import DicePlayer from "@/units/dice.container";
import * as S from "./Mainpage.styles";

export default function MainPage(): JSX.Element{
    const playerOne = "1p";
    const playerTwo = "2p";

    return(
        <S.PageWrapper>
            <DicePlayer player={playerOne}/>
            <DicePlayer player={playerTwo}/>
        </S.PageWrapper>
    );
}