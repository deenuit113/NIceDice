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

export const ScoreTitle = styled.td<{isFix: boolean}>`
    padding: 3px 0px 3px 0px;
    text-align: center;
    font-weight: bold;
    border: 2px solid gray;
    background-color: ${(props) => props.isFix? "gray" : "white"};
    :hover{
        cursor: ${(props) => props.isFix? "not-allowed" : "pointer"};
        background-color: ${(props) => props.isFix? "gray" : "orange"};
    }

`

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