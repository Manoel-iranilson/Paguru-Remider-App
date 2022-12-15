import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const Title = styled(Text)`
  color: #000;
  font-size: 40px;
  font-family: 'Poppins-Regular';
`;

export const InputTask = styled(TextInput)`
  font-family: 'Poppins-Regular';
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 10px;
  font-size: 40px;
  border-bottom-width: 2px;
  border-color: #c3c3c3;
`;

export const GradientView = styled(LinearGradient)`
  elevation: 10;
  height: 40px;
  width: 110px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const GradientAddTask = styled(LinearGradient)`
  flex-direction: row;
  height: 80px;
  justify-content: center;
  align-items: center;
  elevation: 10;
  border-radius: 15px;
`;

export const TextBtn = styled(Text)<{active: Boolean}>`
  color: ${props => (props.active ? 'white' : 'black')};
  font-family: 'Poppins-Regular';
`;
