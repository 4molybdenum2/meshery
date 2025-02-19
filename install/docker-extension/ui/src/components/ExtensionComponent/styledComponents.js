
import { styled } from "@mui/material/styles";

export const StyledDiv = styled('div')(() => ({
  paddingLeft: "0.2rem",
  paddingRight: "0.2rem"
}));


export const AccountDiv = styled('div')(() => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: 'center', alignItems: 'center',
}));

export const ServiceMeshAdapters = styled('div')(({ theme }) => ({
  display: "flex",
 alignItems: 'center',
 [theme.breakpoints.down("md")]: {
  display: "flex",
  flexWrap: "wrap",
},
}));

export const AdapterDiv = styled("div")(({ theme, inactiveAdapter }) => ({
  filter: inactiveAdapter ? "grayscale(1) invert(0.35)" : ""

}))


export const ExtensionWrapper = styled('div')(({ theme }) => ({
  margin: theme.spacing(2),
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  height: "12rem",
  borderRadius: "20px ",
  padding: "2rem",
  textAlign: "center",
}));

export const ComponentWrapper = styled('div')(({ theme }) => ({
  textAlign: "center",
  padding: "5rem",
  maxHeight: "100vh",
}))

export const SectionWrapper = styled('div')(({ theme }) => ({
  padding: "2rem", display: "flex", flexWrap: "wrap",
  justifyContent: 'center', alignItems: 'center',
}))

export const LoadingDiv = styled('div')(({theme}) => ({
 top: "40%",
 left: "43%",
  position: "absolute",
  
  zIndex: 10,
}))  
