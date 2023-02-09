import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContactProps {
}

const StyledContact = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: end;
  flex-direction: row;
`;

const StyledContactCard = styled.div`
  background-color: #FAF9F6;
  padding: 8px;
  border-radius: 8px;
`;

const StyledAddress = styled.h4`
  font-weight: bold;
`

export function Contact(props: ContactProps) {
    return (
        <StyledContact id={'contact'}>
            <div style={{width: '100%'}}>
                <h4>
                    If you have a requirement for a custom software but don’t know where to start, feel free to contact
                    us to discuss.
                </h4>
                <StyledContactCard>
                    <StyledAddress>Address: Hankyu lam 2-4, Upper Taba, Thimphu Bhutan </StyledAddress>
                    <StyledAddress>Phone: +975-77113336</StyledAddress>
                    <StyledAddress>Email: <a
                        href={'mailto:kesang.ytw@gmail.com'}>kesang.ytw@gmail.com</a></StyledAddress>
                </StyledContactCard>
            </div>
        </StyledContact>
    );
}

export default Contact;
