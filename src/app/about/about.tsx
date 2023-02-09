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
`;

const StyledImage = styled.img`
  height: 40px;
`;

const StyledTitle = styled.p`
  color: orange;
`;

const StyledCard = styled.a`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160px;
  width: 160px;
  transition: all 0.4s ease-out;
  background-color: white;
  box-sizing: border-box;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    transition: all 0.4s ease-in;
    transform: scale(1.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const StyledIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledIntro = styled.h4`
  text-align: center;
  color: #e9f5db;
`;

const TECH_STACKS = [
    {
        link: 'https://rubyonrails.org/',
        title: 'Ruby on Rails',
        image: ror
    },
    {
        link: 'https://www.djangoproject.com/',
        title: 'Python (Django)',
        image: django
    },
    {
        link: 'https://reactjs.org/',
        title: 'React',
        image: react
    },
    {
        link: 'https://angular.io/',
        title: 'Angular',
        image: angular
    },
    {
        link: 'https://www.figma.com/',
        title: 'Figma',
        image: figma
    },
    {
        link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
        title: 'HTML',
        image: html
    },
    {
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        title: 'CSS',
        image: css
    },
];

export function About(props: AboutProps) {
    return (
        <div id={'about'} style={{paddingBottom: '64px'}}>
            <StyledIntroContainer>
                <StyledIntro> JTF is a group of highly experienced
                    professionals with expertise in software development
                    business process consulting, project management and product management.
                </StyledIntro>
                <StyledIntro>
                    Born and raised in Bhutan, we have been developing and delivering custom softwares for our
                    global
                    clientele
                    in Switzerland, USA and Japan.
                </StyledIntro>
            </StyledIntroContainer>
            <StyledAbout>
                <h2 style={{textAlign: 'center'}}>Our core technology stacks are</h2>
                <StyledCardContainer>
                    {
                        TECH_STACKS.map(({link, title, image}) => (
                            <StyledCard href={link} target={'_blank'} rel="noreferrer" key={title}>
                                <StyledImage src={image}/>
                                <StyledTitle>
                                    {title}
                                </StyledTitle>
                            </StyledCard>
                        ))
                    }
                </StyledCardContainer>
                <StyledIntro>
                    We have delivered projects ranging from a few thousand dollars to hundreds of thousands of dollars.
                </StyledIntro>
                <StyledIntro>
                    We pride ourselves on our quality and timely delivery.
                </StyledIntro>
            </StyledAbout>
        </div>
    );
}

export default About;
