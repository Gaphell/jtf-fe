import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContactProps {
}

const StyledContact = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: end;
  flex-direction: row;
`;

const StyledContactCard = styled.div`
  background-color: #FAF9F6;
  padding: 8px;
  border-radius: 8px;
`

export function Contact(props: ContactProps) {
    return (
        <StyledContact id={'contact'}>
            <div style={{width: '100%'}}>
                <p>
                    If you have a requirement for a custom software but don’t know where to start, feel free to contact
                    us
                    to
                    discuss.
                </p>
                <StyledContactCard>
                    <p>Address: Hankyu lam 2-4, Upper Taba, Thimphu Bhutan </p>
                    <p>Phone: +975-77113336</p>
                    <p>Email: kesang.ytw@gmail.com</p>
                </StyledContactCard>
            </div>
        </StyledContact>
    );
}

export default Contact;
