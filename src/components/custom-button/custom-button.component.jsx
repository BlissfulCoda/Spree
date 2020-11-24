import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}><span>{children}</span></CustomButtonContainer>
);

export default CustomButton;