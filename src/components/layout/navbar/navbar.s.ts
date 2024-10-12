import styled, { css } from "styled-components";

export const NavbarWrap = styled.div`
    &&{
        width: 100%;
     z-index: 10;
     position: fixed;
    }
`
export const NavLinksWrap = styled.div`
    &&{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
    }
`
export const LinksWrap = styled.div`
    &&{
        display: flex;
        align-items: center;
        gap: 25px;

    a{
        text-decoration: none;
        font-size: 17px;
        font-weight: 400;
        font-family: 'Open Sans';
        color: white;
        transition: all 0.3s ease;

    &:hover,&.active{
        background: linear-gradient(270deg, #FF8A26 0%, #FF481F 74.08%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        transition: all 0.3s ease;
    }
    }
    }
`
export const LogoLinkWrap = styled.div`
    &&{
        display: flex;
        align-items: center;
        gap: 35px;
    }
`