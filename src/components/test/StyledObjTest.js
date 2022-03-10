import React from "react";
import styled from "styled-components";

//オブジェクト形式記述例
const Button = styled.button(
    {
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black',
        }
    }
);

const PrimaryButton = (props) => {
    return (
        <Button>
            テストボタン
        </Button>
    );
};
export default PrimaryButton;