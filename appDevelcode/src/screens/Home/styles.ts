import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-itens: center;
`;

export const Button = styled.TouchableOpacity`
    weight: ${RFPercentage(10)}px;
    background-color: blue;
`;
