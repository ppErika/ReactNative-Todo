import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, useWindowDimensions} from 'react-native';

// 양쪽에 20px씩 남기고 띄워주기 위해 width 크기를 조절
const StyledInput = styled.TextInput`
  width: ${({width}) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 25px;
  background-color: ${({theme}) => theme.itemBackground};
  color: ${({theme}) => theme.text};
`;

const Input = () => {
  // 사용하는 기기의 화면의 크기(width)를 가져옴
  //   const width = Dimensions.get('window').width;
  const width = useWindowDimensions().width;
  return <StyledInput width={width} />;
};

export default Input;
