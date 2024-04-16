import styled from "@emotion/styled";

export const PlayerBoard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const BasicScoreBoard = styled.table`
    width: 50%;
    height: 90%;
    border: 1px solid black;
    margin: 10px 10px 10px 10px;
    padding: 10px;
`

export const SpecialScoreBoard = styled.table`
    width: 50%;
    height: 90%;
    border: 1px solid black;
    margin: 10px 10px 10px 10px;
    padding: 10px;
`

export const ScoreBoardTitleHeader = styled.thead`
    border: 1px solid black;
    text-align: center;
`

export const ScoreBoardTitle = styled.th`
    font-size: 14px;
    font-weight: bolder;
`

export const ScoreTitle = styled.td`
    padding: 3px 0px 3px 0px;
    text-align: center;
    font-weight: bold;
    border: 1px solid gray;

`

export const Score = styled.td`
    width: 40px;
    text-align: center;
    border: 1px solid gray;
`