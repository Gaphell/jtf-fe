import styled from 'styled-components';
import banner from "../../assets/images/banner.jpg";

/* eslint-disable-next-line */
export interface VisionProps {
}

const StyledVision = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 32px;
  height: 50vh;
`;

const StyledAim = styled.div`
  background-color: #FAF9F6;
  height: 200px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export function Vision(props: VisionProps) {
    return (
        <StyledVision id={'vision'}>
            <div>
                <h2 style={{textAlign: 'center'}}>
                    JTF wants to help in upskilling our youths and creating a viable future for them within Bhutan with
                    their skillset.
                </h2>
            </div>
            <StyledAim>
                <h4>
                    Our main aim is to reverse the emigration trend from Bhutan by enabling people to get high paying
                    jobs within Bhutan.
                </h4>
                <h4>
                    We also want to contribute to Bhutan’s economy by acquiring overseas projects and bringing in much
                    needed hard currency into the country.
                </h4>
            </StyledAim>
        </StyledVision>
    );
}

export default Vision;
