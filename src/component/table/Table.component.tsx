import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from './component/tablebody/TableBody.component';
import TableHead from './component/tablehead/TableHead.component';
import { PaperComponent, TableContainerStyled } from './component/Table';
import Progress from '../progress/Progress.component';
import { TableProps } from './interfaces/Table';
import TablePagination from './component/pagination/TablePagination.component';

function TableComponent(props: TableProps) {

    const { data, request, page, rowsPerPage } = props;

    if (request) {
        return <Progress open={request} />
    }

    return (
        <PaperComponent>
            <TableContainerStyled>
                <Table aria-labelledby="tableTitle" aria-label="enhanced table"  >
                    <TableHead {...props} />
                    <TableBody {...props} />
                </Table>
            </TableContainerStyled>
            { (page && rowsPerPage) && <TablePagination page={page} rowsPerPage={rowsPerPage} size={data.length} {...props} />}
        </PaperComponent>
    );
}

export default TableComponent;