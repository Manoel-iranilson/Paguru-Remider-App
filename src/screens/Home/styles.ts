import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  background-color: #fff;
`;

export const AlertTask = styled(LinearGradient)`
  width: 60%;
  height: 20%;
  padding: 20px;
  elevation: 20;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 180px;
  border-bottom-left-radius: 180px;
`;

export const Body = styled(View)`
  padding: 12%;
  height: 60%;
  align-items: center;
`;

export const TitleBody = styled(Text)`
  font-size: 40px;
  color: #000;
  font-family: 'Poppins-Regular';
`;
export const TextBody = styled(Text)<{conclused?: Boolean}>`
  font-family: 'Poppins-Regular';
  text-decoration: ${props => (props.conclused ? 'line-through' : 'none')};
  font-size: 30px;
  color: #000;
`;

export const Footer = styled(View)`
  align-items: flex-end;
  height: 13%;
  flex-direction: row;
  justify-content: space-around;
`;

export const BtnAdd = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  background-color: red;
  elevation: 10;
  height: 80px;
  width: 80px;
  border-radius: 120px;
`;
export const Btn = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 85px;
`;

export const BtnText = styled(Text)`
  font-size: 20px;
  font-family: 'Poppins-Regular';
`;
