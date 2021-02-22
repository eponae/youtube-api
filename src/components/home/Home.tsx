import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const SearchOverlay = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SearchWrapper = styled.div`
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

const InputWrapper = styled.input`
  width: 280px;
  height: 50px;
  background: #f5f5f5;
  border: 1px solid #dedede;
`;

const FormWrapper = styled.form`
  text-align: center;
`;

const LabelWrapper = styled.label`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8f8f8f;
`;

const ButtonWrapper = styled.button`
  width: 180px;
  height: 50px;
  background: #00aaff;
  border-radius: 80px;
  color: white;
  margin-top: 75px;
`;

const Home = () => {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSubmit = () => {};

  return (
    <SearchOverlay>
      <SearchWrapper>
        <FormWrapper onSubmit={onSubmit}>
          <LabelWrapper>
            Channel name
            <InputWrapper type="text" onChange={onChange} value={value} />
          </LabelWrapper>
          <ButtonWrapper type="submit">Search</ButtonWrapper>
        </FormWrapper>
      </SearchWrapper>
    </SearchOverlay>
  );
};

export default Home;
