import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    width: 70%;
    margin: 25px auto;
    font-weight: 700;
    font-size: 1.125;
    color: var(--Grey-0);
  }
  P {
    width: 70%;
    margin: 25px auto;
    font-weight: 400;
    font-size: 1rem;
    color: var(--Grey-1);
  }
`;

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid var(--Grey-3);
  .inforHome {
    width: 70%;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    h2 {
      font-weight: 700;
      font-size: 1.125rem;
      color: white;
    }
    span {
      font-weight: 400;
      font-size: 12px;
      color: var(--Grey-1);
    }
  }
`;
