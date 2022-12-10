import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainHerder = styled.div`
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
export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 20px auto;
  .HeaderMain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      color: var(--Grey-0);
      font-weight: 600;
      font-size: 1rem;
    }
    button {
      background-color: var(--Grey-3);
      border-radius: 4px;
      width: 32px;
      height: 32px;
      border: none;
      cursor: pointer;
    }
  }
`;

export const Techs = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: var(--Grey-3);
  border-radius: 4px;
  margin-top: 30px;
  padding: 25px;
  gap: 18px;
  list-style: none;
  .NoTechs {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--Grey-4);
    width: 100%;
    padding: 35px;
    border-radius: 6px;
    height: 49px;
    h3 {
      color: var(--Grey-0);
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;

export const ListTechs = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--Grey-0);
  font-weight: 700;
  font-size: 0.888rem;
  background-color: var(--Grey-4);
  width: 100%;
  padding: 15px;
  border-radius: 6px;
  height: 52px;
  animation: slide-in-blurred-right 1s;
  cursor: pointer;
  span {
      font-weight: 400;
      font-size: 0.813rem;
      color: var(--Grey-1);
    }
    :hover{
      background-color: var(--Grey-2);
    }
`;
