import { CircularProgress } from "@mui/material";
import loaderImg from "../assets/loader.gif";


function SMLoader() {
    return (
        <>
            {/* <img src={loaderImg} /> */}
            <CircularProgress align='center' thickness='5' />
        </>
    )
}

export default SMLoader

