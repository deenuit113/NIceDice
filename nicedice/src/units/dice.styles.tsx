import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100vw;
    height: 50vw;
    float: right;
    padding: auto;
    border: 3px solid red;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

export const RollButton = styled.button`
    width: 40%;
    font-size: 40px;
    padding: 10px 20px 10px 20px;
    border-radius: 20px;
    :hover{
        cursor: pointer;
    }
`

export const DiceValueWrapper = styled.div`
    background-color: #77ccff;
    height: 100px;
    width: 200px;
    display: flex;
    flex-direction: row;
    border: 1px solid blue;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border-radius: 10px;
`

export const DiceValue = styled.div<{diceValue: number}>`
    font-size: 50px;
    margin-right: 5px;
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
