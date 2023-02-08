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

export function App() {
    return (
        <StyledApp>
            <Header/>
            <StyledContainer>
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
