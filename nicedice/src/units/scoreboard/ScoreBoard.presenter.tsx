import * as S from "./ScoreBoard.styles";
import { ScoreBoardUIProps } from "./ScoreBoard.types";

export default function ScoreBoardUI (props: ScoreBoardUIProps): JSX.Element {

    return (
        <>
            <S.PlayerBoard>
                <S.BasicScoreBoard>
                    <S.ScoreBoardTitleHeader>
                    <tr>
                        <S.ScoreBoardTitle>Basic Score</S.ScoreBoardTitle>
                    </tr>
                    </S.ScoreBoardTitleHeader>
                    <tbody>
                    <tr>
                        <S.ScoreTitle>Aces</S.ScoreTitle>
                        <S.Score>{props.aces}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Deuces</S.ScoreTitle>
                        <S.Score>{props.deuces}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Threes</S.ScoreTitle>
                        <S.Score>{props.threes}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Fours</S.ScoreTitle>
                        <S.Score>{props.fours}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Fives</S.ScoreTitle>
                        <S.Score>{props.fives}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Sixes</S.ScoreTitle>
                        <S.Score>{props.sixes}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Subtotal</S.ScoreTitle>
                        <S.Score>{props.subtotal}</S.Score>
                    </tr>
                    </tbody>
                </S.BasicScoreBoard>
                <S.SpecialScoreBoard>
                    <S.ScoreBoardTitleHeader>
                    <tr>
                        <S.ScoreBoardTitle>Special Score</S.ScoreBoardTitle>
                    </tr>
                    </S.ScoreBoardTitleHeader>
                    <tbody>
                    <tr>
                        <S.ScoreTitle>Choice</S.ScoreTitle>
                        <S.Score>{props.choice}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>4 of a Kind</S.ScoreTitle>
                        <S.Score>{props.fourOfAKind}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Full House</S.ScoreTitle>
                        <S.Score>{props.fullHouse}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>S.Straight</S.ScoreTitle>
                        <S.Score>{props.smallStraight}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>L.Straight</S.ScoreTitle>
                        <S.Score>{props.largeStraight}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Yacht</S.ScoreTitle>
                        <S.Score>{props.yacht}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Total Score</S.ScoreTitle>
                        <S.Score>{props.total}</S.Score>
                    </tr>
                    </tbody>
                </S.SpecialScoreBoard>
            </S.PlayerBoard>
        </>
    );
}