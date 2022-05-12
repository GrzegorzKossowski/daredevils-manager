import React from 'react';
import styled from 'styled-components';
import { Row as AntRow, RowProps, Col } from 'antd';

const RowStyled: React.FC<RowProps> = styled(AntRow)`
    // put some styles here
    height: 100vh;
    width: 100%;
`;

export const CenteredContainer: React.FC<RowProps> = ({
    children,
    ...restProps
}) => {
    return (
        <RowStyled align='middle' justify='center' {...restProps}>
            <Col>{children}</Col>
        </RowStyled>
    );
};
