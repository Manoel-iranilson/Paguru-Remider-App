import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: flex-start;
`;

export const Content = styled(LinearGradient)`
  padding-left: 10%;
  width: 100%;
  height: 50%;
  border-bottom-right-radius: 150px;
  border-top-right-radius: 150px;
  border-top-left-radius: 110px;
  justify-content: center;
`;
export const Btn = styled(TouchableOpacity)`
  margin-bottom: 30px;
`;
export const BtnText = styled(Text)`
  font-size: 25px;
  color: #fff;
  font-family: 'Poppins-Regular';
`;
