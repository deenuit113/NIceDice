import * as S from "./ScoreBoard.styles";

export default function ScoreBoardUI (): JSX.Element {
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
                        <S.Score>0</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Deuces</S.ScoreTitle>
                        <S.Score>0</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Threes</S.ScoreTitle>
                        <S.Score>0</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Fours</S.ScoreTitle>
                        <S.Score>0</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Fives</S.ScoreTitle>
                        <S.Score>0</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Sixes</S.ScoreTitle>
                        <S.Score>0</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Subtotal</S.ScoreTitle>
                        <S.Score>0</S.Score>
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
                        <S.Score>0</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>4 of a Kind</S.ScoreTitle>
                        <S.Score>0</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Full House</S.ScoreTitle>
                        <S.Score>0</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>S.Straight</S.ScoreTitle>
                        <S.Score>0</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>L.Straight</S.ScoreTitle>
                        <S.Score>0</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Yacht</S.ScoreTitle>
                        <S.Score>0</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle>Total Score</S.ScoreTitle>
                        <S.Score>0</S.Score>
                    </tr>
                    </tbody>
                </S.SpecialScoreBoard>
            </S.PlayerBoard>
        </>
    );
}