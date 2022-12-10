import styled from "styled-components";

export const Modaldiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);
  .registerThechs {
    width: 370px;
    max-width: 100%;
    animation: slide-in-blurred-top 0.5s;
    color: white;
    background-color: var(--Grey-3);
    border-radius: 6px;
    .modalHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      background-color: var(--Grey-2);
      border-radius: 4px 4px 0px 0px;
      span {
        font-weight: 700;
        font-size: 0.875rem;
        color: white;
      }
      button {
        background-color: transparent;
        width: 11px;
        height: 26px;
        border: none;
        font-size: 23px;
        color: var(--Grey-1);
        cursor: pointer;
      }
    }
    .FormThecs{
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      padding: 25px;
    }
  }
  .modalExite{
    animation: slide-in-blurred-top 0.5s;
}
.buttons{
  display: flex;
  gap: 25px;
}
`;
