import { CircularProgress } from "@mui/material";
import loaderImg from "../assets/loader.gif";


function SMLoader(props) {
    const {style} = props
    return (
        <>
            {/* <img src={loaderImg} /> */}
            <CircularProgress align='center' thickness='5' style={style} />
        </>
    )
}

export default SMLoader

