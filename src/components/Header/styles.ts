import styled from "styled-components/native";
import theme from "../../styles/themes/default";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${theme.colors["gray-700"]};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// export const TextTo = styled.Text`
//   color: ${theme.colors.blue};
//   font-size: ${RFValue(32)}px;
// `;

// export const TextDo = styled.Text`
//   color: ${theme.colors.purpleDark};
//   font-size: ${RFValue(32)}px;
// `;
