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

        userSelect: 'none',
    }
);

function Header(){
    
    const headerText = "いこうの駆け出しサイト";
    const headerUrl = "./home";
    return(
        <HeaderDiv>
            <HeaderIcon src={profileIcon} linkto={headerUrl}/>
            <HeaderText title={headerText} linkto={headerUrl}/>
        </HeaderDiv>
    );
};
export default Header;





