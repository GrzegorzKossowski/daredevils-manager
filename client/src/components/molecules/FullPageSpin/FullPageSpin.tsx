import React from 'react';
import { Spin, SpinProps } from 'antd';
import CenteredContainer from '../CenteredContainer';

export const FullPageSpin: React.FC<SpinProps> = ({
    size = 'large',
    ...restProps
}) => {
    return (
        <CenteredContainer>
            <Spin size={size} {...restProps} />
        </CenteredContainer>
    );
};
