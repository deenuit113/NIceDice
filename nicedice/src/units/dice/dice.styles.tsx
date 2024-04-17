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
    border: 3px solid orange;
`

export const RollButton = styled.button`
    width: 80%;
    font-size: 16px;
    padding: 8px 16px 8px 16px;
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
    border: 2px solid black;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10px;
    border-radius: 10px;
`

export const DiceValue = styled.div<{diceValue: number}>`
    font-size: 23px;
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
    width: 95%;
    height: 70%;
    margin-top: 5px;
`
