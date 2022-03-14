import React from "react";
import styled from "styled-components";
import { NavbarData } from "./NavbarData";
import { Routes, Route } from "react-router-dom";

const NavbarDiv = styled.div(
    {
        backgroundColor: 'yellowgreen',
        color: 'black',
    }
);

const NavbarOptions = styled.ul(
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        userSelect: 'none',
    }
);
const NavbarLink = styled.a(
    {
        textDecoration: 'none',
        '&:visited': {
            color: 'black'
        },
        '&:link':{
            color: 'black'
        },
        '&:active':{
            color: 'black'
        }
    }
);

const NavbarOption = styled.li(
    {
        listStyle: 'none',
        padding: '0% 1%',
        margin: '0% 0%',
        fontSize: '1.3rem',
        cursor: 'pointer',

        '&:hover': {
            color: 'white',
            backgroundColor: 'darkgreen',
        },
        
        '& a':{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

            width: '100%',
            height: '100%',

            textDecoration: 'none',
            '&:visited, &:active, &:link' :{
                color: 'black'
            },
            '&:hover':{
                color: 'white'
            }
        }
    }
);


function Navbar(){
    return(
        <NavbarDiv>
            <NavbarOptions>
                {
                    NavbarData.map(
                        (value, key) => {
                            return(
                                    <NavbarOption key= {key}>
                                        <a href={value.url}>
                                            {value.icon}<p>{value.title}</p>
                                        </a>
                                    </NavbarOption>
                            );
                        }
                    )
                }
            </NavbarOptions>
        </NavbarDiv>
    );

}
export default Navbar;