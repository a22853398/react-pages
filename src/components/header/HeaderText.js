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


function HeaderText(props){
    const homeUrl = "/home";
    return(
        <React.StrictMode>
                <TitleText><a href={homeUrl}>{props.title}</a></TitleText>
        </React.StrictMode>
    );
};
export default HeaderText;