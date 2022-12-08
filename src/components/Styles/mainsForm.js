import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
  margin: 90px 0;
  background-color: var(--Grey-4);
  display: flex;
  justify-content: center;
  align-items: center;
  .divRegister {
    display: flex;
    justify-content: space-between;
    width: 370px;
    max-width: 100%;
    button {
      width: 67.49px;
      height: 40.11px;
      background-color: #212529;
      border-radius: 4px;
      border: none;
      font-weight: 600;
      font-size: 0.75;
      font-family: 'Inter', sans-serif;
      color: white;
      cursor: pointer;
    }
  }
  @media (max-width: 600px){
    .divRegister{
      width: 90%;
    }
  }
`;
