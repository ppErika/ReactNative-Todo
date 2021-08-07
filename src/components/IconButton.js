import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {icons} from '../icons';

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({theme, completed}) => (completed ? theme.done : theme.text)};
`;

const IconButton = ({icon, onPress, item}) => {
  const _onPress = () => {
    onPress(item.id);
  };
  return (
    <TouchableOpacity onPress={_onPress}>
      <View>
        <Icon source={icon} completed={item.completed} />
      </View>
    </TouchableOpacity>
  );
};

// 수정버튼이 아이템을 props로 전달하지 않아서 생기는 에러를 기본값을 줌으로써 해결
IconButton.defaultProps = {
  item: {completed: false},
};

IconButton.propTypes = {
  icon: PropTypes.oneOf(Object.values(icons)).isRequired,
  onPress: PropTypes.func,
  item: PropTypes.object,
};

export default IconButton;
