import * as React from 'react';
import styled from 'styled-components';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd';

const ButtonStyled: React.FC<ButtonProps> = styled(AntButton)`
    // put some styles here
    
`;

const Button: React.FC<ButtonProps> = ({ children, ...restProps }) => {
    return <ButtonStyled {...restProps}>{children}</ButtonStyled>;
};

export default Button;
