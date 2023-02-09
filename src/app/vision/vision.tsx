import styled from 'styled-components';

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
  height: 200px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledContent = styled.h4`
  color: #e9f5db;
  text-align: center;
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
                <StyledContent>
                    Our main aim is to reverse the emigration trend from Bhutan by enabling people to get high paying
                    jobs within Bhutan.
                </StyledContent>
                <StyledContent>
                    We also want to contribute to Bhutan’s economy by acquiring overseas projects and bringing in much
                    needed hard currency into the country.
                </StyledContent>
            </StyledAim>
        </StyledVision>
    );
}

export default Vision;
