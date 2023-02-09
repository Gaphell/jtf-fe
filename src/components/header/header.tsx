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
  top: -1px;
  height: 97px;
  background-color: #121113;
  padding-right: 16px;
  z-index: 1;
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

const StyledTabContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
  flex: 1;
  align-items: center;
`;

const StyledTab = styled.div`
  transition: all 0.3s;
  font-weight: bold;
  color: white;

  &:hover {
    cursor: pointer;
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
        window.scroll({top: (element.offsetTop - 350), behavior: 'smooth'});
    }
}

export function Header(props: HeaderProps) {
    return (
        <StyledHeader>
            <div style={{display: "flex", paddingRight: '20px'}}>
                <a href={'/'} style={{display: 'flex', alignItems: 'center', color: 'white'}}>
                    <StyledImage src={logo} alt="logo"/>
                    <h2>JTF</h2>
                </a>
            </div>
            <StyledTabContainer>
                {Tabs.map(({name, id}) => <StyledTab key={id} onClick={() => scrollTo(id)}>{name}</StyledTab>)}
            </StyledTabContainer>
        </StyledHeader>
    );
}

export default Header;
