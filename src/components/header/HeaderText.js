import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const TitleText = styled.h1(
    {
        fontSize: '2rem',
        color: 'darkgreen',
        cursor: 'pointer',
    }
);

const TitleUrl = styled.a(
    {
        textDecoration: 'none',
        '&:hover': {
            color: 'yellowgreen'
        },
        '&:visited': {
            color: 'darkgreen'
        },
        '&:link':{
            color: 'darkgreen'
        },
        '&:active':{
            color: 'darkgreen'
        },
    }
);

function HeaderText(props){
    return(
        <React.StrictMode>
                <TitleText>
                    <TitleUrl href={props.linkto}>
                        {props.title}
                    </TitleUrl>
                </TitleText>
        </React.StrictMode>
    );
};
export default HeaderText;