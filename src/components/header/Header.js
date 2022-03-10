import React from "react";
import styled from "styled-components";
import HeaderText from "./HeaderText";
import HeaderIcon from "./HeaderIcon";
import profileIcon from "../../images/profile_icon.png";


const HeaderDiv = styled.div(
    {
        width: '100%',
        textAlign: 'center',
        verticalAlign: 'bottom',
        

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
);

function Header(){
    
    const headerText = "いこうの駆け出しサイト";
    return(
        <HeaderDiv>
            <HeaderIcon src={profileIcon}/>
            <HeaderText title={headerText} />
        </HeaderDiv>
    );
};
export default Header;





