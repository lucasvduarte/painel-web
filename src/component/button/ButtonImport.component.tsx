import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { Input, Span, ButtonStyle } from './ButtonStyle';
import { ContainerStyled } from '../container/Container'
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '../grid/GridComponent.component';

interface Props {
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    disabled?: boolean;
    fileName?: string;
    onClick?: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined;
}

export default function UploadButtons({ onChange, disabled, fileName, onClick }: Props) {

    return (
        <ContainerStyled marginTop={15} marginLeft={5}>
            <Grid justify="flex-start" alignItems="center">
                <Span>Incluir Anexos</Span>
                <Input
                    onChange={onChange}
                    accept=".pdf, .ppt, .xlsx, .docx"
                    name="anexo"
                    id="icon-button-file"
                    type="file"
                    disabled={disabled}
                />
                <label htmlFor="icon-button-file" >
                    <IconButton color="primary" aria-label="upload picture" component="span" disabled={disabled}>
                        <AttachmentIcon />
                    </IconButton>
                </label>
                <span>{fileName}</span>
                {fileName && <ButtonStyle> <DeleteIcon fontSize="small" color="primary" onClick={onClick} /></ButtonStyle>}
            </Grid>
        </ContainerStyled>
    );
}
