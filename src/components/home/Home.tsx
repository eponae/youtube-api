import React, { ChangeEvent, FormEvent, useRef } from "react";
import { useHistory } from "react-router-dom";
import { searchIntoYoutube } from "./home.api";
import {
  ButtonWrapper,
  FormWrapper,
  InputWrapper,
  LabelWrapper,
  SearchOverlay,
  SearchWrapper,
} from "./Home.style";

const Home = () => {
  const value = useRef("");
  const history = useHistory();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    value.current = event.target.value;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const results = await searchIntoYoutube(value.current);

      if (results.items) {
        history.push("/home/videos", results.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SearchOverlay>
      <SearchWrapper>
        <FormWrapper onSubmit={onSubmit}>
          <LabelWrapper>
            Video name
            <InputWrapper type="text" onChange={onChange} />
          </LabelWrapper>
          <ButtonWrapper type="submit">Search</ButtonWrapper>
        </FormWrapper>
      </SearchWrapper>
    </SearchOverlay>
  );
};

export default Home;
