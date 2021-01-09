import React, { ReactNode } from 'react';
import { ContainerResponsive } from '../container/Container';

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <ContainerResponsive marginBottom={30}>
                    {children}
                </ContainerResponsive>
            )}
        </div>
    );
}

export default TabPanel;