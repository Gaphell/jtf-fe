import styled from 'styled-components';
import Header from "../components/header/header";
import About from "./about/about";
import Vision from "./vision/vision";
import Contact from "./contact/contact";

const StyledApp = styled.div`
`;

const StyledContainer = styled.div`
  background-color: #FAF9F6;
`

export function App() {
    return (
        <StyledApp>
            <Header/>
            <StyledContainer>
                <About/>
                <Vision/>
                <Contact/>
            </StyledContainer>
        </StyledApp>
    );
}

export default App;
