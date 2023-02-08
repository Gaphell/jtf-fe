import styled from 'styled-components';

/* eslint-disable-next-line */
export interface VisionProps {
}

const StyledVision = styled.div`
  padding-left: 16px;
  height: 90vh;
`;

export function Vision(props: VisionProps) {
    return (
        <StyledVision id={'vision'}>
            <p>
                JTF wants to help in upskilling our youths and creating a viable future for them within Bhutan, with
                their
                skillset.
            </p>
            <p>
                Our main aim is to reverse the emigration trend from Bhutan by enabling people to get high paying jobs
                within Bhutan.
            </p>
            <p>
                We also want to contribute to Bhutan’s economy by acquiring overseas projects and bringing in much
                needed
                hard currency into the country.
            </p>
        </StyledVision>
    );
}

export default Vision;
