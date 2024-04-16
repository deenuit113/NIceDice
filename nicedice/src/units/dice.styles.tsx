import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100vw;
    height: 48vw;
    float: right;
    padding: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid gray;
`;

export const PlayerWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid red;
`

export const RollButton = styled.button`
    width: 80%;
    font-size: 18px;
    padding: 10px 20px 10px 20px;
    border-radius: 20px;
    :hover{
        cursor: pointer;
    }
`

export const DiceValueWrapper = styled.div`
    background-color: #77ccff;
    width: 80%;
    display: flex;
    flex-direction: row;
    border: 1px solid blue;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10px;
    border-radius: 10px;
`

export const DiceValue = styled.div<{diceValue: number}>`
    font-size: 25px;
    font-weight: bolder;
    color: ${props => {
        switch (props.diceValue) {
            case 1:
                return 'green';
            case 2:
                return 'red';
            case 3:
                return 'purple';
            case 4:
                return 'blue';
            case 5:
                return 'orange';
            case 6:
                return 'yellow';
            default:
                return 'black'; // 기본 값은 검은색으로 설정합니다.
        }
    }};
`

export const PlayerBoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 70%;
    margin-top: 10px;
    border: 1px solid blue;
`

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
    text-align: center;
    border: 1px solid gray;
`
