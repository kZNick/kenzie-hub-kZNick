import styled from "styled-components";

export const Form = styled.form`
  width: 370px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px;
  background-color: var(--Grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 0 12px;
  font-family: "Inter", sans-serif;
  h2 {
    font-weight: 700;
    font-size: 1.125rem;
    color: var(--Grey-0);
    margin-top: 17px;
  }
  span {
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--Grey-1);
  }
  .divForm {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .hederForm{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
  @media (max-width: 600px){
    width: 90%;
  }
`;
