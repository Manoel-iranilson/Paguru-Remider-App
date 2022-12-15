import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: flex-end;
`;

export const Content = styled(LinearGradient)`
  width: 100%;
  height: 50%;
  border-bottom-left-radius: 200px;
  border-top-left-radius: 150px;
  border-top-right-radius: 180px;
  justify-content: flex-end;
`;
