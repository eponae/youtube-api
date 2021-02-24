import styled from "styled-components";

export const VideosListWrapper = styled.ul`
  display: grid;
  width: 90%;
  margin: 20px auto;
  background: white;
  border-radius: 20px;
`;

export const VideosLineWrapper = styled.li`
  padding: 20px;
  list-style-type: none;
`;

export const ImgWrapper = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

export const VideoTitleWrapper = styled.h2`
  color: black;
  padding: 10px 0;
  text-decoration: underline;
`;
