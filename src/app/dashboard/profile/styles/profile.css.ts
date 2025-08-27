import { style } from "@vanilla-extract/css";

export const h1 = style({
    margin: "20px 0",
})

export const name = style({
    margin: "10px 0",
    fontSize: "32px"
})

export const time = style({
    textAlign: "right",
    width: "100%",
    color: "#a5a5a5ff"
})

export const button = style({
    marginTop: "10px",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    selectors: {
        "&:hover": {
            backgroundColor: "#f0f0f0",
        }
    }
})