import styled from 'styled-components';
import Header from "../components/header/header";
import About from "./about/about";
import Vision from "./vision/vision";
import Contact from "./contact/contact";

import background from '../assets/images/bg1.jpg';

const StyledApp = styled.div`
`;

const StyledContainer = styled.div`
`;

const StyledFooter = styled.div`
  justify-content: center;
  display: flex;
  padding: 8px;
`;

const StyledBanner = styled.div`
  margin: 0;
  padding-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  background-image: linear-gradient(to bottom, rgba(249, 180, 45, 0.25), rgba(18, 17, 19, 1)), url('${background}');
  background-size: cover;
  background-position: center;
  top: 96px;
  position: sticky;
  z-index: 1;
`;


const StyledHeader = styled.h1`
  text-align: center;
  color: white;
`;

const StyledCompanyName = styled.a`
  color: #e9f5db;

  &:hover {
    color: orange;
  }
`;

export function App() {
    return (
        <StyledApp>
            <Header/>
            <StyledContainer>
                <StyledBanner>
                    <StyledHeader>Tailored Software Development Services</StyledHeader>
                </StyledBanner>
                <About/>
                <Vision/>
                <Contact/>
            </StyledContainer>
            <StyledFooter>
                <p>
                    <span>© {new Date().getFullYear()} </span>
                    <StyledCompanyName href="/"> JTF. </StyledCompanyName>
                    <span> All Rights Reserved </span>
                </p>
            </StyledFooter>
        </StyledApp>
    );
}

export default App;
