import styled from "styled-components";

export const Inpult = styled.input`
  max-width: 100%;
  height: 48px;
  border: 1.2182px solid #343b41;
  border-radius: 4px;
  background-color: var(--Grey-2);
  outline: none;
  font-weight: 400;
  font-size: 1.015rem;
  padding-left: 15px;
  ::placeholder {
    color: var(--Grey-1);
  }

  :focus {
    border: 1.2182px solid var(--Grey-0);
    color: var(--Grey-0);
    ::placeholder {
      color: var(--Grey-0);
    }
  }
`;
export const Select = styled.select`
  max-width: 100%;
  height: 48px;
  border: 1.2182px solid #343b41;
  border-radius: 4px;
  background-color: var(--Grey-2);
  outline: none;
  font-weight: 400;
  font-size: 1.015rem;
  padding-left: 15px;
  color: var(--Grey-1);
  ::placeholder {
    color: var(--Grey-1);
  }

  :focus {
    border: 1.2182px solid var(--Grey-0);
    color: var(--Grey-0);
    ::placeholder {
      color: var(--Grey-0);
    }
  }
  
`;
