import styled from 'styled-components';
import Header from "../components/header/header";
import About from "./about/about";
import Vision from "./vision/vision";
import Contact from "./contact/contact";

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
  background-color: #ffffe0;
  position: sticky;
  top: 96px;
  z-index: 1000;
`;

const StyledHeader = styled.h1`
  text-align: center;
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
                    <a href="/"> JTF. </a>
                    <span> All Rights Reserved </span>
                </p>
            </StyledFooter>
        </StyledApp>
    );
}

export default App;
