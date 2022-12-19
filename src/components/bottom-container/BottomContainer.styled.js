import styled from "styled-components";

const FooterBlock = styled.section`
display: flex;
flex-direction: row;
padding: 2rem;
gap: 4rem;
bottom: 0;
width: max-content;
margin: 0 auto;
align-items: center;
justify-content: center;
text-align: center;
@media (max-width: 470px) {
    flex-direction: column;
    padding-top: 10rem;
  }
`;
export default FooterBlock;