import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SMLoader from "./SMLoader";

function SMGrid(props) {
    const { datasource, Cols, onRowClick, style, gridLoading } = props;

    console.log(datasource, Cols);

    return (
        <>

            {Cols && Array.isArray(Cols) && (
                <table style={style} align='left'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            {Cols.map((y, i) => (
                                <th key={i}>{y.displayName}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {
                        gridLoading ? <SMLoader /> : (
                            datasource &&
                                Array.isArray(datasource) &&
                                datasource.length > 0 ? (
                                datasource.map((x, i) => (
                                    <tr onClick={() => onRowClick(x)} className={onRowClick ? "rowHover" : ""} key={i}>
                                        <td>{i + 1}</td>
                                        {Cols.map((y, ind) => (
                                            <td key={ind}>{x[y.key]}</td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <>
                                    {/* <Box sx={{ border: '5px solid black' }}>? */}
                                    <Typography>No Data Found</Typography>
                                    {/* </Box>? */}
                                </>
                            )
                        )
                        }
                    </tbody>
                </table>
            )}
        </>
    );
}
export default SMGrid;