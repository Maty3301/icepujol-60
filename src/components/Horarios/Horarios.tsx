import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    styled,
    tableCellClasses,
} from "@mui/material";
import "./Horarios.css"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const Horarios = ({ schedule }: any) => {
    return (
        <div className="horarios">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">
                                <h3>Hora</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Domingo</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Lunes</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Martes</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Miércoles</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Jueves</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Viernes</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Sábado</h3>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {schedule.map((row: any, index: any) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell align="center">
                                    {row.hora}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.domingo}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.lunes}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.martes}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.miercoles}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.jueves}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.viernes}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.sabado}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="radio">
                <h1>Escucha Nuestra Radio 95.3 FM</h1>
                <audio
                    controls
                    src="https://streams.radiomast.io/475ebed1-595e-4717-b888-64fe8fc6b09f"
                />
            </div>
        </div>
    );
};

export default Horarios;
