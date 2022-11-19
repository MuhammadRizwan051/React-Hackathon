import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import { getData, logoutUser } from "../../config/firebasemethod";
import { useNavigate } from "react-router-dom";

function AdminProfile() {

  const [data, setData] = useState([])
  const navigate= useNavigate()

  const logout = () => {
    logoutUser().then(() => {
        navigate('/login')
    }).catch((err) => {
        console.log(err)
    })
}

  let getProfileData = () => {
    getData(`users/`)
      .then((res) => {
        // setIsLoader(false)
        setData(res)
        console.log(data)
      })
      .catch((err) => {
        // setIsLoader(false)
        alert(err)
      })
  }
  console.log(data)
  useEffect(() => { getProfileData() }, [])

  return (
    <>
      <Box
        mt={10}
        style={{
          width: "100%",
          // minHeight: "100vh",
          // height: "100%",
          // margin: 0,
        }}
        className="bgLight"
      >
        <Container>
          <Grid container>
            <Grid sx={{ padding: 1 }} md={3} item>
              <Paper sx={{ paddingY: 1, textAlign: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg"
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>
                <Box>
                  <Box sx={{ padding: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }} variant="p">
                      Email
                    </Typography>
                    <Box >
                      <Typography variant="p">
                        {data.map((e, i) => (
                          e.email
                        ))}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box sx={{ paddingY: 4 }}>
                    <Button variant="contained" onClick={logout }>Logout</Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid sx={{ padding: 1 }} md={9} item>
              <Paper sx={{ padding: 2 }}>
                <Typography>Result</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default AdminProfile;