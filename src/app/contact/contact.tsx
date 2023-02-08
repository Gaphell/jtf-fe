import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContactProps {
}

const StyledContact = styled.div`
  padding-left: 16px;
  height: 90vh;
`;

export function Contact(props: ContactProps) {
    return (
        <StyledContact id={'contact'}>
            <p>
                If you have a requirement for a custom software but don’t know where to start, feel free to contact us
                to
                discuss.
            </p>
            <div>
                <p>Address: Hankyu lam 2-4, Upper Taba, Thimphu Bhutan </p>
                <p>Phone: 7711-3336</p>
                <p>Email: kesang.ytw@gmail.com</p>
            </div>
        </StyledContact>
    );
}

export default Contact;
