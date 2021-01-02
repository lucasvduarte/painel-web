import React, { ReactNode, Children, useState, ChangeEvent, useLayoutEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { PaperStyle, Container } from './TabsStyle';

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
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
                <Container>
                    {children}
                </Container>
            )}
        </div>
    );
}

interface Props {
    nameTabs: Array<string>;
    children: ReactNode;
}

export default function CenteredTabs({ nameTabs, children }: Props) {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState<boolean>(true);

    useLayoutEffect(() => {
        function updateSize() {
            let currentHideNav: boolean = window.innerWidth < 600;
            currentHideNav ? setOpen(false) : setOpen(true);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const childrenList: Array<ReactNode> = Children.toArray(children);

    return (
        <PaperStyle>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                variant={open ? "fullWidth" : "scrollable"}
                textColor="primary"
                scrollButtons="on"
                centered={open ? true : false}
            >
                {nameTabs.map((tabs: string, index: number) => {
                    return <Tab label={tabs} key={index} />
                })}
            </Tabs>

            {childrenList.map((child: ReactNode, index: number) => {
                return (
                    <TabPanel key={index} value={value} index={index}>
                        {child}
                    </TabPanel>
                )
            })}
        </PaperStyle>
    );
}
