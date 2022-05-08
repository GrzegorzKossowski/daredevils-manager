import * as React from 'react';
import styled from 'styled-components';
import { Menu as AntMenu, MenuProps } from 'antd';

const MenuStyled: React.FC<MenuProps> = styled(AntMenu)``;

const Menu: React.FC<MenuProps> = ({ ...restProps }) => {
    return <MenuStyled {...restProps} />;
};

export default Menu;
