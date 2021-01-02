import React, { ReactNode, useState, ChangeEvent } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { Container, Text } from './Accordion';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
    children?: ReactNode;
    title: string;
}

export default function SimpleAccordion({ children, title }: Props) {

    const [expanded, setExpanded] = useState<string | boolean>(title);

    const handleChange = (panel: string) => (event: ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Accordion expanded={expanded === title} onChange={handleChange(title)}>
            <AccordionSummary aria-controls={`${title}-controls`} id={title}>
                <Text>{title}</Text>
                <Text>{expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}</Text>

            </AccordionSummary>
            <AccordionDetails>
                <Container>
                    {children}
                </Container>
            </AccordionDetails>
        </Accordion>
    );
}
