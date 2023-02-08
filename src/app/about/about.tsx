import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AboutProps {
}

const StyledAbout = styled.div`
  padding-left: 16px;
  height: 90vh;
`;

export function About(props: AboutProps) {
    return (
        <StyledAbout id={'about'}>
            <p>
                JTF is a group of highly experienced professionals with expertise in software development, business
                process
                consulting, project management and product management.
            </p>
            <p>
                Born and raised in Bhutan, we have been developing and delivering custom softwares for our global
                clientele
                in Switzerland, USA and Japan.
            </p>

            <div>
                Our core technology stacks are:
                <ul>
                    <li>
                        <a href={'https://rubyonrails.org/'} target={'_blank'}>Ruby on Rails</a>
                    </li>
                    <li>
                        <a href={'https://www.djangoproject.com/'} target={'_blank'}> Python (Django)</a>
                    </li>
                    <li>
                        <a href={'https://reactjs.org/'} target={'_blank'}>React</a>
                    </li>
                    <li>
                        <a href={'https://angular.io/'} target={'_blank'}>Angular</a>
                    </li>
                    <li>
                        <a href={'https://www.figma.com/'} target={'_blank'}>UX/UI - Figma, HTML, CSS</a>
                    </li>
                </ul>
            </div>
            <p>
                We have delivered projects ranging from a few thousand dollars to hundreds of thousands of dollars.
            </p>
            <p>
                We pride ourselves on our quality and timely delivery.
            </p>
        </StyledAbout>
    );
}

export default About;
