import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  align-items: center;
`;

export const Title = styled(Text)`
  font-family: 'Poppins-Regular';
  color: red;
  font-size: 28px;
`;

export const Body = styled(View)`
  justify-content: center;
  align-items: center;
  height: 35%;
`;

export const TextBody = styled(Text)`
  padding: 5px;
  font-family: 'Poppins-Regular';
  text-align: center;
  color: #000;
`;

export const BtnFooter = styled(View)`
  height: 40%;
  width: 100%;
  justify-content: flex-end;
`;

export const Btn = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  elevation: 0;
  width: 100%;
  height: 60px;
  margin-top: 5px;
  border-radius: 10px;
`;

export const GradientAddTask = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  elevation: 5;
  width: 100%;
  height: 60px;
  border-radius: 10px;
`;
