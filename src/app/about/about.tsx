import styled from 'styled-components';

import angular from '../../assets/images/angular.svg';
import django from '../../assets/images/django.svg';
import figma from '../../assets/images/figma.svg';
import react from '../../assets/images/react.svg';
import ror from '../../assets/images/ror.svg';
import css from '../../assets/images/css.svg';
import html from '../../assets/images/html.svg';

/* eslint-disable-next-line */
export interface AboutProps {
}

const StyledAbout = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  height: 90vh;
  box-shadow: 0 4px 2px -2px #E2DFD2;
`;

const StyledImage = styled.img`
  height: 20px;
`;

const StyledLink = styled.a`
  color: orange;
`;

const StyledBanner = styled.div`
  margin: 0;
  padding-top: 8px;
  //height: 400px;
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.h1`
`;


export function About(props: AboutProps) {
    return (
        <StyledAbout id={'about'}>
            <StyledBanner>
                <StyledHeader>Tailored Software Development Services</StyledHeader>
            </StyledBanner>
            <p> JTF is a group of highly experienced
                professionals with expertise in software development
                business process consulting, project management and product management.
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
                        <StyledLink href={'https://rubyonrails.org/'} target={'_blank'} rel="noreferrer">
                            <span>Ruby on Rails </span>
                            <StyledImage src={ror}/>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink href={'https://www.djangoproject.com/'} target={'_blank'} rel="noreferrer">
                            <span>Python (Django) </span>
                            <StyledImage src={django}/>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink href={'https://reactjs.org/'} target={'_blank'} rel="noreferrer">
                            <span>React </span>
                            <StyledImage src={react}/>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink href={'https://angular.io/'} target={'_blank'} rel="noreferrer">
                            <span>Angular </span>
                            <StyledImage src={angular}/>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink>
                            <span>UX/UI - </span>
                            <ul>
                                <li>
                                    <StyledLink href={'https://www.figma.com/'} target={'_blank'}
                                                rel="noreferrer"> Figma <StyledImage src={figma}/></StyledLink>
                                </li>
                                <li>
                                    <StyledLink href={'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'}
                                                target={'_blank'}
                                                rel="noreferrer">HTML <StyledImage src={html}/> </StyledLink>
                                </li>
                                <li>
                                    <StyledLink href={'https://developer.mozilla.org/en-US/docs/Web/CSS'}
                                                target={'_blank'}
                                                rel="noreferrer">CSS <StyledImage src={css}/> </StyledLink>
                                </li>
                            </ul>

                        </StyledLink>
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
