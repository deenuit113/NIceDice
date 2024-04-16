import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 40vw;
    height: 100vw;
    float: right;
    border: 3px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const DiceValue = styled.div`
    font-size: 50px;
`