import React from "react";
import styled from "styled-components";
import { NavbarData } from "./NavbarData";

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
    }
);

const NavbarOption = styled.li(
    {
        listStyle: 'none',
        padding: '0% 2%',
        fontSize: '1.3rem',
        cursor: 'pointer',
        '&:hover': {
            color: 'white',
            backgroundColor: 'darkgreen',
        },

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        
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
                                <NavbarOption 
                                    key= {key}
                                    onClick={ () => {
                                        window.location.pathname = value.url
                                    }}
                                >
                                    {value.icon}<p>{value.title}</p>
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