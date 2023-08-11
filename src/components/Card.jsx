import styled from "styled-components";

const Card = ({ children }) => {
    return (
        <Wrapper>{children}</Wrapper>
    );
}

const Wrapper = styled.div`
background-color: var(--white);
border-radius: var(--radius);
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
padding: 1rem 1.25rem;
`;
export default Card;