import { style } from "@vanilla-extract/css";

export const page = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column",
})

export const container = style({
    width: "400px", 
    padding: "80px",
    borderRadius: "24px",
    background: "#a9a8a861",
})

export const title = style({
    marginBottom: "20px",
    textAlign: "center",
    color: "#171717ff"
})

export const form = style({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "10px",
})

export const input = style({
    width: "100%",
    padding: "10px",
    border: "none",
    backgroundColor: "#ffffffe0",
    borderRadius: "5px",
    fontSize: "16px"
})

export const button = style({
    width: "100%",
    padding: "10px",
    color: "#171717ff",
    border: "none",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    selectors: {
        "&:hover": {
            backgroundColor: "#eaeaeaea"
        }
    }
})

export const RegisterButton = style({
    display: "block",
    textAlign: "right",
    width: "100%",
    cursor: "pointer",
    color: "#2a2a2a81",
    fontSize: "14px",
    textDecoration: "underline",
})