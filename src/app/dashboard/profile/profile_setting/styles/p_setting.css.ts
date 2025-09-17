import { style } from "@vanilla-extract/css";

const label = style({
    display: "block",
    margin: "5px 0",
})

const input = style({
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "10px",
})

const setting_styles = {
    label,
    input,
}

export default setting_styles;