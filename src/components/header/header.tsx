import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

/* eslint-disable-next-line */
export interface HeaderProps {
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 96px;
  background-color: white;
`;

const StyledTab = styled.div`
  padding: 16px;
  transition: all 0.3s;
  font-size: 1.1em;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
    transition: all 0.3s ease-in-out 0.2s;
    animation-duration: 2s;
    color: orange;
  }
`

const StyledTabContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 32px;
  flex: 1;
  align-items: center;
  //background-color: beige;
`;

const StyledImage = styled.img`
  height: 86px;
  width: 86px;
  object-fit: contain;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.5);
    transition: all 0.3s ease-in-out 0.2s;
    animation-duration: 2s;
  }
`;

const Tabs: Array<{ name: string, id: string }> = [
    {name: 'About', id: 'about'},
    {name: 'Vision', id: 'vision'},
    // {name: 'Contact', id: 'contact'}
];

const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        window.scroll({top: (element.offsetTop - 96), behavior: 'smooth'});
    }
}

export function Header(props: HeaderProps) {
    return (
        <StyledHeader>
            <div>
                <a href={'/'}>
                    <StyledImage src={logo} alt="logo"/>
                </a>
            </div>
            <StyledTabContainer>
                {Tabs.map(({name, id}) => <StyledTab key={id} onClick={() => scrollTo(id)}>{name}</StyledTab>)}
            </StyledTabContainer>
        </StyledHeader>
    );
}

export default Header;
