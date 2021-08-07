import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {icons} from '../icons';

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({theme}) => theme.text};
`;

const IconButton = ({icon, onPress, id}) => {
  const _onPress = () => {
    onPress(id);
  };
  return (
    <TouchableOpacity onPress={_onPress}>
      <View>
        <Icon source={icon} />
      </View>
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  icon: PropTypes.oneOf(Object.values(icons)).isRequired,
  onPress: PropTypes.func,
  id: PropTypes.string,
};

export default IconButton;
