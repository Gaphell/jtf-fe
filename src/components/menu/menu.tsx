import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MenuProps {
    open: boolean;
}

const StyledMenu = styled.nav`
  flex-direction: column;
  background: black;
  display: ${({open}: { open: boolean }) => open ? 'flex' : 'none'};
  transition: transform 0.3s ease-in-out;
  height: 100vh;
  width: 15vw;
  text-align: left;
  padding-top: 1.2rem;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const StyledTab = styled.div`
  padding: 16px;
  transition: all 0.3s;
  font-size: 1.1em;
  font-weight: bold;
  color: white;

  &:hover {
    cursor: pointer;
    //transform: scale(1.5);
    transition: all 0.3s ease-in-out 0.2s;
    animation-duration: 2s;
    color: orange;
  }
`;


const Tabs: Array<{ name: string, id: string }> = [
    {name: 'About', id: 'about'},
    {name: 'Vision', id: 'vision'},
];

const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        window.scroll({top: (element.offsetTop - 360), behavior: 'smooth'});
    }
}

export function Menu(props: MenuProps) {
    return (
        <StyledMenu open={props.open}>
            {Tabs.map(({name, id}) => <StyledTab key={id} onClick={() => scrollTo(id)}>{name}</StyledTab>)}
        </StyledMenu>
    );
}

export default Menu;
