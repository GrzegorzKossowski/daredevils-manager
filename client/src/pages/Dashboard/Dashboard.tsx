import { Button, Result } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface IDashboardProps {}

export const Dashboard = ({ ...restProps }: IDashboardProps) => {
    return (
        <>
            <Result
                status='success'
                title='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                subTitle='Quae, consectetur! Voluptatibus nisi vitae repellendus officia deserunt quo totam omnis dolorum obcaecati sapiente, quia et eaque veniam, aperiam vel quisquam ipsam.'
                extra={
                    <Link to={'/'}>
                        <Button type='primary'>Back Home</Button>
                    </Link>
                }
            />
        </>
    );
};
