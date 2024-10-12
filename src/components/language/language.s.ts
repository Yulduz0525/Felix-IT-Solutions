import styled from "styled-components";

export const CustomDropdown = styled.div`

`
export const DropDownBtn = styled.div`
    &&{
        display: flex;
        border: 0;
        font-weight: 400;
        font-size: 17px;
        align-items: center;
        justify-content: center;
        gap: 5px;
        color: white;
    }
`
export const LangWrap = styled.div`
    &&{
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        background: linear-gradient(270deg, #5A4AC7 0%, #FF9C3A 60%, #FF481F 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
    }
`
export const DropdownMenu = styled.div`
    &&{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
`
export const DropdownItem = styled.div`
    &&{
        transition: all linear 0.3s;
    }
`