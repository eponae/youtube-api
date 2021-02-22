import styled from "styled-components";

export const SearchOverlay = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SearchWrapper = styled.div`
  background: white;
  border-radius: 20px;
  width: 388px;
  height: 515px;
  padding: 24px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 387px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const InputWrapper = styled.input`
  width: 280px;
  height: 50px;
  background: #f5f5f5;
  border: 1px solid #dedede;
`;

export const FormWrapper = styled.form`
  text-align: center;
`;

export const LabelWrapper = styled.label`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #8f8f8f;
`;

export const ButtonWrapper = styled.button`
  width: 180px;
  height: 50px;
  background: #00aaff;
  border-radius: 80px;
  color: white;
  margin-top: 75px;
`;
