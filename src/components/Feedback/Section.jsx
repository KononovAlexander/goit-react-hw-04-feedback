import styled from 'styled-components';

const Title = styled.h2`
    :first-letter{text-transform: capitalize;}
`;
export const Section = ({title, children}) => {
    return (
        <section>
            <Title>{title}</Title>
            {children}
        </section>
    )
}