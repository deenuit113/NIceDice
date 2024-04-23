import styled from "@emotion/styled";

export const PlayerBoard = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const BasicScoreBoard = styled.table`
    width: 50%;
    height: 100%;
    margin: 0px;
    padding: 10px;
`

export const SpecialScoreBoard = styled.table`
    width: 50%;
    height: 100%;
    margin: 0px;
    padding: 10px;
`

export const ScoreBoardTitleHeader = styled.thead`
    justify-content: center;
    text-align: center;
`

export const ScoreBoardTitle = styled.th`
    font-size: 13px;
    font-weight: bolder;
`

export const ScoreTitle = styled.td<{ isFix: boolean; isAvailable: boolean }>`
    padding: 3px 0px;
    text-align: center;
    font-weight: bold;
    border: 2px solid gray;
    background-color: ${(props) => (props.isFix ? "gray" : "white")};

    /* hover일 때 cursor 속성 변경 */
    :hover {
        cursor: ${(props) => (props.isAvailable && !props.isFix ? "pointer" : "not-allowed")};
        background-color: ${(props) => (props.isFix ? "gray" : "white")}; /* 백그라운드 색상은 원래대로 유지 */
    }
`;

export const TotalScore = styled.td`
    padding: 3px 0px 3px 0px;
    text-align: center;
    font-weight: bold;
    border: 2px solid gray;
`

export const Score = styled.td`
    width: 40px;
    text-align: center;
    font-weight: bolder;
    border: 2px solid gray;
`