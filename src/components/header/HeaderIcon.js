import React from "react";
import styled from "styled-components";

const ProfileIcon = styled.img(
    {
        height: '50px',
        width: '50px',
        cursor: 'pointer',
    }
); 

function HeaderIcon(props){
    
    return(
        <a href= {props.linkto}>
            <ProfileIcon src={props.src} />
        </a>
    );
};
export default HeaderIcon;