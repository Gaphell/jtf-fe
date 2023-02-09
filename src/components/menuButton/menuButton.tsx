import styled from 'styled-components';
import { useState } from "react";

/* eslint-disable-next-line */
export interface MenuButtonProps {
    open: boolean;
    toggleOpen: (p: (state: boolean) => boolean) => void;
}

const StyledMenuButton = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  z-index: 4;
`;

const StyledLine = styled.div`
  height: 2px;
  width: 20px;
  background: yellow;
  transition: all 0.2s ease;
`;

const StyledLineTop = styled(StyledLine)`
  transform: ${(props: { open: boolean }) => props.open ? "rotate(45deg)" : "none"};
  transform-origin: top left;
  margin-bottom: 5px;
`;

const StyledLineMiddle = styled(StyledLine)`
  opacity: ${(props: { open: boolean }) => props.open ? 0 : 1};
  transform: ${(props: { open: boolean }) => props.open ? 'translateX(-16px)' : 'none'};
`;

const StyledLineBottom = styled(StyledLine)`
  transform: ${(props: { open: boolean }) => props.open ? 'translateX(-1px) rotate(-45deg)' : 'none'};
  transform-origin: top left;
  margin-top: 5px;
`;

export function MenuButton(props: MenuButtonProps) {
    const {toggleOpen, open} = props;
    return (
        <StyledMenuButton onClick={() => toggleOpen(state => !state)}>
            <StyledLineTop open={open}/>
            <StyledLineMiddle open={open}/>
            <StyledLineBottom open={open}/>
        </StyledMenuButton>
    );
}

export default MenuButton;
