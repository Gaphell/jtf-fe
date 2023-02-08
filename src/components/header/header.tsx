import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

/* eslint-disable-next-line */
export interface HeaderProps {
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 86px;
  background-color: white;
`;

const StyledTab = styled.div`
  padding: 8px;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
    transition: all 0.3s ease-in-out 0.2s;
    animation-duration: 2s;
  }
`

const StyledTabContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 32px;
  flex: 1;
  align-items: center;
`

const StyledImage = styled.img`
  height: 86px;
  width: 86px;
  object-fit: contain;
`

const Tabs: Array<{ name: string, id: string }> = [
    {name: 'About', id: 'about'},
    {name: 'Vision', id: 'vision'},
    // {name: 'Contact', id: 'contact'}
];

const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        window.scroll({top: (element.offsetTop - 86), behavior: 'smooth'});
    }
}

export function Header(props: HeaderProps) {
    return (
        <StyledHeader>
            <a href={'/'}>
                <StyledImage src={logo} alt="logo"/>
            </a>
            <StyledTabContainer>
                {Tabs.map(({name, id}) => <StyledTab key={id} onClick={() => scrollTo(id)}>{name}</StyledTab>)}
            </StyledTabContainer>
        </StyledHeader>
    );
}

export default Header;
